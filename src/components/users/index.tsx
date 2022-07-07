import Link from 'next/link'
import { useQueries, useQuery } from 'react-query'
import { createUsersQueryOptions } from '../../queries/users/usersQuery'

export const Users = () => {
  const [users] = useQueries([createUsersQueryOptions()])
  return (
    <div>
      <div>UsersCard!</div>
      <div>
        {users?.data?.map((user) => {
          return (
            <div key={user.userId}>
              <Link href={'/users/edit/' + user.userId}>{user.userName}</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
