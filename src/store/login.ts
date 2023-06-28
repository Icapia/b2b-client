import { atom } from "jotai";

export type LoginForm = {
  username: string;
  password: string;
  isCodeSent: boolean,
}

export const loginAtom = atom<LoginForm>({
  username: '',
  password: '',
  isCodeSent: false
})