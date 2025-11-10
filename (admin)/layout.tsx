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
      <main className="min-h-screen bg-gray-50">
        {children}
      </main>
    </>
  )
}

