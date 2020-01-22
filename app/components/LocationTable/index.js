/**
 *
 * Location Table
 *
 */

import React, { memo, useState } from 'react';
import MaterialTable from 'material-table';
import { Redirect } from 'react-router-dom';
import { useApi } from '../../serviceHooks/useApi';

function LocationTable() {
  const foodSiteInfo = useApi();
  const [shouldRedirectTo, setRedirectTo] = useState(0);

  if (shouldRedirectTo > 0) {
    return <Redirect to={`/foodSite/${shouldRedirectTo}`} />;
  }
  return (
    <div>
      <MaterialTable
        title="Food Banks"
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Type', field: 'type', defaultSort: 'desc' },
          {
            title: 'Accepts SNAP',
            field: 'snap',
            render: row =>
              row.snap === true ? (
                <i className="material-icons">check_box</i>
              ) : (
                <i className="material-icons">check_box_outline_blank</i>
              ),
          },
          {
            title: 'Accepts WIC',
            field: 'wic',
            render: row =>
              row.wic === true ? (
                <i className="material-icons">check_box</i>
              ) : (
                <i className="material-icons">check_box_outline_blank</i>
              ),
          },
          { title: 'Opening Time', field: 'open_time1' },
          { title: 'Closing Time', field: 'close_time1' },
          { title: 'Address', field: 'address' },
        ]}
        data={foodSiteInfo}
        onRowClick={(event, rowData) => setRedirectTo(rowData.id)}
        actions={[
          {
            icon: 'directions',
            tooltip: 'Get google directions',
            onClick: (event, rowData) =>
              window.open(
                `https://www.google.com/maps/dir/?api=1&destination=${
                  rowData.longitude
                }%2C${rowData.latitude}`,
                '_blank',
                'noopener',
              ),
          },
        ]}
      />
    </div>
  );
}

export default memo(LocationTable);
