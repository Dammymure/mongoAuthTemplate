'use client'
import React from 'react'
import SocialLogin from '@/components/SocialLogin'
import { doCredentialLogin } from '@/app/actions'
import { useRouter } from 'next/navigation'

const LoginForm = () => {

    const router =  useRouter()
    async function handleFormSubmit(event){
        event.preventDefault();

        try{
            const formData = new FormData(event.currentTarget)

            const response = await doCredentialLogin(formData)

            if(!!response.error){

            }else{
                router.push('/home')
            }

        }catch(e){
            console.error(e)
        }
    }

  return (
    <>
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="email">Email Address</label>
                <input className='border mx-2 border-gray-500 rounded' type="email" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input className='border mx-2 border-gray-500 rounded' type="password" name="password" id="password" />
            </div>
            <button type="submit" className='bg-blue-400 my-2 text-white p-1 rounded flex justify-center w-36'>
                Credential Login
            </button>
        </form>

        <SocialLogin />
    
    </>
  )
}

export default LoginForm