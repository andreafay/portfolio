import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from "../components/layout/main"
import theme from '@/libs/theme'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout route={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website