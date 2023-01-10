import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function MyLink({ href, children, ...props }) {
	return (
		<NextLink
			href={href}
			passHref
			_hover={{
				textDecoration: 'none',
			}}
		>
			<Link
				{...props}
				_hover={{
					textDecoration: 'none',
				}}
			>
				{children}
			</Link>
		</NextLink>
	)
}
