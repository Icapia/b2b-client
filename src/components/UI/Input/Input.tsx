import {
	FormControl,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField
} from '@mui/material'
import {
	ChangeEventHandler,
	FC,
	HTMLInputTypeAttribute,
	useEffect
} from 'react'
import { useController, useForm } from 'react-hook-form'
import './Input.module.scss'
import { validationConfig } from './validation-config'

interface InputI {
	value: string | number | undefined
	name: string
	validation?:
	| 'phone'
	| 'email'
	| 'price'
	| 'default'
	| 'name'
	| 'longitude'
	| 'latitude'
	| 'zip'
	onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
	onError?: void,
	label: string
	helperMessage?: string
	type?: HTMLInputTypeAttribute
	placeholder?: string
	adornment?: string,
	required?: boolean,
}

export const Input: FC<InputI> = ({
	value,
	type = 'string',
	name,
	label,
	onChange,
	onError,
	placeholder = '',
	helperMessage,
	adornment,
	validation = 'default',
	required,
}) => {
	const {
		control
	} = useForm({
		mode: 'onChange'
	})

	const rules = validationConfig[validation]

	const { field, fieldState } = useController({
		name,
		control,
		rules: { ...rules },
		defaultValue: value,
	})

	useEffect(() => {
		field.value = value
	}, [value])

	if(adornment) {
		return (
			<FormControl focused fullWidth className='mt-20'>
				<InputLabel htmlFor={name}>
					{label}
				</InputLabel>
				<OutlinedInput
					{...field}
					error={fieldState.invalid}
					value={field.value || ''}
					type={type || 'text'}
					name={name}
					label={label}
					placeholder={placeholder}
					endAdornment={
						<InputAdornment position='end'>{adornment}</InputAdornment>
					}
					onChange={(event) => {
						field.onChange(event)
						onChange(event)
					}}
				/>
				<span className='error'>{fieldState.invalid ? fieldState.error?.message : ''}</span>
			</FormControl>
		)
	}

	return (
		<div style={{width: '100%'}}>
			<TextField
				fullWidth
				{...field}
				value={value}
				type={type || 'text'}
				name={name}
				helperText={helperMessage}
				label={label}
				placeholder={placeholder}
				InputLabelProps={{ required: false }}
				className={'mt-20 flex-w'}
				error={fieldState.invalid}
				focused={true}
				style={{WebkitAppearance: 'none'}}
				onChange={(event) => {
					field.onChange(event)
					onChange(event)
				}}
			/>
			<span className='error'>
				{fieldState.invalid ? fieldState.error?.message : ''}
			</span>
		</div>
	)
}
