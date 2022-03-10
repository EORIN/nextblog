import Link from 'next/link'
import { useState  } from 'react'
import axios from 'axios'
import { useRouter } from "next/router";


export default function addpost() {

    const router = useRouter();
    const { id } = router.query;

    // const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    function handleTitleChange(e){
        setTitle(e.target.value)
    }
    function handleTextChange(e){
        setText(e.target.value)
    }

    async function addPost(){
        console.log(title)
        const response = await axios.post('http://localhost:3005/addpost', {title: title, post: text, email: id})
        console.log(response)
    }

return (
    <>
    
    <form className="form-post">
        <h2 className="form-post-heading"> Please POST </h2>
        <label htmlFor="inputTitle" className="sr-only"> Title
        </label>
        <input type="text" onChange={handleTitleChange} id="inputTitle" className="form-control" placeholder="Title" required autoFocus />
        <label htmlFor="inputText" className="sr-only"> Text</label>
        <textarea type="text" onChange={handleTextChange} id="inputText" className="form-control" placeholder="Text" required />
        <button className="btn btn-lg btn-primary btn-block" onClick={addPost} type="button"> Post
        </button>
      </form>
    </>
  )
}
