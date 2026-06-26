import React from 'react'

const Navbar = () => {
    return (
        <nav className='py-1.5 flex justify-between text-purple-700 bg-black'>
            <div className="logo">
                <span className='font-serif text-2xl font-bold mx-50'>iTask</span>
            </div>
           <ul className="flex gap-8 mx-9">
            <li className='cursor-pointer hover:font-bold transition-all duration-150'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-150'>Tasks</li>
           </ul>
        </nav>
    )
}

export default Navbar
