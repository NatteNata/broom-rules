import ky from 'ky'

export const baseApi = ky.create({
	prefixUrl: `${process.env.NEXT_PUBLIC_API_URL}api/`,
	hooks: {
		beforeError: [
			async error => {
				const { response } = error

				try {
					const parsedClone = await response.clone().json()
					if (parsedClone?.messages) {
						error.message = parsedClone?.messages?.[0].message
					}
				} catch {
					error.message = `${response.status} (${response.statusText})`
				}

				return error
			},
		],
	},
})