import Link from 'next/link'
import React from 'react'

export default function AdminLayout({children}) {
  return (
    <div className='lg:flex hidden'>
      <aside className="bg-gray-800 text-white w-64 py-8 flex-shrink-0">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        </div>
        {/* Sidebar navigation links */}
        <nav className="text-left">
          <Link href="/admin" className="block py-2 px-4 hover:bg-gray-700">Dashboard</Link>
          <Link href="/admin/user-management" className="block py-2 px-4 hover:bg-gray-700">Users</Link>
          <Link href="/admin/ads-management" className="block py-2 px-4 hover:bg-gray-700">Ads</Link>
          <Link href="/admin/agent-management" className="block py-2 px-4 hover:bg-gray-700">Agents</Link>
        </nav>
      </aside>
      <div className='w-full'>
      {children}
      </div>
      </div>
  )
}
