import React from 'react';

const NewDatatable = ({ tBodyRender, tHead, data }) => {
    return (
        <table className='min-w-full border-collapse border'>
            <thead>
                <tr className='bg-gray-100 table-thead-tr'>
                    {tHead.map((item, i) => (
                        <th className={`border px-4 py-2 table-thead-th ${item.className}`} key={i}>
                            {item.element}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => {
                    const TD = tBodyRender(item, index);
                    return (
                        <tr key={index}>
                            {Object.values(TD).map((itemth, i) => (
                                <td className='table-tbody-td border px-4 py-2 text-center' key={i}>
                                    {itemth}
                                </td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default NewDatatable;
