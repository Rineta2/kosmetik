'use client'
import { useState, useEffect } from 'react';

import React, { ReactNode } from 'react';

import dynamic from 'next/dynamic';

import '@/components/sass/globals.scss';

import Head from '@/app/Head';

const Header = dynamic(() => import('@/components/ui/Header/Header'), { ssr: false });

const Footer = dynamic(() => import('@/components/ui/Footer/Footer'), { ssr: false });

import { PacmanLoader } from 'react-spinners'

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <html lang="en">
      <body>
        {loading ? <PacmanLoader
          color={'#FFB5DA'} loading={loading} size={200} cssOverride={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} /> : <main>
          <Head />
          <Header />
          {children}
          <Footer />
        </main>}
      </body>
    </html>
  );
};

export default RootLayout;