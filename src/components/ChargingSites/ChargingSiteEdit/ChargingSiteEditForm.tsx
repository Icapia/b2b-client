import {
	Box,
	FormControl,
	FormGroup,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent
} from '@mui/material'

import { Input } from '@/components/UI/Input/Input'
import { siteAtom } from '@/store/edit-site'
import { useAtom } from 'jotai'
import { ChangeEvent, FC, useState } from 'react'
import { Location, Organization } from '../../../types/entities'
import styles from './index.module.scss'

interface ChargingSiteEditFormI {
	organizations: Organization[]
}

export const ChargingSiteEditForm: FC<ChargingSiteEditFormI> = ({
	organizations,
}) => {
	const [form, setForm] = useAtom(siteAtom)
	const [selected, setSelected] = useState(parseInt(organizations[0]?.id) ?? 0)

	const handlerChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setForm({ ...form, [event.target.name]: event.target.value })
	}

	const handlerChangeCoordinates = (event: ChangeEvent<HTMLInputElement>) => {
		const isLatitude = event.target.name === 'latitude'

		const coordinates: Location = {
			type: 'Point',
			coordinates: [
				isLatitude ?
					parseFloat(event.target.value)
					: form.location.coordinates[0],
				!isLatitude
					? parseFloat(event.target.value)
					: form.location.coordinates[1],
			],
		}

		setForm({ ...form, location: coordinates })
	}

	const handlerChangeSelect = (event: SelectChangeEvent<number>) => {
		const value = (event?.target?.value as string) || null
		setForm({ ...form, organizationId: value })
	}

	console.log("Form", form)

	return (
		<Box className={styles.container}>
			<FormGroup className='modal__content-formGroup col-2'>
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<InputLabel id='organization-label'>Organization</InputLabel>
							<Select
								sx={{ backgroundColor: 'white' }}
								labelId='organization-label'
								id='organization'
								name='organizationId'
								label='Organization'
								defaultValue={selected}
								autoFocus
								onChange={(e: SelectChangeEvent<number>) => {
									handlerChangeSelect(e)
								}}
							>
								{organizations?.length > 0 &&
									organizations?.map(e => {
										return (
											<MenuItem key={e.id} value={e.id}>
												{e.name}
											</MenuItem>
										)
									})}
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={6}>
						<Input
							value={form.name}
							type='string'
							name='name'
							label='Site Name'
							placeholder='Enter Site Name'
							onChange={handlerChange}
						/>
					</Grid>
					<Grid item xs={6}>
						<Input
							value={form.zip_code}
							type='number'
							name='zip_code'
							label='ZIP Code'
							placeholder='99999'
							onChange={handlerChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<Input
							value={form.address}
							type='string'
							name='address'
							label='Address'
							placeholder='Enter Site Address'
							onChange={handlerChange}
						/>
					</Grid>
					<Grid item xs={6}>
						<Input
							value={form.phone_number}
							type='number'
							name='phone_number'
							validation='phone'
							label='Phone Number (optional)'
							placeholder='+1 111 111-11-11'
							onChange={handlerChange}
						/>
					</Grid>
					<Grid item xs={6}>
						<Input
							value={form.default_price}
							type='number'
							validation='price'
							name='default_price'
							label='Default price, $/kWh'
							placeholder='0.0'
							adornment='$/kWh'
							onChange={handlerChange}
						/>
					</Grid>

					<Grid item xs={6}>
						<Input
							value={form.location.coordinates?.[0]}
							type='text'
							name='latitude'
							validation='latitude'
							label='Coordinates (Latitude)'
							placeholder='000.000'
							adornment='Latitude'
							onChange={handlerChangeCoordinates}
						/>
					</Grid>
					<Grid item xs={6}>
						<Input
							value={form.location.coordinates?.[1]}
							type='text'
							name='longitude'
							label='Coordinates (Longitude)'
							validation='longitude'
							placeholder='000.000'
							adornment='Longitude'
							onChange={handlerChangeCoordinates}
						/>
					</Grid>
				</Grid>
			</FormGroup>
		</Box>
	)
}
