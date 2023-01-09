import { Container, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import FadeIn from '~/components/animate/FadeIn'

export default function About() {
	return (
		<>
			<Head>
				<title>About</title>
			</Head>
			<FadeIn>
				<Stack
					spacing={0}
					direction={{ base: 'column', md: 'row' }}
					py={{ sm: 0, md: '16' }}
					px={{ base: 0, md: '200' }}
				>
					<Container
						maxW={'sm'}
						color='gray.900'
						_dark={{ color: 'gray.200' }}
						py={{ base: 8, md: 0 }}
						px={{ base: 8, sm: 0 }}
						alignSelf={'center'}
					>
						<Heading fontSize={{ base: '7xl', md: '8xl' }}>Hello.</Heading>
						<Heading fontSize={{ base: '3xl', md: '4xl' }}>
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
							px={{ base: 8, sm: 4 }}
							py={{ base: 8, sm: 8 }}
							maxW={'xl'}
							fontSize={{ med: 'xl', base: 'l' }}
							color='gray.100'
							_dark={{ color: 'gray.200' }}
						>
							<VStack alignItems={'stretch'} py={4}>
								<Text>
									It is an example of how a web page can use a headless CMS &
									dynamic routes to create more managable content.
								</Text>
								<Text>This site uses Contentful, GraphQL & Next.js.</Text>
								<Text>The album pages are created using dynamic routes.</Text>
								<Text>
									The service pages are static routes, but created using a
									template.
								</Text>
							</VStack>
						</Container>
					</VStack>
				</VStack>
			</FadeIn>
		</>
	)
}
