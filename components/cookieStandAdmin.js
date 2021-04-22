import { useState, useEffect } from 'react'
import useSWR from 'swr'
import { CookieStand, fetchWithToken, postWithToken, deleteWithToken, apiUrl } from '../services/data-fetcher'
import Header from '../components/header'
import CookieStandForm from './cookieStandForm'
import CookieStandTable from '../components/cookieStandTable'
import Footer from '../components/footer'

export default function CookieStandAdmin({ token, onLogout, username }) {

    const { data, error, mutate } = useSWR([apiUrl, token], fetchWithToken);

    const [cookieStands, setCookieStands] = useState([]);

    useEffect(() => {
        if (!data) return;
        setCookieStands(data);
    }, [data])

    if (error) return <h2>Ruh Roh</h2>
    if (!data) return <h2>Loading...</h2>

    async function createHandler(values) {

        const newStand = CookieStand.fromValues(values);

        newStand.location += '...'; // Add the ... to show loading state

        const updatedStands = [newStand, ...cookieStands]

        mutate(updatedStands, false);

        await postWithToken(token, values);

        mutate();

    }

    async function deleteHandler(stand) {

        const updatedStands = cookieStands.filter(storedStand => storedStand.id !== stand.id);

        mutate(updatedStands, false);

        await deleteWithToken(stand.id, token);

        mutate(async stands => {
            return stands.filter(candidate => candidate.id !== stand.id);
        });
    }

    return (
        <div className="">
        <Head />

        <Header />

        <Main />
        </div>
    )

    function Head(props){
        return (
            <head>
            <title>Cookie Stand Admin</title>
            <link rel="icon" href="/favicon.ico" />
            </head>
        )
    }
    
    function Main(props){
        return (
            <main className="bg-green-200 min-w-min p-10 text-center grid justify-items-stretch px-0">
                <CookieStandForm onCreate={ createHandler } />
                <CookieStandTable stands={ cookieStands } onDelete={ deleteHandler } />
                <Footer stands={ cookieStands } />
            </main>
        )
    }
}
// =================================

