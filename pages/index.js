import { Container, Box, Heading, Image, useColorModeValue } from "@chakra-ui/react"

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} mb={6} p={3} align="center">
        Hello, I&apos;m a fullstack developer based in Italy!
      </Box>

      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page title">
            Andrea Fay
          </Heading>
          <p>WebDev, Cryptos, Sports & Music</p>
        </Box>
        <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
          <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid"
                 maxW="100px" maxH="100px" borderRadius="full" display="inline-block" src="/images/propic.png" alt="Profile Image" />
        </Box>
      </Box>
    </Container>
  )
}

export default Page