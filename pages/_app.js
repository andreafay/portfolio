import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from "../components/layouts/main"
import theme from '@/libs/theme'
import { AnimatePresence } from 'framer-motion'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout route={router}>
        <AnimatePresence mode="wait" initial={true} >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website