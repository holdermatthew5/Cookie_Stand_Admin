import Link from 'next/link'

export default function Overview(){
    return (
        <div className="w-full text-center p-10">
            <Link href="/" className="self-center"><a className="bg-blue-600 p-5 rounded text-2xl">Return to Main page</a></Link>
        </div>
    )
}