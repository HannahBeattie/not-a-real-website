import { Heading, VStack } from '@chakra-ui/react'
import React from 'react'

function BigLogo() {
	const headProps = {
		fontSize: { base: '5xl', sm: '7xl' },
		fontFamily: 'Lobster Two',
		color: 'gray.900',
		_dark: { fontFamily: 'Lobster Two', color: 'red' },
	}
	return (
		<VStack>
			<Heading {...headProps}>Not A Real</Heading>
			<Heading {...headProps}>Website</Heading>
		</VStack>
	)
}

export default BigLogo
