import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default function AuthLayout({children}) {
  return (
    <div>
      <Header />
     <div className='min-h-screen'>{children}</div>
      <Footer />
      </div>
  )
}
