import { TextField } from '@mui/material'
import { ChangeEventHandler, FC, HTMLInputTypeAttribute } from 'react'

interface InputI {
	value: string | number
	name: string
	onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
	label: string
	isError?: boolean
	helperMessage?: string
	type?: HTMLInputTypeAttribute
	placeholder?: string
}

export const Input: FC<InputI> = ({
	value,
	type = 'string',
	name,
	label,
	onChange,
	placeholder = '',
	isError,
	helperMessage,
}) => {
	return (
		<TextField
			name={name}
			error={isError}
			helperText={helperMessage}
			label={label}
			value={value}
			type={type}
			onChange={onChange}
			placeholder={placeholder}
			fullWidth
			className={'mt-20 flex-w'}
			focused={true}
			required={true}
			InputLabelProps={{ required: false }}
		/>
	)
}
