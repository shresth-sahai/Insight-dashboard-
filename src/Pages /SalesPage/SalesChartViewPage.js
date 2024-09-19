import React from 'react';
import { BarChart, PieChart } from '../../Components/index';
import barChartData from '../../data/barChart';
import pieChartData from '../../data/pieChartData';
import { Tab } from '../../Components/shared';

const tabs = [
  { to: '/sales', label: 'Table View', colorClass: 'bg-emerald-400' },
  { to: '/sales-chart-view', label: 'Chart View', colorClass: 'bg-purple-600 bg-opacity-50' },
];

const tableData = [
  { plant: 'Label 1', value: 12, percentInc: '28.6%' },
  { plant: 'Label 2', value: 22, percentInc: '42.9%' },
  { plant: 'Label 3', value: 12, percentInc: '28.6%' },
  { plant: 'Label 4', value: 12, percentInc: '28.6%' },
  { plant: 'Label 5', value: 7, percentInc: '14.3%' },
  { plant: 'Label 6', value: 7, percentInc: '14.3%' },
];

const SalesChartViewPage = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Tab tabs={tabs} />

      <div className="flex flex-col lg:flex-row justify-between gap-4 px-4 lg:px-8">
        {/* Left Side: Grouped Pie Charts */}
        <div className="flex flex-col w-full lg:w-1/2 gap-4 rounded-xl border p-4 border-[#D7D7D7]/55 shadow-[0px_1px_4px rgba(12,12,13,0.1)]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Monthly Sales</h2>
            <a href="/view-details" className="text-blue-600 text-sm font-medium hover:underline">
              View Details
            </a>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-[40%] flex justify-center">
              <div className="w-[200px] h-[200px]">
                <PieChart
                  data={pieChartData}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                  }}
                  padding={{
                    top: 1, right: 0, bottom: 50, left: 0
                  }}
                  margin="20px"
                />
              </div>
            </div>
            <div className="w-full lg:w-[60%] flex flex-col justify-center pl-4">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr>
                      <th className="pb-2">Plants</th>
                      <th className="pb-2">Value</th>
                      <th className="pb-2">% Inc.</th>
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

        {/* Right Side: Single Pie Chart with Table */}
        <div className="flex flex-col w-full lg:w-1/2 gap-4 rounded-xl border p-4 border-[#D7D7D7]/55 shadow-[0px_1px_4px rgba(12,12,13,0.1)]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Finish Goods Inspected vs Not Inspected</h2>
          </div>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-[45%]">
              <PieChart
                data={pieChartData}
                legendPosition="bottom"
                padding={{
                  top: 1, right: 0, bottom: 50, left: 0
                }}
                margin="20px"
              />
            </div>
            <div className="w-full lg:w-[45%] mt-4 lg:mt-0">
              <PieChart
                data={pieChartData}
                legendPosition="bottom"
                padding={{
                  top: 1, right: 0, bottom: 50, left: 0
                }}
                margin="20px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="min-w-full mt-5 ml-9">
        <div className="h-96 w-[68rem] rounded-xl border border-[#D7D7D7]/55 shadow-[0px_1px_4px rgba(12,12,13,0.1)] overflow-hidden">
          <BarChart
            legendPosition="right"
            data={barChartData}
            legendPadding={40}
            chartPadding={0}
          />
        </div>
      </div>
    </div>
  );
};

export default SalesChartViewPage;
