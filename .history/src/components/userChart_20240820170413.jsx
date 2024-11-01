import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import { Line } from "react-chartjs-2";
import { plugin } from "postcss";
const UserChart = () => {
  const [chartData, setChartdata] = useState({
    labels: [],
    datasets: [],
  });

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
            const sliceData = user.diagnosis_history.slice(0, 6).reverse();
            const labels = sliceData.map((item) => {
              return `${item.month} ${item.year}`;
            });
            console.log(labels);
            const systosieValues = sliceData.map((item) => {
              return item.blood_pressure.systolic.value;
            });
            console.log(systosieValues);
            const DiastolicValues = sliceData.map((item) => {
              return item.blood_pressure.diastolic.value;
            });
            console.log(DiastolicValues);
            setChartdata({
              labels: labels,

              datasets: [
                {
                  label: "Systolic",
                  data: systosieValues,
                  fill: false,
                  backgroundColor: "#E66FD2;",
                  borderColor: "#E66FD2 0% 0% no-repeat padding-box;",
                },
                {
                  label: "Diastolic",
                  data: DiastolicValues,
                  fill: false,
                  backgroundColor: "#7E6CAB",
                  borderColor: "#7E6CAB",
                },
              ],
              options: {
                plugins: {
                  title: {
                    display: true,
                    text: "Blood Pressure",
                  },
                },
              },
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
