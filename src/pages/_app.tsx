import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import dynamic from 'next/dynamic'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  const SafeHydrate = dynamic(() => import('../components/SafeHydrate'), {
    ssr: false,
  })
  return (
    <QueryClientProvider client={queryClient}>
      <SafeHydrate>
        <Component {...pageProps} />
      </SafeHydrate>
    </QueryClientProvider>
  )
}

export default MyApp
