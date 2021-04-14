import Head from 'next/head'
import { useState } from 'react'

export default function Home() {

  const [store, setStore] = useState('')

  function createHandler(event){
    event.preventDefault();
    let store = {
      location: event.target.location.value,
      min: event.target.min.value,
      max: event.target.max.value,
      ave: event.target.ave.value,
    }
    setStore(store)
  }

  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-green-500 px-10 py-5 text-4xl font-bold">
        <h1>Cookie Stand Admin</h1>
      </header>

      <main className="bg-green-200 w-full p-10 text-center grid justify-items-stretch px-0">
        <form onSubmit={createHandler} className="bg-green-300 px-10 py-5 w-4/5justify-self-center rounded mx-12">
          <h2 className="p-5 text-2xl">Create Cookie Stand</h2>
          <label className="w-5/6">Location:<input className="w-5/6 m-3 " name="location"/></label>
          <section className="py-5">
            <label className="inline-block m-3">Minimum Customuers per Hour<br/><input className="w-60" name="min"/></label>
            <label className="inline-block m-3">Maximum Customuers per Hour<br/><input className="w-60" name="max"/></label>
            <label className="inline-block m-3">Average Cookies per Sale<br/><input className="w-60" name="ave"/></label>
            <button className="bg-green-400 m-3 p-8 py-5" type="submit">Create</button>
          </section>
        </form>
        <section className="text=center p-10">
          <p className="m-3">Report Table Coming Soon..</p>
          <p className="m-3">{JSON.stringify(store)}</p>
        </section>
        <footer className="bg-green-500 h-15 text-left p-5">&#169;2021</footer>
      </main>

      <footer className="">
        
      </footer>
    </div>
  )
}
