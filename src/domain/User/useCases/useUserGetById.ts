import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {userService} from '../userService';

export function useUserGetById(id: number) {
  const {data, isLoading, isError} = useQuery({
    queryKey: [QueryKeys.UserGetById, id],
    queryFn: () => userService.getById(id),
    staleTime: 1000 * 10, // 10 seconds to query turn obsolete
    // cacheTime: 5000, // 5 seconds to clean cache
  });

  return {
    user: data,
    isError,
    isLoading,
  };
}
