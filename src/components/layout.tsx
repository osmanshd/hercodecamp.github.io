/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import PropTypes from "prop-types"
import React from "react"
import { Link, PageProps } from "gatsby"
import Logo from "../assets/logo-mark.inline.svg"
import { StaticImage } from "gatsby-plugin-image"
import Marquee from "react-easy-marquee"
import Helmet from "react-helmet"
import {
  Github,
  Instagram,
  Twitter,
  Youtube,
} from "@styled-icons/boxicons-logos"

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

export const Header: React.FunctionComponent = () => (
  <nav className="hidden w-full pt-8 text-right md:block">
    <ul className="flex items-center justify-end gap-4 text-gray-300 uppercase align-middle whitespace-nowrap">
      <li className="flex-1 text-left">
        <Link className="relative group" to="/">
          {/* TODO: add a fun glow effect to this one. */}
          <Logo className="text-left h-8 group-hover:text-icterine text-white inline-block mt-[-5px]" />
          <span className="ml-2 text-xl font-black text-white uppercase group-hover:text-icterine">
            HER CODE CAMP
          </span>
        </Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/programs">Programs</Link>
      </li>
      <li>
        <Link to="/volunteer">Get Involved</Link>
      </li>
      <li className="normal-case">
        <Link to="/faq">FAQs</Link>
      </li>
    </ul>
  </nav>
)

export const LightHeader: React.FunctionComponent = () => (
  <nav className="hidden w-full pt-8 text-right md:block">
    <ul className="flex items-center justify-end gap-4 text-gray-600 uppercase align-middle whitespace-nowrap ">
      <li className="flex-1 text-left">
        <Link className="relative group" to="/">
          {/* TODO: add a fun glow effect to this one. */}
          <Logo className="text-left h-8 group-hover:text-icterine text-black inline-block mt-[-5px]" />
          <span className="ml-2 text-xl font-black text-black uppercase group-hover:text-icterine">
            HER CODE CAMP
          </span>
        </Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/programs">Programs</Link>
      </li>
      <li>
        <Link to="/volunteer">Get Involved</Link>
      </li>
      <li className="normal-case">
        <Link to="/faq">FAQs</Link>
      </li>
    </ul>
  </nav>
)

export const Hero: React.FunctionComponent = ({ children }) => (
  <section className="relative min-h-screen md:h-1 bg-gradient-to-r from-darkIris to-iris animate-text-in">
    <div className="flex-col px-8 pb-12 mx-auto max-w-7xl md:flex md:h-full">
      <Header />
      <div
        style={{
          gridTemplateColumns: "2fr 1fr",
        }}
        className="flex-1 h-full grid-cols-1 gap-8 pt-8 mb-4 md:grid md:grid-cols-2 md:gap-0 md:mb-0 md:mt-32"
      >
        <div className="mb-12 md:mb-0">{children}</div>
        {/* TODO: I should add a fun glowing animation to this background it could look cool. */}
        {/* TODO: Image is loaded with a weird background thing. */}
        <StaticImage
          src="../assets/code-camp-art.png"
          className="self-end w-full p-8"
          imgStyle={{ objectFit: "contain" }}
          alt="Illustration of camp participants sitting around a fire where the logs are made using code tags."
        />
      </div>
    </div>
    {/* TODO: Should be visible from first page. */}
    {/* TODO: should be easy to edit */}
    <div className="w-full py-2 text-center text-white bg-gray-900 font-extralight">
      PROGRAMS OPEN FOR APPLICATIONS NOW
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
    <Marquee pauseOnHover duration={20000} height={125}>
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
    </Marquee>

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
