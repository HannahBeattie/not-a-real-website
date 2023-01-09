import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Appear from '~/components/animate/Appear'
import FadeIn from '~/components/animate/FadeIn'
import Feature from '~/components/layout/Feature'
import ServCard from '~/components/serviceMenu/MenuItems'
import ServiceIntro from '~/components/serviceMenu/ServiceIntro'

export default function Services() {
	return (
		<>
			<Head>
				<title>Services</title>
				<meta key='og-title' property='og:title' content='Services' />
			</Head>
			<FadeIn>
				<Appear>
					<ServiceIntro />
					<ServCard />
				</Appear>
			</FadeIn>
		</>
	)
}
