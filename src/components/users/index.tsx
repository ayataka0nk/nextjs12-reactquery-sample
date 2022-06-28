import Link from 'next/link'
import { useQuery } from 'react-query'
import { usersQuery } from '../../queries/users/usersQuery'

export const Users = () => {
  const users = useQuery(usersQuery)
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
