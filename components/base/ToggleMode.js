import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { HiLightBulb } from 'react-icons/hi'

export default function ToggleMode({ col }) {
	const { colorMode, toggleColorMode } = useColorMode()
	const buttonProps = {
		fontSize: { base: '2xl', med: '2xl' },
		color: useColorModeValue('gray.600', 'white'),
		bg: {
			base: useColorModeValue('whiteAlpha.600', 'blackAlpha.400'),
			md: useColorModeValue('gray.200', 'gray.700'),
		},
		_active: {
			bg: useColorModeValue('red.600', '#F18F01'),
			color: 'white',
		},
		_hover: {
			bg: useColorModeValue('red.600', '#F18F01'),
			color: 'white',
		},
	}

	return (
		<IconButton
			{...buttonProps}
			isRound
			aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} theme`}
			icon={colorMode === 'light' ? <HiLightBulb /> : <sGoLightBulb />}
			onClick={() => {
				toggleColorMode()
			}}
		/>
	)
}
