import React, { useState } from 'react'
import { Link } from 'gatsby'
import Confirm from './Confirmation'
import { CheckIcon, XIcon } from '@heroicons/react/solid'

//Click <span onClick={() => setConfirm(true)} className="underline cursor-pointer text-blue-300">here</span> to try our free tier.
const ecommercePlans = [
  {
    title: 'Budget',
    featured: false,
    description: 'Convenient features to take your business to the next level.',
    priceMonthly: 210,
    priceYearly: '2,520',
    savings: 420,
    pages: 4,
    link: 'https://buy.stripe.com/6oE4gI95M3yg1X26oG',
    yearLink: 'https://buy.stripe.com/bIYcNe81I1q8bxC3cv',
    mainFeatures: [
      { id: 1, value: 'Start selling online NOW' },
      { id: 2, value: 'Fits all business info' },
      { id: 3, value: 'Link all your assets' },
      { id: 4, value: 'Partial ecommerce solution' },
      { id: 5, value: 'Secures sensitive data' },
      { id: 6, value: 'Buy buttons instead of cart' },
    ],
  },
  {
    title: 'Standard',
    featured: true,
    description: 'The best financial services for your thriving business.',
    priceMonthly: 330,
    priceYearly: '3,299',
    savings: 660,
    pages: 6,
    link: 'https://buy.stripe.com/6oE28Agye1q831628j',
    yearLink: 'https://buy.stripe.com/bIY8wYchY5Go59e9AQ',
    mainFeatures: [
      { id: 1, value: 'Revenue directly from site' },
      { id: 2, value: 'Better leads & conversions' },
      { id: 3, value: 'Inventory management included' },
      { id: 4, value: 'Full ecommerce solution' },
      { id: 5, value: 'Easily scalable' },
      { id: 6, value: 'Better user experience' },
      { id: 7, value: 'Secures sensitive data' },
      { id: 8, value: 'Link all your assets' },
      { id: 9, value: 'Fits all business info' },
      { id: 10, value: 'Cart & checkout pages' },
    ],
  },
  {
    title: 'Standard',
    featured: false,
    description: 'The best financial services for your thriving business.',
    priceMonthly: 475,
    priceYearly: '5,700',
    savings: 950,
    pages: 6,
    link: 'https://buy.stripe.com/6oE28Agye1q831628j',
    yearLink: 'https://buy.stripe.com/bIY8wYchY5Go59e9AQ',
    mainFeatures: [
      { id: 1, value: 'Revenue directly from site' },
      { id: 2, value: 'Better leads & conversions' },
      { id: 3, value: 'Inventory management included' },
      { id: 4, value: 'Full ecommerce solution' },
      { id: 5, value: 'Easily scalable' },
      { id: 6, value: 'Better user experience' },
      { id: 7, value: 'Secures sensitive data' },
      { id: 8, value: 'Link all your assets' },
      { id: 9, value: 'Fits all business info' },
      { id: 10, value: 'Cart & checkout pages' },
    ],
  }
]


const standardPlans = [
  {
    title: 'Budget',
    featured: false,
    description: 'Convenient features to take your business to the next level.',
    priceMonthly: 115,
    priceYearly: '1,380',
    savings: 230,
    link: 'https://buy.stripe.com/28o00s0zgfgYatyeV2',
    yearLink: 'https://buy.stripe.com/fZeaF6eq65Go8lq28l',
    pages: 3,
    mainFeatures: [
      { id: 1, value: 'Start your online presence' },
      { id: 2, value: 'Full website solution'},
      { id: 3, value: 'Fits all business info' },
      { id: 4, value: 'Link all your assets' },
      { id: 5, value: 'Easily scalable' },
      { id: 6, value: 'Centralized business info' },
    ],
  },
  {
    title: 'Standard',
    featured: true,
    description: 'The best financial services for your thriving business.',
    priceMonthly: 179,
    priceYearly: '1,889',
    savings: 378,
    pages: 5,
    link: 'https://buy.stripe.com/aEUbJaa9Q3yg3164gm',
    yearLink: 'https://buy.stripe.com/dR68wYa9Q8SAgRWdR2',
    mainFeatures: [
      { id: 1, value: 'Better leads & conversions' },
      { id: 2, value: 'Sell services directly on site' },
      { id: 3, value: 'Customers easily find you' },
      { id: 4, value: 'Fits all business info' },
      { id: 5, value: 'Full website solution' },
      { id: 6, value: 'Easily scalable' },
      { id: 7, value: 'Centralized business info' },
    ],
  },
  {
    title: 'Standard',
    featured: false,
    description: 'The best financial services for your thriving business.',
    priceMonthly: 265,
    priceYearly: '3,180',
    savings: 530,
    pages: 5,
    link: 'https://buy.stripe.com/aEUbJaa9Q3yg3164gm',
    yearLink: 'https://buy.stripe.com/dR68wYa9Q8SAgRWdR2',
    mainFeatures: [
      { id: 1, value: 'Better leads & conversions' },
      { id: 2, value: 'Sell services directly on site' },
      { id: 3, value: 'Customers easily find you' },
      { id: 4, value: 'Fits all business info' },
      { id: 5, value: 'Full website solution' },
      { id: 6, value: 'Easily scalable' },
      { id: 7, value: 'Centralized business info' },
    ],
  }
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const confirmMessage = ['Thanks for choosing Websites By Trevor!', ' We will reach out ASAP to start collaborating on your new free site']
export default function Pricing() {
  const [confirm, setConfirm] = useState(false)
  const [packages, setPackages] = useState('ecom')

  const sendForm = (e) => {
    return e.preventDefault
  }
  const PackageToggle = () => (
    <>

    {
      packages === 'ecom' ?
      <div className="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-indigo-700 rounded-tl-lg rounded-tr-lg lg:block"
      />
{confirm ? <Confirm message={confirmMessage} confirm={() =>setConfirm(false)} /> : null}
      <div className="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
        {ecommercePlans.map((plan) => (
          <div
            key={plan.title}
            className={classNames(
              plan.featured ? 'bg-white ring-2 ring-indigo-700 shadow-md' : 'bg-indigo-700 lg:bg-transparent',
              'pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12'
            )}
          >
            <div>
              <h3
                className={classNames(
                  plan.featured ? 'text-indigo-600' : 'text-white',
                  'text-sm font-semibold uppercase tracking-wide'
                )}
              >
                {plan.title} {plan.title === 'Standard' && plan.featured === false ? <span className="lowercase">- you own the code</span> : ''} <br />{plan.pages} pages
              </h3>
              <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                <div className="mt-3 flex items-center">
                  <p
                    className={classNames(
                      plan.featured ? 'text-indigo-600' : 'text-white',
                      'text-4xl mb-20 font-extrabold tracking-tight'
                    )}
                  >
                    <span className="mr-1">$</span>{plan.priceMonthly}
                  </p>
                  <div className="ml-4">
                    <p className={classNames(plan.featured ? 'text-gray-700' : 'text-white', 'text-sm')}>
                    / month or <br />
                    <a href={plan.link} className={classNames(
                      plan.featured
                      ? 'underline text-indigo-700 hover:text-indigo-600'
                      : 'underline text-gray-300 hover:text-gray-400')}>Buy yearly</a> (save ${plan.savings})
                    </p>
                    <p className={classNames(plan.featured ? 'text-gray-500' : 'text-indigo-200', 'text-sm')}>
                      {plan.title === 'Standard' && plan.featured === false ? "4-year Contract" : "Yearly Contracts"}
                    </p>
                  </div>
                </div>

                <a
                  href={plan.link ? plan.link : null}
                  onClick={!plan.link ? () => setConfirm(true) : null}
                  className={classNames(
                    plan.featured
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-white text-indigo-600 hover:bg-indigo-50',
                    'mt-6 w-full h-10 inline-block whitespace-nowrap py-2 px-10 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full'
                  )}
                >
                  Buy {plan.title}
                </a>

              </div>
            </div>
            <h4 className="sr-only">Features</h4>
            <ul
              role="list"
              className={classNames(
                plan.featured
                  ? 'border-gray-200 divide-gray-200'
                  : 'border-indigo-500 divide-indigo-500 divide-opacity-75',
                'mt-7 border-t divide-y lg:border-t-0'
              )}
            >
              {plan.mainFeatures.map((mainFeature) => (
                <li key={mainFeature.id} className="py-2 flex items-center">
                  <CheckIcon
                    className={classNames(
                      plan.featured ? 'text-indigo-500' : 'text-indigo-200',
                      'w-5 h-5 flex-shrink-0'
                    )}
                    aria-hidden="true"
                  />
                  <span
                    className={classNames(
                      plan.featured ? 'text-gray-600' : 'text-white',
                      'ml-3 text-sm font-medium'
                    )}
                  >
                    {mainFeature.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div> :

<div className="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
{/* Decorative background */}
<div
  aria-hidden="true"
  className="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-indigo-700 rounded-tl-lg rounded-tr-lg lg:block"
/>
{confirm ? <Confirm confirm={() => setConfirm(false)} /> : null}
<div className="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
  {standardPlans.map((plan) => (
    <div
      key={plan.title}
      className={classNames(
        plan.featured ? 'bg-white ring-2 ring-indigo-700 shadow-md' : 'bg-indigo-700 lg:bg-transparent',
        'pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12'
      )}
    >
      <div>
        <h3
          className={classNames(
            plan.featured ? 'text-indigo-600' : 'text-white',
            'text-sm font-semibold uppercase tracking-wide'
          )}
        >
          {plan.title} {plan.title === 'Standard' && plan.featured === false ? <span className="lowercase">- you own the code</span> : ''} <br />{plan.pages} pages
        </h3>
        <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
          <div className="mt-3 flex items-center">
            <p
              className={classNames(
                plan.featured ? 'text-indigo-600' : 'text-white',
                'text-4xl mb-20 font-extrabold tracking-tight'
              )}
            >
              ${plan.priceMonthly}
            </p>
            <div className="ml-4">
              <p className={classNames(plan.featured ? 'text-gray-700' : 'text-white', 'text-sm')}>
              / month or <br /> <a href={plan.link} className={classNames(
                      plan.featured
                      ? 'underline text-indigo-700 hover:text-indigo-600'
                      : 'underline text-gray-300 hover:text-gray-400')}>Buy yearly</a> (save ${plan.savings})
              </p>
              <p className={classNames(plan.featured ? 'text-gray-500' : 'text-indigo-200', 'text-sm')}>
              {plan.title === 'Standard' && plan.featured === false ? "4-year Contract" : "Yearly Contracts"}
              </p>
            </div>
          </div>
               <a
                  href={plan.link ? plan.link : null}
                  onClick={!plan.link ? () => setConfirm(true) : null}
                  className={classNames(
                    plan.featured
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-white text-indigo-600 hover:bg-indigo-50',
                    'mt-6 w-full h-10 inline-block whitespace-nowrap py-2 px-10 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full'
                  )}
                >
                  Buy {plan.title}
                </a>


        </div>
      </div>
      <h4 className="sr-only">Features</h4>
      <ul
        role="list"
        className={classNames(
          plan.featured
            ? 'border-gray-200 divide-gray-200'
            : 'border-indigo-500 divide-indigo-500 divide-opacity-75',
          'mt-7 border-t divide-y lg:border-t-0'
        )}
      >
        {plan.mainFeatures.map((mainFeature) => (
          <li key={mainFeature.id} className="py-2 flex items-center">
            <CheckIcon
              className={classNames(
                plan.featured ? 'text-indigo-500' : 'text-indigo-200',
                'w-5 h-5 flex-shrink-0'
              )}
              aria-hidden="true"
            />
            <span
              className={classNames(
                plan.featured ? 'text-gray-600' : 'text-white',
                'ml-3 text-sm font-medium'
              )}
            >
              {mainFeature.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
</div>
    }
    </>
  )


  return (
    <div className="bg-gray-50" style={{gridRow:"span 9", gridColumn: 'span 7'}}>
      <div className="pb-12 relative bg-indigo-600">
        {/* Overlapping background */}
        <div aria-hidden="true" className="hidden absolute bg-gray-50 w-full h-6" />

        <div className=" relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            <span className="block lg:inline">Simple pricing, </span>
            <span className="block lg:inline">all-in-one packages.</span>
          </h1>
          <p className="mt-4 text-xl text-indigo-100">
            Everything you need, nothing you don't. Pick a plan that best suits your business. Click <Link to="/" className="underline cursor-pointer text-blue-300">here</Link> to create a 100% custom package.
          </p>

        </div>

        <h2 className="sr-only">Plans</h2>

        {/* Toggle */}
        <div className="relative mt-12 flex justify-center sm:mt-16">
          <div className="bg-indigo-700 p-0.5 rounded-lg flex">
            <button
              type="button"
              onClick={() => setPackages('ecom')}
              className={`${packages === 'ecom' ? 'relative bg-white py-2 px-6 border-indigo-700 rounded-md shadow-sm text-sm font-medium text-indigo-700 whitespace-nowrap hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10' : 'ml-0.5 relative py-2 px-6 border border-transparent rounded-md text-sm font-medium text-indigo-200 whitespace-nowrap hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10'}`}
            >
              Ecommerce
            </button>
            <button
              type="button"
              onClick={() => setPackages('standard')}
              className={`${packages === 'standard' ? 'relative w-36 bg-white py-2 px-6 border-indigo-700 rounded-md shadow-sm text-sm font-medium text-indigo-700 whitespace-nowrap hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10' : 'ml-0.5 relative py-2 px-6 border border-transparent rounded-md text-sm font-medium text-indigo-200 whitespace-nowrap hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10'}`}
            >
              Standard
            </button>
          </div>
        </div>
        <PackageToggle />

      </div>


            </div>

  )
}
