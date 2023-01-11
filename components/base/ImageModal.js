import {
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
import FadeIn from '~/components/framerMotion/FadeIn'

export default function ImageViewer({ items }) {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [selected, setSelected] = useState(0)
	const [modalSize, setModalSize] = useState('full')
	const selectedItem = items[selected]
	const clickedIcon = modalSize === 'lg' ? <MdFullscreen /> : <MdFullscreenExit />
	const toggleModalSize = useCallback(
		() => setModalSize(modalSize === 'lg' ? 'full' : 'lg'),
		[modalSize]
	)
	const setNext = useCallback(() => {
		const sel = (selected + 1) % items.length
		setSelected(sel)
	}, [selected, items.length])
	const setPrev = useCallback(() => {
		let sel = selected - 1
		if (sel < 0) {
			sel = items.length - 1
		}
		setSelected(sel)
	}, [selected, items.length])
	useEffect(() => {
		const keyPressed = ({ key }) =>
			key === 'ArrowLeft' ? setPrev() : key === 'ArrowRight' && setNext()
		window.addEventListener('keydown', keyPressed)
		return () => window.removeEventListener('keydown', keyPressed)
	}, [setPrev, setNext])

	const imgProps = {
		w: '100%',
		h: '100%',
		flex: '1',

		borderRadius: 'md',
		cursor: { md: 'pointer' },
		boxShadow: 'dark',
	}
	const overlayProps = {
		bg: 'blackAlpha.800',
		backdropFilter: 'blur(5px) grayscale(100%)',
	}
	const modalProps = {
		bg: 'black',
		color: 'white',
		display: 'flex',
		alignItems: 'stretch',
		flexDirection: 'column',
		maxH: '100vh',
	}
	const modalBodyProps = {
		display: 'flex',
		flex: 1,
		flexDir: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'static',
		p: 0,
	}
	const reSizeButton = {
		fontSize: '2xl',
		bg: 'null',
		color: modalSize === 'lg' ? 'whiteAlpha.700' : 'whiteAlpha.600',
		_hover: { bg: 'null' },
		_active: { bg: 'null' },
		mt: '-1rem',
		ml: '-1rem',
		icon: clickedIcon,
	}
	const modelImgProps = {
		fit: 'contain',
		w: '100%',
		h: '100%',
		maxH: 'calc(100vh - 11rem)',
	}

	const prevNextProps = {
		_hover: { bg: 'null' },
		_active: { bg: 'null' },
		fontSize: 'l',
		size: 'lg',
		bg: 'null',
		color: 'white',
	}

	return (
		<>
			{items.map(({ title, src, ...rest }, idx) => (
				<Image
					{...imgProps}
					key={`photo-${idx}`}
					alt={title}
					src={src[idx]}
					fit='cover'
					onClick={() => {
						setSelected(idx)
						onOpen()
					}}
				/>
			))}

			<Modal onClose={onClose} isOpen={isOpen && !!selectedItem} isCentered size={modalSize}>
				<ModalOverlay {...overlayProps} />
				<ModalContent {...modalProps}>
					<ModalHeader>
						<IconButton {...reSizeButton} onClick={toggleModalSize} />
					</ModalHeader>

					<ModalCloseButton />
					<ModalBody {...modalBodyProps}>
						<Image alt={selectedItem.title} src={selectedItem.url} {...modelImgProps} />
					</ModalBody>
					<ModalFooter>
						<HStack justifyContent={'stretch'} flex={'1'}>
							<IconButton
								{...prevNextProps}
								aria-label='previous button'
								icon={<FaArrowLeft />}
								onClick={setPrev}
							/>

							<Spacer />
							<Text>{selectedItem.title}</Text>
							<Spacer />

							<IconButton
								{...prevNextProps}
								aria-label='next button'
								icon={<FaArrowRight />}
								onClick={setNext}
							/>
						</HStack>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}
