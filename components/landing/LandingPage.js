import { Box, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import BigLogo from '../logo/BigLogo'
import ColTog from '../header/ColTog'
import Nav from '../header/Nav'
import BaseLand from './BaseLand'
import MyLink from '../base/MyLink'

export default function LandingPage() {
	// const soft = useColorModeValue('', 'blackAlpha.900')
	const src = useColorModeValue('/landing/lgLght.jpg', '/landing/lgDark.jpg')
	const textProps = {
		letterSpacing: { md: '0.4em', lg: '1em' },
		fontSize: { md: 'sm', lg: 'sm' },
		px: { md: 4 },
		textAlign: 'center',
		color: useColorModeValue('hsla(181, 70%, 100%, 0.23)', 'yellow.500'),
		top: '500',
	}
	const stackProps = {
		backgroundImage: src,
		backgroundRepeat: 'none',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		flex: '1',
		overflowX: 'hidden',
	}

	return (
		<>
			<VStack flex={'1'} alignItems='stretch' display={{ base: 'flex', md: 'none' }}>
				<BaseLand />
			</VStack>

			<VStack flex={'1'} alignItems='stretch' display={{ md: 'flex', base: 'none' }}>
				<VStack {...stackProps} spacing={'0'} alignItems='stretch' position='relaitve'>
					<VStack
						flex={'1'}
						justifyContent={'center'}
						_light={{
							backdropFilter: 'auto',
							backdropBlur: '2px',
							bg: 'whiteAlpha.400',
						}}
						_dark={{
							backdropFilter: 'auto',
							backdropBlur: '7px',
							bg: 'blackAlpha.800',
						}}
					>
						<BigLogo />
					</VStack>

					<Box position='absolute' top='8' right='16'>
						<ColTog />
					</Box>

					<Nav
						hideLogo
						hideToggle
						borderBottom={0}
						backdropFilter='auto'
						backdropBlur='20px'
						bg='whiteAlpha.500'
						color='gray.900'
						pt='6'
						pb='6'
						_dark={{
							bg: 'blackAlpha.700',
							color: 'gray.200',
						}}
					/>

					<VStack flex={1} justifyContent='center'>
						<Text py={'100'} {...textProps}>
							Not a real website: Dynamic routing w headless CMS
						</Text>
					</VStack>
				</VStack>
			</VStack>
		</>
	)
}
