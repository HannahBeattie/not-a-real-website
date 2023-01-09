import { VStack } from '@chakra-ui/react'
import Head from 'next/head'
import { serviceTwo } from '~/components/services/Detals'
import ServLayout from '~/components/services/ServLayout'
export { getStaticAlbumProps as getStaticProps } from '~/components/lib/myContext'

export default function ServTwo() {
	const props = serviceTwo
	return (
		<>
			<Head>
				<title>Service Two</title>
			</Head>
			<VStack>
				<ServLayout {...props}></ServLayout>
			</VStack>
		</>
	)
}
