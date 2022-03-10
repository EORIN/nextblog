// import Navbar from './navbar'
// import Footer from './footer'

import Link from "next/link";
import { session } from "passport/lib";

export default function Layout({ children }) {
  return (
    <>
      <nav>
          <Link href='http://localhost:3005/home/users/addpost'>Home</Link>
          {/* <Link>Home</Link>
          <Link>Home</Link> */}
      </nav>
        <main>{children}</main>
        f
      <footer />
    </>
  )
}