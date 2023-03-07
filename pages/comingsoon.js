import Link from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button
} from '@chakra-ui/react'
import Layout from '@/components/layouts/article'

const ComingSoon = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h1">Not found</Heading>
                <Text>Coming soon!</Text>
                <Divider my={6} />
                <Box my={6} align="center">
                    <Button as={Link} href="/" colorScheme="teal">
                        Return to home
                    </Button>
                </Box>
            </Container>
        </Layout>
    )
}

export default ComingSoon