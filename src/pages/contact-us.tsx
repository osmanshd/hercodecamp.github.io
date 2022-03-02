import React from "react"
import { graphql, Link, PageProps } from "gatsby"
import Layout, { Footer, Hero } from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Header } from "../components/layout"

import Helmet from "react-helmet"

const ContactPage: React.FunctionComponent<PageProps> = ({ data }) => {
  return (
    <Layout>
      {/* Might need a minimum height. */}
      <Header bg="light" />
      <section className="flex h-screen py-20 mx-auto max-w-7xl px-11">

        <div className="m-auto text-center">
          <StaticImage
            className="w-1/2 h-1/2 mb-5"
            src="../assets/contact-us.png"
            alt="Rotman Coding Challenge Flyer"
          />
          <h1 className="mb-5 font-bold text-3xl font-body">We would love to hear from you 👋</h1>
          <p className="mb-5 font-extralight font-body">If you are interested in working with us or simply learning more, please get in touch.</p>
          <div className="font-extralight font-body">
            <span className="pt-2 pr-1">Email:</span><a href="mailto:info@hercodecamp.com?subject=Question about HER CODE CAMP">info@hercodecamp.com</a>
          </div>


        </div>
      </section>
      <Footer />
    </Layout>
  )
}

export default ContactPage;