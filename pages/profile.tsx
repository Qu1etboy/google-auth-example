import { useContext } from 'react'
import withAuth from '../components/withAuth'
import { AuthContext } from '../contexts/AuthContext'
import Image from 'next/image'

const Profile = () => {
  const { user } = useContext(AuthContext)

  return (
    <main className="min-h-screen w-full flex flex-col gap-3">
      <section className="container mx-auto max-w-2xl p-3">
        <Image
          src={user?.photoURL}
          alt="profile"
          width={100}
          height={100}
          className="rounded-full"
        />
        <h1 className="text-3xl">{user?.displayName}</h1>
        <h2>email : {user?.email}</h2>
        <p>uid : {user?.uid}</p>
      </section>
    </main>
  )
}

export default withAuth(Profile)
