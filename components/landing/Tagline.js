import { Center, HStack, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import '@fontsource/roboto-flex'
import React from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'

export default function Tagline() {
	let isPageWide = useMediaQuery('(min-width: 768px)')
	const textProps = {
		letterSpacing: { md: '0.4em', lg: '1em' },
		fontFamily: 'Roboto',
		fontSize: { md: 'sm', lg: 'sm' },
		color: useColorModeValue('hsla(181, 70%, 100%, 0.23)', 'yellow.500'),
	}
	return (
		<>
			{isPageWide && (
				<VStack>
					<Text {...textProps}> YOUR FRIENDLY NEIGHBORHOOD SEX-GREMLIN </Text>
				</VStack>
			)}
		</>
	)
}
