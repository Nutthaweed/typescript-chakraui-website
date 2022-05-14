import { Container, Box, Heading } from '@chakra-ui/react'
import type{ NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="yellow" p={3} align="center" mb={6}>
        Welcome to UltimatrumJS
      </Box>

      <Box display={{ md: 'flex'}} >
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">UltimatrumJS</Heading>
          <p>The Ultimate Combination of NextJS, GatsbyJS and ViteJS</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Home
