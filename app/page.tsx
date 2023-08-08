'use client'

import { useSession } from 'next-auth/react'
import {useEffect} from 'react'
// import { redirect } from 'next/dist/server/api-utils'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import SignInButton from '../components/SignInButton'
import { getAuthSession } from '../lib/nextauth'


export default function Home() {

  const currentSesison = useSession()
  console.log(currentSesison)


  if(currentSesison?.data) {
    redirect('/dashboard')
  }
  // console.log(cure)
  return (
    <div className="p-72">
      <h1>Hope Page</h1>

      <SignInButton text="Sign In Google" />



    </div>
  )
}
