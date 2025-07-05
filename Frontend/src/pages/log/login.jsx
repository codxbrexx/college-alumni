

export default function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-300 font-['Poppins']">
      {/* side  Image */}
      {/* <div className="flex-1 relative">
        <img src={logbg} alt="Students in classroom" className="object-cover w-full h-full absolute inset-0" />
        <div className="absolute inset-0 bg-black/20"></div>
      </div> */}

      {/*  Login Form */}
      <div className="w-full max-w-md rounded-2xl flex flex-col items-center justify-center p-12 bg-white/50 border border-white/30 shadow-2xl backdrop-blur-md">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">Welcome to Net Grud</h1>

            {/* Tab button
             */}
            <div className="inline-flex bg-gray-100 shadow-md rounded-full p-1 mb-8">
              <button className="px-8 py-2 rounded-full text-sm font-medium bg-teal-500 cursor-pointer text-white">Login</button>
              <button className="px-8 py-2 rounded-full text-sm font-medium cursor-pointer  text-gray-600">Register</button>
            </div>

            <p className="text-gray-600 text-sm mb-8">
              
            </p>
          </div>

          {/* Login Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium pl-2 text-gray-700 mb-2">User name</label>
              <input
                type="text"
                placeholder="Enter your User name"
                className="w-full h-12 px-4 rounded-xl bg-white border border-gray-50 shadow-md focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm pl-2 font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full h-12 px-4 rounded-xl bg-white border border-gray-200 shadow-md focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-gray-600 hover:text-teal-600">
                Forgot Password ?
              </a>
            </div>
  {/* Login Button */}
            <button
              type="submit"
              className="w-full h-12 bg-teal-500 shadow-md hover:bg-teal-600 text-white font-medium rounded-xl transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
