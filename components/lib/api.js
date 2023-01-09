export async function fetchGraphQL(query, preview = false) {
	// console.log(
	//  '[fetchGraphQL] Using token:',
	//  preview ? processCONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN
	// )
	return fetch(
		`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${
					preview
						? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
						: process.env.CONTENTFUL_ACCESS_TOKEN
				}`,
			},
			body: JSON.stringify({ query }),
		}
	).then((response) => response.json())
}

export async function getAlbums() {
	const album = await fetchGraphQL(
		`#graphql
		query fakeAlbumCollectionQuery {
			fakeAlbumCollection {
				items{
					title 
					blurb
					slug
					imageCollection{
						items{
							url title width height description
						}
					}
				 }
			}
		}`
	)
	console.log('getting fake albums : ', { album })
	console.log('Got albums:', album)
	return album?.data?.fakeAlbumCollection?.items ?? []
}
