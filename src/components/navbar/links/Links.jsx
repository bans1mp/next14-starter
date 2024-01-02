import Link from 'next/link'
import React from 'react'
import styles from "./links.module.css"
import NavLink from './navlink/NavLink'
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
    <div className={styles.links}>
      {links.map((link) => {
        return <NavLink linkItem={link} key={link.path}/>
      })}
    </div>
  )
}

export default Links
