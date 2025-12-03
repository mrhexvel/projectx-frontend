import { useQuery } from '@tanstack/react-query'

import {
	type PublicProfileResponseDto,
	usersApi
} from '@/features/users/api/users.api'

export const usePublicProfile = (handle: string) => {
	return useQuery<PublicProfileResponseDto>({
		queryKey: ['public-profile', handle],
		queryFn: () => usersApi.getPublicProfile(handle),
		enabled: !!handle,
		staleTime: 1000 * 60 * 5
	})
}
