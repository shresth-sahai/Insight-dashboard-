import { Package, TrendingUp } from 'lucide-react';
import React from 'react';
import { InventoryCard } from '../../Components/index';
import { Tab } from '../../Components/shared';
import inventoryCardsDataProduction from '../../data/cards/production';

const tabs = [
  { to: '/production', label: 'Table View', colorClass: 'bg-emerald-400' },
  { to: '/production-chart-view', label: 'Chart View', colorClass: 'bg-purple-600 bg-opacity-50' },
];

const ProductionPage = () => {
  return (
    <div className="flex flex-col overflow-x-hidden p-4">
      {/* Tab Navigation */}
      <Tab tabs={tabs} />

      {/* Inventory Cards Grid */}
      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {inventoryCardsDataProduction.map((cardData, index) => (
          <InventoryCard
            key={index}
            title={cardData.title}
            value={cardData.value}
            percentageChange={cardData.percentageChange}
            titleColor={cardData.titleColor}
            percentageChangeColor={cardData.percentageChangeColor}
            icon={<Package className="w-[19px] h-[19px] text-green-500" />}
            percentageIcon={<TrendingUp className="w-[14px] h-[14px] text-green-500" />}
            iconBgColor={cardData.iconBgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductionPage;
