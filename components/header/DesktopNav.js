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

export default function DesktopNav({ hideLogo, hideToggle, ...rest }) {
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
				<DesktopDisplNav />
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

const DesktopDisplNav = () => {
	return (
		<HStack>
			{NAV_ITEMS.map((navItem, idx) => (
				<DesktopNavItem {...navItem} key={`nav-item-${idx}`} />
			))}
		</HStack>
	)
}

const useNavLinkProps = () => {
	return {
		fontSize: 'sm',
		fontWeight: 500,
		px: '4',
		py: '2',
		_hover: {
			textDecoration: 'none',
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
	const dropdownProps = {
		boxShadow: 'inner',
		alignItems: 'stretch',
		p: 2,
	}
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
					<VStack {...dropdownProps}>
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
	const linkProps = {
		p: 1,
		display: 'block',
		_hover: { textDecoration: 'none', bg: useColorModeValue('grayAlpha.100', 'gray.800') },
	}
	return (
		<>
			<Link href={href} role={'group'} {...linkProps}>
				{label}
			</Link>
		</>
	)
}
