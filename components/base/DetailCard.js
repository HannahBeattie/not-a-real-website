import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import MyLink from './MyLink'

export default function DetailCard({ title, footnote, alt, src, description, href, extraNote }) {
	return (
		<MyLink href={href}>
			<Box
				maxW={{ md: '400px' }}
				w={'full'}
				h='full'
				bg={{ md: 'gray.200', base: 'blackAlpha.900' }}
				boxShadow={'xl'}
				rounded={{ md: 'xl' }}
				px={{ md: 6 }}
				py={{ md: 6 }}
				overflow={'hidden'}
			>
				{src && (
					<Box pos={'relative'} mt={{ md: 0, base: 4 }}>
						<Image src={src} alt={alt} fit={'cover'} />
					</Box>
				)}
				<Stack>
					<Heading
						px={{ md: 0, base: '4' }}
						fontWeight={'300'}
						mt={4}
						color={{ md: 'gray.900', base: 'gray.300' }}
						_dark={{ color: 'white' }}
						fontSize={'2xl'}
						fontFamily={'lora'}
					>
						{title}
					</Heading>
					{description && (
						<Text fontFamily={'Poppins'} color={{ md: 'gray.500', base: 'gray.400' }}>
							{desciption}
						</Text>
					)}
				</Stack>
				{footnote && (
					<Stack mt={3} direction={'row'} spacing={4} align={'center'}>
						<Stack direction={'column'} spacing={0} fontSize={'sm'}>
							<Text
								px={{ md: 0, base: '4' }}
								color={{ md: 'gray.400', base: 'gray.400' }}
							>
								{footnote}
							</Text>
							<Text
								pb={{ md: 0, base: '6' }}
								px={{ md: 0, base: '4' }}
								color={{ md: 'gray.400', base: 'gray.400' }}
							>
								{extraNote}
							</Text>
						</Stack>
					</Stack>
				)}
			</Box>
		</MyLink>
	)
}
