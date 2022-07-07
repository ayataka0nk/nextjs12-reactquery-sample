import { UseQueryOptions } from 'react-query'
import { User } from '../../types/User'

export const createUsersQueryOptions = (): UseQueryOptions<User[]> => {
  return {
    queryKey: ['/users'],
    queryFn: async () => {
      const result = await fetch('http://localhost:3000/api/users', {
        headers: {
          'Cache-Control': 'no-cache',
        },
      })
      return result.json()
    },
  }
}
