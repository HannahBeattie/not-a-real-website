import { Container, Divider, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import Feature from '../base/Feature'
import Slide from '../base/Slide'

export default function MenuItems() {
	const cardProps = [
		{
			title: 'Service one',
			sub: 'Subtitle',
			src: '/serMenu/01.jpg',
			buttonText: 'Tell me more',
			alt: 'image alt',
			href: '/services/one',
			label: 'label',
		},
		{
			title: 'Service two',
			sub: 'Subtitle',
			src: '/serMenu/02.jpg',
			buttonText: 'Tell me more',
			alt: 'image alt',
			href: '/services/two',
			label: 'label',
		},
	]

	const cards = cardProps.map((props, idx) => (
		<Slide key={`service-${idx}`} {...props} idx={idx} />
	))

	const baseCards = cardProps.map((props, idx) => (
		<Feature
			alt={props.alt}
			key={`service-${idx}`}
			heading={props.title}
			buttonText={props.buttonText}
			text={props.sub}
			label={props.label}
			src1={props.src}
			src2={props.src}
			{...props}
			idx={props.idx}
		/>
	))

	const baseCardProps = {
		display: { md: 'none' },
		_light: { bg: 'gray.500' },
		spacing: '4',
	}

	const deskTpCardProps = {
		alignItems: 'stretch',
		flex: '1',

		display: { base: 'none', md: 'flex' },
	}
	const gridProps = {
		rowGap: '8',
		templateColumns: { base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
	}
	const pageProps = {
		p: { base: 4, md: 8 },
		spacing: { base: 4, md: 4 },
	}

	return (
		<VStack {...pageProps}>
			<Heading>Pretend Service menu</Heading>
			<Container justfy={'center'} maxW={{ base: '24em', md: '34em' }}>
				<VStack justify={'stretch'}>
					<Text>This is an example of what a service menu might look like...</Text>
					<Text>There may be some fancy styling and more written content.</Text>
				</VStack>
			</Container>
			<Divider pt={{ base: 2, md: 6 }} />
			<VStack {...baseCardProps}>{baseCards}</VStack>

			<VStack {...deskTpCardProps}>
				<Grid
					{...gridProps}
					templateRows={{
						base: `repeat(${cards.length}, 200px 300px)`,
						md: `repeat(${cards.length}, 500px)`,
					}}
				>
					{cards}
				</Grid>
			</VStack>
		</VStack>
	)
}
