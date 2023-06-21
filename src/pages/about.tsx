import React, { MutableRefObject, useEffect, useRef, useState } from "react"
import { PageProps } from "gatsby"
import Layout, { Footer, Hero } from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Helmet from "react-helmet"
import { easeSinOut } from "d3-ease"
import { Linkedin, Twitter } from "@styled-icons/boxicons-logos"

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
    <section
      id="first-section"
      className="py-10 md:py-44 bg-radial-gradient-c from-icterine to-white"
    >
      <div className="max-w-5xl px-8 mx-auto ">
        <h2 className="mb-8 text-4xl font-bold text-center text-iris font-body">
          We make space for everyone in technology
        </h2>
        <div className="grid grid-cols-1 gap-10 text-lg font-light text-justify md:gap-16 md:grid-cols-2 font-body">
          <div>
            HER CODE CAMP is a non-profit organization that aims to empower
            under-represented communities in technology. Since being founded in
            2018, we have been hosting a variety of programs targeted to high
            school students who identify as a woman and/or non-binary (including
            cis and trans women) in Canada.
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
      className="min-h-[75vh] py-14 md:pt-40 md:pb-60 bg-radial-gradient-br from-icterine to-iris"
    // style={{
    //   backgroundImage:
    //     "radial-gradient(circle at 100% 100%, rgba(240,234,80,1) 0%, rgba(72,87,226,1) 50%)",
    // }}
    >
      <div className="grid max-w-5xl grid-cols-1 gap-10 px-12 mx-auto text-white md:gap-40 md:grid-cols-2">
        <div>
          <h2 className="mb-3 font-mono text-4xl font-bold">Our Vision</h2>

          <p className="text-lg font-light font-body">
            A tech community driven by diversity.
          </p>
        </div>
        <div>
          <h2 className="mb-3 font-mono text-4xl font-bold">Our Mission</h2>
          <p className="text-lg font-light font-body">
            Hacking our future by igniting the potential of under-represented
            communities in tech.
          </p>
        </div>
      </div>
    </section>
    <section>
      <div className="mx-auto ">
        <StaticImage
          src="../assets/smiling-participants.jpg"
          alt="Group photo of HER CODE CAMP participants and volunteers."
        />
      </div>
    </section>
    <section className="px-8 py-10 bg-gray-800 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="pb-10 text-3xl font-bold text-center text-white uppercase">
          Our Work in Numbers
        </div>
        <div className="flex flex-wrap justify-center font-mono gap-14">
          {[
            {
              duration: 3000 + Math.random() * 500 - 250,
              number: 480,
              label: "increase in participants since 2019",
              unit: "%",
            },
            {
              duration: 3000 + Math.random() * 500 - 250,
              number: 314,
              label: "students",
            },
            {
              duration: 1800 + Math.random() * 500 - 250,
              number: 6,
              label: "events hosted since 2019",
            },
            {
              duration: 2000 + Math.random() * 500 - 250,
              number: 17,
              label: "mentorship projects",
            },
          ].map(({ unit, label, number, duration }) => (
            <div className="text-center">
              <div className="font-light text-7xl text-icterine">
                <CounterUpper duration={duration} number={number} />
                {unit || ""}
              </div>
              <div className="mt-4 font-light text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="px-8 py-10 md:py-32 bg-radial-gradient-c from-icterine to-white">
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
      <div className="max-w-6xl px-8 py-12 mx-auto md:pb-20 md:pt-28">
        <h2 className="mb-10 font-mono text-4xl font-bold text-center">
          Our People
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {[
            {
              name: "Joanna Pineda",
              positions: ["Founder", "CEO"],
              bio: `Joanna is currently a Technology Analyst at Accenture where she works primarily as a software developer to improve businesses. Prior to her time in industry, she worked in the intersection of Computer Science and Biology through research in cancer genomics and health care.`,
              image: (
                <StaticImage
                  src="../assets/people/Joanna_Pineda.png"
                  alt="Joanna Pineda"
                />
              ),
              socials: {
                twitter: "https://twitter.com/JoannaDPineda",
                linkedin: "https://www.linkedin.com/in/joannadpineda/",
              },
            },
            {
              name: "Chantal Shaib",
              positions: ["Chief Strategy Officer", "Chief Learning Officer"],
              bio: `Chantal is a Ph.D. student in Computer Science at Northeastern University, where she spends her days thinking about how to use technology to model and understand biomedical data. Through HER CODE CAMP, Chantal hopes to push for diversity by providing accessible and inclusive spaces for students to get excited by technology.`,
              image: (
                <StaticImage
                  src="../assets/people/Chantal_Shaib.png"
                  alt="Chantal Shaib"
                />
              ),
              socials: {
                linkedin: "https://www.linkedin.com/in/chantal-s-088b24109/",
              },
            },
            {
              name: "Armande Ang Houle",
              positions: ["Chief Operations Officer", "Treasurer"],
              bio: `Armande is currently a data project coordinator at Genentech where she facilitates the use of genomic data for cancer biomarkers. Prior to her current role, Armande researched cancer transcriptomic and genomic evolution using computational approaches.`,
              image: (
                <StaticImage
                  src="../assets/people/Armande_Ang_Houle.png"
                  alt="Armande Ang Houle"
                />
              ),
              socials: {
                twitter: "https://twitter.com/armandeanghoule?lang=en",
                linkedin:
                  "https://www.linkedin.com/in/armande-ang-houle-95138687",
              },
            },
            {
              name: "Elyssa Bader",
              positions: ["Chief Operations Officer", "Chief Strategy Officer"],
              bio: `Elyssa Bader is a Ph.D. student in Molecular Genetics at the University of Toronto researching the effects of aging on immune cells. Through her work with HCC, Elyssa hopes to provide an inclusive community for students who are curious about computer science.`,
              image: (
                <StaticImage
                  src="../assets/people/Elyssa_Bader.png"
                  alt="Elyssa Bader"
                />
              ),
              socials: {
                twitter: "https://twitter.com/ElyssaBader",
                linkedin: "https://www.linkedin.com/in/elyssabader/",
              },
            },
            // {
            //   name: "Sabrina Abbott",
            //   positions: ["Chief Communications Officer", "Secretary"],
            //   bio: `Sabrina is a Humanities Lesson Writer for Study.com by day and a freelance artist by night; she is currently earning her certification to be an English as a Second Language teacher. She plans on completing Teacher's College and her M.Ed soon after. `,
            //   image: (
            //     <StaticImage
            //       src="../assets/people/Sabrina_Abbott.png"
            //       alt="Sabrina Abbott"
            //     />
            //   ),
            //   socials: {
            //     linkedin: "https://www.linkedin.com/in/sabrinamabbott/",
            //   },
            // },
            {
              name: "Seungeun Yi",
              positions: ["Chief Learning Officer"],
              bio: `Seungeun is a Machine Learning Scientist at Layer 6 AI, where she works on building data-driven solutions for TD Bank and does research in healthcare to improve patient care. Seungeun is committed to creating easy-to-access and diverse content for all students interested in tech.`,
              image: (
                <StaticImage
                  src="../assets/people/Seungeun_Yi.png"
                  alt="Seungeun Yi"
                />
              ),
              socials: {
                linkedin: "https://www.linkedin.com/in/seungeunyi/",
              },
            },
            {
              name: "Marta Skreta",
              positions: ["Chief Learning Officer"],
              bio: `Marta is a Computer Science PhD student at the University of Toronto, where she is uses Machine Learning to design self-driving labs and discover new materials. Marta hopes that through HER CODE CAMP, she can help students use computer science to solve problems they are passionate about.`,
              image: (
                <StaticImage
                  src="../assets/people/Marta_Skreta.png"
                  alt="Marta Skreta"
                />
              ),
              socials: {
                twitter: "https://twitter.com/martoskreto",
                linkedin: "https://www.linkedin.com/in/martaskreta/",
              },
            },
            {
              name: "Jessie Thind",
              positions: ["Chief Diversity, Equity, and Inclusion Officer"],
              bio: `Jessie is completing her Master of Human Rights degree at the University of Manitoba, where she is researching ethics and bias in AI. Through her work with HER CODE CAMP, Jessie is committed to an anti-oppression framework while establishing an equitable and inclusive environment for students and the HCC team at large.`,
              image: (
                <StaticImage
                  src="../assets/people/Jessie_Thind.png"
                  alt="Jessie Thind"
                />
              ),
              socials: {
                linkedin: "www.linkedin.com/in/jessie-thind-9b719b11a",
              },
            },
          ].map(({ image, name, positions, bio, socials }) => (
            <div className="grid-cols-8 gap-4 md:grid font-body">
              <div className="col-span-3 ">
                <div className="relative">
                  <div className="absolute bottom-0 left-0 right-0 bg-icterine aspect-w-10 aspect-h-8" />
                  {image}
                </div>
              </div>
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
        <p className="pt-12">Past team members: Sabrina Abbott</p>
      </div>
    </section>
    <section>
      <div className="max-w-6xl px-8 py-12 mx-auto md:pb-20 md:pt-28 border border-t border-solid border-l-0 border-r-0 border-b-0">
        <h2 className="mb-10 font-mono text-4xl font-bold text-center">
          Our Advisors
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {[
            {
              name: "Matt Walton",
              positions: ["Head of Analytics & Insights - Automotive, Consumer Goods & Food at Google"],
              bio: ``,
              image: (
                <StaticImage
                  src="../assets/people/Matt_Walton.jpeg"
                  alt="Matt Walton"
                />
              ),
              socials: {
                linkedin: "https://www.linkedin.com/in/matthew-walton-110b553/",
              },
            },
            {
              name: "Jyotheeswar Arvind Manickavasagar",
              positions: ["Technical Solutions Consultant at Google"],
              bio: ``,
              image: (
                <StaticImage
                  src="../assets/people/Jyotheeswar_Manickavasagar.jpeg"
                  alt="Jyotheeswar Manickavasagar"
                />
              ),
              socials: {
                linkedin: "https://www.linkedin.com/in/jyotheeswararvind/",
              },
            },
            {
              name: "Ellie Hajarian",
              positions: ["Senior IT Manager, Enterprise Information Management at TD"],
              bio: `Ellie has studied computer programming and been working in IT since starting her career – over 20 years now. Currently she is pursuing her Masters in Computer Science in Information Systems. Throughout her career she has been passionate to be an advocate for younger females in different stages of their lives and to help them build confidence, find their inner power and build an independent life. She is currently the chair of Women in Leadership committee at TD, and a member of Girls in STEM committee at TD.`,
              image: (
                <StaticImage
                  src="../assets/people/Ellie_Hajarian.jpg"
                  alt="Ellie Hajaria"
                />
              ),
              socials: {
                linkedin: "https://www.linkedin.com/in/ellie-hajarian/?originalSubdomain=ca",
              },
            },
            {
              name: "Michelle Craig",
              
              positions: ["Professor, Teaching Stream in the Department of Computer Science at the University of Toronto"],
              bio: `Michelle is a member of the CS Education Research Group. When I am not an associate chair, my job is primarily teaching undergraduate courses. In the past I have supervised one PhD student and a number of undergraduate projects in Computing Education Research.`,
              image: (
                <StaticImage
                  src="../assets/people/Michelle_Craig.jpg"
                  alt="Michelle Craig"
                />
              ),
              socials: {
                linkedin: "https://ca.linkedin.com/in/michelle-craig-a9759719",
              },
            },
          ].map(({ image, name, positions, bio, socials }) => (
            <div className="grid-cols-8 gap-4 md:grid font-body">
              <div className="col-span-3 ">
                <div className="relative">
                  <div className="absolute bottom-0 left-0 right-0 bg-icterine aspect-w-10 aspect-h-8" />
                  {image}
                </div>
              </div>
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

  useEffect(() => {
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (!hasIntersected.current && isIntersecting) {
        callback()
        hasIntersected.current = true
      }
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [ref, callback])
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
