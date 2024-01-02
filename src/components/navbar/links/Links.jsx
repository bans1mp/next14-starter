"use client"
import React, { useState } from 'react'
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
      const [open , setOpen] = useState(false) ;
      
      const session = true ;
    const isAdmin = true ;

  return (
    <div className={styles.container}>

    <div className={styles.links}>
      {links.map((link) => {
        return <NavLink linkItem={link} key={link.path}/>
      })}
      {session ? (
        <>
        {
          isAdmin && (
            <NavLink linkItem={{title: "Admin" , path: "/admin"}}/>
            )
          }
        <button className={styles.logout}>Logout</button>
        </>
      ) : (
        <NavLink linkItem={{title: "Login", path: "/login"}} />
        )}
    </div>
    <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)} >Menu</button>
    {
      open && 
      <div className={styles.mobileLinks}>
        {links.map((link) => {
          return <NavLink key={link.path} linkItem={link}/>
        })}
      </div>
    }
    </div>
  )
}

export default Links
