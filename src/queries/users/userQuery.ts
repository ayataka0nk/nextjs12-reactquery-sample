import { InvalidateOptions, QueryOptions, useQueryClient } from 'react-query'
import { QueryFilters } from 'react-query/types/core/utils'
import { User } from '../../types/User'

const userQueryKey = '/users'

type UserQueryKeys = [path: string, params: { userId: number }]

export const createUserQueryOptions = (
  userId: number
): QueryOptions<User, unknown, User, UserQueryKeys> => {
  return {
    queryKey: [userQueryKey, { userId }],
    queryFn: async ({ queryKey }) => {
      const [path, { userId }] = queryKey
      const result = await fetch(
        'http://localhost:3000/api' + path + '/' + userId,
        {
          headers: {
            'Cache-Control': 'no-cache',
          },
        }
      )
      return result.json()
    },
  }
}

export const useInvalidateUserQuery = () => {
  const queryClient = useQueryClient()
  return (filters?: QueryFilters, options?: InvalidateOptions) => {
    queryClient.invalidateQueries(userQueryKey, filters, options)
  }
}
