import { useState } from 'react'

export default function LoginForm({ loginHandler }) {

    const initialValues = {
        username: '',
        password: '',
    }

    const [values, setValues] = useState(initialValues);

    function submitHandler(event) {
        event.preventDefault();
        loginHandler(values);
        setValues(initialValues)
    }

    function inputChangeHandler(event) {

        let { name, value } = event.target;

        setValues({ ...values, [name]: value });
    }

    return (

        <form onSubmit={submitHandler} className="bg-green-200 w-4/5 m-auto border-4 border-green-500 rounded">
            <div className="my-5">
                <label htmlFor="username" className="">User Name</label>
                <input type="text" name="username" id="username" value={values.username} onChange={inputChangeHandler} placeholder="User Name" className="block w-11/12 m-auto my-2 p-2" />
            </div>

            <div>
                <label htmlFor="password" className="">Password</label>
                <input type="password" name="password" id="password" value={values.password} onChange={inputChangeHandler} placeholder="password" className="block w-11/12 m-auto my-2 p-2" />
            </div>

            <button type="submit" className="bg-green-400 w-11/12 py-5 my-5 rounded">Sign In</button>

        </form>
    );
}

// ========================

// import React from 'react'

// export default function Loginform(props){
//     return (
//         <section className="text-center">
//             <form onSubmit={ props.loginHandler }className="bg-green-200 w-3/4 h-full p-5 rounded">
//                 <label className="block w-full mb-4">
//                     USER NAME<br />
//                     <input name="username" className="w-11/12" placeholder="User Name" />
//                 </label>
//                 <label className="block w-full mb-6">
//                     PASSWORD<br />
//                     <input name="password" className="w-11/12" placeholder="password" />
//                 </label>
//                 <button className="bg-green-400 w-11/12 p-4 rounded">SIGN IN</button>
//             </form>
//         </section>
//     )
// }