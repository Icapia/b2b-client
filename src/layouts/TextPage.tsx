import React from 'react';
import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';

interface TextPageI {
  title: string,
}
export const TextPage: FC<PropsWithChildren<TextPageI>> = ({
  children,
  title,
}) => {
  return (
    <main className="app">
      <Head><title>{title}</title></Head>
      <main className="content">
        {children}
      </main>
    </main>
  )
}