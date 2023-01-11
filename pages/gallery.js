import { Container, Divider, Grid, GridItem, Heading, Text, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import FadeIn from '~/components/framerMotion/FadeIn'
import Feature from '~/components/base/Feature'

import { getStaticAlbumProps } from '~/components/lib/myContext'

export function getStaticProps() {
	console.log('<Gallery> getStaticProps')
	return getStaticAlbumProps()
}

export default function Gallery({ albums }) {
	console.log('albums is:', { albums })
	return (
		<>
			<Head>
				<title>Gallery</title>
			</Head>

			<FadeIn>
				<VStack py={'8'} spacing={16}>
					<Container align={'center'}>
						<Heading
							pb={4}
							fontSize={{ base: '5xl', md: '7xl' }}
							_dark={{ color: 'red.600', fontFamily: 'lora' }}
						>
							Albums
						</Heading>
						<VStack flex={'1'} align={'stretch'} spacing='4'>
							<Text>
								These albums use content stored on a CMS, that is dynamically routed
								using NEXT.js router.
							</Text>
							<Text>
								Qraphql is used to query contenful, the headless CMS. Contenful
								passes our application the unique SLUG of each album, and that slug
								is used to generate static url paths.
							</Text>
							<Text>
								The images belonging to the unique slug are displayed at that
								locaton, using a waiting layout template that I created earlier.
							</Text>
						</VStack>
					</Container>
					<Grid
						templateColumns={{
							base: 'repeat(1, 1fr)',
							md: 'repeat(2, 1fr)',
						}}
						gap={{ md: 8, base: '4' }}
					>
						{albums?.map((album, idx) => {
							const cover = album.imageCollection?.items?.length
								? album.imageCollection?.items[3]
								: null
							return (
								<GridItem key={`album-${idx}`} w={'100%'} h={'100%'}>
									<Feature
										href={`/gallery/` + album.slug}
										src={cover.url}
										alt={'hi'}
										buttonText={'View Album'}
										heading={'A dynamic album'}
										label={album.title}
										text={`${album.imageCollection.items.length} photos`}
									/>
								</GridItem>
							)
						})}
					</Grid>
				</VStack>
			</FadeIn>
		</>
	)
}
