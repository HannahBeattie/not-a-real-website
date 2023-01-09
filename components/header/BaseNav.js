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
	Icon,
	IconButton,
	useColorModeValue,
	useDisclosure,
	VStack,
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import MyLink from '../base/MyLink'
import SmLogo from '../logo/SmLogo'

import ColTog from './ToggleLight'
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
	return (
		<VStack
			bg={useColorModeValue('white', 'gray.900')}
			borderRight='1px'
			borderRightColor={useColorModeValue('gray.200', 'gray.700')}
			w='full'
			h='full'
			role='group'
			spacing='0'
			alignItems='stretch'
			maxH='100vh'
			overflowY='auto'
		>
			<HStack
				h='20'
				alignItems='flex-start'
				ml='8'
				mt='4'
				mr='4'
				justifyContent='space-between'
			>
				<SmLogo />
				<CloseButton onClick={onClose} />
			</HStack>
			{LinkItems.map((link, idx) =>
				link.children ? (
					<Accordion allowToggle variant='unstyled' key={`nav-link-${idx}`}>
						<AccordionItem>
							<AccordionButton py='4' px='8'>
								<Box textAlign='left'>{link.label}</Box>
								<AccordionIcon ml='3' />
							</AccordionButton>
							<AccordionPanel bg='gray.200' _dark={{ bg: 'gray.700' }}>
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
	return (
		<Flex
			outline={null}
			border={null}
			align='center'
			p='4'
			mx='4'
			borderRadius='lg'
			cursor='pointer'
			{...rest}
		>
			{icon && (
				<Icon
					mr='4'
					fontSize='16'
					_groupHover={{
						color: 'white',
					}}
					as={icon}
				/>
			)}
			{children}
		</Flex>
	)
}

const MobileNav = ({ onOpen, hideLogo }) => {
	return (
		<HStack justifyContent='space-between'>
			<IconButton
				fontSize={{ base: '2xl', med: '2xl' }}
				onClick={onOpen}
				bg={'whiteAlpha.500'}
				color='black'
				variant={'outline'}
				rounded={'lg'}
				_light={{
					borderColor: hideLogo ? 'blackAlpha.500' : undefined,
				}}
				_dark={{
					bg: 'gray.900',
					color: 'white',
				}}
				_focus={{ base: { bg: useColorModeValue('#F18F01', 'red.600') } }}
				aria-label='open menu'
				icon={<FiMenu />}
			/>
			<HStack spacing='6'>
				<ColTog />
				{!hideLogo && <SmLogo />}
			</HStack>
		</HStack>
	)
}
