import React from 'react'

function Createpassword() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-300 font-['Poppins']">
      {/* Create Password Form */}
      <div className="w-full max-w-md rounded-2xl flex flex-col items-center justify-center p-12 bg-white/50 border border-white/30 shadow-2xl backdrop-blur-md">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">
              Create New Password
            </h1>
          </div>

          {/* Create Password Form */}
          <form className="space-y-6">
            <div className="mb-4">
              <label className="block text-sm pl-2 font-medium text-gray-700 mb-2">
                New Password
              </label>
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full h-12 px-4 rounded-xl  bg-white border border-gray-50 shadow-md focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm pl-2 font-medium text-gray-700 mb-2">
                Confirm new password
              </label>
              <input
                type="password"
                placeholder="Re-enter new password"
                className="w-full h-12 px-4 rounded-xl bg-white border border-gray-200 shadow-md focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>
            <p className="text-gray-600 text-md font-semibold mb-8 ml-2">Create a strong password with a mix of letters, numbers and symbols</p>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-12 bg-teal-500 shadow-md hover:bg-teal-600 text-white font-medium rounded-xl transition-colors"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Createpassword