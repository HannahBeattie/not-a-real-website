import {
	Box,
	Container,
	Divider,
	Heading,
	HStack,
	Icon,
	ListIcon,
	ListItem,
	Text,
	UnorderedList,
	VStack,
} from '@chakra-ui/react'
import { TiInfoLarge } from 'react-icons/ti'

export default function ServiceIntro() {
	return (
		<>
			<VStack
				id={'services'}
				flex={'1'}
				alignSelf={'stretch'}
				justifyContent={'center'}
				justifyItems={'center'}
				py={{ md: '50', base: '8' }}
				px={{ md: 0, base: '4' }}
				bg={{ base: 'gray.100', md: 'gray.200' }}
				_dark={{ bg: { base: 'gray.900' } }}
			>
				<Heading
					fontSize={{ md: '7xl', base: '5xl' }}
					fontFamily={'lora'}
					color={{ md: 'gray.800', base: 'gray.700' }}
					_dark={{ color: { md: 'gray.100', base: 'teal.600' } }}
				>
					Services
				</Heading>
				<Box flex={'1'} alignSelf={'stretch'} py={8}>
					<Container
						color='gray.800'
						_dark={{
							color: 'gray.300',
						}}
					>
						<VStack
							spacing={4}
							alignItems='flex-start'
							fontSize={{ md: 'lg' }}
							bg={'whiteAlpha.700'}
							_dark={{ bg: 'gray.200', color: 'gray.900' }}
							p={'10'}
							borderRadius={'2xl'}
							boxShadow={'lg'}
						>
							<Text>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
								quae ab illo inventore veritatis et quasi architecto beatae vitae
								dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
								aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
								eos qui ratione voluptatem sequi nesciunt.
							</Text>
							<Text>
								Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
								consectetur, adipisci velit, sed quia non numquam eius modi tempora
								incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
								enim ad minima veniam, quis nostrum exercitationem ullam corporis
								suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
								autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
								nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
								voluptas nulla pariatur?
							</Text>
						</VStack>
					</Container>
				</Box>
			</VStack>
			<Divider mb={{ sm: '50', base: '8' }} />
		</>
	)
}
