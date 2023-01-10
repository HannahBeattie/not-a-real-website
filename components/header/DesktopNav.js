import {
	Box,
	HStack,
	Link,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Spacer,
	Stack,
	Text,
	useBreakpointValue,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react'
import MyLink from '../base/MyLink'
import BaseNav from './BaseNav'
import ColTog from '../base/ToggleMode'
import { NAV_ITEMS } from './NavItems'
import Zlogo from '../logo/SmLogo'

export default function Nav({ hideLogo, hideToggle, ...rest }) {
	return (
		<VStack
			alignItems='stretch'
			textTransform={'uppercase'}
			justifyContent='center'
			bg={'white'}
			color='gray.600'
			borderBottom={1}
			borderStyle='solid'
			borderColor='gray.200'
			_dark={{
				bg: 'gray.800',
				color: 'white',
				borderColor: 'gray.900',
			}}
			px={{ base: 4, md: 4 }}
			pt={{ base: 1, md: 4 }}
			pb={{ base: 3, md: 4 }}
			{...rest}
		>
			<HStack
				alignItems={'center'}
				justifyContent={'space-between'}
				display={{ base: 'none', md: 'flex' }}
			>
				<Box minW='3rem'>{!hideLogo && <Zlogo />}</Box>
				<Spacer />
				<DesktopNav />
				<Spacer />
				{!hideToggle && (
					<Box minW='3rem'>
						<ColTog />
					</Box>
				)}
			</HStack>

			<BaseNav hideLogo={hideLogo} />
		</VStack>
	)
}

const DesktopNav = () => {
	return (
		<Stack direction={'row'} spacing={{ md: 3, lg: '8' }}>
			{NAV_ITEMS.map((navItem, idx) => (
				<DesktopNavItem {...navItem} key={`nav-item-${idx}`} />
			))}
		</Stack>
	)
}

const useNavLinkProps = () => {
	const linkColor = useColorModeValue('gray.700', 'gray.200')
	const linkHoverColor = useColorModeValue('orange.800', 'white')
	return {
		p: 3,
		fontSize: 'sm',
		fontWeight: 500,
		color: linkColor,
		rounded: 'sm',
		_hover: {
			textDecoration: 'none',
			color: linkHoverColor,
		},
		textAlign: 'center',
	}
}

const DesktopNavItem = ({ href, label, labelShort, children }) => {
	const navLinkProps = useNavLinkProps()
	let lbl = useBreakpointValue(
		{
			base: label,
			md: labelShort ?? label,
			lg: label,
		},
		{
			fallback: label,
		}
	)
	lbl = lbl ?? label
	if (children) {
		return <DesktopNavItemPopover {...{ href, label: lbl, children }} />
	}
	return (
		<MyLink href={href ?? '#'} {...navLinkProps}>
			{lbl}
		</MyLink>
	)
}

const DesktopNavItemPopover = ({ href, label, children }) => {
	const navLinkProps = useNavLinkProps()
	return (
		<Popover trigger={'hover'} placement={'bottom-start'}>
			<PopoverTrigger>
				<Link href={href ?? '#'} {...navLinkProps}>
					{label}
				</Link>
			</PopoverTrigger>

			{children && (
				<PopoverContent rounded={'md'} _dark={{ bg: 'gray.900', borderColor: 'gray.900' }}>
					<VStack
						boxShadow={'inner'}
						alignItems='stretch'
						spacing='0'
						bg={'white'}
						_dark={{ bg: 'blackAlpha.900' }}
						rounded={'sm'}
					>
						{children.map((child) => (
							<DesktopSubNav rounded={'sm'} key={child.label} {...child} />
						))}
					</VStack>
				</PopoverContent>
			)}
		</Popover>
	)
}

const DesktopSubNav = ({ label, href }) => {
	return (
		<>
			<Link
				href={href}
				role={'group'}
				display={'block'}
				p={2}
				rounded={'sm'}
				px={4}
				_hover={{
					textDecoration: 'none',
					bg: useColorModeValue('gray.200', 'gray.900'),
				}}
			>
				<Text
					rounded={'xl'}
					transition={'all .3s ease'}
					letterSpacing={'0.05em'}
					fontSize={'sm'}
					_groupHover={{ color: useColorModeValue('gray.900', 'white') }}
				>
					{label}
				</Text>
			</Link>
		</>
	)
}
