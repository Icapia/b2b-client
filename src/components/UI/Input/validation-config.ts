import { ValidationParams } from './Input'

const required = 'Field is required'

export const validationMap: { [key: string]: ValidationParams } = {
	default: {
		required: false,
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
	url: {
		required,
		minLength: 5,
		pattern: {
			value:
				/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
			message: 'Must only contain lowercase letters, numbers, and hyphens.',
		},
	},
	address: {
		required,
		minLength: 1,
		maxLength: 42,
		pattern: {
			value: /^0x[a-fA-F0-9]{40}$/g,
			message: 'Check your ETH address length and symbols',
		},
	},
	percent: {
		minLength: 1,
		maxLength: 2,
		min: 0,
		max: 20,
		pattern: {
			value: /\d*/,
			message: 'Max 20',
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
	royalty: {
		required,
		minLength: 1,
		maxLength: 2,
		max: 20,
		pattern: {
			value: /^(?:\d\,)+\d?$/,
			message: 'Only numbers',
		},
	},
	price: {
		required,
		minLength: 1,
		maxLength: 10,
		max: 10000,
		pattern: {
			value: /^\d+([.,]\d{1,2})?$/,
			message: 'Only numbers, max 2 dems after dot',
		},
	},
	search: {
		required,
		minLength: 3,
		maxLength: 60,
	},
	email: {
		required,
		minLength: 5,
		maxLength: 60,
		pattern: {
			value:
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			message: 'Must only contain lowercase letters, numbers, and hyphens.',
		},
	},
}
