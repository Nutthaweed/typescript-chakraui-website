import React from 'react'
import type{ NextPage} from 'next'
import { Container, Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'

// @ts-ignore

const document: NextPage = () => {
    return (
        <Container>
            <Box display={{ md: 'flex'}} pt={6}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">Document</Heading>
        </Box>
      </Box>

       <Box>
       <Text>In UltimatrumJS template we have these code</Text>
       <Box flexShrink={0} mt={{base: 4, md: 0 }} ml={{ md: 0}}>
        <Image  src="/images/javascript.png" width="100" height="100"/>
      </Box>
      <Text fontSize="20">Javascript</Text>
      <Text><strong>Javascript</strong> is the most popular and first choice to coding some website. javascript makes responsive design easier. JavaScript has become integral to the Internet experience as developers build increased interaction and complexity into their applications. Search engines, ecommerce, content management systems, responsive design, social media and phone apps would not be possible without it.</Text>
      <Box flexShrink={0} mt={{base: 4, md: 0 }} ml={{ md: 0}} >
        <Image  src="/images/react.png" width="100" height="100"/>
      </Box>
      <Text fontSize="20">React</Text>
      <Text><strong>React</strong> is the most recommended library for website. Why? Because React is being simple to read and easy to use made React easy to understand and implement, allowing businesses to hit the ground running and build what they need as quickly as possible. Beyond that, React's ease of use has also helped many developers adopt the technology and make it part of their toolkit.</Text>
      <Box flexShrink={0} mt={{base: 4, md: 0 }} ml={{ md: 0}} >
        <Image  src="/images/nextjs.png" width="100" height="100"/>
      </Box>
      <Text fontSize="20" >NextJS</Text>
      <Text><strong>NextJS</strong> is a React framework for building sites using the JAM stack architecture. The acronym JAM stands for Javascript, APIs and Markup. Effectively, it is building sites with Javascript, with data from APIs, which all ends up as simple markup.its have better perfomance, security and scalability.</Text>
      <Box flexShrink={0} mt={{base: 4, md: 0 }} ml={{ md: 0}} >
        <Image  src="/images/gatsby.png" width="100" height="100"/>
      </Box>
      <Text fontSize="20" >GatsbyJS</Text>
      <Text><strong>GatsbyJS</strong> is the combination of GraphQL, React and Webpack. Gatsby can be used to build static sites that are Progressive Web Apps, follow the latest web standards, and are optimized to be highly performant. It makes use of the latest and popular technologies including ReactJS, Webpack, GraphQL, modern ES6+ JavaScript and CSS.</Text>
      <Box flexShrink={0} mt={{base: 4, md: 0 }} ml={{ md: 0}} >
        <Image  src="/images/vitejs.png" width="100" height="100"/>
      </Box>
      <Text fontSize="20">ViteJS</Text>
      <Text><strong>ViteJS</strong> is the <strong>"The Next Generation Frontend Tool".</strong> Vite. js allows developers to set up a development environment for frameworks like Vue and React and even for Vanilla JavaScript app with a dev server. Moreover, it allows the development team to hot reload in just three commands. Vite supports Rollup. js internally for bundling. Not just that ViteJS is very fast for develop because it leverages native ES modules and doesn't need to rebuild the whole bundle when something changes. This makes it fast, regardless of the size of your application or website. </Text>
       </Box>
       
       <Box  pt={24} align="center">
        <footer>© Copyright 2022 FirelinkShrine</footer>
      </Box>

        </Container>
    )
}

export default document