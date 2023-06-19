import {
  DataGrid,
} from "@mui/x-data-grid";
import { FC, useState } from "react";
import { EditOrganization } from "./EditOrganization";
import { ModalComponent } from "../Modal/Modal";
import { ButtonTransparent } from "../Buttons/Buttons";
import { Organization } from "../../types/entities";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

interface OrganizationGrid {
  data: Organization[]
}

export const OrganizationsGrid: FC<OrganizationGrid> = ({
  data
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [id, setID] = useState<number>(0);

  const handleClickOpen = (id: number) => {
    setOpen(true);
    setID(id);
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
      renderCell: (cellValues: any) => {
        return (
          <>
            <ButtonTransparent
              onClick={() => handleClickOpen(cellValues?.id)}
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
        rows={data}
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
        rowsPerPageOptions={[]}
        pagination
        rowHeight={50}
        onCellClick={() => {}}
        onCellDoubleClick={() => {}}
      ></DataGrid>
      <ModalComponent onRequestClose={handleClose} isOpen={isOpen}>
        <EditOrganization id={id} />
      </ModalComponent>
    </div>
  );
}