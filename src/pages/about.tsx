import React, { MutableRefObject, useEffect, useRef, useState } from "react"
import { Link, PageProps } from "gatsby"
import Logo from "../assets/logo-mark.inline.svg"
import Layout, { Footer, Hero } from "../components/layout"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import Marquee from "react-easy-marquee"
import Helmet from "react-helmet"

import { easeSinOut } from "d3-ease"
import { Linkedin, Twitter } from "@styled-icons/boxicons-logos"
import { kebabCase } from "lodash"
import joannaProfile from "../assets/people/joanna-pineda-square.jpg"

// Because the buttons are buttons they tab twice :(. I shoulda made them inline-blocks lollllll

const AboutUsPage: React.FunctionComponent<PageProps> = () => (
  <Layout>
    {/* Might need a minimum height. */}
    <Helmet title="About Us – HER CODE CAMP" />
    <Hero>
      <h1 className="mb-2 font-bold text-white uppercase text-7xl">About Us</h1>
      <p className="mb-4 text-xl text-white font-extralight font-body">
        Gather around the fire for a little story about HCC.
      </p>
    </Hero>
    <section className="py-44 bg-radial-gradient-c from-icterine to-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-8 text-4xl font-bold text-iris font-body">
          We make space for everyone in technology
        </h2>
        <div className="grid grid-cols-2 gap-16 text-lg font-light text-justify font-body">
          <div>
            HER CODE CAMP is a non-profit organization that aims to empower
            under-represented communities in technology. Since being founded in
            2018, we have been hosting a variety of programs targeted to high
            school students who identify as a woman and/or non-binary (including
            cis and trans women) in lower income schools in the Greater Toronto
            Area.
          </div>
          <div>
            We understand how learning to code can be difficult, especially when
            there is no sense of belonging and a lack of representation in
            technology. Our goal is to create a safe, inclusive community that
            makes learning accessible. We teach our campers basic coding, enable
            them to build their first projects, and get them connected to the
            tech world.
          </div>
        </div>
      </div>
    </section>
    <section
      className="min-h-[75vh] pt-40 pb-60 bg-radial-gradient-br from-icterine to-iris"
      // style={{
      //   backgroundImage:
      //     "radial-gradient(circle at 100% 100%, rgba(240,234,80,1) 0%, rgba(72,87,226,1) 50%)",
      // }}
    >
      <div className="grid max-w-5xl grid-cols-2 gap-40 mx-auto text-white">
        <div>
          <h2 className="mb-4 font-mono text-4xl font-bold">Our Vision</h2>

          <p className="text-lg font-light font-body">
            A tech community driven by diversity.
          </p>
        </div>
        <div>
          <h2 className="mb-4 font-mono text-4xl font-bold">Our Mission</h2>
          <p className="text-lg font-light font-body">
            Hacking our future by igniting the potential of under-represented
            communities in tech.
          </p>
        </div>
      </div>
    </section>
    <section>
      {/* TODO: need a max width here */}
      <div className="mx-auto ">
        <StaticImage
          src="../assets/smiling-participants.jpg"
          alt="Group photo of HER CODE CAMP participants and volunteers."
        />
      </div>
    </section>
    <section className="py-32 bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="pb-10 text-3xl font-bold text-center text-white uppercase">
          Our Work in Numbers
        </div>
        {/* TODO: For mobile I'll make it like a grid with the left hand side having the numbers and the right having the text. */}
        <div className="flex justify-center font-mono gap-14">
          <div className="block md:text-center">
            <div className="font-light text-7xl text-icterine">
              <CounterUpper
                duration={3000 + Math.random() * 500 - 250}
                number={480}
              />
              %
            </div>
            <div className="mt-6 font-light text-gray-400 ">
              increase in participants since 2019
            </div>
          </div>
          <div className="text-center">
            <div className="font-light text-7xl text-icterine">
              <CounterUpper
                duration={3000 + Math.random() * 500 - 250}
                number={314}
              />
            </div>
            <div className="mt-6 font-light text-gray-400">
              girls learned to code
            </div>
          </div>
          <div className="text-center">
            <div className="font-light text-7xl text-icterine">
              <CounterUpper
                duration={1800 + Math.random() * 500 - 250}
                number={6}
              />
            </div>
            <div className="mt-6 font-light text-gray-400">
              events hosted since 2019
            </div>
          </div>
          <div className="text-center">
            <div className="font-light text-7xl text-icterine">
              <CounterUpper
                duration={2000 + Math.random() * 500 - 250}
                number={17}
              />
            </div>
            <div className="mt-6 font-light text-gray-400">
              mentorship projects
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-32 bg-radial-gradient-c from-icterine to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold uppercase mb-14 text-iris">
          The spark ✨
        </h2>
        <p className="text-lg font-light text-justify font-body">
          The project started in 2018 at the University of Toronto when Joanna,
          the current CEO and Founder, went to graduate school. She found a
          wonderful community of inspirational women and she thought it should
          be shared! She gathered a few of her friends, and together, they built
          HER CODE CAMP.
        </p>
      </div>
    </section>
    <section>
      <div className="max-w-6xl pb-20 mx-auto pt-28">
        <h2 className="mb-10 font-mono text-4xl font-bold text-center">
          Our People
        </h2>
        <div className="grid grid-cols-2 gap-10">
          {[
            {
              name: "Joanna Pineda",
              positions: ["Founder", "CEO"],
              bio: `Joanna is a driving force behind any project she is a part of. She holds a research oriented inter-disciplinary masters degree from one of the top universities in Canada and works as a professional developer.`,
              image: "../assets/people/joanna-pineda.jpg",
              socials: {
                twitter: "",
                linkedin: "",
              } as { [key in Social]: string },
            },
            {
              name: "Joanna Pineda",
              positions: ["Founder", "CEO"],
              bio: `Joanna is a driving force behind any project she is a part of. She holds a research oriented inter-disciplinary masters degree from one of the top universities in Canada and works as a professional developer.`,
              image: "../assets/people/joanna-pineda.jpg",
              socials: {
                twitter: "",
                linkedin: "",
              } as { [key in Social]: string },
            },
            {
              name: "Joanna Pineda",
              positions: ["Founder", "CEO"],
              bio: `Joanna is a driving force behind any project she is a part of. She holds a research oriented inter-disciplinary masters degree from one of the top universities in Canada and works as a professional developer.`,
              image: "../assets/people/joanna-pineda.jpg",
              socials: {
                twitter: "",
                linkedin: "",
              } as { [key in Social]: string },
            },
          ].map(({ image, name, positions, bio, socials }) => (
            <div className="grid grid-cols-8 gap-4 font-body">
              <img
                className="col-span-3 rounded shadow"
                src={joannaProfile}
                alt={`Headshot of ${name}`}
              />
              {/* {image || `../assets/people/${kebabCase(name.toLowerCase())}`} */}
              <div className="col-span-5">
                <h3 className="text-lg font-bold">{name}</h3>
                <div className="mb-2">
                  <span className="font-medium text-gray-600 text-md">
                    {positions.join(", ")}
                  </span>
                  <span className="inline-flex content-center gap-1 ml-1 text-gray-400">
                    {Object.entries(socials).map(([social, value]) => (
                      <a href={value}>
                        <SocialImage
                          className="h-4"
                          social={social as Social}
                        />
                      </a>
                    ))}
                  </span>
                </div>
                <p className="text-sm text-justify text-gray-500 text-light">
                  {bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </Layout>
)

const CounterUpper: React.FunctionComponent<{
  number: number
  duration: number
}> = ({ duration, number }) => {
  const [currentValue, setCurrentValue] = useState(0)
  const [startTime, setStartTime] = useState<number | null>(null)
  const wrapperRef = useRef<HTMLElement>(null)

  useFirstTimeOnScreen(wrapperRef, () => setStartTime(Date.now()))

  useEffect(() => {
    function update() {
      if (startTime !== null) {
        setCurrentValue(
          number * easeSinOut(Math.min((Date.now() - startTime) / duration, 1))
        )
      }
    }

    const millisecondsPerFrame = 1000 / 60
    const interval = setInterval(update, millisecondsPerFrame)

    return () => clearInterval(interval)
  })

  return <span ref={wrapperRef}>{currentValue.toFixed()}</span>
}

function useFirstTimeOnScreen(
  ref: MutableRefObject<HTMLElement | null>,
  callback: () => void
) {
  const hasIntersected = useRef(false)
  const observer = new IntersectionObserver(([{ isIntersecting }]) => {
    console.log(isIntersecting)
    if (!hasIntersected.current && isIntersecting) {
      callback()
      hasIntersected.current = true
    }
  })

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current)
    }

    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect()
    }
  }, [ref.current])
}
type Social = "twitter" | "linkedin"
const SocialImage: React.FunctionComponent<{
  social: Social
  className?: string
}> = ({ social, className }) => {
  switch (social) {
    case "twitter":
      return <Twitter className={className} />
    case "linkedin":
      return <Linkedin className={className} />
  }
}
export default AboutUsPage
