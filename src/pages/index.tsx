import * as React from "react"
import { Link, PageProps } from "gatsby"
import Logo from "../assets/hcc-white-logo-white-name-edited.inline.svg"
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

const IndexPage: React.FunctionComponent<PageProps> = () => (
  <Layout>
    {/* Might need a minimum height. */}
    <Helmet title="HER CODE CAMP" />
    <section className="h-screen bg-gradient-to-r from-darkIris to-iris relative">
      <div className="max-w-7xl mx-auto">
        <nav className="pt-8 text-right w-full">
          <ul className="text-gray-300 uppercase flex gap-4 justify-end align-middle whitespace-nowrap">
            <li>
              <Link to="/">
                {/* TODO: add a fun glow effect to this one. */}
                <Logo className="text-left h-12" />
                <span className="uppercase font-black text-xl text-white hover:text-icterine">
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
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="z-10 relative">
          <h1 className="text-white text-7xl uppercase font-bold mt-32 mb-2">
            Ready to hack the future?
          </h1>
          <p className="text-xl text-white mb-4 font-extralight font-body">
            Join a free computer scienc community for high school women and
            non-binary students in the Greater Toronto Area.
          </p>
          <Link to="/register">
            <button className="px-5 py-2 uppercase font-mono font-bold bg-icterine  border-icterine border hover:bg-transparent hover:text-white mr-4">
              Register
            </button>
          </Link>
          <Link to="/volunteer">
            <button className="px-5 py-2 uppercase font-mono font-bold bg-icterine  border-icterine border hover:bg-transparent hover:text-white">
              Volunteer
            </button>
          </Link>
        </div>
        {/* TODO: I should add a fun glowing animation to this background it could look cool. */}
        <div className="bottom-0 right-32 absolute w-[75%] z-0">
          {/* TODO: Image is loaded with a weird background thing. */}
          <StaticImage
            src="../assets/Code_Camp_Wide.png"
            alt="Illustration of camp participants sitting around a fire where the logs are made using code tags."
          />
        </div>
      </div>
    </section>
    <section>
      <div className="max-w-7xl mx-auto px-14 py-40 grid-cols-2 grid gap-20 content-center">
        <div>
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
    <section className="bg-icterine py-12">
      <div className="max-w-7xl mx-auto flex gap-28 px-20 py-40">
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
    <section className="bg-gray-800">
      <div className="grid grid-cols-3 max-w-7xl mx-auto items-center gap-12 py-32">
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
          <div>
            <span className="ml-[-11px] font-body italic font-black text-icterine text-9xl align-bottom">
              “
            </span>
            <p className="mt-[-20px] font-mono font-extralight text-white text-lg mb-4">
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
    <section className="h-screen bg-gray-300">
      <div className="max-w-7xl mx-auto">
        <StaticImage alt="Group photo of HER CODE CAMP participants and volunteers." />
      </div>
    </section>
    <section>
      <div className="max-w-5xl mx-auto py-12">
        <h2 className="mb-8 font-bold text-4xl text-body text-center">
          Are you in?
        </h2>
        <div className="grid grid-cols-2 gap-20">
          <div className="shadow-xl rounded px-10 pt-20 pb-12 text-center">
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
          <div className="shadow-lg rounded px-10 pt-20 pb-12 text-center font-body">
            {/* <StaticImage alt="Emoji style image of woman using computer." /> */}
            <p className="text-9xl mb-8">🤗</p>
            <h3 className="uppercase font-body font-bold text-xl mb-4">
              Learn
            </h3>
            <p className="font-body font-light text-xl mb-8">
              Join the team as a volunteer, staff, partner, or board member.
            </p>
            <Link to="/subscribe">
              <button className="px-5 py-2 uppercase font-mono font-bold bg-icterine  hover:bg-iris hover:text-white">
                Volunteer
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
      <div className="w-2/5 bg-opacity-75 bg-white rounded px-16 py-20">
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
            <button className="px-5 py-2 uppercase font-mono font-bold bg-icterine  hover:bg-iris hover:text-white">
              Subscribe
            </button>
          </Link>
        </div>
      </div>
    </section>
    <section className="bg-gray-800 py-14">
      <h2 className="text-center text-white text-5xl font-body">Sponsors</h2>
      {/* @ts-ignore */}
      <Marquee pauseOnHover duration={20000}>
        <div className="w-20 h-10 font-bold text-white">Hello</div>
        <div className="w-20 h-10 font-bold text-white">World</div>
        <div className="w-20 h-20 font-bold text-white">Foo</div>
        <div className="w-20 h-10 font-bold text-white">Bar</div>
        <div className="w-40 h-10 font-bold text-white">HER CODE CAMP</div>
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
