import React from 'react'
import type{ NextPage} from 'next'
import { Container, Box } from '@chakra-ui/react'
import ContactUs from '../components/contactus'

const contact: NextPage = () => {
    return (
        <Container>
         <ContactUs />

         <Box  pt={24} align="center">
        <footer>© Copyright 2022 FirelinkShrine</footer>
      </Box>
        </Container>
      
    )
}

export default contact