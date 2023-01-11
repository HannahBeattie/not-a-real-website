import { Heading } from '@chakra-ui/react'
import MyLink from '../base/MyLink'

export default function SmLogo() {
	return (
		<>
			<MyLink href={'/'}>
				<Heading _dark={{ fontFamily: 'Lobster Two' }} fontFamily={'Lobster Two'}>
					NO
				</Heading>
			</MyLink>
		</>
	)
}
