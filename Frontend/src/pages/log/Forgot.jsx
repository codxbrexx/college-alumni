
import { TbShieldCheckFilled } from "react-icons/tb";
import { useTheme } from '../../context/ThemeContext';

export default function Forgot() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen flex justify-center items-center font-['Poppins'] transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Right Side - Forgot Form */}
      <div className={`w-full max-w-md rounded-2xl flex flex-col items-center justify-center p-12 border shadow-2xl backdrop-blur-md transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-800/50 border-gray-700 text-white' 
          : 'bg-white/50 border-white/30 text-gray-900'
      }`}>
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className={`text-2xl font-semibold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Forgot Password
            </h1>

            {/* Tab Toggle */}
            <div className={`inline-flex shadow-md rounded-full p-1 mb-8 ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              <button className={`px-8 py-2 rounded-full text-sm font-medium cursor-pointer ${
                isDarkMode 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-teal-500 text-white'
              }`}>Reset Password</button>
              <button className={`px-8 py-2 rounded-full text-sm font-medium cursor-pointer ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}> Login</button>
            </div>

            <p className={`text-md font-semibold mb-8 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Enter your email address
            </p>
          </div>

          {/* email input */}
          <form className="space-y-6">
            <div className="mb-4">
              <label className={`block text-sm pl-2 font-medium mb-2 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Enter email address
              </label>
              <div className="relative w-full">
            
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full h-12 px-4 pr-28 rounded-xl border shadow-md focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500' 
                      : 'bg-white border-gray-50 text-gray-900 placeholder-gray-500 focus:border-teal-500'
                  }`}
                />
                <button
                  type="button"
                  className={`absolute right-2 top-1/2 -translate-y-1/2 h-10 px-6 font-medium rounded-xl transition-colors ${
                    isDarkMode 
                      ? 'text-gray-300 hover:bg-teal-500 hover:text-white' 
                      : 'text-gray-700 hover:bg-teal-500 hover:text-white'
                  }`}
                >
                  Send otp
                </button>
              </div>
            </div>
            {/* opt part */}
            <div className="mb-4">
              <label className={`block text-sm pl-2 font-medium mb-2 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                OTP
              </label>
              <div className="relative w-full">
                <input
                  type="tel"
                  maxLength="6"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="Enter OTP"
                  className={`w-full h-12 px-4 pr-28 rounded-xl border shadow-md focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500' 
                      : 'bg-white border-gray-50 text-gray-900 placeholder-gray-500 focus:border-teal-500'
                  }`}
                />
                <button
                  type="button"
                  className={`absolute right-2 top-1/2 -translate-y-1/2 h-10 px-6 flex items-center gap-1 font-medium rounded-xl transition-colors ${
                    isDarkMode 
                      ? 'text-gray-300 hover:bg-teal-500 hover:text-white' 
                      : 'text-gray-700 hover:bg-teal-500 hover:text-white'
                  }`}
                >
                  <TbShieldCheckFilled className="text-xl" />
                  Verify
                </button>
              </div>
            </div>

            {/* only show when email verified  */}
            {/* <div>
              <div className="mb-4">
                <label className={`block text-sm pl-2 font-medium mb-2 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  New Password
                </label>
                <div className="flex w-full">
                  <input
                    type="password"
                    placeholder="Enter password"
                    className={`w-full h-12 px-4 rounded-xl border shadow-md focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500' 
                        : 'bg-white border-gray-50 text-gray-900 placeholder-gray-500 focus:border-teal-500'
                    }`}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className={`block text-sm pl-2 font-medium mb-2 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  Confirm new password
                </label>
                <div className="flex w-full">
                  <input
                    type="password"
                    placeholder="Re-enter password"
                    className={`w-full h-12 px-4 rounded-xl border shadow-md focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500' 
                        : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:border-teal-500'
                    }`}
                  />
                </div>
              </div>
              <p className={`text-md font-semibold mb-8 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>Create a strong password with a mix of letters, numbers and symbols</p>
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
