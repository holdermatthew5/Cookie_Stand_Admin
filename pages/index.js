import Link from 'next/link'
import { hours } from '../data'
import { useState } from 'react'

export default function Home() {

  const [store, setStore] = useState('');
  const [reports, setReports] = useState([]);

  function onCreate(event){
    event.preventDefault();
    let store = {
      location: event.target.location.value,
      min: event.target.min.value,
      max: event.target.max.value,
      ave: event.target.ave.value,
    }
    setStore(store)
    let storeReport = {
      location: event.target.location.value,
      hourlySales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
    }
    setReports([...reports, storeReport])
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

  function Main(props){
    return (
      <main className="bg-green-200 min-w-min p-10 text-center grid justify-items-stretch px-0">
        <CreateForm />
        <ReportTable hours={ hours } reports={ reports } />
        <Footer reports={ reports } />
      </main>
    )
  }

  function CreateForm(props){
    return (
      <form onSubmit={(e) => onCreate(e)} className="bg-green-400 px-10 py-5 w-4/5 justify-self-center rounded mx-12">
        <h2 className="p-5 text-2xl">Create Cookie Stand</h2>
        <label className="w-5/6">Location:<input className="w-5/6 m-3 " name="location"/></label>
        <section className="py-5">
          <label className="inline-block p-3 m-2 bg-green-300">Minimum Customuers per Hour<br/><input className="w-60" name="min"/></label>
          <label className="inline-block p-3 m-2 bg-green-300">Maximum Customuers per Hour<br/><input className="w-60" name="max"/></label>
          <label className="inline-block p-3 m-2 bg-green-300">Average Cookies per Sale<br/><input className="w-60" name="ave"/></label>
          <button className="bg-green-500 m-3 p-8 py-5" type="submit">Create</button>
        </section>
      </form>
    )
  }

  function ReportTable(props){
    if (props.reports === []) {
      return (
        <h2 className="m-10 text-2xl">No Cookie Stands Available</h2>
      )
    } else {
      return (
        <section className="justify-self-center bg-green-500 m-10 rounded">
          <table className="">
            <thead>
              <HeadRow hours={ props.hours } />
            </thead>
            <tbody>
              <BodyRow reports={ props.reports } />
            </tbody>
          </table>
        </section>
      )
    }
  }

  function HeadRow(props){
    const head = props.hours.map((hour) => 
      <td className="inline-block px-2 font-bold">{hour}</td>
    );
    return (
      <tr>
        <th className="px-2">Location</th>
        { head }
      </tr>
    )
  }
  
  function BodyRow(props){
    let temp = [];
    if (props.reports.length > 0){
      let totals = [];
      let total = 0;
      for (let i = 0; i < 14; i++){
        total = 0;
        for (let j = 0; j < props.reports.length; j++){
          total += props.reports[j].hourlySales[i];
        }
        totals.push(total);
      }
      for (let i = 0; i <= props.reports.length; i++){
        if (i < props.reports.length){
          temp.push(props.reports[i])
        } else {
          temp.push({
            "location": "Totals",
            "hourlySales": totals,
          })
        }
      }
    }
    const reports = temp.map(report => {
      return (
        <tr>
          <th className="bg-green-300 border border-black">{ report.location }</th>
          <TableData reports={ props.reports } hourlySales={ report.hourlySales } />
        </tr>
      )
    })
    return (
      reports
      )
    }
    
    function TableData(props){
      let storeTotal = 0
      let temp = []
      for (let i = 0; i <= props.hourlySales.length; i++){
        if (props.hourlySales[i] !== undefined){
          storeTotal += props.hourlySales[i];
        }
        if (i < props.hourlySales.length){
          temp.push(props.hourlySales[i])
        } else {
          temp.push(storeTotal)
        }
      }
      const sales = temp.map(sale => {
        return (<td className="inline-block px-4 bg-green-300 border border-black">{ sale }</td>)
      })
    return (
      sales
    )
  }

  function Footer(props){
    let count = 0
    if (props.reports.length !== 0){
      count = props.reports.length
    }
    return (
      <footer className="bg-green-500 h-15 text-left p-5">{ count } Locations World Wide</footer>
      )
    }
  }
