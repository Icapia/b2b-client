import { isSSR } from '@/store/dark-theme'
import { format, parseISO } from 'date-fns'

export const isEmptyObj = (object: Object) => {
	for (const key in object) {
		if (object.hasOwnProperty(key)) {
			return false
		}
	}
	return true
}

export const getExtension = (filename: string) => filename.split('.').pop()

export const isValidDate = (date: Date) => new Date(date).toString() !== 'Invalid Date'

export const getDateFromString = (date: string) => {
	if (!date) {
		return format(Date.now(), 'eeee do MMM, yyyy')
	}

	return format(parseISO(date), 'eeee do MMM, yyyy')
}

export const getTokenSearchParams = (searchParams: URLSearchParams) => {
	const page: number = parseInt(searchParams.get('page') || '1')
	const sorting = searchParams.get('sorting') as 'price' | '-price' || 'price'
	const filter = searchParams.get('filter') as 'onListing' | 'onAuction' | 'notSet' | ''
	const maxPrice = searchParams.get('maxPrice')
	const minPrice = searchParams.get('minPrice')
	const search = searchParams.get("search") || ''

	return {
		page,
		sorting,
		filter,
		maxPrice,
		minPrice,
		search,
	}
}

export const getPreferredColorScheme = () => {
  if (!isSSR) {
    if(window?.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    } else {
      return 'light';
    }
  }
  return 'light';
}

export const ucFirst = (string: string) => {
  if (!string) return string;

  return string[0].toUpperCase() + string.slice(1);
}

export const getIsDarkMode = (value: any) => {
	if(value === 'system') {
		const systemTheme = getPreferredColorScheme();
		if (systemTheme == 'dark') return true

		return false;
	}

	if(value === 'dark') return true;

	return false;
}