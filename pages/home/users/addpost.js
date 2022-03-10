import Link from 'next/link'
import { useState  } from 'react'
import axios from 'axios'
import Layout from '../../cmp/Layout'

export default function addpost() {

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    function handleTitleChange(e){
        setTitle(e.target.value)
    }
    function handleTextChange(e){
        setText(e.target.value)
    }

    async function addPost(){
        const response = await axios('http://localhost:3005/addpost', {title: title, text: text})
        
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
