import { motion } from 'framer-motion'

export default function FadeIn({ children, transition }) {
	return (
		<motion.div
			initial={{ opacity: '0' }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75, ease: 'easeOut', ...transition }}
		>
			{children}
		</motion.div>
	)
}
