import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import SignOutButton from '../components/SignOutButton'
import withAuth from '../components/withAuth'

const Home = () => {
  const { user } = useContext(AuthContext)

  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center gap-3">
      <h1>Welcome, {user?.displayName}</h1>
      <SignOutButton />
    </main>
  )
}

export default withAuth(Home)
