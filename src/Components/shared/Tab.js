import { Separator } from "@radix-ui/themes";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FiltersButton from "./FiltersButton";
import TabLink from "./TabLink";
import CalendarButton from "../calender/CalenderButton";

const Tab = ({ tabs }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleTabClick = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col w-full p-2 mb-3">
      {/* Tabs and Options Container */}
      <div className="flex flex-col md:flex-row md:items-center justify-between w-full mb-4">
        {/* Tabs Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-2 md:mb-0">
          <div className="flex gap-4 flex-wrap justify-center md:justify-start text-sm font-medium text-gray-600 md:text-base">
            {tabs.map((tab, index) => (
              <TabLink
                key={index}
                to={tab.to}
                active={location.pathname === tab.to}
                label={tab.label}
                colorClass={tab.colorClass}
                onClick={() => handleTabClick(tab.to)}
              />
            ))}
          </div>
        </div>

        {/* Calendar and Filter Buttons */}
        <div className="flex flex-col md:flex-row items-center ml-16 mr-12 justify-center gap-3 mt-5 md:mt-0 text-xs md:text-base text-gray-500">
          <CalendarButton />
          <FiltersButton />
        </div>
      </div>

      {/* Separator */}
      <Separator className="w-full" />
    </div>
  );
};

export default Tab;
