import apiClient from '@/shared/utils/client/axios'

import type { components } from '@/types/openapi'

export type PublicProfileResponseDto =
	components['schemas']['PublicProfileResponseDto']

export const usersApi = {
	getPublicProfile: async (
		handle: string
	): Promise<PublicProfileResponseDto> => {
		const { data } = await apiClient.get<PublicProfileResponseDto>(
			`/api/users/${handle}`
		)
		return data
	}
}
