import { doSocialLogin } from '@/app/actions'
import React from 'react'

const SocialLogin = () => {
  return (
    <form action={doSocialLogin}>
        <button className='bg-blue-600 text-white p-1 rounded m-1 text-lg'
         type="submit" name='action' value="google">
            Sign in with Google
        </button>
        
        <button className='bg-black text-white p-1 rounded m-1 text-lg'
         type="submit" name='action' value="github">
            Sign in with Github
        </button>
    </form>
  )
}

export default SocialLogin