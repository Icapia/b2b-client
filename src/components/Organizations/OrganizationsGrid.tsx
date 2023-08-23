import ModeEditIcon from '@mui/icons-material/ModeEdit'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useAtom } from 'jotai'
import { FC, useState } from 'react'
import { organizationEditAtom } from '../../store/organization'
import { Organization } from '../../types/entities'
import { ButtonTransparentNoPadding } from '../Buttons'
import { ModalComponent } from '../Modal/Modal'
import { EditOrganization } from './EditOrganization'

interface OrganizationGrid {
	data: Organization[]
}

export const OrganizationsGrid: FC<OrganizationGrid> = ({ data }) => {
	const [isOpen, setOpen] = useAtom(organizationEditAtom)
	const [edit, setEdit] = useState()
	const [id, setID] = useState<number>(0)

	const handlerClickOpen = (cell: any) => {
		setEdit(cell)
		setID(cell.id)
		setOpen(true)
	}

	const handlerClose = () => {
		setOpen(false)
	}

	const columns: GridColDef<Organization>[] = [
		{
			field: 'name',
			headerName: 'Organization name',
			headerClassName: 'datagrid__header',
			flex: 1,
			editable: false,
		},
		{
			field: 'address',
			headerName: 'Address',
			headerClassName: 'datagrid__header',
			flex: 1.5,
		},
		{
			field: 'email',
			headerName: 'E-mail',
			headerClassName: 'datagrid__header',
			flex: 1.5,
		},
		{
			field: 'phone_number',
			headerName: 'Phone Number',
			headerClassName: 'datagrid__header',
			flex: 1,
			editable: false,
		},
		{
			field: 'actions',
			headerName: 'Actions',
			headerClassName: 'datagrid__header datagrid__header--right',
			sortable: false,
			flex: 1,
			align: 'right',
			headerAlign: 'right',
			renderCell: (cellValues: any) => {
				return (
					<>
						<ButtonTransparentNoPadding
							onClick={() => handlerClickOpen(cellValues)}
							size={'small'}
						>
							<span style={{ marginRight: '4px' }}>Edit</span>
							<ModeEditIcon style={{ width: '22px' }} />
						</ButtonTransparentNoPadding>
					</>
				)
			},
		},
	]

	return (
		<div style={{ height: '80vh', width: '100%' }}>
			<DataGrid
				rows={data}
				columns={columns}
				rowSelection={false}
				checkboxSelection={false}
				autoHeight={false}
				autoPageSize={false}
				disableColumnFilter
				editMode='row'
				disableColumnMenu
				disableColumnSelector
				sx={{
					boxShadow: 0,
					border: 1,
					borderColor: '#E6E6E6',
					'& .MuiDataGrid-cell:hover': {
						color: '#4E4D4C',
						backgroundColor: '#FBFBFB',
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
	)
}
