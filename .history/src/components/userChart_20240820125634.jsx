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
          const user = data.find((f) => f.name === "Jessica Taylor");
          const blood = user.find((f) => f.diagnosis_history === "October");
          console.log(blood);
          if (user && user.diagnosis_history) {
            console.log("object");
          }
        })
        .catch((error) => console.error(error));
    };
    userData();
  }, []);
  console.log(chartData);
  return <div>hello</div>;
};

export default UserChart;
