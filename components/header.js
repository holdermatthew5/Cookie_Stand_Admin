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
export default Header