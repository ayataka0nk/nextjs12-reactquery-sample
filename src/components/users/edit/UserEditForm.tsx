import { useRouter } from 'next/router'
import {
  ChangeEventHandler,
  MouseEventHandler,
  Suspense,
  useState,
} from 'react'
import { useMutation, useQuery } from 'react-query'
import { createUserEditMutationOptions } from '../../../mutations/users/userEditMutation'
import {
  createUserQueryOptions,
  useInvalidateUserQuery,
} from '../../../queries/users/userQuery'

type UserFormState = {
  userId: number | undefined
  userName: string
  userNameKana: string
  industryId: number
}

type UserEditCardProps = {
  userId: number
}

export const UserEditForm = ({ userId }: UserEditCardProps) => {
  const { data } = useQuery(createUserQueryOptions(userId))
  const router = useRouter()
  const [user, setUser] = useState<UserFormState>({
    userId: data?.userId || undefined,
    userName: data?.userName || '',
    userNameKana: data?.userNameKana || '',
    industryId: data?.industryId || 1,
  })

  const mutation = useMutation(createUserEditMutationOptions(userId))
  const invalidateUserQuery = useInvalidateUserQuery()

  const handleUserNameChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setUser((prev) => ({ ...prev, userName: event.target.value }))
  }

  const handleUserNameKanaChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setUser((prev) => ({ ...prev, userNameKana: event.target.value }))
  }
  const handleSaveClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
    if (typeof user.userId === 'undefined') {
      return
    }
    mutation.mutate(
      {
        userId: user.userId,
        userName: user.userName,
        userNameKana: user.userNameKana,
        industryId: user.industryId,
      },
      {
        onSuccess: () => {
          invalidateUserQuery()
          router.push('/users')
        },
      }
    )
  }

  if (typeof user === 'undefined') {
    //エラーハンドリング実装時にthrow NotFoundError
    return <div>NoData</div>
  }

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <div>名前</div>
        <div>
          <input value={user.userName} onChange={handleUserNameChange} />
        </div>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <div>名前(カナ)</div>
        <div>
          <input
            value={user.userNameKana}
            onChange={handleUserNameKanaChange}
          />
        </div>
      </div>
      <div>
        <button onClick={handleSaveClick}>保存</button>
      </div>
    </div>
  )
}
