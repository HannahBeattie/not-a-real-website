import { accordionAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// const config = {
// 	initialColorMode: 'light',
// 	useSystemColorMode: false,
// }

const { definePartsStyle: defineAccordionPartsStyle } = createMultiStyleConfigHelpers(
	accordionAnatomy.keys
)

export const theme = extendTheme({
	fonts: {
		body: 'poppins, system-ui, sans-serif',
		heading: 'poppins, system-ui, sans-serif',
		headingDark: 'Lora, georgia, serif',
		cursive: '"Reenie Beanie", cursive, system-ui, sans-serif',
	},
	colors: {
		grayAlpha: {
			100: '#8881',
			200: '#8882',
			300: '#8884',
			400: '#8886',
			500: '#8888',
			600: '#8889',
			700: '#888b',
			800: '#888d',
			900: '#888f',
		},
	},
	components: {
		Heading: {
			baseStyle: (props) => ({
				fontFamily: 'heading',
				fontWeight: '300',
				_dark: {
					fontFamily: 'headingDark',
					fontWeight: '100',
					color: 'gray.300',
				},
			}),
			variants: {
				invert: {
					color: 'gray.300',
					_dark: {
						color: 'black',
					},
				},
			},
		},
		Accordion: {
			variants: {
				unstyled: defineAccordionPartsStyle({
					container: {
						border: '0px',
					},
				}),
			},
		},
	},
	styles: {
		global: {
			// styles for the `body`
			body: {
				bg: 'white',
				_dark: {
					bg: '#101218',
				},
				// Make mobile tap highlight light-gray instead of blue-ish
				WebkitTapHighlightColor: 'rgba(128,128,128,0.2)', // '-webkit-tap-highlight-color'
			},
			// styles for the `a`
			a: {
				color: 'teal.500',
				_hover: {
					textDecoration: 'underline',
				},
			},
		},
	},
})
