import { DataGrid, GridRowsProp, GridColDef, GridToolbar  } from '@mui/x-data-grid';
import Image from 'next/image'
import Link from 'next/link'
import Trash from '../../public/image/Trash.svg';
import Tumer from '../../public/image/Tumer.svg';
import Button from "@mui/material/Button";

const columns = [
  {
    field: "userName",
    headerName: "User First & Last Name",
    headerClassName: 'datagrid__header',
    flex: 2,
    editable: false,
    renderCell: (cellContent) => {
      return (
        <Link href={`/users/${cellContent.row.id}`}>
          <a className='datagrid-user'>
            <div className="datagrid-image">
              <Image width={30} height={30} src={`http://localhost:3000/image${cellContent.row.userAvatar}`} alt="Name: "></Image>
            </div>
            <span>{cellContent.row.userName}</span>
          </a>
        </Link>
      );
    }
  },
  {
    field: "registrationDate",
    headerName: "Registration Date",
    headerClassName: 'datagrid__header',
    flex: 1.5,
    renderCell: (cellValues) => {}
  },
  { 
    field: "email", 
    headerName: "E-mail", 
    headerClassName: 'datagrid__header', 
    flex: 1.5,
  },
  {
    field: "phone",
    headerName: "Phone Number",
    headerClassName: 'datagrid__header',
    flex: 1,
    type: "number",
  },
  {
    field: "status",
    headerName: "Status",
    headerClassName: 'datagrid__header',
    flex: 0.5,
  },
  {
    field: "verification",
    headerName: "Verification",
    headerClassName: 'datagrid__header',
    flex: 0.5,
  },
  {
    field: "actions",
    headerName: "Actions",
    headerClassName: 'datagrid__header',
    align: "right",
    sortable: false,
    flex: 1,
    renderCell: (cellValues) => {
      return (
        <>
          <Button
            size={"small"}
          >
            <Trash widht={24} height={24}></Trash>
          </Button>
          <Button
            size={"small"}
          >
            <Tumer widht={24} height={24}></Tumer>
          </Button>
        </>
      )
    }
  }
];

export default function UsersGrid({ users }) {


  const usersList = Array.from(users);
  const detailsRows = usersList.map((row) => {
    return {
      id: row.id,
      userName: row.firstname + ' ' + row.lastname,
      registrationDate: row.registrationDate,
      email: row.email,
      phone: row.phone,
      status: getStatus(row.accStatus),
      verification: getVereficationStatus(row.accStatus),
      userAvatar: row.avatarUrl
    };
  });
  
  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <DataGrid
        rows={detailsRows}
        columns={columns}
        checkboxSelection={true}
        autoHeight={false}
        autoPageSize={false}
        disableColumnFilter
        editMode="row"
        disableColumnMenu
        disableColumnSelector
        disableExtendRowFullWidth={true}
        sx={{
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
  )
}


function getStatus(userStatus) {
  if (userStatus == 1) {
    return ('Active')
  } 
  
  if (userStatus == 2) {
    return ('Frozen')
  } 
  
  if (userStatus == 3) {
    return ('Blocked')
  }
  
  if (userStatus == 4) {
    return ('Deleted')
  }
}


function getVereficationStatus(userStatus) {
  if (userStatus == 1) {
    return ('True')
  } 
  
  if (userStatus == 2) {
    return ('False')
  } 
}




