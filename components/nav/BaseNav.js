import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	CloseButton,
	Drawer,
	DrawerContent,
	Flex,
	HStack,
	IconButton,
	Text,
	useColorModeValue,
	useDisclosure,
	VStack,
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import MyLink from '../base/MyLink'
import ColTog from '../base/ToggleMode'
import SmLogo from '../logo/SmLogo'
import { NAV_ITEMS } from './NavItems'

const LinkItems = NAV_ITEMS

export default function BaseNav({ hideLogo }) {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<Box display={{ md: 'none' }}>
			<Drawer
				autoFocus={false}
				isOpen={isOpen}
				placement='left'
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				display={{ base: 'auto', med: 'none' }}
			>
				<DrawerContent>
					<SidebarContent onClose={onClose} />
				</DrawerContent>
			</Drawer>

			<MobileNav onOpen={onOpen} hideLogo={hideLogo} />
		</Box>
	)
}

const SidebarContent = ({ onClose }) => {
	const containerProps = {
		w: 'full',
		h: 'full',
		spacing: 0,
		align: 'stretch',
		maxH: '100vh',
		overflowY: 'auto',
	}
	const topBarProps = {
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		mx: '4',
		py: 4,
	}
	const amendMarginProps = {
		ml: '4',
	}
	return (
		<VStack {...containerProps} role='group'>
			<HStack {...topBarProps} {...amendMarginProps}>
				<SmLogo />
				<CloseButton onClick={onClose} />
			</HStack>
			{LinkItems.map((link, idx) =>
				link.children ? (
					<Accordion allowToggle variant='unstyled' key={`nav-link-${idx}`}>
						<AccordionItem>
							<AccordionButton {...amendMarginProps}>
								<Text as={'div'}>{link.label}</Text>
								<AccordionIcon ml={2} />
							</AccordionButton>
							<AccordionPanel>
								{link.children.map(({ href, label }, idx) => (
									<MyLink
										href={href}
										key={`nav-sublink-${idx}`}
										onClick={() => {
											onClose()
										}}
									>
										<NavItem>{label}</NavItem>
									</MyLink>
								))}
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
				) : (
					<MyLink
						href={link.href}
						key={`nav-link-${idx}`}
						onClick={() => {
							onClose()
						}}
					>
						<NavItem>{link.label}</NavItem>
					</MyLink>
				)
			)}
		</VStack>
	)
}

const NavItem = ({ icon, children, href, ...rest }) => {
	const itemProps = {
		align: 'center',
		pl: '4',
		mx: '4',
		py: '2',

		cursor: 'pointer',
	}

	return (
		<Flex {...itemProps} {...rest}>
			{children}
		</Flex>
	)
}

const MobileNav = ({ onOpen, hideLogo }) => {
	const iconProps = {
		fontSize: { base: '2xl', med: '2xl' },

		bg: 'whiteAlpha.500',
		color: 'black',
		variant: 'outline',
		rounded: 'lg',
		_light: {
			borderColor: hideLogo ? 'blackAlpha.500' : undefined,
		},
		_dark: {
			bg: 'gray.900',
			color: 'white',
		},
		_focus: { base: { bg: useColorModeValue('#F18F01', 'red.600') } },
	}
	return (
		<HStack justifyContent='space-between' flex={'1'} mb={2}>
			<IconButton {...iconProps} aria-label='open menu' onClick={onOpen} icon={<FiMenu />} />
			<HStack spacing='4'>
				<ColTog />
				{!hideLogo && <SmLogo />}
			</HStack>
		</HStack>
	)
}
