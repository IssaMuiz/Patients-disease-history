import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
const UserChart = () => {
  const [chartData, setChartdata] = useState({
    labels: [],
    datasets: [],
  });

  const testData = {
    labels: ["january", "february", "march"],

    datasets: [
      {
        label: "Test Dataset",
        data: [33, 32, 93],
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.4)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };
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
          if (user && user.diagnosis_history.length > 0) {
            const labels = user.diagnosis_history.map((item) => {
              return item.year;
            });
            console.log(labels);
            const systosieValues = user.diagnosis_history.map((item) => {
              return item.blood_pressure.systolic.value;
            });
            console.log(systosieValues);
            const DiastolicValues = user.diagnosis_history.map((item) => {
              return item.blood_pressure.diastolic.value;
            });
            console.log(DiastolicValues);
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
          } else {
            console.error("User not found or no information available");
          }
        })
        .catch((error) => console.error(error));
    };
    userData();
  }, []);
  console.log(chartData);
  return (
    <div>
      <div>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default UserChart;
