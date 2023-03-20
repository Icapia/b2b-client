import { DataGrid  } from '@mui/x-data-grid';
import Image from 'next/image';
import Link from 'next/link';

const columns = [
  {
    field: "userName",
    headerName: "User First & Last Name",
    headerClassName: 'datagrid__header',
    flex: 2,
    editable: false,
    renderCell: (cellContent) => {
      return (
        <Link href={`/crm-users/${cellContent.row.id}`}>
          <a className='datagrid-user'>
            <div className="datagrid-image">
              <Image width={30} height={30} src={`http://localhost:3000${cellContent.row.userAvatar}`} alt="Name: "></Image>
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
    field: "role",
    headerName: "Role",
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
  }
];

export default function CrmUserGrid({ users }) {
  const detailsRows = users.map((row) => {
    return {
      id: row.id,
      userName: row.firstname + ' ' + row.lastname,
      registrationDate: row.registrationDate,
      email: row.email,
      phone: row.phone,
      status: getStatus(row.status),
      role: getRole(row.role),
      userAvatar: row.avatar
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


function getRole(userRole) {
  if (userRole == 1) {
    return ('Owner')
  }

  if (userRole == 2) {
    return ('Administrator')
  }

  if (userRole == 3) {
    return ('Manager')
  }
}




