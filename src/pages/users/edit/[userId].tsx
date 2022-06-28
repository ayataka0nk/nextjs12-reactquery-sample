import { useRouter } from 'next/router'
import { UserEditPanel } from '../../../components/users/edit/UserEditPanel'

const UserEditPage = () => {
  const router = useRouter()
  if (!router.isReady) {
    return <div>router not ready</div>
  }
  if (typeof router.query.userId !== 'string') {
    throw new Error()
  }
  const userId = Number(router.query.userId)
  return <UserEditPanel userId={userId} />
}

export default UserEditPage
