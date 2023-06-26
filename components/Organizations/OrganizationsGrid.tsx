import {
  DataGrid, GridColDef,
} from "@mui/x-data-grid";
import { FC, useState } from "react";
import { EditOrganization } from "./EditOrganization";
import { ModalComponent } from "../Modal/Modal";
import { ButtonTransparent } from "../Buttons";
import { Organization } from "../../types/entities";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useAtom } from "jotai";
import { organizationEditAtom } from "../../store/organization";

interface OrganizationGrid {
  data: Organization[]
}

export const OrganizationsGrid: FC<OrganizationGrid> = ({
  data
}) => {
  const [isOpen, setOpen] = useAtom(organizationEditAtom)
  const [edit, setEdit] = useState();
  const [id, setID] = useState<number>(0);

  const handlerClickOpen = (cell: any) => {
    setEdit(cell);
    setID(cell.id);
    setOpen(true);
  };

  const handlerClose = () => {
    setOpen(false);
  };

  const columns: GridColDef<Organization>[] = [
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
              onClick={() => handlerClickOpen(cellValues)}
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
        sx={{
          boxShadow: 0,
          border: 1,
          borderColor: "#E6E6E6",
          "& .MuiDataGrid-cell:hover": {
            color: "#4E4D4C",
            backgroundColor: "#FBFBFB",
          },
        }}
        pagination
        rowHeight={50}
        onCellClick={() => {}}
        onCellDoubleClick={() => {}}
      ></DataGrid>
      <ModalComponent onRequestClose={handlerClose} isOpen={isOpen}>
        <EditOrganization id={id} edit={edit} />
      </ModalComponent>
    </div>
  );
}