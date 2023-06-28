import styles from './index.module.scss'
import { FC, InputHTMLAttributes } from 'react'
import { useAtom, useAtomValue } from 'jotai'
import {
	useFormContext,
} from 'react-hook-form'
import cn from 'classnames'
import { darkModeAtom } from '../../../../store/dark-theme'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name?: string
	adornment?: string
	placeholder?: string
}

export const FormInput: FC<InputProps> = ({
	name = 'name',
	adornment,
	placeholder,
	...props
}) => {
	const [isDarkMode] = useAtom(darkModeAtom)
	const { register, getFieldState } = useFormContext();
	const { invalid, isDirty } = getFieldState(name)
	const isValid = !invalid && isDirty

	console.log(invalid, isDirty)

	return <input
		className={cn(
			styles.input,
			[isDarkMode && styles.dark],
			[isValid && styles.isValid],
			[!isValid && styles.isInvalid],
		)}
		placeholder={placeholder}
		{...register(name)}
		{...props}
	/>
}
