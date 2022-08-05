import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header'

function MyApp({ Component, pageProps, ...appProps }: AppProps) {

  return (
    <div className={`w-full h-full bg-zinc-50`}>
        <div className={`flex flex-col mx-auto container`}>
            <div className={``}>
                <Header active={appProps.router.pathname}/>
            </div>
            <div className={`px-5 h-full`}>
              <Component {...pageProps} />
            </div>
        </div>
    </div>
  )
}

export default MyApp
