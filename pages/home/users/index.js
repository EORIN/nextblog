import Link from 'next/link'
import React, { useState, useEffect  } from 'react'
import axios from 'axios'
import Layout from '../../cmp/Layout'
import { CookiesProvider } from "react-cookie"
import cookie from 'cookie'
import { setCookies, getCookie } from "cookies-next"

export default function HomePage({pageProps}) {

    return (
        <div>
            {console.log(getCookie('cookiesnext'))}
        </div>
      )
}

// export async function getStaticProps() {
//     // const cookies = await (await fetch('https://example.com/posts'))?.json()
//     console.log(cookie.user)
//     // обратите внимание на сигнатуру
//     return {
//      pageProps: {
//          cookie
//     }
//   }
// }
