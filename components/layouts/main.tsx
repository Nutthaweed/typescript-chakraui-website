import React from'react'
import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'

interface Props {
    children: any
    router: any
}

const Main: React.FC<Props> = ({ children, router }) => {
    return (
      <Box as="main" pb={8}>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>UltimatrumJS</title>
          </Head>
          
          <Navbar {...router.asPath} />

          <Container maxW="container.md" pt={14}>
            {children}
          </Container>
      </Box>
    )
}

export default Main
