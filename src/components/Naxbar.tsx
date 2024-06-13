import React from 'react'

export default function Naxbar() {
  return (
    <nav className="flex justify-between items-center bg-black text-white px-8 py-4">
      <Link href="/">Tech Blog</Link>
      <Link href="/project">Project</Link>
      <Link href="/project/demo">HCJ Demo</Link>
      <Link href="/course">Course</Link>
    </nav>
  )
}
