import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import FadeIn from '../framerMotion/FadeIn'
import Nav from '../nav/DesktopNav'
import BigLogo from '../logo/BigLogo'

export default function BaseLand() {
	const router = useRouter()
	const src = useColorModeValue('/landing/lightMode.jpg', '/landing/darkMode.jpg')
	const bgProps = {
		display: { md: 'none', base: 'flex' },
		backgroundImage: src,
		backgroundRepeat: 'none',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		flex: '1',
		minH: '100vw',
		overflowX: 'hidden',
		flexDir: 'column',
		spacing: '0',
		alignItems: 'stretch',
		position: 'relative',
	}
	const cardProps = {
		flex: '0.8',
		justifyContent: 'center',
		_dark: {
			backdropFilter: 'auto',
			backdropBlur: '5px',
			bg: 'blackAlpha.600',
		},
		pt: '10',
	}
	const navDisplayProps = {
		borderBottom: 0,
		bg: 'transparent',
		_dark: { bg: 'transparent' },
		position: 'absolute',
		top: '0',
		left: '0',
		right: '0',
	}
	const overLayProps = {
		pt: '8',
		pb: '10',
		backdropFilter: 'auto',
		backdropBlur: '15px',
		bg: 'blackAlpha.600',
		color: 'gray.900',
		_dark: {
			bg: 'blackAlpha.700',
			color: 'gray.200',
		},
		spacing: '8',
	}
	const mainTextProps = {
		fontSize: 'lg',
		px: 16,
		fontWeight: 300,
		letterSpacing: '0.1em',
		color: 'gray.200',
		_dark: {
			color: 'gray.300',
		},
		textAlign: 'center',
		maxW: { base: '26em', sm: '30em' },
	}
	const buttonProps = {
		color: 'gray.900',
		_dark: { color: 'gray.100' },
		fontSize: 'xl',
		fontWeight: '300',
		py: '6',
		px: '8',
		borderColor: 'grayAlpha.700',
		textAlign: 'center',
		justify: 'center',
		spacing: 2,
	}
	const subtitleProps = {
		color: 'blackAlpha.900',
		_dark: {
			color: 'yellow.500',
			opacity: '90%',
		},
		textAlign: 'center',
		letterSpacing: '0.4em',
		lineHeight: 'taller',
		casing: 'uppercase',
		fontSize: 'xs',
	}
	const subSectProps = {
		px: 6,
		flex: '1',
		justifyContent: 'center',
	}
	return (
		<VStack {...bgProps}>
			<VStack {...cardProps}>
				<BigLogo />
			</VStack>

			<Nav hideLogo {...navDisplayProps} />

			<VStack {...overLayProps}>
				<Text {...mainTextProps}>Using Next.js & dynamic routes with a headless CMS</Text>

				<FadeIn transition={{ duration: 1.3, delay: 0.6 }}>
					<Button {...buttonProps} onClick={() => router.push('/about')}>
						Come in <ChevronRightIcon fontSize='4xl' />
					</Button>
				</FadeIn>
			</VStack>

			<VStack {...subSectProps}>
				<Text {...subtitleProps}>Not a real website</Text>
			</VStack>
		</VStack>
	)
}
