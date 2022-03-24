import axios from "axios";
import { useState } from "react";

const Modal = ({active, setActive, name}) => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    function handleChangeText(e){
        setText(e.target.value)
        console.log(text)
    }
    function handleChangeTitle(e){
        setTitle(e.target.value)
        console.log(title)
    }
    async function handleFetchData(e){
        
        console.log(text, title, name)
        const response = await axios.post('http://localhost:3005/addpost', {
            text: text, title: title, name: name
        })
        console.log(response.data)
        handleClose()
    }
    function handleClose(e){
        setActive(false)
    }

    return (
        
        <div id="ModalUser" style={{position: "absolute" ,zIndex: '99999' , background: "red", width: "80%", height: "50%", margin: "auto", top: "10%", borderColor: "dark", borderStyle: 'solid', borderRadius: '4px', borderWidth: "1px", visibility: `${active ? 'visible' : 'hidden'}`}}>
            <button style={{position: "relative", float: "right"}} href="#" class="btn btn-primary active" role="button" onClick={handleClose} >X</button>
            <div class="form-group bg-light">
              <input type="text" name="" id="" class="form-control" placeholder="Title" aria-describedby="helpId" onChange={handleChangeTitle}/>
              <textarea rows={20} cols={80} placeholder="Text" onChange={handleChangeText} style={{width: "100%"}}>
              </textarea>
              <a type="button" onClick={handleFetchData} className="btn btn-outline-primary" style={{width: "100%"}}>ENTER</a>
            </div>
        </div>
    );
}

export default Modal;
