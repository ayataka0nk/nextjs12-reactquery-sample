import { QueryOptions, useQuery } from 'react-query'
import { User } from '../types/User'

export const usersQueryOptions: QueryOptions<User[]> = {
  queryKey: ['/users'],
  queryFn: async () => {
    const result = await fetch('http://localhost:3000/api/users')
    return result.json()
  },
}
