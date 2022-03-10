import Link from 'next/link'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from "next/router";

export default function GetPosts() {

    const router = useRouter();
    const { id } = router.query;

     const [posts, setPosts] = useState(null)

    useEffect(async () => {
            // fetchpost
            // console.log(await fetchpost())
            // setPosts(result.data)
            // console.log(posts,'ghdfs', result.data)
            setPosts(await fetchpost())
            console.log(posts)
        }, [])

        const fetchpost = async () => {
            const result = await axios.post('http://localhost:3005/getposts', {email: id})
            console.log(posts,'ghdfs', result.data)
            return result.data
        }
return (
    <div>
        {/* {posts.map(post =>{
            <><h1>{post.title}</h1><p>{post.post}</p></>
})} */}
        {/* <button onClick={fetchPosts}>HUI</button> */}
       
    </div>
  )
}
