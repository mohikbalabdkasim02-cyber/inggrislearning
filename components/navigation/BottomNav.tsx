"use client"

import Link from "next/link"

export default function BottomNav(){
  const items = [
    ["Home","/"],
    ["Learn","/learn"],
    ["Speak","/demo"],
    ["Progress","/progress"],
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-white p-3 flex justify-around md:hidden">
      {items.map(([label, href]) => (
        <Link key={href} href={href} className="text-sm font-medium">
          {label}
        </Link>
      ))}
    </nav>
  )
}
