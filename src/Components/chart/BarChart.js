import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({
  data,
  title,
  legendPosition = "bottom",
  legendPadding = 10,
  chartPadding = 20,
}) => {
  return (
    <div className="flex flex-col mx-auto p-3 sm:p-4 mb-4 min-w-[700px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] md:ml-4 lg:ml-4 rounded-xl">
      <Bar
        data={data}
        options={{
          plugins: {
            legend: {
              position: legendPosition,
              labels: {
                usePointStyle: true,
                pointStyle: "circle",
                padding: legendPadding,
              },
            },
            title: {
              display: !!title,
              text: title,
            },
          },
          layout: {
            padding: {
              bottom: chartPadding,
              top: chartPadding,
              left: chartPadding,
              right: chartPadding,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default BarChart;
