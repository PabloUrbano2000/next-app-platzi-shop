import AppContext from '@context/AppContext';
import Script from 'next/script';
import useInitialState from '@hooks/useInitialState';
import Header from '@components/Header';

import '@styles/globals.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BV3K6J6PV6" />
      <Script id="google-analitics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-BV3K6J6PV6');`}
      </Script>
      <Header></Header>
      <Component {...pageProps} />;
    </AppContext.Provider>
  );
}

export default MyApp;
