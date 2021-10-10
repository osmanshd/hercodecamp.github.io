import * as React from "react"
import { Link, PageProps } from "gatsby"
import Logo from "../assets/logo-mark.inline.svg"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Marquee from "react-easy-marquee"
import Helmet from "react-helmet"
import {
  Github,
  Instagram,
  Twitter,
  Youtube,
} from "@styled-icons/boxicons-logos"

// Because the buttons are buttons they tab twice :(. I shoulda made them inline-blocks lollllll

const IndexPage: React.FunctionComponent<PageProps> = () => (
  <Layout>
    {/* Might need a minimum height. */}
    <Helmet title="HER CODE CAMP" />
    <section
      className="min-h-screen md:h-1
     bg-gradient-to-r from-darkIris to-iris relative animate-text-in"
    >
      <div className="px-8 max-w-7xl mx-auto md:flex flex-col md:h-full pb-12">
        <nav className="hidden md:block pt-8 text-right w-full">
          <ul className="text-gray-300 uppercase flex gap-4 justify-end align-middle whitespace-nowrap items-center">
            <li className="flex-1 text-left">
              <Link className="group relative" to="/">
                {/* TODO: add a fun glow effect to this one. */}
                <Logo className="text-left h-8 group-hover:text-icterine text-white inline-block mt-[-5px]" />
                <span className="ml-2 uppercase font-black text-xl text-white group-hover:text-icterine">
                  HER CODE CAMP
                </span>
              </Link>
            </li>
            <li>
              <Link to="/#why-hcc">Why HCC</Link>
            </li>
            <li>
              <Link to="/#about">About Us</Link>
            </li>
            <li>
              <Link to="/#apply">Apply Now</Link>
            </li>
            <li>
              <Link to="/#apply">Get Involved</Link>
            </li>
            <li className="normal-case">
              <Link to="/#apply">FAQs</Link>
            </li>
            <li>
              <Link to="/#apply">News</Link>
            </li>
          </ul>
        </nav>
        <div
          style={{
            gridTemplateColumns: "2fr 1fr",
          }}
          className="flex-1 md:grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-8 md:mb-0 mb-4 pt-8 md:mt-32 h-full"
        >
          <div className="mb-12 md:mb-0">
            <h1 className="text-white text-7xl uppercase font-bold mb-2">
              Ready to hack the future?
            </h1>
            <p className="text-xl text-white mb-4 font-extralight font-body">
              Join a free computer science community for high school women and
              non-binary students in the Greater Toronto Area.
            </p>
            <Link to="/register">
              <button className="px-5 py-2 uppercase font-mono font-bold bg-icterine  border-icterine border hover:bg-transparent hover:text-white mr-4">
                Register
              </button>
            </Link>
            <Link to="/get-involved">
              <button className="px-5 py-2 uppercase font-mono font-bold bg-icterine  border-icterine border hover:bg-transparent hover:text-white">
                Get Involved
              </button>
            </Link>
          </div>
          {/* TODO: I should add a fun glowing animation to this background it could look cool. */}
          {/* TODO: Image is loaded with a weird background thing. */}
          <StaticImage
            src="../assets/code-camp-art.png"
            className="w-full p-8 self-end"
            imgStyle={{ objectFit: "contain" }}
            alt="Illustration of camp participants sitting around a fire where the logs are made using code tags."
          />
        </div>
      </div>
    </section>
    <section
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 50%, rgba(240,234,80,1) 0%, #FFFFFF 100%)",
      }}
    >
      <div className="mx-auto px-20 pt-20 pb-32">
        <h2 className="font-mono text-4xl text-center font-medium mb-2">
          Come <i>*program*</i> with us!
        </h2>
        <p className="text-center font-light mb-10">
          Our programs are designed for begginners with little to no programming
          experience. Oh and they're free!
        </p>
        <div className="flex gap-10 justify-center">
          <div className="rounded-lg shadow-2xl bg-gray-800 pt-3 px-4">
            <div className="flex gap-1">
              <div className="rounded-full w-4 h-4 font-mono bg-red-500">
                {/* x */}
              </div>
              <div className="rounded-full w-4 h-4 font-mono bg-yellow-500">
                {/* - */}
              </div>
              <Link to="/apply">
                <div className="rounded-full w-4 h-4 font-mono bg-green-500">
                  {/* [] */}
                </div>
              </Link>
            </div>
            <div className="py-5 my-2">
              <h3 className=" font-mono text-xl text-icterine">
                Mentorship Program
              </h3>
              <span className="text-md font-mono text-gray-50">
                August 12-24, 2021
              </span>
              <p className="text-md font-mono text-gray-400 mt-2">
                Meet weekly with a teaching assistant to put together a project
                in 2 weeks.
              </p>
              <Link
                className="mt-5 inline-block px-5 py-2 uppercase font-mono font-bold bg-icterine  hover:bg-iris hover:text-white"
                to="/subscribe"
              >
                Apply
              </Link>
            </div>
          </div>
          <div className="rounded-lg shadow-2xl bg-gray-800 pt-3 px-4">
            <div className="flex gap-1">
              <div className="font-sm align-middle rounded-full w-4 h-4 font-mono bg-red-500">
                {/* x */}
              </div>
              <div className="font-sm align-middle rounded-full w-4 h-4 font-mono bg-yellow-500">
                {/* - */}
              </div>
              <Link to="/apply">
                <div className="font-sm align-middle rounded-full w-4 h-4 font-mono bg-green-500">
                  {/* [] */}
                </div>
              </Link>
            </div>
            <div className="py-5 my-2">
              <h3 className=" font-mono text-xl text-icterine">
                Mentorship Program
              </h3>
              <span className="text-md font-mono text-gray-50">
                August 12-24, 2021
              </span>
              <p className="text-md font-mono text-gray-400 mt-2">
                Meet weekly with a teaching assistant to put together a project
                in 2 weeks.
              </p>
              <Link
                className="mt-5 inline-block px-5 py-2 uppercase font-mono font-bold bg-icterine  hover:bg-iris hover:text-white"
                to="/subscribe"
              >
                Apply
              </Link>
            </div>
          </div>
          <div className="rounded-lg shadow-2xl bg-gray-800 pt-3 px-4">
            <div className="flex gap-1">
              <div className="font-sm align-middle rounded-full w-4 h-4 font-mono bg-red-500">
                {/* x */}
              </div>
              <div className="font-sm align-middle rounded-full w-4 h-4 font-mono bg-yellow-500">
                {/* - */}
              </div>
              <Link to="/apply">
                <div className="font-sm align-middle rounded-full w-4 h-4 font-mono bg-green-500">
                  {/* [] */}
                </div>
              </Link>
            </div>
            <div className="py-5 my-2">
              <h3 className=" font-mono text-xl text-icterine">
                Mentorship Program
              </h3>
              <span className="text-md font-mono text-gray-50">
                August 12-24, 2021
              </span>
              <p className="text-md font-mono text-gray-400 mt-2">
                Meet weekly with a teaching assistant to put together a project
                in 2 weeks.
              </p>
              <Link
                className="mt-5 inline-block px-5 py-2 uppercase font-mono font-bold bg-icterine  hover:bg-iris hover:text-white"
                to="/subscribe"
              >
                Apply
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="max-w-7xl mx-auto px-8 md:px-14 py-10 md:py-40 grid-cols-2 md:grid gap-20 content-center">
        <div className="mb-6 md:mb-0">
          <StaticImage
            className="shadow-icterine"
            src="../assets/participant-volunteer-smiling.jpg"
            alt="A camp participant and volunteer smiling while working through a problem together."
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h2 className="font-mono text-3xl font-bold mb-2">
            print("HELLO WORLD")
          </h2>
          <p className="font-body mb-4">
            HER CODE CAMP is a non-profit organization that empowers
            under-represented communities in technology. We host free programs
            specifically targeted to high school students who identify as a
            woman, trans, and/or non-binary.
          </p>
          {/* TODO: Yellow border looks bad in this case */}
          <Link to="/subscribe">
            <button className="px-5 py-2 uppercase font-mono font-bold bg-icterine  hover:bg-iris hover:text-white">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
    <section className="bg-icterine md:py-40 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-28 px-20 ">
        <div className="text-center">
          <p className="text-6xl mb-8">💻</p>
          {/* <StaticImage alt="Emoji style image of a laptop." /> */}
          <h3 className="uppercase font-bold text-xl mb-4">Workshops</h3>
          <p className="text-xl font-body font-light">
            We teach code and show the possibilities of technology.
          </p>
        </div>
        <div className="text-center">
          <p className="text-6xl mb-8">👭</p>
          {/* <StaticImage alt="Emoji style image of two people holding hands." /> */}
          <h3 className="uppercase font-bold text-xl mb-4">Mentorship</h3>
          <p className="text-xl font-body font-light">
            We help build cool projects alongside experts.
          </p>
        </div>
        <div className="text-center">
          <p className="text-6xl mb-8">💖</p>
          {/* <StaticImage alt="Emoji style image of a heart." /> */}
          <h3 className="uppercase font-bold text-xl mb-4">Community</h3>
          {/* NOTE: I changed anybody to everybody. */}
          <p className="text-xl font-body font-light">
            We create a space where everybody is welcome to learn.
          </p>
        </div>
      </div>
    </section>

    {/* TODO: I just went with dark grey. */}
    <section className="bg-gray-800 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto items-center gap-16 md:gap-12 py-32">
        {[
          {
            testimonial: `My daughter had an excellent experience at HER CODE CAMP. The
            content was very informative and staff was supportive and
            knowledgeable.`,
            name: "Kathryn Katsiroumpas",
            title: "Parent, Engineer",
          },
          {
            testimonial: `The gender gap I observe in my classroom is reflected within the technology sector, which is why I encouraged all my students who identify as female, transgender, or non-binary to participate in HER CODE CAMP.
          `,
            name: "Nathan Eusebio",
            title:
              "Math and Computer Science Teacher, Jarvis Collegiate Institute",
          },
          {
            testimonial: `The camp inspired me to further explore python through projects of my own, including an interactive calculator and a snake game.`,
            name: "Diksha",
            title: "HCC Alumni 2021",
          },
        ].map(({ testimonial, name, title }) => (
          <div key={name}>
            <span className="ml-[-11px] font-body italic font-black text-icterine text-9xl align-bottom select-none">
              “
            </span>
            <p className="sm:mt[-30px] mt-[-20px] font-mono font-extralight text-white text-lg mb-4">
              {testimonial}
            </p>
            {/* TODO: need to match font colours */}
            <span className="px-1 font-mono text-md bg-white text-gray-800">
              {name}
            </span>
            <br />
            <span className="px-1 font-mono font-light bg-white text-gray-800">
              {title}
            </span>
          </div>
        ))}
      </div>
    </section>
    <section>
      {/* TODO: need a max width here */}
      <div className="mx-auto ">
        <StaticImage
          src="../assets/all-participants.jpg"
          alt="Group photo of HER CODE CAMP participants and volunteers."
        />
      </div>
    </section>
    <section className="bg-icterine">
      <div className="max-w-5xl mx-auto py-24 md:px-12 px-8">
        <h2 className="mb-8 font-bold font-body text-4xl text-body text-center">
          Are you in?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-8">
          <div className="shadow-xl bg-white rounded px-10 pt-20 pb-12 text-center">
            {/* <StaticImage alt="Emoji style image of woman using computer." /> */}
            <p className="text-9xl mb-8">👩🏽‍💻</p>
            <h3 className="uppercase font-bold mb-4 text-xl">Learn</h3>
            <p className="font-body text-xl mb-8 font-light">
              Register for an upcoming program or start learning today at zero
              cost.
            </p>
            <Link to="/subscribe">
              <button className="px-5 py-2 uppercase font-mono font-bold bg-icterine  hover:bg-iris hover:text-white">
                Register
              </button>
            </Link>
          </div>
          <div className="shadow-lg rounded bg-white px-10 pt-20 pb-12 text-center font-body">
            {/* <StaticImage alt="Emoji style image of woman using computer." /> */}
            <p className="text-9xl mb-8">🤗</p>
            <h3 className="uppercase font-body font-bold text-xl mb-4">
              Contribute
            </h3>
            <p className="font-body font-light text-xl mb-8">
              Join the team as a volunteer, staff, partner, or board member.
            </p>
            <Link to="/subscribe">
              <button className="px-5 py-2 uppercase font-mono font-bold bg-icterine  hover:bg-iris hover:text-white">
                Get Involved
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section
      className="h-[700px] flex justify-center items-center"
      style={{
        backgroundImage:
          "radial-gradient(circle at 100% 100%, rgba(240,234,80,1) 0%, rgba(72,87,226,1) 50%)",
      }}
    >
      <div className="md:w-2/5 md:bg-opacity-75 md:bg-white md:rounded md:px-16 md:py-20 px-4 md:text-black text-gray-200">
        {/* <div className="h-1/3 w-1/3 bg-opacity-75 bg-white rounded-b-lg border border-gray-500 relative py-20"> */}

        {/* <div className="top-0 left-0 absolute font-bold text-lg">X</div> */}

        <div className="text-center my-30">
          <h2 className="text-3xl font-bold font-body mb-3">
            Stay in the loop!
          </h2>
          {/* NOTE: I changed from to stay in the loop in the body to keep up with */}
          <p className="text-xl font-light font-body mb-4">
            Join our quarterly newsletter to keep up with news, volunteer
            opportunities, and upcoming events.
          </p>
          {/* TODO: */}
          <Link to="/subscribe">
            <button className="px-5 py-2 uppercase font-mono font-bold bg-icterine  hover:bg-iris hover:text-white text-black">
              Subscribe
            </button>
          </Link>
        </div>
      </div>
    </section>
    <section className="bg-gray-800 py-14">
      <h2 className="text-center text-white text-4xl font-body mb-4">
        Sponsors
      </h2>
      <div className="flex flex-wrap md:px-0 px-8 justify-center items-center mb-12 mt-8 gap-8">
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

        <a
          href="https://delphia.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
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

      <div className="flex content-middle justify-center h-10 text-gray-400 gap-3 mb-4">
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
  </Layout>
)

export default IndexPage
