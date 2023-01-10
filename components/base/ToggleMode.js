import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { HiLightBulb } from 'react-icons/hi'

export default function ToggleMode({ col }) {
	const { colorMode, toggleColorMode } = useColorMode()
	const buttonProps = {
		fontSize: { base: '2xl', med: '2xl' },
		_dark: { color: 'white' },
		bg: {
			base: useColorModeValue('gray.900', 'blackAlpha.800'),
			md: useColorModeValue('gray.200', 'gray.700'),
		},
		_active: {
			bg: useColorModeValue('teal.400', 'teal'),
			color: 'white',
		},
		_hover: {
			bg: useColorModeValue('teal.400', 'teal'),
			color: 'white',
		},
	}

	return (
		<IconButton
			{...buttonProps}
			isRound
			aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} theme`}
			icon={<HiLightBulb />}
			onClick={() => {
				toggleColorMode()
			}}
		/>
	)
}
