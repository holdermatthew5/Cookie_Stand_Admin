import { useState } from 'react'

export default function CookieStandForm({ onCreate }) {

    const initialValues = {
        location: '',
        max: 0,
        min: 0,
        avg: 0,
    };

    const [values, setValues] = useState(initialValues);

    function submitHandler(event) {
        event.preventDefault();
        onCreate(values);
        setValues(initialValues)
    }

    function inputChangeHandler(event) {
        let { name, value, type } = event.target;

        if (type === "number") {
            value = parseFloat(value);
        }

        setValues({ ...values, [name]: value });
    }
    return (
        <form onSubmit={submitHandler} className="bg-green-300 w-4/5 p-5 m-auto border-4 border-green-500 rounded">
            <div className="inline-block w-2/3">
                <label htmlFor="location" className="">Add Location</label>
                <input type="text" name="location" id="location" value={values.location} onChange={inputChangeHandler} placeholder="Cookie Stand Location" className="block w-11/12 m-auto m-4 p-2" />
            </div>

            <button type="submit" className="bg-green-500 inline-block py-5 w-1/3">Create Stand</button>


            <FormInputSection>
                <label htmlFor="min" className="block m-5">Minimum Customers per Hour</label>
                <input type="number" name="min" id="min" value={values.min} onChange={inputChangeHandler} className="block w-11/12 p-2" />
            </FormInputSection>
            <FormInputSection>
                <label htmlFor="max" className="block m-5">Maximum Customers per Hour</label>
                <input type="number" name="max" id="max" value={values.max} onChange={inputChangeHandler} className="block w-11/12 p-2" />
            </FormInputSection>
            <FormInputSection>
                <label htmlFor="avg" className="block m-5">Average Cookies per Sale</label>
                <input type="number" name="avg" id="avg" value={values.avg} onChange={inputChangeHandler} className="block w-11/12 p-2" />
            </FormInputSection>
        </form>
    );
}

function FormInputSection({ children }) {
    return (
        <div className="inline-block w-1/3 m-auto">
            {children}
        </div>
    );
}

// ==========================

// import React from 'react'

// function CreateForm(props){
//   return (
//     <form onSubmit={(e) => props.onCreate(e)} className="bg-green-400 px-10 py-5 w-4/5 justify-self-center rounded mx-12">
//       <h2 className="p-5 text-2xl">Create Cookie Stand</h2>
//       <label className="w-5/6">Location:<input className="w-5/6 m-3 " name="location"/></label>
//       <section className="py-5">
//         <label className="inline-block p-3 m-2 bg-green-300">Minimum Customuers per Hour<br/><input className="w-60" name="min"/></label>
//         <label className="inline-block p-3 m-2 bg-green-300">Maximum Customuers per Hour<br/><input className="w-60" name="max"/></label>
//         <label className="inline-block p-3 m-2 bg-green-300">Average Cookies per Sale<br/><input className="w-60" name="ave"/></label>
//         <button className="bg-green-500 m-3 p-8 py-5" type="submit">Create</button>
//       </section>
//     </form>
//   )
// }
// export default CreateForm;