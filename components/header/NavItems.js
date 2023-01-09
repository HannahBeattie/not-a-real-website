export const NAV_ITEMS = [
	{ label: 'about', href: '/about' },
	{
		label: 'services',
		children: [
			{ label: 'all services', href: '/services' },
			{ label: 'service One', href: '/services/servOne' },
			{ label: 'service Two', href: '/services/servTwo' },
		],
	},
	{ label: 'gallery', href: '/gallery' },
	{ label: 'price list', href: '/price' },
]
