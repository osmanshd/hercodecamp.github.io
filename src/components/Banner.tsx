import { Link } from "gatsby"
import React from "react"

const Banner: React.FunctionComponent = () => (
  <div className="sticky top-0 py-2 text-center text-white bg-gray-900 justify-self-end font-extralight">
    <Link to="/programs">⚠️ Check out our upcoming programs now! </Link>
  </div>
)

export default Banner
