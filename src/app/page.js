'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router=useRouter()
  useEffect(()=>{
    router.push('/home')
  },[router])
  return (
    <main className=" ">

    </main>
  )
}
