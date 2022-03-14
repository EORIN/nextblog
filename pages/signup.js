import Link from 'next/link'
import { useState  } from 'react'
import axios from 'axios'

export default function Signup() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
function handleEmailChange(e){
    setEmail(e.target.value)
}
function handlePasswordChange(e){
    setPassword(e.target.value)
}
function handleNameChange(e){
    setName(e.target.value)
}

async function Registration(){
  const response = await axios.post('http://localhost:3005/signup', {
      name: name,
      email: email,
      password: password
  })
  console.log(response)
}
  return (
    <div>
      <form className="form-signin">
        <h2 className="form-signin-heading"> Please sign up </h2>
        <label htmlFor="inputEmail" className="sr-only"> Email address
        </label>
        <input type="email" onChange={handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
        <label htmlFor="inputName" className="sr-only"> Name</label>
        <input type="text" onChange={handleNameChange} id="inputName" className="form-control" placeholder="Email address" required autoFocus />
        <label htmlFor="inputPassword" className="sr-only"> Password</label>
        <input type="password" onChange={handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
        <button className="btn btn-lg btn-primary btn-block" onClick={Registration} type="button"> Registration
        </button>
      </form>
      <Link href='/signin'>Signin</Link>
    </div>

  )
}
