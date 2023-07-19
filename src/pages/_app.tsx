import '@/styles/globals.css'
import { Raleway } from 'next/font/google'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Inter } from 'next/font/google'
import { AnimatePresence } from 'framer-motion'

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--raleway-font'
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter-font'

})



export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const pageKey = router.asPath

  return (
    <main className={raleway.className}>
      <AnimatePresence initial={false} mode='popLayout'>
        <Component key={pageKey} {...pageProps} />
      </AnimatePresence>
    </main>
  );
}
