import { Package, TrendingUp, Search, Filter, Settings, Image, Info, Trash2 } from 'lucide-react'; // Add necessary icons
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DateTable from '../../Components/dataTable/DataTable';
import { InventoryCard } from '../../Components/index';
import { Tab } from '../../Components/shared';
import inventoryCardsDataManPower from '../../data/cards/manPower';

const tabs = [
  { to: '/man-power', label: 'Table View', colorClass: 'bg-emerald-400' },
  { to: '/man-power-chart', label: 'Chart View', colorClass: 'bg-purple-600 bg-opacity-50' },
];

const CheckboxBody = () => (
  <input type="checkbox" className="cursor-pointer" />
);

const ManPowerPage = () => {
  const navigate = useNavigate();

  const plantNameTemplate = (rowData) => {
    return (
      <button
        type="button"
        onClick={() => navigate(rowData.link)}
        className="text-[#515761] hover:underline cursor-pointer"
        style={{ background: 'none', border: 'none', padding: 0 }}
        role="link"
      >
        {rowData.plantName}
      </button>
    );
  };

  const data = [
    {
      id: 1,
      plantName: 'Plant B',
      rawMaterial: 'Aluminum',
      finishGood: '50 units',
      scrap: '10 units',
      packagingMaterial: '6/22/2024',
      status: 'not ready to dispatch',
      link: '/inventory-plant-wise',
    },
    {
      id: 2,
      plantName: 'Plant B',
      rawMaterial: 'Steel',
      finishGood: '30 units',
      scrap: '5 units',
      packagingMaterial: '6/21/2024',
      status: 'ready to dispatch',
      link: '/inventory-plant-wise',
    },
    {
      id: 3,
      plantName: 'Plant D',
      rawMaterial: 'Steel',
      finishGood: '30 units',
      scrap: '5 units',
      packagingMaterial: '6/21/2024',
      status: 'ready to dispatch',
      link: '/inventory-plant-wise',
    },
    {
      id: 3,
      plantName: 'Plant D',
      rawMaterial: 'Steel',
      finishGood: '30 units',
      scrap: '5 units',
      packagingMaterial: '6/21/2024',
      status: 'ready to dispatch',
      link: '/inventory-plant-wise',
    },
    {
      id: 3,
      plantName: 'Plant D',
      rawMaterial: 'Steel',
      finishGood: '30 units',
      scrap: '5 units',
      packagingMaterial: '6/21/2024',
      status: 'ready to dispatch',
      link: '/inventory-plant-wise',
    },
    {
      id: 3,
      plantName: 'Plant D',
      rawMaterial: 'Steel',
      finishGood: '30 units',
      scrap: '5 units',
      packagingMaterial: '6/21/2024',
      status: 'ready to dispatch',
      link: '/inventory-plant-wise',
    },
    {
      id: 3,
      plantName: 'Plant D',
      rawMaterial: 'Steel',
      finishGood: '30 units',
      scrap: '5 units',
      packagingMaterial: '6/21/2024',
      status: 'ready to dispatch',
      link: '/inventory-plant-wise',
    },

    {
      id: 3,
      plantName: 'Plant D',
      rawMaterial: 'Steel',
      finishGood: '30 units',
      scrap: '5 units',
      packagingMaterial: '6/21/2024',
      status: 'ready to dispatch',
      link: '/inventory-plant-wise',
    },
    {
      id: 3,
      plantName: 'Plant D',
      rawMaterial: 'Steel',
      finishGood: '30 units',
      scrap: '5 units',
      packagingMaterial: '6/21/2024',
      status: 'ready to dispatch',
      link: '/inventory-plant-wise',
    },

    {
      id: 3,
      plantName: 'Plant D',
      rawMaterial: 'Steel',
      finishGood: '30 units',
      scrap: '5 units',
      packagingMaterial: '6/21/2024',
      status: 'ready to dispatch',
      link: '/inventory-plant-wise',
    },
    {
      id: 3,
      plantName: 'Plant D',
      rawMaterial: 'Steel',
      finishGood: '30 units',
      scrap: '5 units',
      packagingMaterial: '6/21/2024',
      status: 'ready to dispatch',
      link: '/inventory-plant-wise',
    },
    
  ];

  const columns = [
    {
      header: 'Id',
      body: CheckboxBody,
    },
    {
      field: 'plantName',
      header: 'Plant Name',
      body: plantNameTemplate,
      bgColor: '#E6ECF5'
    },
    {
      field: 'plantHead',
      header: 'Morning Shift'
    },
    { field: 'productionHead', header: 'Night Shift' },
    { field: 'supervisor', header: 'Man Power Shortage' },
    { field: 'inventoryManager', header: 'Active Man Power' },
    { field: 'worker', header: 'Idle Man Power' },
    { field: 'worker', header: 'Total Man Power' }
  ];

  return (
    <div className="flex flex-col overflow-x-hidden">
      <Tab tabs={tabs} />
      
      {/* Responsive Grid for Inventory Cards */}
      <div className="grid mb-4 gap-x-5 gap-y-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-2">
        {inventoryCardsDataManPower.map((cardData, index) => (
          <InventoryCard
            key={index}
            title={cardData.title}
            value={cardData.value}
            percentageChange={cardData.percentageChange}
            titleColor={cardData.titleColor}
            percentageChangeColor={cardData.percentageChangeColor}
            icon={<Package className="w-[19px] h-[19px] sm:w-[14px] sm:h-[14px] text-green-500" />}
            percentageIcon={<TrendingUp className="w-[14px] h-[14px] sm:w-[10px] sm:h-[10px] text-green-500" />}
            iconBgColor={cardData.iconBgColor}
          />
        ))}
      </div>

      {/* Flexbox Layout for Title, Search Bar, and Icons */}
      <div className="flex flex-col px-4 sm:px-2 mb-4 space-y-4">
        {/* Title */}
        <h2 className="text-xl font-semibold">Man Power Breakdown</h2>

        {/* Search Bar and Icons */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-3 space-y-3 md:space-y-0">
          {/* Search Input (Full width on small screens, auto on larger) */}
          <div className="relative w-full md:w-auto">
            <input 
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring focus:border-blue-300 w-full md:w-auto"
            />
            <Search className="absolute top-2 right-3 w-5 h-5 text-gray-400" />
          </div>

          {/* Action Icons */}
          <div className="flex space-x-2">
            <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
              <Image className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
              <Info className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
              <Trash2 className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="w-full overflow-x-auto px-4 sm:px-2">
        <div className="min-w-[500px] border border-gray-300 rounded-lg">
          <DateTable
            data={data}
            columns={columns}
            headerBgColor="bg-[#1677FF]/10"
            headerTextColor="text-black"
            rowBgColor="bg-white"
            rowTextColor="text-gray-600"
            borderColor="border-grey-300"
          />
        </div>
      </div>
    </div>
  );
};

export default ManPowerPage;
