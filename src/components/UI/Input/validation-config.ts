import { RegisterOptions } from 'react-hook-form'
export type ValidationParams = Omit<RegisterOptions,
'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
>

const required = 'Field is required'

export const validationConfig: { [key: string]: ValidationParams } = {
	default: {
		required,
		minLength: 1,
		pattern: {
			value: /^.{1,60}$/,
			message: 'Min 1-60 chars',
		},
	},
	name: {
		required,
		minLength: 1,
		maxLength: 60,
		pattern: {
			value: /^.{5,60}$/,
			message: 'Min 5-60 chars',
		},
	},
	number: {
		required,
		minLength: 1,
		maxLength: 10,
		pattern: {
			value: /^(?:\d\,)+\d?$/,
			message: 'Only numbers',
		},
	},
	zip: {
		required,
		minLength: 5,
		maxLength: 5,
		pattern: {
			value: /^\d{5}(?:[-\s]\d{4})?$/,
			message: 'ZIP is incorrect'
		}
	},
	email: {
		required,
		minLength: 5,
		maxLength: 30,
		pattern: {
			value: /^\S+@\S+\.\S+$/,
			message: 'Email is incorrect'
		}
	}, 
	price: {
		required,
		minLength: 1,
		maxLength: 10,
		max: 10000,
		pattern: {
			value: /^\d+([.,]\d{1,2})?$/,
			message: 'Only numbers, max 2 dems after dot'
		}
	},
	phone: {
		required,
		pattern: {
			value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
			message: 'For example: +1 345 67 89 101',
		},
	},
	longitude: {
		required,
		pattern: {
			value: /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/,
			message: 'Must be within (-180; 180)',
		},
	},
	latitude: {
		required,
		pattern: {
			value:
				/^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/,
			message: 'Must be within (-90; 90)',
		},
	}
}
