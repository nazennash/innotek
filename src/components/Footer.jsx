import React from 'react'

export const Footer = () => {
  return (
    <>
    <footer className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto flex md:items-center md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center">
      <div className="flex title-font font-medium items-center justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      </div>
      <p className="mt-2 text-sm text-gray-500">Bridging the Digital Divide</p>
    </div>
  </div>

  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">
        {new Date().getFullYear()} © Innovative Digital Computers
      </p>
    </div>
  </div>
</footer>
    </>
  )
}
