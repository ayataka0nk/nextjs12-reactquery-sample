import { useQuery } from 'react-query'
import { usersQueryOptions } from '../queryOptions/users'

const UsersPage = () => {
  const users = useQuery(usersQueryOptions)
  return (
    <div>
      {users?.data?.map((user) => {
        return <div key={user.userId}>{user.userName}</div>
      })}
    </div>
  )
}

export default UsersPage
