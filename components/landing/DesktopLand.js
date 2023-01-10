import { Box, Spacer, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import Nav from '../header/DesktopNav'
import ColTog from '../header/ToggleLight'
import BigLogo from '../logo/BigLogo'

export default function LandingPage() {
	const src = useColorModeValue('/landing/lgLght.jpg', '/landing/lgDark.jpg')
	const pageProps = {
		flex: '1',
		alignItems: 'stretch',
		display: { base: 'none', md: 'flex' },
		backgroundImage: src,
		backgroundRepeat: 'none',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		flex: '1',
		overflowX: 'hidden',
		position: 'relative',
		spacing: '0',
	}
	const subTitleProps = {
		letterSpacing: { md: '0.2em', lg: '0.3em' },
		fontSize: { md: 'sm', lg: 'sm' },
		px: { md: 4 },
		textAlign: 'center',
		color: useColorModeValue('hsla(181, 70%, 100%, 0.23)', 'yellow.500'),
		top: '500',
	}
	const blurBoxProps = {
		p: 8,
		justify: 'center',
		_light: { backdropFilter: 'auto', backdropBlur: '2px', bg: 'whiteAlpha.400' },
		_dark: { backdropFilter: 'auto', backdropBlur: '7px', bg: 'blackAlpha.800' },
	}
	const navProps = {
		borderBottom: 0,
		backdropFilter: 'auto',
		backdropBlur: '20px',
		bg: 'whiteAlpha.500',
		color: 'gray.900',
		pt: '6',
		pb: '6',
		_dark: {
			bg: 'blackAlpha.700',
			color: 'gray.200',
		},
	}
	const colTogProps = {
		position: 'absolute',
		right: '4',
		top: '4',
	}

	return (
		<VStack {...pageProps}>
			<Box {...blurBoxProps}>
				<BigLogo />
			</Box>

			<Box {...colTogProps}>
				<ColTog />
			</Box>

			<Nav hideLogo hideToggle {...navProps} />
			<Spacer />
			<Text {...subTitleProps}>
				This app uses dynamic routing to display content hosted on a headless CMS
			</Text>
			<Spacer />
		</VStack>
	)
}
