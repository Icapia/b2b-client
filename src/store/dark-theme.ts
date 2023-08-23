import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { getIsDarkMode, getPreferredColorScheme } from '../helpers/helpers'

export const isSSR = typeof window === 'undefined'

const isDarkMode = isSSR ? false : localStorage.getItem('darkMode')
const systemTheme = getPreferredColorScheme()
const initialValue = isDarkMode || systemTheme

export const localStorageAtom = atomWithStorage('darkMode', initialValue)
export const darkModeAtom = atom<boolean>(get =>
	getIsDarkMode(get(localStorageAtom))
)
