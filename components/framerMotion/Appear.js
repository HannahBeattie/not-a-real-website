import { motion } from 'framer-motion'

export default function Appear({ children, ...rest }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: [0, 0.9, 1] }}
			duration=' 0.4'
			{...rest}
		>
			{children}
		</motion.div>
	)
}
