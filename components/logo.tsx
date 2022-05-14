import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

&:hover img {
    transform: rotate(20deg);
}

`

const Logo: React.FC = () => {
    const UltimatrumImg = `/images/logo${useColorModeValue('', '')}.png`
    return (
       <div>
           <Link href="/">
               <a>
                   <LogoBox>
           <Image src={UltimatrumImg} width="20" height="20"/>
           <Text
           color={useColorModeValue('gray.800', 'whiteAlpha.900')}
           fontFamily='Valorant'
           fontWeight="bold"
           ml={3}
           >Ultimatrum</Text>
           </LogoBox>
           </a>
           </Link>
       </div>
    )
}

export default Logo