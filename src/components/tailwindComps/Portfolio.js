import React from 'react'
import { Link } from 'gatsby'

import eaglePlumeDesktop from '../../images/eaglePlumes.webp'
import eagle from '../../images/eagle.png'
import spotter from '../../images/spotter.png'
import spotterMobile from '../../images/spotterMobile.webp'
import marketDesktop from '../../images/market.webp'
import marketMobile from '../../images/marketMobile.webp'
import earth from '../../images/earth.png'
const portfolio = [
    {
      name: "Earth",

      desktop: earth,

      link: 'https://www.earthandelle.netlify.app/'
    },
    {
      name: 'Spotter',

      desktop: spotter,


    },
    {
      name: 'Eagle',

      desktop: eagle,
      link: 'https://www.eagle-plumes.com/'
    }
  ]
export default function Example() {
    return (
      <div id="portfolio" className="relative bg-indigo-50 pt-16 -mb-8 overflow-hidden sm:pt-24 lg:pt-32" style={{gridColumn:"span 7", gridRowStart:"second", gridRowEnd:"third"}}>
        <div className=" w-screen">
          <div>

          <h2 className="mt-2 max-w-3xl mx-auto text-4xl leading-8 font-extrabold tracking-tight text-default text-center lg:ml-16">
            Our Portfolio
          </h2>

            </div>
            {portfolio.map(example => (
                <>


                <div className={` flex  flex-col h-full -mb-6 ${example.name === 'Earth' ? '-mb-8' : ''}  w-screen`}>

                  <Link to={example.link}>
                  <img
                    className=" relative w-screen "
                    src={example.desktop}
                    alt=""
                    width="300px"
                    height="200px"
                    loading="lazy"
                  />
                  </Link>
                </div>
                </>
            ))}

        </div>
      </div>
    )
  }
