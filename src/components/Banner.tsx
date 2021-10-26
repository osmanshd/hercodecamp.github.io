import { Link } from "gatsby"
import React from "react"

const Banner: React.FunctionComponent = () => (
  <div className="py-2 text-center text-white bg-gray-900 justify-self-end font-extralight">
    <Link to="/programs">PROGRAMS OPEN FOR APPLICATIONS NOW</Link>
  </div>
)

export default Banner
