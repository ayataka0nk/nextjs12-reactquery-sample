import { useQuery } from 'react-query'
import { usersQueryOptions } from '../../queryOptions/usersQueryOptions'

export const Users = () => {
  const users = useQuery(usersQueryOptions)
  return (
    <div>
      <div>UsersCard!</div>
      <div>
        {users?.data?.map((user) => {
          return <div key={user.userId}>{user.userName}</div>
        })}
      </div>
    </div>
  )
}
