import {
	Box,
	Button,
	Center,
	Heading,
	Image,
	Spacer,
	Stack,
	Text,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react'
import { useState } from 'react'

import MyLink from './MyLink'

export default function Feature({ alt, heading, text, label, href, buttonText, src }) {
	const buttonProps = {
		bg: useColorModeValue('gray.800', undefined),
		color: 'gray.200',
		_hover: { bg: 'cyan.900' },
		py: '4',
		flex: 1,
	}
	const cardProps = {
		width: '100%',
		height: '100%',
		bg: useColorModeValue('white', 'gray.900'),
		boxShadow: '2xl',
		rounded: 'md',
		px: 0,
		cursor: 'pointer',
	}

	const ImgProps = {
		h: '300',
		fit: 'Cover',
		borderTopRadius: 'md',
	}

	const contentProps = {
		spacing: 2,
		p: 6,
		align: 'stretch',
		flex: 1,
	}
	const albTitleProps = {
		color: 'teal.400',
		textTransform: 'uppercase',
		fontWeight: 800,
		fontSize: 'sm',
		letterSpacing: '0.1em',
	}
	const lgTitleProps = {
		fontSize: '2xl',
		fontFamily: 'body',
	}

	return (
		<VStack {...cardProps}>
			<MyLink href={href}>
				<Box>
					<Image {...ImgProps} src={src} alt={alt} />
				</Box>
				<VStack {...contentProps}>
					<Text {...albTitleProps}>{label}</Text>
					<Heading {...lgTitleProps}>{heading}</Heading>
					<Text color={'gray.500'}>{text}</Text>
					<Spacer />
					<Button {...buttonProps}>{buttonText}</Button>
				</VStack>
			</MyLink>
		</VStack>
	)
}
