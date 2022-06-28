import { Suspense, useState } from 'react'
import { useQueryClient } from 'react-query'
import { Users } from '../../components/users'
import { usersQuery } from '../../queries/users/usersQuery'

const UsersPage = () => {
  const queryClient = useQueryClient()
  queryClient.prefetchQuery(usersQuery)
  const [display, setDisplay] = useState(true)
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
