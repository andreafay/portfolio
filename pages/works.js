import { WorkGridItem } from "@/components/grid-item"
import Layout from "@/components/layouts/article"
import Paragraph from "@/components/paragraph"
import Section from "@/components/section"
import { Container, Heading, SimpleGrid } from "@chakra-ui/react"

import propic from "../public/images/propic.png"

const Works = () => {
    return (

        <Layout>
            <Container>
                <Heading as="h3" fontSize={22} my={4} textDecoration="underline" fontFamily="mono" >
                    Stack
                </Heading>
                <Section>
                    <Heading as="h3" fontSize={16} mt={4} fontFamily="mono">
                        Back-end:
                    </Heading>
                    <Paragraph>
                        Java, Python, Golang
                    </Paragraph>
                    <Heading as="h3" fontSize={16} mt={4} fontFamily="mono">
                        Front-end:
                    </Heading>
                    <Paragraph>
                        React, Jsf, Jsp
                    </Paragraph>
                    <Heading as="h3" fontSize={16} mt={4} fontFamily="mono">
                        Other:
                    </Heading>
                    <Paragraph>
                        Sql, Pl/Sql, Git, Docker, Jenkins
                    </Paragraph>
                </Section>

                <Section>
                    <Heading as="h3" fontSize={22} mt={12} textDecoration="underline" fontFamily="mono">
                        Works
                    </Heading>
                    <div className="grid grid-cols-1 mt-8 gap-6 md:grid-cols-2 text-center">
                        <WorkGridItem id="1" title="test1" thumbnail={propic} >
                            TEST TEST TEST TEST
                        </WorkGridItem>
                        <WorkGridItem id="2" title="test2" thumbnail={propic} >
                            TEST TEST TEST TEST
                        </WorkGridItem>
                    </div>
                </Section>
            </Container>
        </Layout>
    )
}

export default Works