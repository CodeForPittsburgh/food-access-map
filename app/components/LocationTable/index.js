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
          { title: 'Opening Time', field: 'open_time1' },
          { title: 'Closing Time', field: 'close_time1' },
        ]}
        data={foodSiteInfo}
        onRowClick={(event, rowData) => setRedirectTo(rowData.id)}
      />
    </div>
  );
}

export default memo(LocationTable);
