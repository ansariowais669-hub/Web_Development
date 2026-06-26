import React from 'react'

const hello = () => {
  return (
    <div>
      <>
  {/* FULL PAGE BACKGROUND */}
  <div className="fixed inset-0 -z-10 bg-green-50 
    bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
  </div>

  {/* MAIN CONTENT */}
  <div>
    
    <div className="p-2 md:mycontainer md:p-0 flex-grow">
      
      <h1 className="text-4xl font-bold text-center">
        <span className="text-green-700">&lt;</span>
        <span className="text-black">
          Pass<span className="text-green-500">OP</span>
        </span>
        <span className="text-green-700">/&gt;</span>
      </h1>

      <p className="text-green-700 text-lg text-center">
        Your own Password Manager
      </p>

      {/* FORM */}
      <div className="flex flex-col items-center gap-4 p-4">
        <input
          value={form.site}
          onChange={handleChange}
          placeholder="Enter website URL"
          className="rounded-full border border-green-500 bg-gray-100 w-full text-black py-2 px-4"
          type="text"
          name="site"
        />

        <div className="flex flex-col md:flex-row w-full gap-4">
          <input
            value={form.username}
            onChange={handleChange}
            placeholder="Enter Username"
            className="rounded-full border border-green-500 bg-gray-100 w-full text-black py-2 px-4"
            type="text"
            name="username"
          />

          <div className="relative w-full">
            <input
              ref={passwordRef}
              value={form.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="rounded-full bg-gray-100 border border-green-500 w-full text-black py-2 px-4 pr-12"
              type="password"
              name="password"
            />
            <span
              onClick={showPassword}
              className="cursor-pointer absolute right-3 top-2"
            >
              <img ref={ref} className="w-6" src="icons/eye.png" />
            </span>
          </div>
        </div>

        <button
          onClick={savePassword}
          className="bg-green-600 rounded-2xl py-2 px-6 hover:bg-green-500 border border-green-700"
        >
          Save Password
        </button>
      </div>

      {/* PASSWORD TABLE */}
      <div className="passwords overflow-x-auto">
        <h2 className="font-bold text-2xl py-4">Your passwords</h2>

        {passwordArray.length === 0 && <div>No passwords to show</div>}

        {passwordArray.length !== 0 && (
          <table className="table-auto w-full rounded-md overflow-hidden">
            <thead className="bg-green-800 text-white">
              <tr>
                <th className="py-2">Site</th>
                <th className="py-2">Username</th>
                <th className="py-2">Password</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-green-100">
              {passwordArray.map((item, index) => (
                <tr key={index}>
                  <td className="text-center py-2 border">
                    <a href={item.site} target="_blank">{item.site}</a>
                  </td>
                  <td className="text-center py-2 border">{item.username}</td>
                  <td className="text-center py-2 border">{item.password}</td>
                  <td className="py-2 border">
                    <div className="flex justify-center gap-4">
                      <img src="icons/edit.png" className="cursor-pointer" />
                      <img src="icons/delete.png" className="cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  </div>
</>

    </div>
  )
}

export default hello
