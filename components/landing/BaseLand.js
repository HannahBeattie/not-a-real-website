import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import FadeIn from '../animate/FadeIn'
import Nav from '../header/Nav'
import BigLogo from '../logo/BigLogo'

export default function BaseLand() {
	const router = useRouter()
	const src = useColorModeValue('/landing/lightMode.jpg', '/landing/darkMode.jpg')

	return (
		<VStack
			display={{ md: 'none', base: 'flex' }}
			backgroundImage={src}
			backgroundRepeat={'none'}
			backgroundSize={'cover'}
			backgroundPosition='center'
			flex={'1'}
			minH={'100vw'}
			overflowX='hidden'
			flexDir='column'
			spacing={'0'}
			alignItems='stretch'
			position='relative'
		>
			<VStack
				flex='0.8'
				justifyContent='center'
				_dark={{
					backdropFilter: 'auto',
					backdropBlur: '5px',
					bg: 'blackAlpha.600',
				}}
				pt='10'
			>
				<BigLogo />
			</VStack>

			<Nav
				hideLogo
				borderBottom={0}
				bg='transparent'
				_dark={{ bg: 'transparent' }}
				position='absolute'
				top='0'
				left='0'
				right='0'
			/>

			<VStack
				pt='8'
				pb='10'
				backdropFilter='auto'
				backdropBlur='15px'
				bg='blackAlpha.600'
				color='gray.900'
				_dark={{
					bg: 'blackAlpha.700',
					color: 'gray.200',
				}}
			>
				<Text
					fontSize='lg'
					px='16'
					fontWeight='300'
					letterSpacing='0.1em'
					color='gray.200'
					_dark={{
						color: 'gray.300',
					}}
					textAlign='center'
					maxW='18em'
				>
					Website demo feat. headless CMS & dynamic routing
				</Text>

				<FadeIn transition={{ duration: 1.3, delay: 0.6 }}>
					<Box pt='4'>
						<Button
							variant='outline'
							href='/about'
							onClick={() => router.push('/about')}
							color='gray.300'
							fontSize='xl'
							fontWeight='300'
							py='6'
							px='8'
							borderColor='grayAlpha.700'
						>
							Come in <ChevronRightIcon fontSize='3xl' pr='0' mr='-3' />
						</Button>
					</Box>
				</FadeIn>
			</VStack>

			<VStack px={6} flex='1' justifyContent='center'>
				<Text
					color='blackAlpha.900'
					_dark={{
						color: 'yellow.500',
						opacity: '90%',
					}}
					textAlign='center'
					letterSpacing='0.4em'
					lineHeight='taller'
					casing='uppercase'
					fontSize='xs'
				>
					Not a real website
				</Text>
			</VStack>
		</VStack>
	)
}
