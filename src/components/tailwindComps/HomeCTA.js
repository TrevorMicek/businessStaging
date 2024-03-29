import React from 'react'

export default function Example() {
    return (
      <div className="bg-indigo-50" style={{gridColumn:"span 7", gridRowStart:"third", gridRowEnd:"span 7"}}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-default">See how we can help you </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/product"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-default hover:text-wh hover:bg-grn"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }