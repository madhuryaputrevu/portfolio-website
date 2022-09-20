import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header'

function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  return (
    <div className={`w-full min-h-screen bg-lime-500`}>
        <div className={`flex flex-col w-full md:px-24 lg:px-48`}>
            <div className={``}>
                <Header active={appProps.router.pathname}/>
            </div>
            <div className={`px-5 md:px-0`}>
              <Component {...pageProps} />
            </div>
        </div>
    </div>
  )
}

export default MyApp
