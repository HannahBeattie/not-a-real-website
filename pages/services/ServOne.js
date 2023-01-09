import Head from 'next/head'
import FadeIn from '~/components/framerMotion/FadeIn'
import { serviceOne } from '~/components/services/Detals'

import ServLayout from '~/components/services/ServLayout'

export { getStaticAlbumProps as getStaticProps } from '~/components/lib/myContext'

export default function ServOne() {
	const props = serviceOne

	return (
		<>
			<Head>
				<title>Service One</title>
			</Head>
			<FadeIn>
				<ServLayout {...props} />
			</FadeIn>
		</>
	)
}
