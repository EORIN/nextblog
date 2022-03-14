import Link from 'next/link'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from "next/router";

export default function GetPosts() {

    const router = useRouter();
    const { id } = router.query;

     const [posts, setPosts] = useState(['a'])
     const [coi, setCoi] = useState(['a'])

    useEffect( () => {
            // fetchpost
            // console.log(await fetchpost())
            // setPosts(result.data)
            // console.log(posts,'ghdfs', result.data)
            fetchpost().then(u=>setPosts(u))
        }, [])

        const fetchpost = async () => {
            const result = await axios.post('http://localhost:3005/getposts', {email: id})
            console.log(posts,'ghdfs', result.data)
            return result.data
        }
return (
    <div>
        
        {posts.map(post =>{
            <><h1>{post.title}</h1><p>{post.post}</p></>
})}
        {/* <button onClick={()=>{setPosts(fetchpost())}}>HUI</button>
       {posts} */}
       <button onClick={setCoi(coi+1)}></button>
       {coi}
    </div>
  )
}
