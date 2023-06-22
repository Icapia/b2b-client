import Head from 'next/head';
import Link from 'next/link';

export default function Error() {
  return (
    <div className='app'>
      <Head>
        <title>404 Page Not Founding</title>
      </Head>
      <div className='content content--404'>
        <div className='error-page'>
          <div className='auth__header'>
            <h1>ICAPIA EV</h1>
            <p>Page not founding</p>
          </div>
          <div className='auth__forgot'>
            <h1>404</h1>
            <p className={'text'}>
              Seems something went wrong. <br />
              Let’s go to dashboard so that start the way
              <br /> from the very beginning
            </p>
            <Link className={'btn'} href={'/'}>
              Back to Dashboard
            </Link>
          </div>
          <div className='auth__policy'>
            This site is protected by reCAPTCHA and the{' '}
            <Link className='link' href={'/privacy-policy'} target='_blank'>
              Privacy Policy
            </Link>
            y and{' '}
            <Link className='link' href={'/term-of-use'} target={'_blank'}>
              Term of Service
            </Link>{' '}
            apply.
          </div>
        </div>
      </div>
    </div>
  );
}
