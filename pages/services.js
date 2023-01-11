import Head from 'next/head'
import Appear from '~/components/framerMotion/Appear'
import FadeIn from '~/components/framerMotion/FadeIn'
import ServCard from '~/components/serviceMenu/ServMenu'

export default function Services() {
	return (
		<>
			<Head>
				<title>Services</title>
				<meta key='og-title' property='og:title' content='Services' />
			</Head>
			<FadeIn>
				<Appear>
					<ServCard />
				</Appear>
			</FadeIn>
		</>
	)
}
