import { MutationOptions } from 'react-query'
import { User } from '../../types/User'

export const createUserEditMutationOptions = (
  userId: number
): MutationOptions<unknown, unknown, User> => {
  return {
    mutationFn: async (user) => {
      const result = await fetch('/api/users/' + userId, {
        method: 'POST',
        body: JSON.stringify(user),
      })
      return result
    },
  }
}
