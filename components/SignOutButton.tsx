import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { auth } from '../lib/firebase'
import { useRouter } from 'next/router'

const SignOutButton = () => {
  const { setUser } = useContext(AuthContext)
  const router = useRouter()

  const handleSignOut = async () => {
    await auth.signOut()
    setUser(null)

    // redirect user to login page
    router.push('/login')
  }

  return (
    <button
      type="button"
      className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
      onClick={handleSignOut}
    >
      Sign out
    </button>
  )
}

export default SignOutButton
