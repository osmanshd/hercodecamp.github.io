import React from "react"
import { Link, PageProps } from "gatsby"
import Layout, { Footer, Hero } from "../components/layout"

import Helmet from "react-helmet"
import CamperSlideshowSection from "../components/CamperSlideshow"
import colorChangingPongGif from "../assets/projects-colorchanging-pong.gif"
import { IrisLinkButton, IcterineLinkButton } from "../components/LinkButton"
import { MailingListSection } from "."
import { kebabCase } from "lodash"

// Because the buttons are buttons they tab twice :(. I shoulda made them inline-blocks lollllll

const ProgramsPage: React.FunctionComponent<PageProps> = () => (
  <Layout>
    {/* Might need a minimum height. */}
    <Helmet title="Programs – HER CODE CAMP" />
    <Hero>
      <h1 className="mb-2 font-bold text-white uppercase text-7xl">Programs</h1>
      <p className="mb-4 text-xl text-white font-extralight font-body">
        This way for adventure!
      </p>
    </Hero>
    <section className="px-8 py-10 md:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold text-iris font-body">
            Our Programs
          </h2>
          <p className="mb-8 text-lg font-light font-body">
            Our programs are designed with beginners in mind, and we focus on
            enabling campers to build projects that showcase their new skills.
            Our goal is to show the possibilities of technology.
          </p>
        </div>
        <div className="grid justify-center gap-4 sm:grid-cols-1 md:grid-cols-3">
          {[
            {
              icon: "💻",
              title: "Workshops",
              body: "Learn basics of coding through live-coding sessions and videos",
            },
            {
              icon: "👭",
              title: "Mentorship Program",
              body: "Work closely with experts to build a project",
            },
            {
              icon: "🧩",
              title: "Byte-sized Series",
              body: "Short 1-2 hour workshops on skills to add to your toolbox",
            },
          ].map(({ icon, title, body }) => (
            <Link className="mb-3" to={`#${kebabCase(title.toLowerCase())}`}>
              <div className="px-2 py-16 text-center bg-gray-200 rounded hover:bg-gray-300 hover:drop-shadow-xl hover:!text-black">
                <div className="mb-3 text-5xl">{icon}</div>
                <h3 className="mb-2 text-xl font-bold uppercase">{title}</h3>
                <p className="text-lg font-light font-body">{body}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    <section
      className="px-8 py-20 bg-radial-gradient-c from-icterine to-white"
      // style={{
      //   backgroundImage:
      //     "radial-gradient(circle at 50% 50%, rgba(240,234,80,1) 0%, #FFFFFF 100%)",
      // }}
    >
      <div className="text-center">
        <h2 className="mb-4 font-mono text-3xl font-bold">Upcoming Programs</h2>
        <p className="mb-12 text-lg font-light font-body">
          For beginners with little to no coding experience. Oh, and they’re all
          free.
        </p>
        {/* TODO: this needs to be manually updated because there is no central list of programs and upcoming programs. */}
        <div className="flex items-center justify-center">
          <div className="max-w-sm p-5 text-left bg-white border border-black font-body shadow-black">
            <div className="font-medium">
              Byte-sized: How to start a project
            </div>
            <div>December 1, 2021</div>
            <p className="font-light">
              Ever wanted to start coding, but don’t know where to begin?
            </p>
            <div className="mt-5 text-center">
              <Link to="/apply">
                <IrisLinkButton>Apply Now</IrisLinkButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="workshops" className="px-8 bg-icterine py-28">
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-4 text-4xl font-bold text-center text-iris font-body">
          Workshops
        </h2>
        <p className="mb-6 text-lg font-light font-body">
          Coding is telling the computer what to do. We run coding workshops
          that teach the basics with live coding, troubleshooting sessions, and
          videos.
        </p>
        <div className="grid gap-10 md:grid-cols-8">
          <div className="w-full h-full col-span-3 bg-white shadow-black">
            {/* TODO: add image */}
          </div>
          <div className="col-span-5">
            <h3 className="flex flex-wrap items-center text-2xl font-bold gap-x-4">
              Coding Challenge 2022
              <span className="py-1 pl-3 pr-4 text-sm font-light text-white rounded-full bg-gradient-to-r from-darkIris to-iris">
                <span className="mr-1">🔔</span> Upcoming Event
              </span>
            </h3>
            <span className="font-bold">
              In partnership with the Rotman-FRT lab
            </span>
            <p className="font-light">
              Learn about coding in finance through this coding challenge
            </p>
            <div>Important Dates:</div>
            <ul className="mb-4 list-disc list-inside">
              <li>October 15, 2021 - Applications Open</li>
              <li>January 30, 2022 - Applications Closed</li>
              <li>February 15, 2022 - Kick Off Event</li>
            </ul>
            <Link to="/apply">
              <IrisLinkButton>Apply Now</IrisLinkButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section id="mentorship-program" className="px-8 mb-10 pt-28">
      <div className="grid max-w-5xl gap-10 mx-auto md:grid-cols-2">
        <div className="flex flex-col">
          <img
            src={colorChangingPongGif}
            alt="Gif of a project made by campers. It is an adaptation of pong where the ball changes colour when it is hit."
          />
          <caption className="mt-2 font-light text-center text-gray-400">
            Pong Game by Natalia, Selina, Arushna & Mari
          </caption>
        </div>
        <div>
          <h2 className="mb-4 text-4xl font-bold text-iris font-body">
            Mentorship Program
          </h2>
          <p className="mb-4 font-light">
            Building a project is not only one of the best ways to learn how to
            code, but they are often showcased during job interviews. In our
            Mentorship Program, we match you with a mentor who is either a
            graduate student in computer science or a member of the tech
            industry. They work with you and a small group of other campers to
            build something pretty darn cool.
          </p>
          <div className="font-bold"> Important Dates:</div>
          <ul className="mb-4 list-disc list-inside">
            <li>Applications Open: March 2022 </li>
            <li> Application Deadline: July 2022</li>
          </ul>
          <Link to="/apply">
            {/* TODO: get the link right */}
            <IrisLinkButton>Keep me in the loop</IrisLinkButton>
          </Link>
        </div>
      </div>
    </section>

    <CamperSlideshowSection />
    <section
      id="byte-sized-series"
      className="px-8 bg-gray-800 text-gray-50 py-28"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold text-white font-body">
            Byte-sized Series
          </h2>
          <p className="mb-6 text-lg font-light text-white font-body">
            In this series of events, we teach you important skills that are not
            often taught in class in short 1-2 hour workshops. Join us to learn!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-8">
          <div className="w-full h-full col-span-3 bg-white shadow-black">
            {/* TODO: add image */}
          </div>
          <div className="col-span-5">
            <h3 className="flex flex-wrap items-center text-2xl font-bold gap-x-4">
              How to start a project!
              <span className="py-1 pl-3 pr-4 text-sm font-light text-white rounded-full bg-gradient-to-r from-darkIris to-iris">
                <span className="mr-1">🔔</span> Upcoming Event
              </span>
            </h3>

            <p className="font-light">
              Want to start a project but don’t know where to start? Join us for
              our first byte-sized event.
            </p>
            <div>Important Dates:</div>
            <ul className="mb-4 list-disc list-inside">
              <li>November 15, 2021 - Application Deadline</li>
              <li>December 1, 2021 - Zoom Kick-Off & Video Launch</li>
              <li>December 8, 2021 - Zoom Meet Up & Idea Exchange</li>
            </ul>
            <Link to="/apply">
              <IrisLinkButton>Apply Now</IrisLinkButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section
      className="px-8 py-20 bg-radial-gradient-c from-icterine to-white"
      // style={{
      //   backgroundImage:
      //     "radial-gradient(circle at 50% 50%, rgba(240,234,80,1) 0%, #FFFFFF 100%)",
      // }}
    >
      <div className="text-center">
        <h2 className="mb-4 font-mono text-3xl font-bold text-iris">
          Learn Now
        </h2>
        <p className="mb-12 text-lg font-light font-body">
          Can’t wait to learn? Learn now with the past program materials below.
        </p>
        {/* TODO: this needs to be manually updated because there is no central list of programs and upcoming programs. */}
        <div className="flex items-center justify-center">
          <div className="max-w-sm p-5 text-left bg-white border border-black font-body shadow-black">
            <div className="font-medium">
              Byte-sized: How to start a project
            </div>
            <div>December 1, 2021</div>
            <p className="font-light">
              Ever wanted to start coding, but don’t know where to begin?
            </p>
            <div className="mt-5 text-center">
              <Link to="/apply">
                <IrisLinkButton>Apply Now</IrisLinkButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <MailingListSection />
    <Footer />
  </Layout>
)

export default ProgramsPage
