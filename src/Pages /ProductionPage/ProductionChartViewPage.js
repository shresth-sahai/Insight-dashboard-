import React, { useState, useEffect } from "react";
import { Separator } from "@radix-ui/themes";
import { BarChart, PieChart } from "../../Components/index";
import { Tab } from "../../Components/shared";
import barChartData from "../../data/barChart";
import pieChartData from "../../data/pieChartData";

const tabs = [
  { to: "/production", label: "Table View", colorClass: "bg-emerald-400" },
  { to: "/production-chart-view", label: "Chart View", colorClass: "bg-purple-600 bg-opacity-50" },
];

const tableData = [
  { plant: "Label 1", value: 12, percentInc: "28.6%" },
  { plant: "Label 2", value: 22, percentInc: "42.9%" },
  { plant: "Label 3", value: 12, percentInc: "28.6%" },
  { plant: "Label 4", value: 12, percentInc: "28.6%" },
  { plant: "Label 5", value: 7, percentInc: "14.3%" },
  { plant: "Label 6", value: 7, percentInc: "14.3%" },
];

const ProductionChartViewPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    // Optionally, add logic to filter the bar chart based on search input
  };

  return (
    <div className="flex flex-col overflow-x-hidden">
      <Tab tabs={tabs} />

      <div className="flex flex-col lg:flex-row justify-between gap-4 px-4 lg:px-8">
        {/* Left Side: Grouped Pie Charts */}
        <div className="flex flex-col w-full lg:w-1/2 gap-4 rounded-xl border p-4 border-[#D7D7D7]/55 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Production vs Projection</h2>
            {/* Search Bar Section */}
            <div className="flex items-center space-x-4">
              {/* Filter Button */}
              <button
                type="button"
                className="flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-gray-200 p-2 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 12.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-8.586l-6.707-6.707A1 1 0 010 6V4z"
                  />
                </svg>
                <span className="text-sm">Filter</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="w-full sm:w-1/2 flex justify-center">
              <PieChart
                data={pieChartData}
                legendPosition="bottom"
                padding={{
                  top: 1,
                  right: 0,
                  bottom: 50,
                  left: 0,
                }}
                margin="20px"
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: true,
                      position: "bottom",
                    },
                  },
                }}
              />
            </div>
            <div className="w-full sm:w-1/2 flex justify-center">
              <PieChart
                data={pieChartData}
                legendPosition="bottom"
                padding={{
                  top: 1,
                  right: 0,
                  bottom: 50,
                  left: 0,
                }}
                margin="20px"
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: true,
                      position: "bottom",
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Side: Single Pie Chart with Table */}
        <div className="flex flex-col w-full lg:w-1/2 gap-4 rounded-xl border p-4 border-[#D7D7D7]/55 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Yesterday Production</h2>
            <a
              href="/view-details"
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              View Details
            </a>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-2/5 flex justify-center mb-4 sm:mb-0">
              <div className="w-full max-w-[200px] h-[200px]">
                <PieChart
                  data={pieChartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                  }}
                  padding={{
                    top: 1,
                    right: 0,
                    bottom: 50,
                    left: 0,
                  }}
                  margin="20px"
                />
              </div>
            </div>
            <div className="w-full sm:w-3/5 flex flex-col justify-center sm:pl-4">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr>
                      <th className="pb-2">Plants</th>
                      <th className="pb-2">Value</th>
                      <th className="pb-2">% Inc.</th>
                    </tr>
                    <tr>
                      <td colSpan={3}>
                        <Separator className="w-full" />
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, index) => (
                      <tr key={index}>
                        <td className="py-1">{row.plant}</td>
                        <td className="py-1">{row.value}</td>
                        <td className="py-1">{row.percentInc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="flex flex-col px-4 py-4 lg:px-8 mb-5 space-y-4">
        {/* Heading */}
        <h3 className="text-xl font-semibold">Production</h3>
        {/* Additional Descriptive Text */}
        <p className="text-gray-600 text-sm">
          Your production summary and activity.
        </p>

        {/* Search Input and Filter Button */}
        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <div className="relative w-full lg:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
              placeholder="Search"
            />
          </div>

          {/* Filter Button */}
          <button
            type="button"
            className="flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-gray-200 p-2 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 12.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-8.586l-6.707-6.707A1 1 0 010 6V4z"
              />
            </svg>
            <span className="text-sm">Filter</span>
          </button>
        </div>
      </div>

      {/* Bar Chart with Horizontal Scroll */}
      <div className="w-full mt-5 px-4 lg:px-9">
        <div className="h-[500px] w-full rounded-xl border border-[#D7D7D7]/55 shadow-md overflow-x-auto">
          <div className="min-w-[900px]">
            {/* Increase the min-width to ensure the chart has enough room */}
            <BarChart
              legendPosition="right"
              data={barChartData}
              legendPadding={10}
              chartPadding={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionChartViewPage;
