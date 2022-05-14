import { Container, Box, Heading, Text } from '@chakra-ui/react'
import type{ NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="yellow" p={3} align="center" mb={6} color="purple.700">
        Welcome to UltimatrumJS
      </Box>

      <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 0}} align="center">
             <Image src="/images/logo.png" display="inline-block" alt="logo main" width="200" height="200"/>
        </Box>

      <Box display={{ md: 'flex'}} >
        <Box flexGrow={1} align="center">
          <Heading as="h2" variant="page-title">UltimatrumJS</Heading>
          <p>The Ultimate Combination of NextJS, GatsbyJS and ViteJS</p>
        </Box>
      </Box>

      <Box display={{ md: 'flex'}} pt={3}>
        <Box flexGrow={1} align="center">
        <Text fontSize={20} mb={4}>What is it?</Text>
        <p><strong>Ultimatrumjs</strong> is javascript-base framework open-source template. its create by FirelinkShrine. UltimatrumJS  is the combination of Nextjs GatsbyJS amd ViteJS, you can made website or application faster and grew stronger</p>
      </Box>
      </Box>

      <Box display={{ md: 'flex'}} pt={3}>
        <Box flexGrow={1} align="center">
        <Text fontSize={20} mb={4}>How we can use it?</Text>
        <Text>You can use this by using</Text>
        <Text mt={2} mb={2} color="white" bg="black" align="left"><code className="javascript">git clone https://github.com/Nutthaweed/ultimatrum</code></Text>
        <Text pt={2}>After that you can run it with</Text>
        <Text mt={2} mb={2} color="white" bg="black" align="left"><code className="bash">npm run dev</code></Text>
      </Box>
      </Box>

      <Box display={{md: 'flex'}} pt={1}>
          <Box flexGrow={1} align="center">
          <Text mt={2} mb={2}>You can build this server</Text>
          <Text mt={2} mb={2} color="white" bg="black" align="left"><code className="bash">npm run build</code></Text>
          </Box>
      </Box>

      <Box display={{md: 'flex'}} pt={1}>
          <Box flexGrow={1} align="center">
            <Text mt={2} mb={2}>You can help us by fill the information at Contact Us by fill at review</Text>
      </Box>
      </Box>
      
     <Box  pt={20} align="center">
       <Text fontSize="30">We will develop it for make it pretty best</Text> 
     </Box>

      <Box  pt={24} align="center">
        <footer>© Copyright 2022 FirelinkShrine</footer>
      </Box>
    </Container>
  )
}

export default Home
