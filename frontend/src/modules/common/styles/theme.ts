import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'

const fonts = {
	heading: 'Montserrat, sans-serif',
	body: 'Montserrat, sans-serif',
}

export const theme = extendTheme({
	colors,
	fonts,
})
