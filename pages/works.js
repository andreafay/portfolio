import Section from "@/components/section"
import { Container, Heading } from "@chakra-ui/react"

const Works = () => {
    return (
        <Container>
            <Section>
                <Heading as="h3" fontSize={20} my={4} textDecoration="underline">
                    Stack
                </Heading>
            </Section>

            <Section>
                <Heading as="h3" fontSize={20} my={4} textDecoration="underline">
                    Works
                </Heading>
            </Section>
        </Container>
    )
}

export default Works