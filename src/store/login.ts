import { graphQlInstance } from '@/services/gql'
import { atom } from "jotai"

export type ILoginForm = {
  username: string;
  password: string;
  isCodeSent: boolean,
  accessToken: string | null,
}

const bearerToken = graphQlInstance.getBearer();

export const loginLoader = atom<boolean>(true);

export const loginFormAtom = atom<ILoginForm>({
  username: '',
  password: '',
  isCodeSent: false,
  accessToken: bearerToken,
})