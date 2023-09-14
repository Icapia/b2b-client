import { Input } from '@/components/UI/Input/Input'
import { siteAtom } from '@/store/edit-site'
import { FormGroup, TextField } from '@mui/material'
import cn from 'classnames'
import { useAtom } from 'jotai'
import { ChangeEvent, FC } from 'react'
import { ChargePointT } from '../../../types/site-types'
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
		</FormGroup>
	)
}
