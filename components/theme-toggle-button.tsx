import React from 'react'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton: React.FC = () => {
    const { toggleColorMode } = useColorMode()
    
    return (
        <IconButton aria-label="Toggle Theme"
        colorScheme={useColorModeValue('purple', 'cyan')}
        icon={useColorModeValue(<MoonIcon /> , <SunIcon />)}
        onClick={toggleColorMode}
        ></IconButton>
    )
}

export default ThemeToggleButton