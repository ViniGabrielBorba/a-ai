'use client'

import AdminNavbar from '@/components/AdminNavbar'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen bg-gray-50">
        {children}
      </div>
    </>
  )
}

