import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridToolbar,
} from "@mui/x-data-grid";
import { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import { EditOrganizationForm } from "../../components/Organizations/EditOrganizationForm";
import Image from "next/image";
import Link from "next/link";
import { ModalComponent } from "../../components/Modal/Modal";
import Trash from "../../public/image/Trash.svg";
import Tumer from "../../public/image/Tumer.svg";

export default function OrganizationsGrid(props) {
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(0);

  const handleClickOpen = (id) => {
    setOpen(true);
    setEditId(id);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      field: "name",
      headerName: "Organization name",
      headerClassName: "datagrid__header",
      flex: 1,
      editable: false,
      // renderCell: (cellContent) => {
      //   return (
      //     <Link href={`/users/${cellContent.row.id}`}>
      //       <a className="datagrid-user">
      //         <div className="datagrid-image">
      //           <Image
      //             width={30}
      //             height={30}
      //             src={`http://localhost:3000/image${cellContent.row.userAvatar}`}
      //             alt="Name: "
      //           ></Image>
      //         </div>
      //         <span>{cellContent.row.userName}</span>
      //       </a>
      //     </Link>
      //   );
      // },
    },

    {
      field: "address",
      headerName: "Address",
      headerClassName: "datagrid__header",
      flex: 1.5,
      renderCell: (cellValues) => {},
    },
    {
      field: "email",
      headerName: "E-mail",
      headerClassName: "datagrid__header",
      flex: 1.5,
    },
    {
      field: "phone_number",
      headerName: "Phone Number",
      headerClassName: "datagrid__header",
      align: "left",
      flex: 1,
      type: "number",
    },

    {
      field: "actions",
      headerName: "Actions",
      headerClassName: "datagrid__header",
      align: "right",
      sortable: false,
      flex: 1,
      renderCell: (cellValues) => {
        return (
          <>
            <Button
              onClick={() => handleClickOpen(cellValues.id)}
              size={"small"}
            >
              Edit {cellValues.id}
              {/* <Trash widht={24} height={24}></Trash> */}
            </Button>
            <Button size={"small"}>
              <Tumer widht={24} height={24}></Tumer>
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <DataGrid
        rows={props.data}
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
          borderColor: "#E6E6E6",
          "& .MuiDataGrid-cell:hover": {
            color: "#4E4D4C",
            backgroundColor: "#FBFBFB",
          },
        }}
        pageSize={12}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[]}
        pagination
        rowHeight={50}
        onCellClick={() => {}}
        onCellDoubleClick={() => {}}
      ></DataGrid>
      <ModalComponent handleClose={handleClose} open={open}>
        <EditOrganizationForm id={editId} handleClose={handleClose} />
      </ModalComponent>
    </div>
  );
}

function getStatus(userStatus) {
  if (userStatus == 1) {
    return "Active";
  }

  if (userStatus == 2) {
    return "Frozen";
  }

  if (userStatus == 3) {
    return "Blocked";
  }

  if (userStatus == 4) {
    return "Deleted";
  }
}

function getVereficationStatus(userStatus) {
  if (userStatus == 1) {
    return "True";
  }

  if (userStatus == 2) {
    return "False";
  }
}
