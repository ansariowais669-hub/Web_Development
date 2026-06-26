import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className='h-14 bg-slate-800 '>
                <div className="mycontainer text-white px-4 flex justify-between py-3 items-center">
                    <div className="logo font-bold text-white text-2xl">
                        <span className='text-green-700'>
                            &lt;
                        </span>
                        <span className='text-white'>
                            Pass<span className='text-green-500'>
                                OP
                            </span>
                        </span>
                        <span className='text-green-700'>
                            /&gt;
                        </span>
                    </div>
                    <button className='rounded-xl ring-white ring-1 ext-white relative bg-black items-center flex cursor-pointer px-2'>
                        <img className='invert p-1 w-10' src="icons/github.png" alt="github logo" /><span className='text-bold text-green-500'>Github</span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar