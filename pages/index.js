import LandingPage from '~/components/landing/LandingPage'

export { getStaticAlbumProps as getStaticProps } from '~/components/lib/myContext'

export default function Home() {
	return <LandingPage />
}

Home.shrinkage = true
Home.noHeader = true
Home.noFooter = true
