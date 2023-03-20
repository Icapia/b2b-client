import Head from 'next/head'
import Image from 'next/image'
import DashboardList from '../components/Dashboard/DashboardList'
import { MainLayout } from '../components/layouts/MainLayout.js'
import ChartGraph from '../components/Charts/Chart'
import { DataGrid, GridRowsProp, GridColDef, GridToolbar  } from '@mui/x-data-grid';
import Delete from '../public/image/Trash.svg'

const pageData = {
  pageTitle: 'Analytics'
}

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: 'datagrid__header',
    flex: 0.1,
    renderCell: (cellValues) => {return('#' + cellValues.id)}
  },
  { 
    field: "date", 
    headerName: "Date", 
    headerClassName: 'datagrid__header', 
    flex: 1,
  },
  {
    field: "email",
    headerName: "E-mail",
    headerClassName: 'datagrid__header',
    flex: 1.5,
  },
  {
    field: "total",
    headerName: "Total",
    headerClassName: 'datagrid__header',
    flex: 0.5,
  },
  {
    field: "status",
    headerName: "Status",
    headerClassName: 'datagrid__header',
    flex: 1,
  },
  {
    field: "customer",
    headerName: "Customer",
    headerClassName: 'datagrid__header',
    flex: 1,
  },
  {
    field: "actions",
    headerName: "Actions",
    headerClassName: 'datagrid__header',
    align: "right",
    sortable: false,
    flex: 0.4,
    renderCell: (cellValues) => {
      return (
        <Delete></Delete>
      )
    }
  }
];

export const detailsRows = [
  { id: 1, date: '21.01.2022', email: 'lindsey.stroud@gmail.com', total: "800$", status: "Completed", customer: "Lindsey Stroud" },
  { id: 2, date: '20.01.2022', email: 'grouchMale@gmail.com', total: "230$", status: "Completed", customer: "Grouch Male" },
  { id: 3, date: '19.01.2022', email: 'joenwDoul@gmail.com', total: "200$", status: "Completed", customer: "Joen Doul" },
  { id: 4, date: '19.01.2022', email: 'lindsey.stroud@gmail.com', total: "190$", status: "Completed", customer: "Lindsey Stroud" },
  { id: 5, date: '18.01.2022', email: 'joenwDoul@gmail.com', total: "670$", status: "Completed", customer: "Joen Doul" },
  { id: 6, date: '17.01.2022', email: 'grouchMale@gmail.com', total: "200$", status: "Completed", customer: "Grouch Male" },
  { id: 7, date: '15.01.2022', email: 'lindsey.stroud@gmail.com', total: "630$", status: "Completed", customer: "Joen Doul" },
  { id: 8, date: '12.01.2022', email: 'grouchMale@gmail.com', total: "1020$", status: "Completed", customer: "Grouch Male" },
  { id: 9, date: '21.01.2022', email: 'lindsey.stroud@gmail.com', total: "800$", status: "Completed", customer: "Lindsey Stroud" },
  { id: 10, date: '20.01.2022', email: 'grouchMale@gmail.com', total: "230$", status: "Completed", customer: "Grouch Male" },
  { id: 11, date: '19.01.2022', email: 'joenwDoul@gmail.com', total: "200$", status: "Completed", customer: "Joen Doul" },
  { id: 12, date: '19.01.2022', email: 'lindsey.stroud@gmail.com', total: "190$", status: "Completed", customer: "Lindsey Stroud" },
  { id: 13, date: '18.01.2022', email: 'joenwDoul@gmail.com', total: "670$", status: "Completed", customer: "Joen Doul" },
  { id: 14, date: '17.01.2022', email: 'grouchMale@gmail.com', total: "200$", status: "Completed", customer: "Grouch Male" },
  { id: 15, date: '15.01.2022', email: 'lindsey.stroud@gmail.com', total: "630$", status: "Completed", customer: "Joen Doul" },
  { id: 16, date: '12.01.2022', email: 'grouchMale@gmail.com', total: "1020$", status: "Completed", customer: "Grouch Male" },
];

const dataSet1 = [20, 30, 60, 40, 30, 45, 55, 60, 58]
const dataSet2 = [40, 30, 20, 70, 90, 100, 75, 100, 55]

export default function Home() {
  return (
    <MainLayout name={pageData.pageTitle}>
      <div className="charts">
        <ChartGraph dataset={dataSet1} title={"New Users"} count={48}></ChartGraph>
        <ChartGraph dataset={dataSet2} title={"New Subscriptions"} count={23}></ChartGraph>
      </div>
      <DashboardList></DashboardList>
      <div style={{ height: "80vh", width: "100%" }}>
        <DataGrid
          rows={detailsRows}
          columns={columns}
          autoHeight={false}
          autoPageSize={false}
          disableColumnFilter
          editMode="row"
          disableColumnMenu
          disableColumnSelector
          disableExtendRowFullWidth={true}
          sx={{
            margin: "40px 0px 0px 0px",
            boxShadow: 0,
            border: 1,
            borderColor: '#E6E6E6',
            '& .MuiDataGrid-cell:hover': {
              color: '#4E4D4C',
              backgroundColor: '#FBFBFB'
            },
          }}
          pageSize={12}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[]}
          pagination
          rowHeight={50}
          onCellClick={() => {}}
          onCellDoubleClick={() => {}}
        >
        </DataGrid>
      </div>
    </MainLayout>
    
  )
}
