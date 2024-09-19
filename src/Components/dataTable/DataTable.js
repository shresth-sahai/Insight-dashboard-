import React from 'react';

const DateTable = ({
  data,
  columns,
  headerBgColor = '',
  headerTextColor = '',
  rowBgColor = '',
  rowTextColor = '',
  borderColor = '',
  borderWidth = '',
}) => {
  return (
    <table className="min-w-full border-collapse rounded-lg overflow-hidden">
      <thead className={`${headerBgColor} h-12`}>
        <tr>
          {columns.map((col, index) => (
            <th
              key={index}
              className={`${headerTextColor} p-4 text-left ${borderColor} ${borderWidth}`}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-left">
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td
                key={colIndex}
                className={`p-4 border-b border-gray-300 ${rowTextColor} ${borderColor} ${borderWidth}`}
                style={{ backgroundColor: col.bgColor || rowBgColor }}
              >
                {col.body ? col.body(row) : row[col.field]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DateTable;