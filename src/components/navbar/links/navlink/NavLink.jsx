"use client"
import Link from "next/link"
import styles from "./navlink.module.css"
import { usePathname } from "next/navigation"
const NavLink = ({linkItem}) => {
    const pathName = usePathname() ;
  return (
    <Link className={`${styles.container} ${pathName === linkItem.path && styles.active}`} href={linkItem.path}>{linkItem.title}</Link>
  )
}

export default NavLink
