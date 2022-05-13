import React from 'react'
import Image from 'next/image'
import { Text,  useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Link from 'next/link'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  algn-items: center;
  display: inline-flex;
  height: 30px;
  line-height: 20px;
  padding: 10px;
 
  &:hover img {
      transfrom: rotate(20deg);
  }
`

const Logo = () => {
  const UltimatrumImg = `/images/logo.png`

  return (
   <Link href='/'>
       <a>
           <LogoBox>
               <Image src={UltimatrumImg} width={20} height={20} alt="logo"/>
           </LogoBox>
           <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')} fontFamily='M PLUS Rounded 1c' fontWeight="bold" ml={3}>
                UltimatrumJS
           </Text>
       </a>
   </Link>
  )
}

