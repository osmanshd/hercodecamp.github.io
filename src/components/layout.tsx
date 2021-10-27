/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import Logo from "../assets/logo-mark.inline.svg"
import { StaticImage } from "gatsby-plugin-image"
import Marquee from "react-easy-marquee"
import {
  Github,
  Instagram,
  Twitter,
  Youtube,
} from "@styled-icons/boxicons-logos"
import Banner from "./Banner"
import { ChevronCompactDown } from "@styled-icons/bootstrap"

// TODO: add seo (helmet descriptions etc.)

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <div>
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export const Header: React.FunctionComponent<{ bg?: "light" | "dark" }> = ({
  bg = "dark",
}) => (
  <nav className="w-full px-8 pt-8 mx-auto max-w-7xl">
    <ul
      className={`flex flex-wrap items-center justify-center gap-4  uppercase align-middle md:justify-end md:flex-nowrap whitespace-nowrap ${
        bg === "dark" ? "text-gray-200" : "text-gray-800"
      }`}
    >
      <li className="w-full text-center flex-full md:text-left md:w-auto">
        <Link
          className={`${
            bg === "dark"
              ? "text-white hover:text-icterine"
              : "text-black hover:text-iris"
          }`}
          to="/"
        >
          {/* TODO: add a fun glow effect to this one. */}
          <Logo className="text-left h-10 md:h-8 inline-block mt-[-5px]" />
          <span className="ml-2 text-2xl font-black uppercase md:text-xl ">
            HER CODE CAMP
          </span>
        </Link>
      </li>
      <li>
        <Link
          className={`${
            bg === "dark" ? "hover:text-icterine" : "hover:text-iris"
          }`}
          to="/about"
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          className={`${
            bg === "dark" ? "hover:text-icterine" : "hover:text-iris"
          }`}
          to="/programs"
        >
          Programs
        </Link>
      </li>
      <li>
        <Link
          className={`${
            bg === "dark" ? "hover:text-icterine" : "hover:text-iris"
          }`}
          to="/volunteer"
        >
          Get Involved
        </Link>
      </li>
      <li>
        <Link
          className={`normal-case ${
            bg === "dark" ? "hover:text-icterine" : "hover:text-iris"
          }`}
          to="/faq"
        >
          FAQs
        </Link>
      </li>
    </ul>
  </nav>
)

export const Hero: React.FunctionComponent = ({ children }) => (
  <section className="relative min-h-screen md:h-1 bg-gradient-to-r from-darkIris to-iris animate-text-in">
    <div className="flex-col md:h-full md:flex ">
      <div className="self-stretch pb-12">
        <Header />
      </div>
      <div className="flex-1 px-8 pb-12 mx-auto max-w-7xl">
        <div className="grid-cols-1 gap-8 pt-8 mb-4 md:grid-cols-3 md:grid md:gap-0 md:mb-0 lg:mt-32">
          <div className="col-span-2 b-12 md:mb-0">
            {children}
            <Link to="#first-section">
              <ChevronCompactDown className="h-10 mt-10 text-center text-white animate-bounce" />
            </Link>
          </div>
          {/* TODO: I should add a fun glowing animation to this background it could look cool. */}
          {/* TODO: Image is loaded with a weird background thing. */}
          {/* <div className=""> */}
          <StaticImage
            src="../assets/code-camp-art.png"
            className="w-full col-span-1 place-self-center justify-self-end"
            imgStyle={{ objectFit: "contain" }}
            alt="Illustration of camp participants sitting around a fire where the logs are made using code tags."
          />
          {/* </div> */}
        </div>
      </div>
      <Banner />
    </div>
  </section>
)

export const Footer = () => (
  <section className="bg-gray-800 py-14">
    <h2 className="mb-4 text-4xl text-center text-white font-body">Sponsors</h2>
    <div className="flex flex-wrap items-center justify-center gap-8 px-8 mt-8 mb-12 md:px-0">
      <a
        href="https://www.thecodinghive.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StaticImage
          height={75}
          alt="Coding Hive"
          src="../assets/sponsor-coding-hive.png"
        />
      </a>

      <a href="https://delphia.com/" target="_blank" rel="noopener noreferrer">
        <StaticImage
          height={50}
          alt="Delphia"
          src="../assets/sponsor-delphia.png"
        />
      </a>

      <a href="https://oicr.on.ca/" target="_blank" rel="noopener noreferrer">
        <StaticImage
          height={75}
          alt="Ontario Insitute for Cancer Research"
          src="../assets/sponsor-oicr.png"
        />
      </a>
      <a
        href="https://www.rotman.utoronto.ca/FacultyAndResearch/EducationCentres/TDMDAL"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StaticImage
          height={75}
          alt="TD Rotman"
          src="../assets/sponsor-td-rotman.png"
        />
      </a>
      <a
        href="https://www.utoronto.ca/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StaticImage
          height={75}
          alt="University of Toronto"
          src="../assets/sponsor-uoft.png"
        />
      </a>
    </div>
    {/* @ts-ignore */}
    {/* <Marquee pauseOnHover duration={20000} height={125}>
      <div className="mx-6">
        <StaticImage
          height={75}
          alt="Coding Hive"
          src="../assets/sponsor-coding-hive.png"
        />
      </div>
      <div className="mx-6">
        <StaticImage
          height={75}
          alt="Delphia"
          src="../assets/sponsor-delphia.png"
        />
      </div>
      <div className="mx-6">
        <StaticImage
          height={75}
          alt="Ontario Insitute for Cancer Research"
          src="../assets/sponsor-oicr.png"
        />
      </div>
      <div className="mx-6">
        <StaticImage
          height={75}
          alt="TD Rotman"
          src="../assets/sponsor-td-rotman.png"
        />
      </div>
      <div className="mx-6">
        <StaticImage
          height={75}
          alt="University of Toronto"
          src="../assets/sponsor-uoft.png"
        />
      </div>
    </Marquee> */}

    <div className="flex justify-center h-10 gap-3 mb-4 text-gray-400 content-middle">
      <a
        href="https://www.youtube.com/channel/UCa_Ck4Sdsq2QB21djQuFeCw"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Youtube className="h-full" />
      </a>
      <a
        href="https://github.com/hercodecamp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="h-full" />
      </a>
      <a
        href="https://twitter.com/hercodecamp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter className="h-full" />
      </a>
      <a
        href="https://www.instagram.com/hercodecamp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram className="h-full" />
      </a>
    </div>
    <p className="text-center text-gray-400">© 2021 HER CODE CAMP</p>
  </section>
)

export default Layout
