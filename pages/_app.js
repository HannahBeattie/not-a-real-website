import { ChakraProvider, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import Footer from '~/components/header/Footer'
import Nav from '~/components/header/MainNav'
import { MyProvider } from '~/components/lib/myContext'
import { theme } from '~/styles/theme'
import '../styles/main.css'

function MyApp({ Component, pageProps, router }) {
	const { albums } = pageProps ?? {}
	const mainWrapProps = Component.shrinkage
		? {
				position: 'fixed',
				left: 0,
				top: 0,
				right: 0,
				bottom: 0,
		  }
		: {
				minH: '100vh',
		  }

	return (
		<MyProvider value={{ albums }}>
			<ChakraProvider theme={theme}>
				<VStack
					alignItems='stretch'
					spacing='0'
					key={`key-${router.pathname}`}
					{...mainWrapProps}
				>
					{!Component.noHeader && <Nav as='nav' absolute={Component.absoluteHeader} />}

					<VStack as='main' alignItems='stretch' flex={1} spacing='0'>
						<Component {...pageProps} />
					</VStack>

					{!Component.noFooter && <Footer />}
				</VStack>
			</ChakraProvider>
		</MyProvider>
	)
}

export default MyApp
