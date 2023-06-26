import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { getIsDarkMode, getPreferredColorScheme } from '../helpers/helpers';

let initialValue: string = ''

if (typeof window !== 'undefined') {
  const isDarkMode = localStorage.getItem('darkMode');
  const systemTheme = getPreferredColorScheme();
  initialValue = isDarkMode || systemTheme;
}

export const localStorageAtom = atomWithStorage('darkMode', initialValue)
export const darkModeAtom = atom<boolean>((get) => getIsDarkMode(get(localStorageAtom)));