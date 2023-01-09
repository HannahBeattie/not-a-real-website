import { Container, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import FadeIn from '~/components/animate/FadeIn'
import MyLink from '~/components/base/MyLink'

export default function About() {
	return (
		<>
			<Head>
				<title>About</title>
			</Head>
			<FadeIn>
				<Stack
					spacing={{ base: 0, md: 8 }}
					direction={{ base: 'column', md: 'row' }}
					py={{ sm: 0, md: 8 }}
					px={{ base: 0, md: '100' }}
				>
					<Container
						maxW={'sm'}
						color='gray.900'
						_dark={{ color: 'gray.200' }}
						py={{ base: 8, md: 0 }}
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
							px={{ base: 8, sm: 4 }}
							py={{ base: 8, sm: 8 }}
							maxW={'xl'}
							fontSize={{ med: 'xl', base: 'l' }}
							color='gray.100'
							_dark={{ color: 'gray.200' }}
						>
							<VStack alignItems={'stretch'}>
								<Text>
									Welcome to Not a real website, an application that uses NEXT.js
									and Contentful, a headless CMS, to demonstrate how these tools
									may be used for something that is a real website.
								</Text>
								<Text>
									If you navigate to the gallery page, you will find albums that
									are dynamically routed from Contentful, using the query language
									GraphQL.
								</Text>

								<Text>
									I have also sprinkled this application with whimsical styling,
									such as a light-to-dark toggle, that switches the mood of the
									website from daytime to party time.
								</Text>
								<Text>All the images used on this site are from pexels.</Text>
								<Text>
									You can view the source code <MyLink href={''}>here</MyLink>. To
									use this template with your own headless CMS, follow the
									instructions in the readme.
								</Text>
							</VStack>
						</Container>
					</VStack>
				</VStack>
			</FadeIn>
		</>
	)
}
