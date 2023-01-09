import {
	Box,
	Button,
	Center,
	Grid,
	GridItem,
	HStack,
	Image,
	Text,
	useColorMode,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react'
import MyLink from './MyLink'

import { useMediaQuery } from '../../hooks/useMediaQuery'

export default function Card({ title, sub, desc, href, src, alt, width, lgTitle }) {
	let isPageWide = useMediaQuery('(min-width: 768px)')
	const mySizes = isPageWide ?? { '30vw': '90vw' }
	const color = useColorModeValue('red.300', 'gray.100')
	const galBg = useColorModeValue('white', 'black')

	return (
		<>
			{isPageWide && (
				<Grid>
					<GridItem>{src && <Image src={src} alt='alt' />}</GridItem>
				</Grid>
			)}

			{!isPageWide && (
				<VStack py={'5'} bg={galBg}>
					<Box>{src && <Image src={src} alt='alt' />}</Box>
				</VStack>
			)}
		</>
	)
}
