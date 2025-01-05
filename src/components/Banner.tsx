import { Link } from "gatsby"
import React from "react"

const Banner: React.FunctionComponent = () => (
  <div className="sticky top-0 py-4 text-center text-black bg-icterine justify-self-end font-bold font-mono text-xl">
    <Link to="/programs/hey-chat">In 2024, our students created their own AI chatbots using LLMs, check out how they did it 🤖💖!</Link>
  </div>
)

export default Banner
