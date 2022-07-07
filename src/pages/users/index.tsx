import { Suspense, useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'
import { Users } from '../../components/users'
import { createUsersQueryOptions } from '../../queries/users/usersQuery'

const UsersPage = () => {
  const queryClient = useQueryClient()

  useEffect(() => {
    queryClient.prefetchQuery(createUsersQueryOptions())
  }, [queryClient])

  const [display, setDisplay] = useState(false)
  const onClick = () => {
    setDisplay((prev) => !prev)
  }
  return (
    <div>
      <div>Users!</div>
      <button onClick={onClick}>toggle!</button>
      <Suspense fallback={<div>Loading...</div>}>
        {display && <Users />}
      </Suspense>
    </div>
  )
}

export default UsersPage
