import { atom } from 'jotai'

export interface IUser {
	username: string,
	sub: number,
	name: string,
	email: string,
	iat: number,
	exp: number,
}

export const userAtom = atom<IUser>({
	username: '',
	sub: 0,
	name: '',
	email: '',
	iat: 0,
	exp: 0,
})