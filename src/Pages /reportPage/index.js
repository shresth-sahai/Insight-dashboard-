import { ScrollArea } from '@radix-ui/themes';
import React, { useState, useEffect } from "react";
import MISDataTable from '../../Components/misDataTable/MISDataTable';
import LinkCarousel from '../../Components/shared/LinkCarosuel';
import { Tab } from '../../Components/shared';
import productionData from '../../data/dummyData.json';

// Tabs configuration
const tabs = [
  { to: '#', label: 'Table View', colorClass: 'bg-emerald-400' },
  { to: '#', label: 'Chart View', colorClass: 'bg-purple-600 bg-opacity-50' },
];

const ReportPage = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedPlant, setSelectedPlant] = useState('');
  const [filteredIncomingData, setFilteredIncomingData] = useState([]);
  const [filteredDispatchData, setFilteredDispatchData] = useState([]);

  // Example plant names
  const plants = [
    'P-GHZ', 'P-2', 'P-3', 'P-4', 'P-5',
    'P-6', 'P-7', 'P-8', 'P-9', 'P-10',
  ];

  // Effect to filter data based on date and plant selection
  useEffect(() => {
    const filterData = (data, dateField) => {
      return data.filter(item => {
        const itemDate = new Date(item[dateField]);
        const start = new Date(startDate);
        const end = new Date(endDate);
        const withinDateRange = (!startDate || itemDate >= start) && (!endDate || itemDate <= end);
        const matchesPlant = !selectedPlant || item.from === selectedPlant || item.to === selectedPlant;
        return withinDateRange && matchesPlant;
      });
    };

    // Assume productionData is an array containing your relevant data
    const incomingData = productionData.incomingMis || [];
    const dispatchData = productionData.dispatchMis || [];
    
    setFilteredIncomingData(filterData(incomingData, 'date'));
    setFilteredDispatchData(filterData(dispatchData, 'date'));
  }, [startDate, endDate, selectedPlant]);

  return (
    <div className="flex flex-col overflow-x-hidden">
      <Tab tabs={tabs} />

      {/* Filters */}
      <div className="flex gap-4 p-4">
        <input 
          type="date" 
          value={startDate} 
          onChange={(e) => setStartDate(e.target.value)} 
          className="border rounded p-2" 
          placeholder="Start Date"
        />
        <input 
          type="date" 
          value={endDate} 
          onChange={(e) => setEndDate(e.target.value)} 
          className="border rounded p-2" 
          placeholder="End Date"
        />
        <select 
          value={selectedPlant} 
          onChange={(e) => setSelectedPlant(e.target.value)} 
          className="border rounded p-2"
        >
          <option value="">Select Plant</option>
          {plants.map((plant, index) => (
            <option key={index} value={plant}>{plant}</option>
          ))}
        </select>
      </div>

      <LinkCarousel menuItems={plants} />

      {/* Incoming MIS Data Table */}
      <div className="h-[500px] text-sm p-4 mb-4 border border-gray-300 rounded-lg">
        <ScrollArea type="always" scrollbars="both">
          <MISDataTable
            title="Incoming MIS Data"
            data={filteredIncomingData}
            columns={[
              { header: 'Date', accessor: 'date' },
              { header: 'From', accessor: 'from' },
              { header: 'No of Vehicles', accessor: 'noOfVehicles' },
              { header: 'Kanta Weight', accessor: 'kantaWeight' },
              { header: 'ERP Weight', accessor: 'erpWeight' },
              { header: 'Material Type', accessor: 'materialType' },
            ]}
          />
        </ScrollArea>
      </div>

      {/* Dispatch MIS Data Table */}
      <div className="h-[500px] text-sm text-nowrap mb-4 p-4 min-w-full border border-gray-300 rounded-lg">
        <ScrollArea type="always" scrollbars="both">
          <MISDataTable
            title="Dispatch MIS Data"
            data={filteredDispatchData}
            columns={[
              { header: 'Date', accessor: 'date' },
              { header: 'To', accessor: 'to' },
              { header: 'No of Vehicles', accessor: 'noOfVehicles' },
              { header: 'Kanta Weight', accessor: 'kantaWeight' },
              { header: 'ERP Weight', accessor: 'erpWeight' },
              { header: 'Profile', accessor: 'profile' },
              { header: 'Part Name', accessor: 'partName' },
            ]}
          />
        </ScrollArea>
      </div>
    </div>
  );
};

export default ReportPage;
