import {
	Box,
	HStack,
	List,
	ListItem,
	Spacer,
	Stack,
	StackDivider,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'

export default function PriceList({ ofNote, services, extras }) {
	const sections = []
	if (services) {
		sections.push({
			title: 'Price List',
			items: services,
		})
	}
	if (extras) {
		sections.push({
			title: 'Extras',
			items: extras,
		})
	}
	return (
		<Stack
			flex={'1'}
			py={{ base: 10, md: '4' }}
			alignContent={'stretch'}
			spacing={{ base: 4, sm: 8 }}
			direction={'column'}
			divider={<StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />}
		>
			{sections.map(({ title, items }, idx) => (
				<Box key={`pl-${idx}`}>
					<Text
						fontSize={{ base: '16px', lg: '18px' }}
						color='yellow.500'
						_dark={{ color: 'gray.100' }}
						textTransform={'uppercase'}
						mb={'4'}
					>
						{title}
					</Text>
					{items.map(({ name, price }, ii) => (
						<List key={`service-${idx}-${ii}`} flex={1} display={'flex'}>
							<HStack
								as={ListItem}
								flex={1}
								bg={ii % 2 ? 'grayAlpha.200' : undefined}
								py='1'
								px='2'
							>
								<Text as={'span'} fontSize='md'>
									{name}
								</Text>
								<Spacer />
								<Text fontSize='md'>{price}</Text>
							</HStack>
						</List>
					))}
				</Box>
			))}
			{ofNote && (
				<>
					<Text
						fontSize={{ base: '16px', lg: '18px' }}
						color='yellow.500'
						_dark={{ color: 'gray.100' }}
						fontWeight={'500'}
						textTransform={'uppercase'}
						mb={'4'}
					>
						Note
					</Text>
					<Box mb={'4'} as={'span'} fontWeight={'light'} fontSize={'sm'}>
						{ofNote}
					</Box>
				</>
			)}
		</Stack>
	)
}
