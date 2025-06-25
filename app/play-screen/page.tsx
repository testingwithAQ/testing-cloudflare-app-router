import React from 'react'
import Link from 'next/link'
export const runtime = "edge";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Play Screen</h1>
        <nav className="mb-8">
          <ul className="flex gap-4">
            <li><Link href="/" className="text-blue-500 hover:text-blue-700">Home</Link></li>
            <li><Link href="/about" className="text-blue-500 hover:text-blue-700">About</Link></li>
            <li><Link href="/contact-us" className="text-blue-500 hover:text-blue-700">Contact</Link></li>
          </ul>
        </nav>
        <p className="text-gray-700">Main Play Screen Content</p>
      </div>
    </div>
  )
}

export default page