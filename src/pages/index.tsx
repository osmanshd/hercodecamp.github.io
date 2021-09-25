import * as React from "react"
import { Link, PageProps } from "gatsby"

import Layout from "../components/layout"

const IndexPage: React.FunctionComponent<PageProps> = () => (
  <Layout>
    <section className="h-screen bg-black">
      <div className="max-w-7xl mx-auto">
        <nav className="pt-8  text-right w-full">
          <ul className="text-gray-300 uppercase flex gap-2 justify-end">
            <li className="inline">Workshops</li>
            <li className="inline">Volunteers</li>
            <li className="inline">FAQ</li>
          </ul>
        </nav>
        {/* <h1 className=" ml-[-6px] text-transparent bg-clip-text bg-gradient-to-t from-iris to-flame text-9xl font-black"> */}
        <h1 className=" ml-[-6px] text-iris text-9xl font-black">
          HER CODE CAMP
        </h1>
        <div className="max-w-xl">
          <p className="text-lg font-mono text-icterine mb-4 text-justify">
            a free computer science camp and community for senior high school
            women and non-binary students (including cis and trans women) in the
            greater toronto area.
          </p>
          {/* <div className="text-center">
            <button className="shadow-2xl rounded px-12 p-2 text-lg bg-flame text-gray-50">
              apply now
            </button>
          </div> */}
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-7xl py-20">
      <h2 className="font-bold text-4xl text-gray-800">Workshops</h2>
    </section>
  </Layout>
)

export default IndexPage
