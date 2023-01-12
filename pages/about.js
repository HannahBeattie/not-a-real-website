import {
	Container,
	Divider,
	Heading,
	HStack,
	Image,
	Stack,
	Text,
	Tooltip,
	VStack,
} from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import FadeIn from '~/components/framerMotion/FadeIn'
import MyLink from '~/components/base/MyLink'

export default function About() {
	return (
		<>
			<Head>
				<title>About</title>
			</Head>
			<FadeIn>
				<Stack
					spacing={{ base: 4, md: 8 }}
					direction={{ base: 'column', md: 'row' }}
					py={{ sm: 0, md: 8 }}
					px={{ base: 0, md: '100' }}
				>
					<Container
						maxW={'sm'}
						color='gray.900'
						_dark={{ color: 'gray.200' }}
						py='0'
						px={{ base: 8, md: 0 }}
						alignSelf={'center'}
						justify={'center'}
					>
						<Heading
							textAlign={{ base: 'center', md: 'start' }}
							fontSize={{ base: '7xl', md: '8xl', lg: '9xl' }}
						>
							Hello.
						</Heading>
						<Heading
							textAlign={{ base: 'center', md: 'start' }}
							fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
							color={'teal.600'}
							_dark={{ color: 'teal.400' }}
						>
							This is not a real website.
						</Heading>
					</Container>

					<Image
						maxH={'600px'}
						src='/assets/pexels-photo-12733044.jpg'
						alt='a pexels image'
					/>
				</Stack>
				<VStack spacing={'10'} alignItems='stretch'>
					<VStack bg={'gray.900'} alignItems='stretch'>
						<Container
							px={{ base: 4, sm: 4 }}
							py={{ base: 2, md: 8 }}
							maxW={'xl'}
							fontSize={{ med: 'xl', base: 'l' }}
							color='gray.100'
							_dark={{ color: 'gray.100' }}
						>
							<VStack
								alignItems={'stretch'}
								spacing={{ md: 4, base: 2 }}
								p={2}
								py={{ base: 4, md: 0 }}
							>
								<Text fontSize={'xl'} pb={{ base: '2', md: 0 }}>
									Welcome to <i>Not a real website</i>- An application that uses
									NEXT.js and{' '}
									<Tooltip cursor={'pointer'} label='a headless CMS'>
										Contentful*
									</Tooltip>{' '}
									to demonstrate how these tools could be used for something that
									<i> is</i> a real website.
								</Text>
								<Divider />
								<Heading fontWeight={'light'}>Details</Heading>
								<Text fontWeight={'light'}>
									If you navigate to the gallery page, you will find albums that
									are dynamically routed from Contentful, using Next.js router and
									the query language GraphQL.
								</Text>
								<Text fontWeight={'light'}>
									Toggle the light and dark mode to take this website from daytime
									to party time.
								</Text>
								<Divider />
								<Heading fontWeight={'light'}>Source Code</Heading>
								<Text fontWeight={'light'}>
									You can view the source code{' '}
									<MyLink
										textDecoration={'underline'}
										href={'https://github.com/HannahBeattie/not-a-real-website'}
									>
										here
									</MyLink>
									.
								</Text>
							</VStack>
						</Container>
					</VStack>
				</VStack>
			</FadeIn>
		</>
	)
}
