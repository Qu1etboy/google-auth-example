import { useRouter } from 'next/router'
import { useEffect, useContext, FC } from 'react'
import { AuthContext } from '../contexts/AuthContext'

// higher-order-component (HOC)
const withAuth = (WrappedComponent: FC<any>) => {
  const EnhancedComponent = (props: any) => {
    const { user } = useContext(AuthContext)
    const router = useRouter()

    useEffect(() => {
      // Check if the user is authenticated
      const checkAuth = async () => {
        if (!user) {
          // If the user is not authenticated, redirect them to the login page
          router.push('/login')
        }
      }
      checkAuth()
    }, [])

    return <WrappedComponent {...props} />
  }

  return EnhancedComponent
}

export default withAuth
