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
				<VStack spacing={'0'} mt={{ base: 4, md: 8 }} spacing={{ base: 4, sm: 8 }}>
					<Heading
						fontSize={{ base: '5xl', md: '7xl' }}
						pb={{ base: '4', sm: '6', lg: '4' }}
						_dark={{ color: 'red.600', fontFamily: 'lora' }}
					>
						Albums
					</Heading>

					<Grid
						templateColumns={{
							base: 'repeat(1, 1fr)',
							md: 'repeat(2, 1fr)',
						}}
						gap={{ md: 8, base: '4' }}
						py={{ base: '8', md: '0' }}
						pt={{ md: '0' }}
						px={{ base: '4', md: '8', lg: '0' }}
					>
						{albums?.map((album, idx) => {
							const cover = album.imageCollection?.items?.length
								? album.imageCollection?.items[0]
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
					<Divider py={{ md: '8' }} />
				</VStack>
			</FadeIn>
		</>
	)
}
