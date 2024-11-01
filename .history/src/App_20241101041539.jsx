import Leftsidebar from "./components/Leftsidebar";
import Mainpage from "./components/Mainpage";
import Navbar from "./components/Navbar";
import Rightsidebar from "./components/Rightsidebar";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const username = "coalition";
  const password = "skills-test";
  const token = btoa(`${username}:${password}`);

  useEffect(() => {
    const userData = async () => {
      await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
        method: "GET",
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const user = data[3];
          if (user) {
            setData([user]);
          }
        })
        .catch((error) => console.error(error));
    };
    userData();
  }, [data]);

  return (
    <div className="text-3xl mx-3">
      <Navbar />
      <div className="pt-28 flex">
        <div>
          <Leftsidebar />
        </div>
        <div className="flex-1">
          <Mainpage data={data} />
        </div>
        <div>
          <Rightsidebar data={data} />
        </div>
      </div>
    </div>
  );
};

export default App;
