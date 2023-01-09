import { CloseIcon } from '@chakra-ui/icons'
import {
	Box,
	Button,
	Code,
	Container,
	Grid,
	GridItem,
	Heading,
	HStack,
	Image,
	Spacer,
	Text,
	VStack,
} from '@chakra-ui/react'
import Head from 'next/head'
import { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Appear from '~/components/animate/Appear'
import FadeIn from '~/components/animate/FadeIn'
import MyLink from '~/components/base/MyLink'
import getGridProps from '~/components/gallery/getGridProps'
import { usePrevNext } from '~/components/hooks/usePrevNext'
import { getAlbums, getGalleryBySlug } from '~/components/lib/api'
import { getStaticAlbumProps } from '~/components/lib/myContext'
import { ImageModal, useImageModal } from '~/components/lib/useImageModal'

export async function getStaticProps(context) {
	console.log('<Gallery> getStaticProps:', context)
	const { slug } = context.params
	// const gallery = await getGalleryBySlug(slug)
	const { props } = await getStaticAlbumProps()
	const { albums } = props
	const gallery = albums.find((aa) => aa.slug === slug)
	return {
		props: { gallery, albums },
	}
}

export async function getStaticPaths() {
	const albums = await getAlbums()
	const paths = albums.map((album) => ({
		params: { slug: album.slug },
	}))
	console.log('<Gallery/[slug/]> getStaticPaths:', paths)
	return {
		paths,
		fallback: false,
	}
}

export default function Gallery({ albums, gallery }) {
	console.log('albums is:', { albums }, 'gallery is', { gallery })
	if (typeof window !== 'undefined') {
		window.gallery = gallery
	}
	const { title, slug, imageCollection, blurb } = gallery ?? {}
	const { items } = imageCollection ?? {}
	const { prev, next, current } = usePrevNext(albums.map((aa) => `/gallery/${aa.slug}`))

	const { openImageNum, imageModalProps } = useImageModal({ items })

	const [clicked, setClicked] = useState(true)
	return (
		<FadeIn>
			<Head>
				<title>Gallery</title>
			</Head>
			<VStack
				alignItems='center'
				px={{ base: 4, md: 10 }}
				pt={{ base: 4, md: 8 }}
				spacing={4}
			>
				<Heading fontSize={{ base: '5xl', md: '7xl' }} textAlign={'center'}>
					{title}
				</Heading>
				<Container>
					<VStack
						spacing={2}
						textAlign={'left'}
						alignItems={'stretch'}
						color={'grayAlpha.800'}
						fontStyle={'italic'}
					>
						<Text>
							This page is dynamically routed. It utalises GraphQl (a query library),
							Contentful (a headless CMS) & Next.js router.
						</Text>
						<Text>
							The images are stored on Contentful, in an album with a unique slug.
						</Text>
						<Text>
							GraphQl requests all the albums I have stored on contentful and creates
							a page for each slug it finds.
						</Text>
						<Text>
							It passes the images, titles and image alts into a page template I
							created, using the slug to create an api endpoint.
						</Text>
					</VStack>
				</Container>

				<Grid
					gap={{ md: 5, base: '4' }}
					maxW='6xl'
					py={{ md: '6', base: '0' }}
					templateColumns={{ md: 'repeat(3, 1fr)' }}
					templateRows={{
						md: `repeat(${Math.floor((items.length * 2) / 3)}, 300px)`,
					}}
				>
					{items.map(({ title, url, ...rest }, idx) => (
						<GridItem key={url} {...getGridProps(idx)}>
							<Appear style={{ width: '100%', height: '100%' }}>
								<Image
									borderRadius={'md'}
									w='100%'
									cursor={{ md: 'pointer' }}
									boxShadow={'dark'}
									h='100%'
									flex='1'
									alt={title}
									src={url}
									fit='cover'
									onClick={() => openImageNum(idx)}
								/>
							</Appear>
						</GridItem>
					))}
				</Grid>

				<HStack
					pb={{ base: '4', md: '8' }}
					w={'100vw'}
					px={'4'}
					color={'gray.600'}
					fontSize={'sm'}
				>
					<MyLink href={prev}>
						<HStack color={'gray.600'} fontSize={'sm'} _hover={{ color: 'teal' }}>
							<Box
								_hover={{ bg: 'gray.800', color: 'teal' }}
								borderRadius={'50'}
								p={'3'}
							>
								<FaArrowLeft />
							</Box>
							<Text display={clicked ? 'flex' : 'none'}>Prev album</Text>
						</HStack>
					</MyLink>
					<Spacer />

					<Spacer />

					<MyLink href={next}>
						<HStack color={'gray.600'} fontSize={'sm'} _hover={{ color: 'teal' }}>
							<Text display={clicked ? 'flex' : 'none'}>Next album</Text>
							<Box
								_hover={{ bg: 'gray.800', color: 'teal' }}
								borderRadius={'50'}
								p={'3'}
							>
								<FaArrowRight />
							</Box>
						</HStack>
					</MyLink>
				</HStack>

				<ImageModal {...imageModalProps} />
			</VStack>
		</FadeIn>
	)
}
