import { useRouter } from 'next/router'

export function usePrevNext(routes) {
	const router = useRouter()
	const { pathname, route, asPath } = router
	// console.log(`router: pathname=${pathname} route=${route} asPath=${asPath}`)
	if (typeof window !== 'undefined') {
		window.router = router
	}
	const current = router.asPath
	let idx = routes.indexOf(current)
	if (idx < 0) {
		console.warn(`[usePrevNext] Current route "${current}" is not in routes list`, routes)
		idx = 0
	}
	const prevIdx = idx - 1 < 0 ? routes.length - 1 : idx - 1
	const nextIdx = idx + 1 >= routes.length ? 0 : idx + 1
	const prev = routes[prevIdx]
	const next = routes[nextIdx]
	return { prev, next, current }
}
