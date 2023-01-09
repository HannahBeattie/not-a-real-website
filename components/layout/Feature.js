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

import MyLink from '../base/MyLink'

export default function Feature({ alt, heading, text, label, href, buttonText, src }) {
	const bg = useColorModeValue('white', 'gray.900')
	const textCol = useColorModeValue('gray.700', 'white')
	const buttonProps = {
		bg: useColorModeValue('gray.800', undefined),
		color: 'gray.200',
		_hover: { bg: 'cyan.900' },
		py: '4',
	}
	return (
		<VStack w={'100%'} h={'100%'} bg={bg} boxShadow={'2xl'} rounded={'md'} pb={5}>
			<MyLink href={href}>
				<Box>
					<Image h={300} fit={'cover'} src={src} alt={alt} />
				</Box>
				<Stack spacing={'4'} cursor={'pointer'} px={6} pt={4}>
					<Text
						color={'teal.400'}
						textTransform={'uppercase'}
						fontWeight={800}
						fontSize={'sm'}
						letterSpacing={1.1}
					>
						{label}
					</Text>

					<Heading color={textCol} fontSize={'2xl'} fontFamily={'body'}>
						{heading}
					</Heading>

					<Text color={'gray.500'}>{text}</Text>

					<Spacer />
					<Button flex={'1'} layout={'flex'} {...buttonProps}>
						{buttonText}
					</Button>
				</Stack>
			</MyLink>
		</VStack>
	)
}
