
function Logo() {

  return (
    <div>
      <div className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64">
        <div className="flex items-center tracking-tighter font-sans select-none">
          <span className="text-3xl font-extrabold text-red-700">NET</span>
          <span className="text-3xl font-extrabold text-gray-900">GRUD</span>
        </div>
      </div>
    </div>
  )
}

export const LogoHeader = () => {
  return (
    <div className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40">
      <div className="flex items-center tracking-tighter font-sans select-none">
        <span className="text-2xl font-extrabold text-red-700">NET</span>
        <span className="text-2xl font-extrabold text-gray-900">GRUD</span>
      <span className="text-sm font-medium leading-none ml-1 mt-1.5 text-gray-900">ALUMNI</span>
      </div>
    </div>
  )
}

export default Logo