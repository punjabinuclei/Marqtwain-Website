import '@/styles/globals.css'
import { Raleway } from 'next/font/google'
import type { AppProps } from 'next/app'
import {Inter} from 'next/font/google'

const raleway = Raleway({ 
  subsets: ['latin'],
  variable: '--raleway-font'
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter-font'

})



export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={raleway.className}>
      <Component {...pageProps} />
    </main>
  );
}
