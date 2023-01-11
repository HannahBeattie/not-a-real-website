import {
	HStack,
	IconButton,
	Spacer,
	Text,
	useColorModeValue,
	VisuallyHidden,
	VStack,
} from '@chakra-ui/react'
import { FaTwitter } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import MyLink from '../base/MyLink'

export function SocialButton({ children, href, label }) {
	const iconButtonProps = {
		bg: useColorModeValue('blackAlpha.100', 'whiteAlpha.100'),
		color: useColorModeValue('gray.900', 'teal.500'),
		_hover: { color: useColorModeValue('teal.500', 'teal.300') },
		rounded: 'full',
		cursor: 'pointer',
	}
	return (
		<MyLink href={href}>
			<VisuallyHidden>{label}</VisuallyHidden>

			<IconButton {...iconButtonProps} icon={children} />
		</MyLink>
	)
}
export default function Footer() {
	const footerProps = {
		p: { base: 2, md: 4 },
		justify: { base: 'center', md: 'space-between' },
		borderTopWidth: '1px',
		borderColor: 'grayAlpha.300',
		fontWeight: '300',
		_dark: { bg: 'whiteAlpha.100' },
		pb: { base: 4, sm: 2, md: 4 },
	}
	const vstackProps = {
		alignItems: 'stretch',
		spacing: 0,
		textAlign: 'start',
		fontSize: { base: '10', sm: 'xs', md: 'sm' },
		fontWeight: '300',
	}
	return (
		<HStack {...footerProps}>
			<VStack {...vstackProps}>
				<Text maxW={{ base: 190, sm: 500 }}>
					© Not real website.
					<i> All Rights reserved</i>. Nah, just kidding, you can borrow.
				</Text>
				<Text>Images from pexels</Text>
				<MyLink textDecoration={'underline'} href='https://github.com/HannahBeattie'>
					Use this link to credit my code
				</MyLink>
			</VStack>
			<Spacer />

			<SocialButton label={'contact'} href={'https://github.com/HannahBeattie'}>
				<FiGithub />
			</SocialButton>
		</HStack>
	)
}
