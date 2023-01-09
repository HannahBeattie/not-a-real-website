import { HStack, Spacer, Text } from '@chakra-ui/react'
import MyLink from '../base/MyLink'

import { usePrevNext } from '../hooks/usePrevNext'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function PrevNext() {
	const { prev, next, current } = usePrevNext(['/services/servOne', '/services/servTwo'])

	return (
		<HStack
			w={'100vw'}
			px={'8'}
			py={'8'}
			color={'gray.500'}
			fontSize={{ base: 'sm', md: 'md' }}
		>
			<MyLink href={prev}>
				<FaArrowLeft />
			</MyLink>
			<MyLink href={next}>
				<Text>prev service</Text>
			</MyLink>
			<Spacer />
			<Spacer />
			<MyLink href={next}>
				<Text>next service</Text>
			</MyLink>

			<MyLink href={next}>
				<FaArrowRight />
			</MyLink>
		</HStack>
	)
}
