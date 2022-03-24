import Link from 'next/link'
import { useState  } from 'react'
import axios from 'axios'
import { useCookies } from "react-cookie"
import { setCookies, getCookie } from "cookies-next"

export default function Signin() {

// const [cookie, setCookie] = useCookies(["user"])
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

function handleEmailChange(e){
    setEmail(e.target.value)
}
function handlePasswordChange(e){
    setPassword(e.target.value)
}

async function SignIn(){
  const response = await axios.post('http://localhost:3005/signin', {
      email: email,
      password: password
  })
  if(!response.data == false){
    window.localStorage.setItem('token', response.data)
    setCookies('cookiesnext', response.data)
    window.location.assign(`http://localhost:3000/home/users`)
  }
  else{
    alert('Incorrect login or password')  
  }
  
   
}
  return (
    <div className='container'>
      <form className="form-signin">
        <h2 className="form-signin-heading"> Please sign in </h2>
        <label htmlFor="inputEmail" className="sr-only"> Email address
        </label>
        <input type="email" onChange={handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
        <label htmlFor="inputPassword" className="sr-only"> Password</label>
        <input type="password" onChange={handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
        <button className="btn btn-lg btn-primary btn-block" onClick={SignIn} type="button"> Sign in
        </button>
      </form>
      <Link href='/'>Signup</Link>
    </div>

  )
}
