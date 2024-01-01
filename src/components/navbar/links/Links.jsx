import Link from 'next/link'
import React from 'react'

const Links = () => {

    const links = [
        {
            title: "Home",
            path: '/'
        },
        {
            title: "About",
            path: '/about'
        },
        {
            title: "Contact",
            path: '/contact'
        }
    ]

  return (
    <div>
      {links.map((link) => {
        return (<Link key={link.path} href={link.path}>{link.title}</Link>)
      })}
    </div>
  )
}

export default Links
