import {
  DataGrid,
} from "@mui/x-data-grid";
import { useState } from "react";
import { EditOrganizationForm } from "../../components/Organizations/EditOrganizationForm";
import { ModalComponent } from "../../components/Modal/Modal";
import { ButtonTransparent } from "../Buttons/Buttons";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

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
      flex: 1,
      editable: false,
    },
    {
      field: "actions",
      headerName: "Actions",
      headerClassName: "datagrid__header",
      sortable: false,
      flex: 1,
      align: 'right',
      headerAlign: 'right',
      renderCell: (cellValues) => {
        return (
          <>
            <ButtonTransparent
              onClick={() => handleClickOpen(cellValues.id)}
              size={"small"}
            >
              Edit
              <ModeEditIcon></ModeEditIcon>
            </ButtonTransparent>
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