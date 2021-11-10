import { PageProps } from "gatsby"
import * as React from "react"
import { navigate } from "gatsby"

import Layout, { Header } from "../components/layout"

const NotFoundPage: React.FunctionComponent<PageProps> = () => (
  <Layout>
    <section className="relative min-h-screen md:h-1 bg-radial-gradient-br from-icterine to-iris animate-text-in">
      <div className="flex-col items-center md:h-full md:flex ">
        <div className="self-stretch flex-1 mb-auto">
          <Header />
        </div>
        <div className="flex flex-col justify-center w-full px-8 pt-10 mx-auto text-left md:pt-0 place-self-auto max-w-7xl">
          <div>
            <h1 className="mb-2 text-4xl font-bold text-white uppercase md:text-7xl">
              404: PAGE NOT FOUND 😟
            </h1>
            <p className="mb-4 text-xl text-white font-extralight font-body">
              Oh no! We couldn’t find the page you were looking for.
            </p>
            <button
              className={`inline-block px-5 py-2 font-mono font-bold text-black uppercase cursor-pointer bg-icterine hover:bg-iris hover:text-white"`}
              onClick={() => {
                navigate(-1)
              }}
            >
              Go Back
            </button>
          </div>
        </div>
        <div className="flex-1 mt-auto" />
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
