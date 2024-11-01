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
              return `${item.month.slice(0, 3)} ${item.year}`;
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
  const customTextObject = {
    Number: 160,
    image: "public/assets/icons/ArrowUp.svg",
    text: "It is higher",
  };

  const bloodPressureRate = {
    id: "2",
    afterDraw(chart) {
      const { ctx, legend } = chart;

      if (!legend || !legend.legendItems) {
        return;
      }

      const fontSize =
        (legend.options.labels.font && legend.options.labels.font.size) || 12;
      const padding = legend.options.labels.padding || 10;

      legend.legendItems.forEach((legendItem) => {
        const text = customTextObject[legendItem.text];

        if (text) {
          const width = ctx.measureText(text).width;
          const height = fontSize + 4;
          ctx.save();
          ctx.font = `${fontSize}px ${legendItem.fontFamily}`;
          ctx.fillStyle = legendItem.fontColor || "#666";

          const x =
            legendItem.textAlign === "right"
              ? legendItem.x - width
              : legendItem.measureText;

          const y = legendItem.y + height + padding;
          ctx.fillText(text, x, y);
          ctx.restore();
        }
      });
    },
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Blood Pressure",
        font: {
          size: 20,
          weight: "bold",
        },
        padding: {
          top: 15,
          bottom: 10,
        },
        align: "start",
      },
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
          boxWidth: 10,
          align: "center",
        },
      },
    },
  };
  return (
    <div>
      <div>
        <Line
          data={chartData}
          options={options}
          plugins={[bloodPressureRate]}
        />
      </div>
    </div>
  );
};

export default UserChart;
