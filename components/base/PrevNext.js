import { HStack, Spacer, Text } from '@chakra-ui/react'
import MyLink from './MyLink'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { usePrevNext } from '../../hooks/usePrevNext'

export default function PrevNext() {
	const { prev, next } = usePrevNext(['/services/one', '/services/two'])
	const stackProps = {
		w: '100%',
		p: '4',
		color: 'gray.500',
		fontSize: { base: 'sm', md: 'md' },
	}
	return (
		<HStack {...stackProps}>
			<MyLink href={prev}>
				<FaArrowLeft />
			</MyLink>
			<MyLink href={next}>
				<Text>prev service</Text>
			</MyLink>
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
