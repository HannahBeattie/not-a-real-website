import {
	Box,
	chakra,
	HStack,
	IconButton,
	Spacer,
	Text,
	Tooltip,
	useColorModeValue,
	VisuallyHidden,
	VStack,
} from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'
import { FaTwitter } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { RiMailOpenFill } from 'react-icons/ri'
import MyLink from '../base/MyLink'

export function SocialButton({ children, href, label }) {
	return (
		<MyLink href={href} passHref>
			<VisuallyHidden>{label}</VisuallyHidden>

			<IconButton
				bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
				rounded={'full'}
				cursor={'pointer'}
				display={'inline-flex'}
				alignItems={'center'}
				justifyContent={'center'}
				transition={'background 0.3s ease'}
				fontSize={'xl'}
				color={'teal.500'}
				_dark={{ color: 'gray.300' }}
				_hover={{
					bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
				}}
				icon={children}
			/>
		</MyLink>
	)
}
export default function Footer(props) {
	return (
		<HStack
			py={4}
			px={{ base: 4, md: 8 }}
			direction={{ base: 'column', md: 'row' }}
			justify={{ base: 'center', md: 'space-between' }}
			align={{ base: 'center', md: 'center' }}
			{...props}
			_dark={{ bg: 'whiteAlpha.100' }}
			fontWeight={'300'}
			borderColor='grayAlpha.300'
			borderTopWidth='1px'
		>
			<VStack alignItems={'stretch'}>
				<Text textAlign={'start'} fontSize={{ base: 'xs', md: 'sm' }} fontWeight={'400'}>
					© Not real website.
					<i> All Rights reserved</i>. Nah, just kidding, you can borrow.
				</Text>

				<Text fontSize={'xs'} textAlign={'start'} display={{ base: 'none', md: 'inherit' }}>
					Images from pexels
				</Text>
			</VStack>

			<VStack alignItems={'stretch'} spacing={'4'}>
				<HStack>
					<Spacer />
					<SocialButton label={'Twitter'} href={'https://twitter.com'} target='blank'>
						<FaTwitter />
					</SocialButton>

					<SocialButton label={'contact'} href={'https://github.com/HannahBeattie'}>
						<FiGithub />
					</SocialButton>
				</HStack>
				<Text fontSize={'10'} display={{ base: 'none', md: 'block' }}>
					Code by hannah bee
				</Text>
			</VStack>
		</HStack>
	)
}
