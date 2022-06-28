import { Suspense } from 'react'
import { UserEditForm } from './UserEditForm'

type UserEditPanelProps = {
  userId: number
}
export const UserEditPanel = ({ userId }: UserEditPanelProps) => {
  return (
    <div>
      <h1>ユーザ編集</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <UserEditForm userId={userId} />
      </Suspense>
    </div>
  )
}
