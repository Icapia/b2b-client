import { graphQlInstance } from '@/services/gql'
import { atom } from "jotai"

export type ILoginForm = {
  email: string;
  code: string;
  isCodeSent: boolean,
  accessToken: string | null,
}

const bearerToken = graphQlInstance.getBearer();

export const loginLoader = atom<boolean>(true);

export const loginFormAtom = atom<ILoginForm>({
  email: '',
  code: '',
  isCodeSent: false,
  accessToken: bearerToken,
})