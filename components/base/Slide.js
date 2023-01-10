import { Button, GridItem, Heading, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import MyLink from './MyLink'

export default function Slide({ idx, title, sub, src, alt, href, buttonText, buttonText2 }) {
	const isOdd = idx % 2
	const order = idx * 2
	const buttonProps = {
		bg: 'gray.200',
		color: 'gray.800',
		_dark: {
			bg: 'gray.800',
			color: 'gray.200',
			_hover: { bg: 'gray.700' },
		},
		_hover: { bg: 'gray.300' },
		py: '4',
		curser: 'pointer',
		minWidth: '180',
	}
	const bg = useColorModeValue('gray.900', 'gray.100')
	const cardPositionProps = {
		justifyContent: 'center',
		curser: 'pointer',
		alignItems: 'center',
		h: '100%',
		w: '100%',
		spacing: '8',
		boxShadow: '2xl',
		boxShadow: 'dark',
	}
	const imProps = {
		w: '100%',
		h: '100%',
		fit: 'cover',
		boxShadow: '2xl',
		align: 'top',
	}
	const gridItemProps = {
		colSpan: 1,
		rowSpan: 1,
		bg: bg,
		px: 8,
		color: 'gray.500',
	}
	const headingProps = {
		fontSize: '3xl',
		fontFamily: 'body',
		variant: 'invert',
		textAlign: 'center',
	}

	return (
		<>
			<GridItem
				{...gridItemProps}
				key={`service-${idx}`}
				order={{ md: isOdd ? order + 1 : order }}
				borderRightRadius={{ md: isOdd ? '8' : '0' }}
				borderLeftRadius={{ md: !isOdd ? '8' : '0' }}
			>
				<MyLink href={href}>
					<VStack {...cardPositionProps}>
						<Heading {...headingProps}>{title}</Heading>
						<Text>{sub}</Text>
						<Button {...buttonProps}>{buttonText}</Button>
					</VStack>
				</MyLink>
			</GridItem>
			<GridItem order={{ md: isOdd ? order : order + 1 }} colSpan={2} rowSpan={1}>
				<MyLink href={href}>
					<Image
						borderLeftRadius={{ md: isOdd ? '8' : '0' }}
						borderRightRadius={{ md: !isOdd ? '8' : '0' }}
						{...imProps}
						src={src}
						alt={alt}
					/>
				</MyLink>
			</GridItem>
		</>
	)
}
