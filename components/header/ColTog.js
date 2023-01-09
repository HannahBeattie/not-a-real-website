import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
	Box,
	Center,
	Icon,
	IconButton,
	Image,
	useColorMode,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react'
import React from 'react'
import { HiLightBulb } from 'react-icons/hi'
import { GoLightBulb } from 'react-icons/go'

export default function ColTog({ col }) {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<IconButton
			isRound
			fontSize={{ base: '2xl', med: '2xl' }}
			color={useColorModeValue('gray.600', 'white')}
			bg={{
				base: useColorModeValue('whiteAlpha.600', 'blackAlpha.400'),
				md: useColorModeValue('gray.200', 'gray.700'),
			}}
			_active={{
				bg: useColorModeValue('red.600', '#F18F01'),
				color: 'white',
			}}
			_hover={{
				bg: useColorModeValue('red.600', '#F18F01'),
				color: 'white',
			}}
			aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} theme`}
			icon={colorMode === 'light' ? <HiLightBulb /> : <GoLightBulb />}
			onClick={() => {
				toggleColorMode()
			}}
		/>
	)
}
