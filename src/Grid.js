import React from 'react';

const Grid = ({ config, data }) => (
  <table>
    <thead>
      <tr>
        {config.map((item, index) => {
          return (
            <th key={index} className={`title-${index + 1}`}>
              {item.title}
            </th>
          );
        })}
      </tr>
    </thead>
    <tbody>
      {data.map((rowData) => {
        const elementId = rowData[config[0].field];
        return (
          <tr key={elementId}>
            {config.map((confData) => {
              return confData.component ? (
                <td
                  key={`${confData.field}-${elementId}`}
                  className={`${confData.field}-${elementId}`}
                >
                  {rowData.Trailer &&
                    confData.component({ data: rowData.Trailer })}
                  {rowData.name && confData.component({ data: rowData.name })}
                </td>
              ) : (
                <td
                  key={`${confData.field}-${elementId}`}
                  className={`${confData.field}-${elementId}`}
                >
                  {rowData[confData.field]}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default Grid;
