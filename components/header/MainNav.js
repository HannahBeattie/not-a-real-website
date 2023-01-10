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
import { SP } from 'next/dist/shared/lib/utils'

export default function MainNav({ hideLogo, hideToggle, ...rest }) {
	const stackProps = {
		alignItems: 'stretch',
		textTransform: 'uppercase',
		bg: 'white',
		color: 'gray.600',
		borderBottom: '1px',
		borderStyle: 'solid',
		borderColor: 'gray.200',
		_dark: {
			bg: 'gray.800',
			color: 'white',
			borderColor: 'gray.900',
		},
		px: { base: 4, md: 4 },
		py: { base: 3, md: 2 },
	}
	return (
		<VStack {...stackProps} {...rest}>
			<HStack
				alignItems={'center'}
				justifyContent={'space-between'}
				display={{ base: 'none', md: 'flex' }}
			>
				<Box>{!hideLogo && <Zlogo />}</Box>
				<Spacer />
				<DesktopNav />
				<Spacer />
				{!hideToggle && (
					<Box pl='2'>
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
		<HStack>
			{NAV_ITEMS.map((navItem, idx) => (
				<DesktopNavItem {...navItem} key={`nav-item-${idx}`} />
			))}
		</HStack>
	)
}

const useNavLinkProps = () => {
	const linkColor = useColorModeValue('gray.700', 'gray.200')
	const linkHoverColor = useColorModeValue('orange.800', 'white')
	return {
		fontSize: 'sm',
		fontWeight: 500,
		color: linkColor,
		px: '4',
		py: '2',
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
