import { BioSection, BioYear } from "@/components/bio"
import Paragraph from "@/components/paragraph"
import Section from "@/components/section"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { Container, Box, Heading, Image, useColorModeValue, Button, List, ListItem } from "@chakra-ui/react"
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import Link from "next/link"
import Layout from "@/components/layouts/article"
import HeaderPictureAbout from "@/components/headerPicture"

const Page = () => {
  return (

    <Layout>
      <Container>
        <HeaderPictureAbout path="/images/dragonite.gif"/>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mb={6} p={3} align="center">
          Hello, I&apos;m a fullstack developer based in Italy!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={0.8}>
            <Heading as="h2" variant="page title">
              Andre
            </Heading>
            <p>Web Developer (React, Golang, Java)</p>
          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
            <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid"
              maxW="100px" maxH="100px" borderRadius="full" display="inline-block" src="/images/propic.png" alt="Profile Image" />
          </Box>
        </Box>
        <Section>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>I'm a full-stack developer based in Milan with a passion for travelling.
            I started working as a web developer in 2021 during covid.
            Now I work remotely for my company and meanwhile I learn new technologies to achieve my dreams! </Paragraph>
          <Box align="center" my={4}>
            <Link href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </Link>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title" >
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Hello World
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Graduated in Computer Science
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Started working as a Full-Stack Developer
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Sports, Music, Tech, Videogames & Cryptos
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://linkedin.com/in/andrea-fay" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoLinkedin />} >
                  @andrea-fay
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/andreafay" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoGithub />} >
                  @andreafay
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
        <Paragraph className="opacity-40 text-xs text-center font-semibold mt-10">
          This website is a reproduction of craftz.dog by Takuya Matsuyama.
        </Paragraph>
      </Container>
    </Layout>
  )
}

export default Page