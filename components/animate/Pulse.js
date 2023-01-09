import { motion } from 'framer-motion'

export default function Pulse({ children, ...rest }) {
	return (
		<motion.div
			animate={{ scale: [1, 0.9, 1] }}
			transition={{
				duration: 4,
				ease: 'easeInOut',
				times: [0, 0.2, 0.5, 0.8, 1],
				repeat: Infinity,
			}}
			{...rest}
		>
			{children}
		</motion.div>
	)
}
