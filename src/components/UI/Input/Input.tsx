import { validationMap } from './validation-config'
import styles from './Input.module.scss'
import { useEffect, FC, InputHTMLAttributes } from 'react'
import { useAtom, useAtomValue } from 'jotai'
import { RegisterOptions, useController, useForm } from 'react-hook-form'
import cn from 'classnames'
import { darkModeAtom } from '../../../store/dark-theme'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name?: string
	validation?:
		| 'address'
		| 'number'
		| 'royalty'
		| 'percent'
		| 'email'
		| 'price'
		| 'search'
		| 'url'
		| 'default'
		| 'name'
	minLength?: number
	type?: string
	maxLength?: number
	required?: boolean
	adornment?: string
	min?: number
	max?: number
	placeholder?: string
	value?: string | number
	defaultValue?: string | number
	validationAlign?: 'left' | 'right'
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export type ValidationParams = Omit<
	RegisterOptions,
	'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
>

export const Input: FC<InputProps> = ({
	name = 'name',
	validation,
	adornment,
	min,
	max,
	minLength,
	maxLength,
	type,
	className,
	placeholder,
	value,
	defaultValue,
	validationAlign = "left",
	onChange = () => {},
	...props
}) => {
	const [isDarkMode] = useAtom(darkModeAtom)
	const { control } = useForm({
		mode: 'onChange'
	})
	const rules = validationMap[validation!]

	const { field, fieldState } = useController({
		name,
		control,
		rules: { ...rules, min, max },
		defaultValue: value
	})

	const isValid = !fieldState.invalid && fieldState.isDirty

	useEffect(() => {
		field.value = value
	}, [])

	return validation ? (
		<div className={cn(styles.input__wrapper)}>
			<input
				{...field}
				value={field?.value || ''}
				defaultValue={defaultValue}
				type={type || 'text'}
				className={cn(
					styles.input,
					[isDarkMode && styles.dark],
					[fieldState.invalid && styles.validate],
					[validation ? isValid && styles.isValid : ''],
					[type === 'number' ? styles.disabled_scroll : ''],
					className,
				)}
				onChange={event => {
					field.onChange(event)
					onChange(event)
				}}
				maxLength={maxLength}
				minLength={minLength}
				placeholder={placeholder}
				{...props}
			/>
			<div className={cn(styles.validationText, [validationAlign == 'right' && styles.right])}>
				<p className={cn(styles.validationText_err)}>
					{fieldState.invalid ? fieldState.error?.message : ''}
				</p>
			</div>
			<span className={cn(styles.adornment, [isDarkMode && styles.dark])}>
				{adornment}
			</span>
		</div>
	) : (
		<div className={cn(styles.input__wrapper)}>
			<input
				className={cn(styles.input, [isDarkMode && styles.dark], className)}
				placeholder={placeholder}
				name={name}
				value={value}
				defaultValue={defaultValue}
				onChange={onChange}
				type={type || 'text'}
				{...props}
			/>
			<span className={cn(styles.adornment, [isDarkMode && styles.dark])}>
				{adornment}
			</span>
		</div>
	)
}
