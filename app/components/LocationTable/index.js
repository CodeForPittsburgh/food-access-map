/**
 *
 * Location Table
 *
 */

import React, { memo } from 'react';
import MaterialTable from 'material-table';
import { useApi } from '../../serviceHooks/useApi';

function LocationTable() {
  const foodSiteInfo = useApi();

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
      />
    </div>
  );
}

export default memo(LocationTable);
