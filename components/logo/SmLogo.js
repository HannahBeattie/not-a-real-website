import { Heading, Image, useColorModeValue } from '@chakra-ui/react'

import React, { useState } from 'react'
import MyLink from '../base/MyLink'
import { useMediaQuery } from '../../hooks/useMediaQuery'

export default function SmLogo() {
	return (
		<>
			<MyLink href={'/'}>
				<Heading fontFamily={'Lobster Two'}>NO</Heading>
			</MyLink>
		</>
	)
}
