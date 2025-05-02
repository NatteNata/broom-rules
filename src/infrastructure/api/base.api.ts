import type { UpdateTokenResponse } from '@infrastructure/api/auth'
import ky from 'ky'

export const baseApi = ky.create({
	prefixUrl: `${process.env.NEXT_PUBLIC_API_URL}api/`,
	credentials: 'include',
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
		beforeRequest: [
			async request => {
				const accessToken = sessionStorage.getItem('access_token')
				if (accessToken) {
					request.headers.set('Authorization', `Bearer ${accessToken}`)
				}
			},
		],
		beforeRetry: [
			async () => {
				try {
					const accessToken = await ky
						.post<UpdateTokenResponse>(
							`${process.env.NEXT_PUBLIC_API_URL}api/v1/auth/update-tokens`,
						)
						.json()
					sessionStorage.setItem('access_token', JSON.stringify(accessToken))
				} catch (error) {
					console.log('Failed to update access token', error)
				}
			},
		],
	},
})