import '@/styles/globals.css'
import { Raleway } from 'next/font/google'
import type { AppProps } from 'next/app'


const raleway = Raleway({ 
  subsets: ['latin'],
  variable: '--raleway-font'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={raleway.className}>
      <Component {...pageProps} />
    </main>
  );
}
