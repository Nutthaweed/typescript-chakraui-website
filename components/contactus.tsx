import React from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'

const Contactdiv = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
padding-top: 10px;
min-height: 30vh;
align-items: center;
text-align: center;
`

const ContactItems = styled.h2`
font-size: 2.25rem;
line-height: 2.5rem;
font-weight: 700;
`

const ContactImage = styled.div`
padding-botttom: 10;
`

const ContactUs: React.FC = () => {
    return (
    <Contactdiv>
        <ContactImage>
         <Image  src="/images/logo.png" width={100} height={100} alt="logo contact"/>
        </ContactImage>
     <ContactItems>
         Contact and Support
     </ContactItems>
    </Contactdiv>
    )
}

export default ContactUs