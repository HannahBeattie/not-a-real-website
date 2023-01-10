import { InfoIcon } from '@chakra-ui/icons'
import { Box, HStack, List, ListIcon, ListItem, Text } from '@chakra-ui/react'

const HKList = ({ children }) => (
	<List spacing={'4'} textAlign={'top'} color={'gray.500'} _dark={{ color: 'gray.200' }}>
		{children}
	</List>
)

const HKListItem = ({ children }) => (
	<HStack alignItems='flex-start'>
		<ListIcon mt='1' as={InfoIcon} fontSize={'md'} color={'teal'} />
		<ListItem>{children}</ListItem>
	</HStack>
)

export const serviceOne = {
	page: `Service One`,
	sub: `Subtitle goes here`,
	image1: {
		src: '/assets/1.jpg',
		alt: 'a photo',
	},

	image2: {
		src: '/assets/2.webp',
		alt: 'a photo',
	},
	image3: {
		src: '/assets/3.jpg',
		alt: 'a photo',
	},
	image4: {
		src: '/assets/4.jpg',
		alt: 'a photo',
	},

	image5: {
		src: '/assets/1.jpg',
		alt: 'a photo',
	},
	descIsShort: false,
	description: (
		<>
			<Text>
				At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
				praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
				excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
				officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
				rerum facilis est et expedita distinctio.{' '}
			</Text>
			<Text>
				At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
				praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
				excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
				officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
				rerum facilis est et expedita distinctio.{' '}
			</Text>
			<Text>
				At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
				praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
				excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
				officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
				rerum facilis est et expedita distinctio.{' '}
			</Text>
			<Text>
				At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
				praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
				excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
				officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
				rerum facilis est et expedita distinctio.{' '}
			</Text>
		</>
	),
	services: [
		{ name: 'Item', price: '$450' },
		{ name: 'Item', price: '$540' },
		{ name: 'Item', price: '$900' },
	],
	details: [{ name: 'Item' }, { name: 'Item' }],
	ofNote: 'A little note about a thing',
	houseKeepingIsShort: false,
	houseKeeping: (
		<HKList>
			<HKListItem>An Item</HKListItem>
			<HKListItem>An Item</HKListItem>
			<HKListItem>An Item</HKListItem>
			<HKListItem>An Item</HKListItem>
			<HKListItem>An Item</HKListItem>v
		</HKList>
	),
}

export const serviceTwo = {
	page: `Service two`,
	sub: `Subtitle goes here`,
	image1: {
		src: '/assets/6.jpg',
		alt: 'a photo',
	},

	image2: {
		src: '/assets/7.jpg',
		alt: 'a photo',
	},
	image3: {
		src: '/assets/8.jpg',
		alt: 'a photo',
	},
	image4: {
		src: '/assets/9.jpg',
		alt: 'a photo',
	},

	image5: {
		src: '/assets/10.jpg',
		alt: 'a photo',
	},
	descIsShort: false,
	description: (
		<>
			<Text>
				At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
				praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
				excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
				officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
				rerum facilis est et expedita distinctio.{' '}
			</Text>
			<Text>
				At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
				praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
				excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
				officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
				rerum facilis est et expedita distinctio.{' '}
			</Text>
			<Text>
				At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
				praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
				excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
				officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
				rerum facilis est et expedita distinctio.{' '}
			</Text>
			<Text>
				At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
				praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
				excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
				officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
				rerum facilis est et expedita distinctio.{' '}
			</Text>
		</>
	),
	services: [
		{ name: 'Item', price: '$450' },
		{ name: 'Item', price: '$540' },
		{ name: 'Item', price: '$900' },
	],
	details: [{ name: 'Item' }, { name: 'Item' }],
	ofNote: 'A little note about a thing',
	houseKeepingIsShort: true,
	houseKeeping: (
		<HKList>
			<HKListItem>An Item</HKListItem>
		</HKList>
	),
}
