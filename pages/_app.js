import React, { useState } from 'react';
import './globals.scss'
import Header from '../components/Header/Header';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Router from 'next/router';

// const GlobalStyle = createGlobalStyle`
/* body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */
// `

// const theme = {
//   mainBar: {
//     bgColor: '#212121',
//     gridRowEnd: 16,
//   },
//   footer: {
//     bgColor: 'red',
//     gridTemplateColumns: '1fr',
//     gridColumnStart: 1,
//     gridColumnEnd: 2,
//     gridRowStart: 1,
//     gridRowEnd: 1,
//   }
// }

function PortfolioApp(props) {
  const { Component, pageProps } = props;
  // const [loading, setLoading] = useState(false);


  // Router.events.on("routeChangeStart", (url) => {
  //   console.log('start.....')
  //   setLoading(true);
  // })
  // Router.events.on("routeChangeComplete", (url) => {
  //   console.log('complete')
  //   setLoading(false);
  // })

  return (
    <>
      {/* <GlobalStyle /> */}
      {/* <ThemeProvider> */}
      <Header />
      <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </>
  )
}

export default PortfolioApp
