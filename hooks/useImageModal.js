import {
	Box,
	HStack,
	IconButton,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Spacer,
	Text,
	useDisclosure,
} from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md'
import { useMediaQuery } from './useMediaQuery'

export function useImageModal({ items, alt }) {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [selected, setSelected] = useState(0)
	return {
		openImageNum: (idx) => {
			setSelected(idx)
			onOpen()
		},
		imageModalProps: {
			items,
			alt,
			isOpen,
			onClose,
			selected,
			setSelected,
		},
	}
}

export function ImageModal(props) {
	const { items, alt, isOpen, onClose, selected, setSelected } = props
	const selectedItem = items[selected]
	const isPageWide = useMediaQuery('(min-width: 768px)')
	const [modalSize, setModalSize] = useState('full')
	const clickedIcon = modalSize === 'lg' ? <MdFullscreen /> : <MdFullscreenExit />

	const toggleModalSize = useCallback(
		() => setModalSize(modalSize === 'lg' ? 'full' : 'lg'),
		[modalSize]
	)

	const setNext = useCallback(() => {
		const sel = (selected + 1) % items.length
		setSelected(sel)
	}, [selected, items.length, setSelected])

	const setPrev = useCallback(() => {
		let sel = selected - 1
		if (sel < 0) {
			sel = items.length - 1
		}
		setSelected(sel)
	}, [selected, setSelected, items.length])

	useEffect(() => {
		const keyPressed = ({ key }) =>
			key === 'ArrowLeft' ? setPrev() : key === 'ArrowRight' && setNext()
		window.addEventListener('keydown', keyPressed)
		return () => window.removeEventListener('keydown', keyPressed)
	}, [setPrev, setNext])

	if (!isPageWide) {
		return null
	}

	return (
		<Modal onClose={onClose} isOpen={isOpen && !!selectedItem} isCentered size={modalSize}>
			<ModalOverlay bg='blackAlpha.800' backdropFilter='blur(5px) grayscale(100%)' />

			<ModalContent
				bg={'black'}
				color={'white'}
				display='flex'
				alignItems='stretch'
				flexDirection='column'
				maxH='100vh'
			>
				<ModalHeader>
					<IconButton
						aria-label='next button'
						fontSize={'2xl'}
						bg={''}
						color={modalSize === 'lg' ? 'whiteAlpha.700' : 'whiteAlpha.600'}
						_hover={{ bg: '' }}
						_active={{ bg: '' }}
						onClick={toggleModalSize}
						mt={'-1rem'}
						ml={'-1rem'}
						icon={clickedIcon}
					/>
				</ModalHeader>

				<ModalCloseButton />
				<ModalBody
					display='flex'
					flex='1'
					flexDir='row'
					alignItems='center'
					justifyContent='center'
					position='static'
					p={0}
				>
					<Image
						w='100%'
						h='100%'
						maxH='calc(100vh - 11rem)'
						alt={selectedItem.title ?? alt}
						src={selectedItem.url ?? selectedItem}
						fit='contain'
					/>
				</ModalBody>
				<ModalFooter>
					<HStack justifyContent={'stretch'} flex={'1'}>
						<IconButton
							_hover={{ bg: '' }}
							_active={{ bg: '' }}
							aria-label='previous button'
							fontSize={'l'}
							size='lg'
							bg={''}
							color={'white'}
							icon={<FaArrowLeft />}
							onClick={setPrev}
						/>

						<Spacer />
						<Text>{selectedItem.title ?? ''}</Text>
						<Spacer />

						<IconButton
							_hover={{ bg: '' }}
							_active={{ bg: '' }}
							aria-label='next button'
							fontSize={'l'}
							bg={''}
							icon={<FaArrowRight />}
							onClick={setNext}
						/>
					</HStack>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}
