import { createContext, useContext } from 'react'
import { getAlbums } from './api'

export const MyContext = createContext({ albums: [] })

export const MyProvider = MyContext.Provider

export function useMyContext() {
	return useContext(MyContext)
}

export function useAlbums() {
	const { albums } = useMyContext()
	return albums
}

export async function getStaticAlbumProps() {
	const albums = await getAlbums()
	console.log('<MyContext> (getStaticAlbumProps) Got albums:', albums)
	return {
		props: { albums },
	}
}
