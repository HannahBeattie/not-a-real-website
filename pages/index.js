import BaseLand from '~/components/landing/BaseLand'
import LandingPage from '~/components/landing/DesktopLand'

export { getStaticAlbumProps as getStaticProps } from '~/components/lib/myContext'

export default function Home() {
	return (
		<>
			<BaseLand />
			<LandingPage />
		</>
	)
}

Home.shrinkage = true
Home.noHeader = true
Home.noFooter = true
