import { Suspense, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { Users } from '../components/users'
import { usersQueryOptions } from '../queryOptions/usersQueryOptions'

const UsersPage = () => {
  const queryClient = useQueryClient()
  queryClient.prefetchQuery(usersQueryOptions)
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
