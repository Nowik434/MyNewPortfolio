import React, { useState, useEffect } from 'react';
import './globals.scss'
import Header from '../components/Header/Header';
import { useRouter } from 'next/router'
import * as ga from '../lib/ga'

function PortfolioApp(props) {
  const { Component, pageProps } = props;
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default PortfolioApp
