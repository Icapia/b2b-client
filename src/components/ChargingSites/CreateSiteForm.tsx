import { Box, FormGroup, Stack, TextField } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import { ButtonClose, ButtonDefault } from '../Buttons'

export const CreateSiteForm = () => {
	const [form, setForm] = useState({})

	const handlerChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setForm({ ...form, [event.target.name]: event.target.value })
	}

	const handlerUpdate = () => {
		// props.onChange({ ...form });
	}

	const handlerCreateSite = async () => {}
	const handlerClose = () => {}

	return (
		<Box>
			<h2>Add new Site</h2>
			<h5>Notification:</h5>
			<p className='mt-10'>
				After creating a user, login data will be sent to E-mail
			</p>
			<div className='modal__content-form modal__content-form--fullw mxw-700'>
				<FormGroup className='modal__content-formGroup col-2 mt-20'>
					<TextField
						className={'mt-20 flex-w'}
						type={'string'}
						focused={false}
						name={'name'}
						required={true}
						InputLabelProps={{ required: false }}
						label={'Site Name'}
						placeholder={'Enter name'}
						onChange={event => handlerChange(event)}
					/>
					<TextField
						className={'mt-20 flex-w'}
						type={'number'}
						focused={true}
						name={'zip_code'}
						InputLabelProps={{ required: false }}
						label={'ZIP Code'}
						placeholder={'Enter zip code'}
						onChange={event => handlerChange(event)}
					/>

					<TextField
						className={'mt-20 flex-fw'}
						autoFocus={true}
						focused={true}
						name={'address'}
						required={true}
						InputLabelProps={{ required: false }}
						label={'Site Address'}
						placeholder={'Enter ' + 'address'}
						onChange={event => handlerChange(event)}
					/>

					<TextField
						className={'mt-20 flex-w'}
						type={'number'}
						focused={true}
						name={'long'}
						required={true}
						InputLabelProps={{ required: false }}
						label={'Longitude'}
						placeholder={'180, 00000000'}
						onChange={event => handlerChange(event)}
					/>
					<TextField
						className={'mt-20 flex-w'}
						type={'number'}
						focused={true}
						name={'lat'}
						required={true}
						InputLabelProps={{ required: false }}
						label={'Latitude'}
						placeholder={'90, 00000000'}
						onChange={event => handlerChange(event)}
					/>
					<TextField
						className={'mt-20 flex-w'}
						type={'string'}
						focused={true}
						name={'site_area'}
						required={true}
						InputLabelProps={{ required: false }}
						label={'Site area'}
						placeholder={'Enter Site area'}
						onChange={event => handlerChange(event)}
					/>
					<TextField
						className={'mt-20 flex-w'}
						type={'number'}
						focused={true}
						name={'default_price'}
						required={true}
						InputLabelProps={{ required: false }}
						label={'Default price'}
						placeholder={'0.00'}
						onChange={event => handlerChange(event)}
					/>
				</FormGroup>
			</div>
			<Stack
				direction='row'
				justifyContent='space-between'
				alignItems='center'
				spacing={2}
			>
				<ButtonClose
					disabled={false}
					className={'mt-20 flex-fw'}
					fullWidth={false}
					onClick={handlerClose}
				>
					Cancel
				</ButtonClose>

				<ButtonDefault
					disabled={false}
					className={'mt-20 flex-fw'}
					fullWidth={false}
					onClick={handlerCreateSite}
				>
					{/* {(createSite.loading && "Loading...") || "Create"} */}
				</ButtonDefault>
			</Stack>
		</Box>
	)
}
