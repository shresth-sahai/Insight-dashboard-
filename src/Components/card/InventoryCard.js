import React from "react";

const InventoryCard = ({
  title,
  value,
  percentageChange,
  titleColor,
  percentageChangeColor,
  icon,
  percentageIcon,
  iconBgColor,
  additionalIcon,
}) => {
  return (
    <div className="flex flex-col mx-auto justify-between p-4 mb-4 w-full max-w-[18rem] md:max-w-[22rem] rounded-xl border border-[#D7D7D7]/55 shadow-md">
      <div className="flex items-start">
        <div
          className={`flex justify-center items-center w-10 h-10 md:w-12 md:h-12 lg:rounded-full rounded-xl ${iconBgColor}`}
        >
          {icon}
        </div>
        <div className="flex flex-col flex-1 ml-3 md:ml-4">
          <div className="flex items-center justify-between">
            <div className={`text-sm md:text-base font-semibold ${titleColor}`}>
              {title}
            </div>
            {additionalIcon && (
              <div className="flex items-center justify-center w-6 h-6 rounded-xl bg-neutral-100 md:h-7 md:w-7">
                {additionalIcon}
              </div>
            )}
          </div>
          <div className="flex items-center gap-x-2 mt-2">
            <div className="text-lg font-semibold text-black whitespace-nowrap">
              {value}
            </div>
            <div
              className={`flex items-center gap-x-1 px-1 py-0.5 text-xs md:text-sm leading-loose rounded-lg bg-opacity-10 ${percentageChangeColor}`}
            >
              <div>{percentageChange}</div>
              {percentageIcon}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
