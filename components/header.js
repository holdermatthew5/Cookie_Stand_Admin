import Link from 'next/link'
import React from 'react'

function Header(props){
    return (
        <header className="bg-green-500 px-10 py-5">
            <h1 className="inline-block text-4xl font-bold">Cookie Stand Admin</h1>
            <Link href="/overview" className="">
            <a>Overview</a>
            </Link>
        </header>
        )
    }
export default Header;
// =========================
// import Link from 'next/link'

// export default function CookieStandHeader({ username, onLogout }) {
//     return (
//         <header >
//             <h1 >
//                 Cookie Stand Admin
//                 </h1>
//             <div >
//                 <p >{username}</p>
//                 <Link href="/">
//                     <a onClick={onLogout} >Sign Out</a>
//                 </Link>
//                 <nav>
//                     <Link href="/overview"><a>Overview</a></Link>
//                 </nav>
//             </div>
//         </header>
//     )
// }