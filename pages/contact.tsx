import React from 'react'
import type{ NextPage} from 'next'
import { Container } from '@chakra-ui/react'
import ContactUs from '../components/contactus'

const contact: NextPage = () => {
    return (
        <Container>

         <ContactUs />

        </Container>
    )
}

export default contact