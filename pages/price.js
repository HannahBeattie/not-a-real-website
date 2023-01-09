import {
	Box,
	color,
	Container,
	Heading,
	HStack,
	Icon,
	Spacer,
	Stack,
	Table,
	Tbody,
	Td,
	Text,
	Tr,
	VStack,
} from '@chakra-ui/react'
import Head from 'next/head'
import { AiOutlineCamera } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { MdOutlineComputer } from 'react-icons/md'
import MyLink from '~/components/base/MyLink'

export default function Price() {
	const services = [
		{
			title: 'Service',

			services: [
				{
					icon: AiOutlineCamera,
					servName: 'Service Name',
					servPrice: '$300/hr',
					description: 'Description',
				},
			],
		},
		{
			title: 'Service',

			services: [
				{
					icon: AiOutlineCamera,
					servName: 'Service Name',
					servPrice: '$300/hr',
					description: 'Description',
				},
			],
		},
		{
			title: 'Service',

			services: [
				{
					icon: AiOutlineCamera,
					servName: 'Service Name',
					servPrice: '$300/hr',
					description: 'Description',
				},
			],
		},
		{
			title: 'Service',

			services: [
				{
					icon: AiOutlineCamera,
					servName: 'Service Name',
					servPrice: '$300/hr',
					description: 'Description',
				},
			],
		},
		{
			title: 'Service',

			services: [
				{
					icon: MdOutlineComputer,
					servName: 'Service Name',
					servPrice: '$300/hr',
					description: 'Description',
				},
			],
		},
		{
			title: 'Service',

			services: [
				{
					icon: MdOutlineComputer,
					servName: 'Service Name',
					servPrice: '$300/hr',
					description: 'Description',
				},
			],
		},
		{
			title: 'Service',

			services: [
				{
					icon: MdOutlineComputer,
					servName: 'Service Name',
					servPrice: '$300/hr',
					description: 'Description',
				},
			],
		},
	]
	let rowNum = -1
	return (
		<>
			<Head>
				<title>Price List</title>
			</Head>

			<VStack alignItems='stretch' spacing={4} py={4} maxW='6xl' alignSelf='center'>
				<VStack
					width={{
						base: '100%',
						md: '50%',
					}}
					px={{ base: 4, md: 0 }}
					textAlign={{ base: 'center', md: 'start' }}
					alignItems='stretch'
					flex={'1'}
					m={0}
				>
					<Heading size={'xl'} textAlign={{ base: 'center', med: 'auto' }}>
						Example of a
					</Heading>
					<Heading
						size={'xl'}
						textAlign={{ base: 'center', med: 'auto' }}
						color='teal.400'
						_dark={{ color: 'teal.400' }}
					>
						Price List
					</Heading>
				</VStack>

				<Table fontFamily={'body'} size='sm' borderTopWidth={1}>
					<Tbody>
						{services.map((ss, idx) => {
							const heading = <Heading size={'md'}>{ss.title}</Heading>
							return ss.services
								.map(({ description, servName, servPrice, icon, plus }, ii) => {
									rowNum += 1
									const price = (
										<HStack fontSize='sm' fontWeight={300} fontStyle='italic'>
											<Text>
												<Text as='span' whiteSpace='pre'>
													{servPrice}
												</Text>
												{plus && (
													<Text as='span' whiteSpace='pre'>
														{plus}
													</Text>
												)}
											</Text>
										</HStack>
									)
									const resp = []
									if (ii === 0) {
										resp.push(
											<Tr
												key={`svc-${idx}-${ii}-h`}
												display={{ base: 'table-row', md: 'none' }}
											>
												<Td pt={{ md: 8, base: 2 }}>{heading}</Td>
												<Td />
											</Tr>
										)
									}
									resp.push(
										<Tr
											key={`svc-${idx}-${ii}`}
											bg={rowNum % 2 > 0 ? 'grayAlpha.100' : undefined}
										>
											{ii === 0 && (
												<Td
													rowSpan={ss.services.length}
													verticalAlign='top'
													display={{
														base: 'none',
														md: 'table-cell',
													}}
												>
													{heading}
												</Td>
											)}
											<Td>
												<HStack alignItems='flex-start'>
													<Icon mt='0.5' as={icon} color='green.500' />
													<VStack alignItems='flex-start' spacing={1}>
														<Text>{servName}</Text>
														<Box
															display={{
																base: 'block',
																md: 'none',
															}}
														>
															{price}
														</Box>
													</VStack>
												</HStack>
											</Td>

											<Td display={{ base: 'none', md: 'table-cell' }}>
												{price}
											</Td>

											<Td>
												<Text
													key={`svc-${idx}-${ii}-desc`}
													fontWeight={'light'}
													maxW='32em'
												>
													{description}
												</Text>
											</Td>
										</Tr>
									)
									return resp
								})
								.flat()
						})}
					</Tbody>
				</Table>

				<Container alignSelf='center'>
					<Text
						textAlign={'center'}
						fontSize={'md'}
						color={'teal'}
						bg={'grayAlpha.100'}
						px={{ base: '4', md: 0 }}
						borderRadius={'xl'}
						borderColor={'teal'}
						border={'1px'}
						py={{ base: '0', md: '6' }}
					>
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
					</Text>
				</Container>
			</VStack>
		</>
	)
}
