import Link from 'next/link'
import { hours } from '../data'
import { useState } from 'react'
import CreateForm from '../components/createForm'
import Footer from '../components/footer'
import Header from '../components/header'
import ReportTable from '../components/reportTable'

export default function Home() {

  // const [store, setStore] = useState('');
  const [reports, setReports] = useState([]);

  function onCreate(event){
    event.preventDefault();
    // let store = {
    //   location: event.target.location.value,
    //   min: event.target.min.value,
    //   max: event.target.max.value,
    //   ave: event.target.ave.value,
    // };
    // setStore(store);
    let storeReport = {
      location: event.target.location.value,
      hourlySales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
    };
    setReports([...reports, storeReport]);
  }

  return (
    <CreateStandAdmin />
  )
  
  function CreateStandAdmin(props){
    return (
      <div className="">
        <Head />

        <Header />

        <Main />
      </div>
    )
  }

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
        <CreateForm onCreate={ onCreate } />
        <ReportTable hours={ hours } reports={ reports } />
        <Footer reports={ reports } />
      </main>
    )
  }
}
