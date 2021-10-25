import { Link } from "gatsby"

import React from "react"
;<section
  id="program-with-us"
  style={{
    backgroundImage:
      "radial-gradient(circle at 50% 50%, rgba(240,234,80,1) 0%, #FFFFFF 100%)",
  }}
>
  <div className="px-20 pt-20 pb-32 mx-auto">
    <h2 className="mb-2 font-mono text-4xl font-medium text-center">
      Come <i>*program*</i> with us!
    </h2>
    <p className="mb-10 font-light text-center">
      Our programs are designed for begginners with little to no programming
      experience. Oh and they're free!
    </p>
    <div className="flex justify-center gap-10">
      <div className="px-4 pt-3 bg-gray-800 rounded-lg shadow-2xl">
        <div className="flex gap-1">
          <div className="w-4 h-4 font-mono bg-red-500 rounded-full">
            {/* x */}
          </div>
          <div className="w-4 h-4 font-mono bg-yellow-500 rounded-full">
            {/* - */}
          </div>
          <Link to="/apply">
            <div className="w-4 h-4 font-mono bg-green-500 rounded-full">
              {/* [] */}
            </div>
          </Link>
        </div>
        <div className="py-5 my-2">
          <h3 className="font-mono text-xl text-icterine">
            Mentorship Program
          </h3>
          <span className="font-mono text-md text-gray-50">
            August 12-24, 2021
          </span>
          <p className="mt-2 font-mono text-gray-400 text-md">
            Meet weekly with a teaching assistant to put together a project in 2
            weeks.
          </p>
          <Link
            className="inline-block px-5 py-2 mt-5 font-mono font-bold uppercase bg-icterine hover:bg-iris hover:text-white"
            to="/subscribe"
          >
            Apply
          </Link>
        </div>
      </div>
      <div className="px-4 pt-3 bg-gray-800 rounded-lg shadow-2xl">
        <div className="flex gap-1">
          <div className="w-4 h-4 font-mono align-middle bg-red-500 rounded-full font-sm">
            {/* x */}
          </div>
          <div className="w-4 h-4 font-mono align-middle bg-yellow-500 rounded-full font-sm">
            {/* - */}
          </div>
          <Link to="/apply">
            <div className="w-4 h-4 font-mono align-middle bg-green-500 rounded-full font-sm">
              {/* [] */}
            </div>
          </Link>
        </div>
        <div className="py-5 my-2">
          <h3 className="font-mono text-xl text-icterine">
            Mentorship Program
          </h3>
          <span className="font-mono text-md text-gray-50">
            August 12-24, 2021
          </span>
          <p className="mt-2 font-mono text-gray-400 text-md">
            Meet weekly with a teaching assistant to put together a project in 2
            weeks.
          </p>
          <Link
            className="inline-block px-5 py-2 mt-5 font-mono font-bold uppercase bg-icterine hover:bg-iris hover:text-white"
            to="/subscribe"
          >
            Apply
          </Link>
        </div>
      </div>
      <div className="px-4 pt-3 bg-gray-800 rounded-lg shadow-2xl">
        <div className="flex gap-1">
          <div className="w-4 h-4 font-mono align-middle bg-red-500 rounded-full font-sm">
            {/* x */}
          </div>
          <div className="w-4 h-4 font-mono align-middle bg-yellow-500 rounded-full font-sm">
            {/* - */}
          </div>
          <Link to="/apply">
            <div className="w-4 h-4 font-mono align-middle bg-green-500 rounded-full font-sm">
              {/* [] */}
            </div>
          </Link>
        </div>
        <div className="py-5 my-2">
          <h3 className="font-mono text-xl text-icterine">
            Mentorship Program
          </h3>
          <span className="font-mono text-md text-gray-50">
            August 12-24, 2021
          </span>
          <p className="mt-2 font-mono text-gray-400 text-md">
            Meet weekly with a teaching assistant to put together a project in 2
            weeks.
          </p>
          <Link
            className="inline-block px-5 py-2 mt-5 font-mono font-bold uppercase bg-icterine hover:bg-iris hover:text-white"
            to="/subscribe"
          >
            Apply
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
