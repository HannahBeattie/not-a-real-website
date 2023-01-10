import { Grid, VStack } from '@chakra-ui/react'
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

	return (
		<>
			<VStack
				display={{ md: 'none' }}
				p={'4'}
				spacing={8}
				_light={{ bg: 'gray.500' }}
				py={'8'}
			>
				{baseCards}
			</VStack>

			<VStack
				alignItems='stretch'
				flex='1'
				px={{ sm: '8', lg: '10', xl: '200' }}
				pb={{ sm: '8' }}
				display={{ base: 'none', md: 'flex' }}
			>
				<Grid
					rowGap={'8'}
					templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
					templateRows={{
						base: `repeat(${cards.length}, 200px 300px)`,
						md: `repeat(${cards.length}, 280px)`,
					}}
				>
					{cards}
				</Grid>
			</VStack>
		</>
	)
}
