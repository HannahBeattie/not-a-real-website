import { ChevronRightIcon } from '@chakra-ui/icons'
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Container,
	Grid,
	GridItem,
	Heading,
	HStack,
	Image,
	Text,
	VStack,
} from '@chakra-ui/react'
import Link from 'next/link'
import PriceList from '../base/PriceList'
import PrevNext from '../base/PrevNext'
import MyLink from '../base/MyLink'

const break1 = 'lg'
const break2 = '2xl'

const gutter = { base: 8, md: 12 }

function Disclose({ title, children }) {
	return (
		<AccordionItem flex={'1'} alignItems={'stretch'}>
			<AccordionButton alignItems='center' justifyContent='center'>
				<Heading
					fontSize={{ base: '2xl', md: '3xl' }}
					fontWeight='900'
					color='white'
					_light={{ color: 'teal.500', fontWeight: '200' }}
				>
					<HStack flex={1} justify='center'>
						<AccordionIcon />
						<Text>{title} </Text>
					</HStack>
				</Heading>
			</AccordionButton>
			<AccordionPanel px={gutter} flex={'1'} alignItems={'stretch'}>
				<VStack
					alignItems='stretch'
					spacing={4}
					pt={{ base: 2, md: 4 }}
					pb={{ base: 4, md: 8 }}
				>
					{children}
				</VStack>
			</AccordionPanel>
		</AccordionItem>
	)
}

function GridItemImage({ img, ...rest }) {
	return (
		<GridItem maxH='65vh' {...rest} p={{ base: 4, [break1]: 0 }} pt='0'>
			<Image h='100%' w='100%' src={img.src} alt={img.alt} fit='cover' />
		</GridItem>
	)
}

export default function ServLayout({
	page,
	pageBreadcrumb,
	sub,
	credit,
	image1,
	image2,
	image3,
	image4,
	image5,
	descIsShort,
	description,
	houseKeepingIsShort,
	houseKeeping,
	provTitle,
	provided,
	children,
	ofNote,
	services,
	details,
}) {
	const childs = Array.isArray(children) ? children : [children]
	return (
		<>
			<Grid
				templateColumns={{
					[break1]: 'repeat(2, 1fr)',
				}}
				gap={{ base: 0, [break1]: 3 }}
			>
				<GridItem order='-1' colSpan={{ [break1]: 2 }} px={gutter} mt={2}>
					<Breadcrumb separator={<ChevronRightIcon />}>
						<BreadcrumbItem>
							<MyLink href='/'>
								<BreadcrumbLink>Home</BreadcrumbLink>
							</MyLink>
						</BreadcrumbItem>
						<BreadcrumbItem>
							<MyLink href='/services'>
								<BreadcrumbLink>Services</BreadcrumbLink>
							</MyLink>
						</BreadcrumbItem>
						<BreadcrumbItem>
							<BreadcrumbLink isCurrentPage>{pageBreadcrumb ?? page}</BreadcrumbLink>
						</BreadcrumbItem>
					</Breadcrumb>
				</GridItem>

				<GridItem order={0} colSpan={{ [break1]: 2 }} px={gutter} mt={3} mb={8}>
					<Heading
						fontSize={{ base: '5xl', [break1]: '8xl' }}
						_light={{ fontWeight: '200' }}
						pb={4}
						color='gray.900'
						_dark={{ color: 'gray.200', fontFamily: 'lora' }}
					>
						{page}
					</Heading>
					<Box
						color='red.600'
						_light={{ color: 'teal.500' }}
						fontFamily={'lora'}
						fontWeight={'300'}
					>
						<Text
							fontSize={{ base: '2xl', [break1]: '4xl' }}
							_light={{
								fontFamily: 'lora',
								fontStyle: 'italic',
							}}
						>
							{sub}
						</Text>
						{credit && (
							<Text fontSize={{ base: '2xl', [break1]: '2xl' }} pt={4}>
								{credit}
							</Text>
						)}
					</Box>
				</GridItem>

				<GridItemImage order={{ base: 1, [break1]: 2 }} img={image1} />
				<GridItem
					order={{ base: 2, [break1]: 1 }}
					rowSpan={{ [break1]: 2, [break2]: descIsShort ? 1 : 2 }}
					px={gutter}
				>
					<Container pt={{ base: 8, [break1]: 0 }} pb={8} px={0}>
						<VStack
							flex={1}
							alignItems='flex-start'
							fontSize={{ base: 'lg', [break1]: 'xl' }}
							justifyContent='center'
							spacing={4}
							fontWeight={'200'}
						>
							{description}
						</VStack>
					</Container>
				</GridItem>
				<GridItemImage order={3} img={image2} />

				<GridItem
					order={{
						base: 4,
						[break1]: 5,
						[break2]: descIsShort ? 4 : 5,
					}}
					rowSpan={{ [break1]: houseKeepingIsShort ? 1 : 2 }}
				>
					<Accordion allowMultiple>
						<Disclose title={'Specs'}>{houseKeeping}</Disclose>

						{provided && (
							<Disclose title={provTitle}>
								<Text> {provided}</Text>
							</Disclose>
						)}

						<Disclose title={'Price List'}>
							{details && (
								<PriceList ofNote={ofNote} details={details} services={services} />
							)}
						</Disclose>
					</Accordion>
				</GridItem>

				<GridItemImage
					order={{
						base: 5,
						[break1]: 4,
						[break2]: descIsShort ? 5 : 4,
					}}
					img={image3}
				/>

				<GridItemImage order={6} img={image4} />
				<GridItemImage order={7} img={image5} />
				{children &&
					childs.map((child, idx) => (
						<GridItem
							key={`extra-${idx}`}
							colSpan={{ [break1]: 2, [break2]: 1 }}
							order={8 + idx}
						>
							{child}
						</GridItem>
					))}
			</Grid>
			<PrevNext />
		</>
	)
}
