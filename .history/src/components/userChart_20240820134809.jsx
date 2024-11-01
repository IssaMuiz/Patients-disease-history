import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
const UserChart = () => {
  const [chartData, setChartdata] = useState({});

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

          console.log(user);
          if (user && user.diagnosis_history) {
            const labels = user.diagnosis_history.map((item) => {
              item.month, item.year;
            });

            const systosieValues = user.diagnosis_history.map((item) => {
              item.blood_pressure.systolic.value;
            });
            const DiastolicValues = user.diagnosis_history.map((item) => {
              item.blood_pressure.diastolic.value;
            });

            setChartdata({
              labels: labels,
              datasets: [
                {
                  label: "Blood History",
                  data: systosieValues,
                  fill: false,
                  backgroundColor: "rgba(75, 192, 192, 0.4)",
                  borderColor: "rgba(75, 192, 192, 1)",
                },
              ],
            });
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
