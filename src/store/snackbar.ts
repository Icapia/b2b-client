import { atom } from 'jotai'

export type ISnackbar = {
	open?: boolean,
	message?: string,
	type?: 'warning' | 'error' | 'success' | 'info' | ''
}

export const snackbarState = atom<ISnackbar>({
	open: false,
	message: '',
	type: 'info',
})
