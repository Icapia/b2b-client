import Head from 'next/head';
import Link from 'next/link';
import { ButtonDefault } from '../components/Buttons/Buttons';

export default function Error() {
  return (
    <div className='app'>
      <Head>
        <title>404 Page Not Founding</title>
      </Head>
      <div className='content content--404'>
        <div className='error-page'>
          <div className='auth__header'>
            <h1>NID CRM</h1>
            <p>Page not founding</p>
          </div>
          <div className='auth__forgot'>
            <h1>404</h1>
            <p className={'text'}>
              Seems something went wrong. <br />
              Let’s go to dashboard so that start the way
              <br /> from the very beginning
            </p>
            <Link href={'/'}>
              <a className={'btn'}>Back to Dashboard</a>
            </Link>
          </div>
          <div className='auth__policy'>
            This site is protected by reCAPTCHA and the{' '}
            <Link href={'/privacy-policy'}>
              <a
                target={'_blank'}
                className={'link'}
              >
                Privacy Policy
              </a>
            </Link>
            y and{' '}
            <Link href={'/term-of-use'}>
              <a
                target={'_blank'}
                className={'link'}
              >
                Term of Service
              </a>
            </Link>{' '}
            apply.
          </div>
        </div>
      </div>
    </div>
  );
}
