import { useState, useEffect } from "react";
const UserChart = () => {
  const [chartData, setChartdata] = useState([]);

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
            setChartdata([user]);
          }
        })
        .catch((error) => console.error(error));
    };
    userData();
  }, []);
  return <div>hello</div>;
};

export default UserChart;
