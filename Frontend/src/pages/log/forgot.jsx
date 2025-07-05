
import { TbShieldCheckFilled } from "react-icons/tb";

export default function Forgot() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-300 font-['Poppins']">
      {/* Right Side - Forgot Form */}
      <div className="w-full max-w-md rounded-2xl flex flex-col items-center justify-center p-12 bg-white/50 border border-white/30 shadow-2xl backdrop-blur-md">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">
              Forgot Password
            </h1>

            {/* Tab Toggle */}
            <div className="inline-flex bg-gray-100 shadow-md rounded-full p-1 mb-8">
              <button className="px-8 py-2 rounded-full text-sm font-medium bg-teal-500 cursor-pointer text-white">Reset Password</button>
              <button className="px-8 py-2 rounded-full text-sm font-medium cursor-pointer text-gray-600"> Login</button>
            </div>

            <p className="text-gray-600 text-md font-semibold mb-8">
              Enter your email address
            </p>
          </div>

          {/* email input */}
          <form className="space-y-6">
            <div className="mb-4">
              <label className="block text-sm pl-2 font-medium text-gray-700 mb-2">
                Enter email address
              </label>
              <div className="relative w-full">
            
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-12 px-4 pr-28 rounded-xl bg-white border border-gray-50 shadow-md focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-6 text-gray-700  hover:bg-teal-500 hover:text-white font-medium rounded-xl transition-colors  "
                >
                  Send otp
                </button>
              </div>
            </div>
            {/* opt part */}
            <div className="mb-4">
              <label className="block text-sm pl-2 font-medium text-gray-700 mb-2">
                OTP
              </label>
              <div className="relative w-full">
                <input
                  type="tel"
                  maxLength="6"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="Enter OTP"
                  className="w-full h-12 px-4 pr-28 rounded-xl bg-white border border-gray-50 shadow-md focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-6 flex items-center gap-1 text-gray-700  hover:bg-teal-500 hover:text-white font-medium rounded-xl transition-colors "
                >
                  <TbShieldCheckFilled className="text-xl" />
                  Verify
                </button>
              </div>
            </div>

            {/* only show when email verified  */}
            {/* <div>
              <div className="mb-4">
                <label className="block text-sm pl-2 font-medium text-gray-700 mb-2">
                  New Password
                </label>
                <div className="flex w-full">
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full h-12 px-4 rounded-xl border border-gray-50 shadow-md focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm pl-2 font-medium text-gray-700 mb-2">
                  Confirm new password
                </label>
                <div className="flex w-full">
                  <input
                    type="password"
                    placeholder="Re-enter password"
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 shadow-md focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>
              </div>
              <p className="text-gray-600 text-md font-semibold mb-8">Create a strong password with a mix of letters, numbers and symbols</p>
            </div> */}

            {/* button */}
            <button
              type="submit"
              className="w-full h-12 bg-teal-500 shadow-md hover:bg-teal-600 text-white font-medium rounded-xl transition-colors"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
