export default function getGridProps(idx) {
	if (idx % 6 > 2) {
		// items 4-thru-6 (idx 3-5)
		const span = {
			md:
				idx % 3 === 2
					? 2 // last one is big
					: 1, // first and second are small
		}
		const order = {
			md:
				idx % 6 === 3
					? idx // order stays same for item 4 (idx 3)
					: idx % 2 // switch last and second-to-last
					? idx - 1
					: idx + 1,
		}
		// console.log(idx, `order=${order.md} span=${span.md}`)
		return {
			colSpan: span,
			rowSpan: span,
			order,
		}
	}
	// items 1-thru-3 (idx 0-2)
	const span = {
		md:
			idx % 3 > 0
				? 1 // second and third are small
				: 2, // first is big
	}
	const order = { md: idx }
	// console.log(idx, `order=${order.md} span=${span.md}`)
	return {
		colSpan: span,
		rowSpan: span,
		order,
	}
}
