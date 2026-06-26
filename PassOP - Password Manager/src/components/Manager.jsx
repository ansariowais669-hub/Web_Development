import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [passwordArray, setPasswordArray] = useState([]);
    const [form, setForm] = useState({ site: "", username: "", password: "" });

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])


    const savePassword = () => {
        setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
        console.log(([...passwordArray, form]))
        setForm({ site: "", username: "", password: "" })
    }
    const deletePassword = (id) => {
        let c = confirm("Do you really want to delete this password ?")
        if (c) {
            setPasswordArray(passwordArray.filter(item => item.id != id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id != id)))
        }
    }
    const editPassword = (id) => {
        setForm(passwordArray.filter(i => i.id === id)[0])
        setPasswordArray(passwordArray.filter(item => item.id != id))
    }



    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const showPassword = () => {
        passwordRef.current.type = "text";
        if (ref.current.src.includes("icons/eye.png")) {
            alert("Show the password")
            ref.current.src = "icons/eyecross.png"
            passwordRef.current.type = "text";
        }
        else {
            ref.current.src = "icons/eye.png"
            passwordRef.current.type = "password";
        }
    }
    return (
        <>

            <div className="fixed pointer-events-none inset-0 -z-10 bg-green-100 
    bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
            </div>
            <div className="min-h-screen overflow-y-auto flex flex-col overflow-x-hidden">


                <div className="p-2 md:mycontainer md:p-0 flex-grow">
                    <h1 className='text-4xl font-bold text-center'><span className='text-green-700'>
                        &lt;
                    </span>
                        <span className='text-black'>
                            Pass<span className='text-green-500'>
                                OP
                            </span>
                        </span>
                        <span className='text-green-700'>
                            /&gt;
                        </span></h1>
                    <p className='text-green-700 text-lg text-center'>Your own Password Manager</p>
                    <div className='text-white flex flex-col items-center gap-4 py-4 px-2'>
                        <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-full border border-green-500 bg-gray-100 w-full text-black py-1 px-4' type="text" name="site" id="site" />

                        <div className="flex flex-col md:flex-row w-full py-1 gap-8 justify-center">
                            <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-500 bg-gray-100 w-full text-black py-1 px-4' type="text" name="username" id="username" />
                            <div className="relative">

                                <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full text-gray bg-gray-100 border border-green-500 w-full text-black py-1 p-6' type="password" name="password" id="password" />
                                <span onClick={showPassword} onChange={handleChange} className='cursor-pointer absolute
                            right-[1px] top-[2px] text-black'><img ref={ref} className='p-1' width={30} height={20} src="icons/eye.png" alt="eye" /></span>
                            </div>

                        </div>
                        <button onClick={savePassword} className='bg-green-600 text-black rounded-2xl flex py-2 px-4 h-8 text-center justify-center items-center w-fit hover:bg-green-500 border border-green-700'>Save Password</button>
                    </div>
                        <h2 className='mx-6 font-bold text-2xl py-4'>Your passwords</h2>
                        {passwordArray.length === 0 &&  (<p className=" mx-7 text-gray-600">No passwords to show</p>)}
                        {passwordArray.length != 0 &&
                        <div className="passwords">
                            <div className="overflow-x-auto mx-auto max-w-4xl">
                                    <table className='table-auto w-full mb-10 overflow-hidden rounded-md'>
                                        <thead className='bg-green-800 text-white'>
                                            <tr>
                                                <th className='py-2'>Site</th>
                                                <th className='py-2'>Username</th>
                                                <th className='py-2'>Password</th>
                                                <th className='py-2'>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className='bg-green-100'>
                                            {passwordArray.map((item, index) => {
                                                return <tr key='index'>
                                                    <td className='text-center w-32 py-2 border border-white'><a href="{item.site}" target='_blank'>{item.site}</a></td>
                                                    <td className='text-center w-32 py-2 border border-white'>{item.username}</td>
                                                    <td className='text-center w-32 py-2 border border-white'>{item.password}</td>

                                                    <td className='w-32 py-2 border border-white'>
                                                        <div className="flex justify-center items-center gap-6 px-2">
                                                            <span onClick={() => { editPassword(item.id) }} className='cursor-pointer'>
                                                                <img src="icons/edit.png" alt="edit" />
                                                            </span>
                                                            <span onClick={() => { deletePassword(item.id) }} className='cursor-pointer'>
                                                                <img src="icons/delete.png" alt="delete" />
                                                            </span>
                                                        </div>
                                                    </td>

                                                </tr>
                                            })}
                                        </tbody>
                                    </table>
                            </div>
                            </div>}
                </div>
            </div>

        </>
    )
}

export default Manager
