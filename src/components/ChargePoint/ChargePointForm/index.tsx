import { ButtonRemove } from '@/components/Buttons'
import { Input } from '@/components/UI/Input/Input'
import { DELETE_CHARGE_POINT_GQL } from '@/graphql/gql/mutations/charge-point-mutations.gql'
import { siteAtom } from '@/store/edit-site'
import { snackbarState } from '@/store/snackbar'
import { useMutation } from '@apollo/client'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormGroup, TextField } from '@mui/material'
import cn from 'classnames'
import { useAtom } from 'jotai'
import { ChangeEvent, FC, useState } from 'react'
import { ChargePointT, SiteT } from '../../../types/site-types'
import styles from './index.module.scss'

interface ChargePointFormI {
	chargepointId: number
	chargepoint: ChargePointT
}

export const ChargePointForm: FC<ChargePointFormI> = ({
	chargepointId,
	chargepoint,
}) => {
	const [form, setForm] = useAtom(siteAtom)
	const [deleteChargerMutation, result] = useMutation(DELETE_CHARGE_POINT_GQL);
	const [, setSnackbar] = useAtom(snackbarState)
	const [isRemove, setIsRemove] = useState(false);

	const handlerChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const updateState = form.chargePoints?.map((el, index) => {
			if (index === chargepointId) {
				return { ...el, chargePointHardwareId: event.target.value }
			}

			return el
		})

		setForm({ ...form, chargePoints: updateState })
	}

	const handleDeleteChargerFromArray = (id: number | null) => {
		try {
			if(!id?.toString()) return;
			const array: SiteT = {...form};
			const filtered = array.chargePoints?.filter(function(e) {
				return e.id !== id
			});

			setForm({...form, chargePoints: filtered})
		} catch (e: any) {
			setSnackbar({
				message: e?.message,
				type: 'error',
				open: true,
			});
		}
	}

	const handleDeleteCharger = async () => {
		try {
			handleCloseRemoveDialog()
			deleteChargerMutation({
				onCompleted: () => {
					handleDeleteChargerFromArray(chargepoint.id)
					setSnackbar({
						message: 'The site was successfully deleted',
						type: 'success',
						open: true,
					});
				},
				onError: (e) => {
					setSnackbar({
						message: e?.message,
						type: 'error',
						open: true,
					});
				},
				variables: {
					"input": {
						"id": chargepoint.id
					}
				},
			})
		} catch (e: any) {
			console.error(e)
			setSnackbar({
				message: e?.message,
				type: 'error',
				open: true,
			});
		}
	}

	const handleCloseRemoveDialog = () => {
		setIsRemove(false)
	}

	const handleOpenRemoveDialog = () => {
		setIsRemove(true)
	}

	return (
		<FormGroup className={cn(styles.col)}>
			<Input
				value={chargepoint?.chargePointHardwareId ?? ''}
				type='string'
				name='chargePointHardwareId'
				label='Charger ID'
				placeholder='Charger ID'
				onChange={handlerChange}
			/>

			<TextField
				fullWidth
				disabled
				value={'https://icapia-ev-b2b.com/charge-point2323'}
				className={'mt-20 flex-w'}
				type={'string'}
				focused
				name={'ocpp-endpoint'}
				required={true}
				InputLabelProps={{ required: false }}
				label={'OCPP Endpoint '}
				placeholder={`OCPP Endpoint `}
			/>
			<ButtonRemove 
				fullWidth
				onClick={handleOpenRemoveDialog}
			>
				<img style={{marginRight: '5px'}} src="/image/icons/trash.svg"/>
				Delete Charger
			</ButtonRemove>
			<Dialog
				open={isRemove}
				onClose={handleCloseRemoveDialog}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>{'Remove charger'}</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						Are you sure you want to remove the charger?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleDeleteCharger} autoFocus>
						Yes
					</Button>
					<Button onClick={handleCloseRemoveDialog}>No</Button>
				</DialogActions>
			</Dialog>
		</FormGroup>
	)
}
