import { LoginForm } from '@/components/Auth/LoginForm'
import { VerificationCode } from '@/components/Auth/VerificationCode'
import { Loader } from '@/components/Loader'
import { graphQlInstance } from '@/services/gql'
import { loginFormAtom, loginLoader } from '@/store/login'
import { Stack } from '@mui/material'
import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Login() {
	const router = useRouter();
	const bearerToken = graphQlInstance.getBearer();
  const [loader, setLoader] = useAtom(loginLoader);
	const [loginForm] = useAtom(loginFormAtom)

	useEffect(() => {
    setLoader(true)

		if(bearerToken) {
			router.push({ pathname: '/organizations' });
		} else {
      setLoader(false)
    }
	}, [bearerToken])

  console.log(loginForm)

	return (
		<div className='login'>
      {
        loader ? <Loader/> : (
          <div className='login__wrapper'>
            <Stack
              direction='column'
              justifyContent='space-between'
              alignItems='flex-start'
              spacing={2}
            >
              {(loginForm?.isCodeSent && <VerificationCode />) || <LoginForm />}
              <div>
                <div style={{ fontSize: '9px' }}>
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of
                  Service apply.
                </div>
              </div>
            </Stack>
          </div>
        )
      }
    </div>
	)
}	