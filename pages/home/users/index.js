import React, { useState, useEffect  } from 'react'
import axios from 'axios'
import { setCookies, getCookie } from "cookies-next"
import ModalInput from "../../cmp/ModalInput"
import Post from '../../cmp/Post'
import 'bootstrap/dist/css/bootstrap.css'

export default function HomePage() {

    const [modalActive, setModalActve] = useState(false) 
    const [modal, setModal] = useState(null) 
    const [sortDataPosts, setSortDataPosts] = useState([]) 
    const [isValid, setIsValid] = useState(null);
    const [data, setData] = useState({});
    useEffect(()=>{
        checkCookie()
        getSortPosts()
    }, [])

    async function getSortPosts(){
        const response = await axios.post('http://localhost:3005/getsortposts')
        setSortDataPosts(response.data)
        console.log(sortDataPosts)
        return sortDataPosts.map( e =>{<h1>sdh</h1>})
    }

    function inputModal(){
        setModalActve(true)
    }

    const checkCookie = async function (){
        const response = await axios.post('http://localhost:3005/checkcookie', {
            cookie: getCookie('cookiesnext')
        })
        if(response){
            console.log(response)
            setData(response.data)
            setIsValid(true)
            return true
        }
        else{
            return false
        }
    }
    return (
        <div className='container'>
            <div className='d-flex justify-content-between container'>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link " href="#">Active link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    { isValid !== null ? <a className="nav-link" onClick={inputModal} href="#">Add post</a> : <div></div>}
                </li>
                {/* {modal} */}
            </ul>
            <h1 className="navbar-brand" href="#">{ isValid !== null ? <div>{data.name}</div> : <div>Guest</div>}</h1>
        </div>
        <ModalInput active={modalActive} setActive={setModalActve} name={data.name}></ModalInput>
        {console.log(sortDataPosts)}
        {<ul className='list-group'>
            {sortDataPosts.map(e=><li className='list-group-item'><Post title={e.title}></Post></li>)}       
        </ul>}
        
        </div>
        
    )

}

