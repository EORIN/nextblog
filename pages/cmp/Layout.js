import Link from "next/link";
import { session } from "passport/lib";
import 'bootstrap/dist/css/bootstrap.css'

export default function Layout({ children }) {
  return (
    <div className="container container-fluid">
      {/* <nav  className="navbar navbar-expand-lg navbar-light bg-light">
        <p style={{textDecoration: 'none', color: 'black'}} ><Link href='http://localhost:3005/home/users/addpost'>Home</Link></p> */}
        <nav class="navbar navbar-expand navbar-light bg-light">
            <ul class="nav navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Home 2</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Home 3</a>
                </li>
            </ul>
        </nav>

      {/* </nav> */}
        <main className="container container-fluid">{children}</main>

      <footer />
    </div >
  )
} 