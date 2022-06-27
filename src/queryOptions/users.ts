import { QueryOptions, useQuery } from 'react-query'
import { User } from '../types/User'

export const usersQueryOptions: QueryOptions<User[]> = {
  queryKey: ['/users'],
  queryFn: async () => {
    const result = await fetch('/api/users')
    return result.json()
  },
}
