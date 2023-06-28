import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import Table from '@mui/joy/Table';
import { ChargingSitesGridFilter } from '../ChargingSitesGridFilter';
import { SiteGridRow } from './SiteGridRow';
import { SiteT } from '@/types/site-types';

interface SiteGridI {
  sites: SiteT[];
}

export const SitesGrid: React.FC<SiteGridI> = ({ sites }) => {
  return (
    <>
      {sites?.map((e, i) => {
        return (
          <div
            key={i}
            className='chargingsite__grid'
          >
            <ChargingSitesGridFilter site={e} />
            <Sheet
              sx={{
                overflow: 'auto',
                width: '100%',
              }}
            >
              <Table
                noWrap={true}
                className={'charging-table'}
                aria-label='collapsible table'
                sx={{
                  '& > thead > tr > th:nth-child(n + 8), & > tbody > tr > td:nth-child(n + 8)': {
                    textAlign: 'right',
                  },
                  '& > thead > tr > th': {
                    color: '#fff',
                  },
                  '& > tbody > tr:nth-child(odd) > td, & > tbody > tr:nth-child(odd) > th[scope="row"]':
                    {
                      borderBottom: 0,
                    },
                  borderRadius: 10,
                }}
              >
                <thead className='charging-table--header'>
                  <tr>
                    <th
                      style={{ width: 40 }}
                      aria-label='empty'
                    />
                    <th style={{ width: '15%' }}>Charge Point</th>
                    <th style={{ width: '15%' }}>Address</th>
                    <th style={{ width: '10%' }}>Site Name</th>
                    <th style={{ width: '20%' }}>Connectors</th>
                    <th style={{ width: '10%' }}>Status</th>
                    <th style={{ textAlign: 'right', width: '10%' }}>Default Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {e?.chargePoints && e?.chargePoints?.length > 0 && (
                  <tbody style={{ overflowX: 'scroll' }}>
                    {e?.chargePoints?.map((chargepoint, index) => (
                      <SiteGridRow
                        key={index}
                        address={e.address}
                        zip_code={e.zip_code}
                        price={e.default_price}
                        site_name={e.name}
                        chargepoint={chargepoint}
                      />
                    ))}
                  </tbody>
                )}
              </Table>
              {e?.chargePoints?.length == 0 && (
                <div className='chargepoints-placeholder'>Chargepoints not found</div>
              )}
            </Sheet>
          </div>
        );
      })}
    </>
  );
};
