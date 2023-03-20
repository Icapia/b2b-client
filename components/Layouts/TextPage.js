import Head from 'next/head';

export function TextPage ( props ) {
  return (
    <main className="app">
      <Head><title>{props.title}</title></Head>
      <main className="content">
        {props.children}
      </main>
    </main>
  )
}