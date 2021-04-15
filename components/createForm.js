import React from 'react'

function CreateForm(props){
  return (
    <form onSubmit={(e) => props.onCreate(e)} className="bg-green-400 px-10 py-5 w-4/5 justify-self-center rounded mx-12">
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
export default CreateForm;