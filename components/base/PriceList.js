import {
	Box,
	HStack,
	List,
	ListItem,
	Spacer,
	StackDivider,
	Text,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react'

export default function PriceList({ ofNote, services, details }) {
	const sections = []
	if (services) {
		sections.push({
			title: 'Price List',
			items: services,
		})
	}
	if (details) {
		sections.push({
			title: 'Details',
			items: details,
		})
	}
	const vStackProps = {
		alignItems: 'stretch',
		flex: '1',
		divider: <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />,
	}
	const textProps = {
		fontSize: { base: '16px', lg: '18px' },
		color: 'yellow.500',
		_dark: { color: 'gray.100' },
		textTransform: 'uppercase',
		flex: 1,
		p: '1',
	}
	const hstackProps = {
		flex: 1,
		p: '1',
		alignItems: 'stretch',
	}

	return (
		<VStack {...vStackProps}>
			{sections.map(({ title, items }, idx) => (
				<Box key={`pl-${idx}`}>
					<Text {...textProps}>{title}</Text>
					{items.map(({ name, price }, ii) => (
						<List key={`service-${idx}-${ii}`}>
							<HStack
								{...hstackProps}
								bg={ii % 2 ? 'grayAlpha.200' : undefined}
								as={ListItem}
							>
								<Text as={'span'}>{name}</Text>
								<Spacer />
								<Text>{price}</Text>
							</HStack>
						</List>
					))}
				</Box>
			))}
			{ofNote && (
				<>
					<Text {...textProps}>Note</Text>
					<Text {...hstackProps} as={'span'}>
						{ofNote}
					</Text>
				</>
			)}
		</VStack>
	)
}
