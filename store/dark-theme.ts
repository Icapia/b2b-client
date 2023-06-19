import { getIsDarkMode, getPreferredColorScheme } from '@/helpers/helpers';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const isDarkMode = localStorage.getItem('darkMode');
const systemTheme = getPreferredColorScheme();
const initialValue = isDarkMode || systemTheme;

export const localStorageAtom = atomWithStorage('darkMode', initialValue)
export const darkModeAtom = atom<boolean>((get) => getIsDarkMode(get(localStorageAtom)));
