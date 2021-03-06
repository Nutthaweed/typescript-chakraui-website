import React from 'react'
import { Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Logo from './logo'
import ThemeToggleButton from './theme-toggle-button'

// @ts-ignore

interface Props {
    href: any
    path: any
    children: any
}

const LinkItem:React.FC<Props> = ({ href, path, children}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha900')
    return (
        <NextLink href={href}>
            <Link p={2} bg={active ? 'glassTeal' : undefined} color={active ? '#202023' : inactiveColor}>
                {children}
            </Link>
        </NextLink>
    )
}


interface Propit {
    path: any,
}

const Navbar:React.FC<Propit> = (props) => {
    const { path } = props
    return (
        <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        style={{backdropFilter: 'blur(10px)'}}
        zIndex={1}
        {...props}
        >
   <Container display="flex" maxW="container.md"  justifyContent="space-between"  p={2} >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
             <Logo />
          </Heading>
        </Flex>

        <Stack direction={{base: 'column', md: 'row'}}
        display={{ base: 'none', md: 'flex'}}
        width={{base: 'full', md: 'auto'}}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, nmd: 0}}
        >
      <LinkItem href="/document" path={path}>
          Document
      </LinkItem>
      <LinkItem href="/contact" path={path}>
          Contact Us
      </LinkItem>
      <a href="https://github.com/Nutthaweed/ultimatrum">
          Use Template
      </a>
        </Stack>
        
        <Box flex={1} align="right" pl={24}>
            <ThemeToggleButton />
            <Box ml={2} display={{base: 'inline-block' ,md: 'none'}}>
                <Menu>
                 <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options"/>
                 <MenuList>
                     <NextLink href="/" passHref>
                         <MenuItem as={Link}>Home</MenuItem>
                     </NextLink>
                     <NextLink href="/document" passHref>
                         <MenuItem as={Link}>Document</MenuItem>
                     </NextLink>
                     <NextLink href="/contact" passHref>
                         <MenuItem as={Link}>Contact Us</MenuItem>
                     </NextLink>
                     <MenuItem as={Link} href="https://github.com/Nutthaweed/ultimatrum">Use Template</MenuItem>
                 </MenuList>
                </Menu>
            </Box>
        </Box>
   </Container>
        </Box>
    )
}

export default Navbar