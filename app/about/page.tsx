import React from 'react'
import Link from 'next/link'
export const runtime = "edge";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <nav className="mb-8">
          <ul className="flex gap-4">
            <li><Link href="/" className="text-blue-500 hover:text-blue-700">Home</Link></li>
            <li><Link href="/contact-us" className="text-blue-500 hover:text-blue-700">Contact</Link></li>
            <li><Link href="/play-screen" className="text-blue-500 hover:text-blue-700">Play Screen</Link></li>
          </ul>
        </nav>
        <p className="text-gray-700">About Us Page Content</p>
      </div>
    </div>
  )
}

export default page