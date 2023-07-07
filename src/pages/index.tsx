import { Stack } from '@mui/material';
import { loginAtom } from '@/store/login';
import { useAtom } from 'jotai';
import { VerificationCode } from '@/components/Auth/VerificationCode';
import { MailForm } from '@/components/Auth/MailForm';
import { graphQlInstance } from '@/services/gql';
import { useEffect } from 'react';

export default function Home() {
  const [login] = useAtom(loginAtom);

  return (
    <div className='login'>
      <div className='login__wrapper'>
        <Stack
          direction='column'
          justifyContent='space-between'
          alignItems='flex-start'
          spacing={2}
        >
          {(login?.isCodeSent && <VerificationCode />) || <MailForm />}
          <div>
            <div style={{ fontSize: '9px' }}>
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of
              Service apply.
            </div>
          </div>
        </Stack>
      </div>
    </div>
  );
}
