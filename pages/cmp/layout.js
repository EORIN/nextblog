// import Navbar from './navbar'
// import Footer from './footer'

import { session } from "passport/lib";

export default function Layout({ children }) {
  return (
    <>
      <nav>
          <li>{console.log(session.name)}</li>
          <li>Home</li>
          <li>Home</li>
      </nav>
        <main>{children}</main>
      <footer />
    </>
  )
}