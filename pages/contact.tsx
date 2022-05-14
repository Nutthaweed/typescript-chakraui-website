import React from 'react'
import type{ NextPage} from 'next'
import { Container, Box, Heading } from '@chakra-ui/react'

const contact: NextPage = () => {
    return (
        <Container>
             <Box display={{ md: 'flex'}} pt={6}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">Contact Us</Heading>
        </Box>
      </Box>
        </Container>
    )
}

export default contact