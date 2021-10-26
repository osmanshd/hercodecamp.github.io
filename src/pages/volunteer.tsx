import React, { useEffect } from "react"
import { Link, PageProps } from "gatsby"

import Layout, { Footer, Hero } from "../components/layout"
import { Helmet } from "react-helmet"
import { IcterineLinkButton, IrisLinkButton } from "../components/LinkButton"
import { StaticImage } from "gatsby-plugin-image"
import { MailingListSection } from "."
import ReactMarkdown from "react-markdown"
import { X, PlusLg } from "@styled-icons/bootstrap"

const VolunteerPage: React.FunctionComponent<PageProps> = () => (
  <Layout>
    {/* Might need a minimum height. */}
    <Helmet title="Volunteer – HER CODE CAMP" />
    <Hero>
      <h1 className="mb-2 font-bold text-white uppercase text-7xl">
        Get Involved
      </h1>
      <p className="mb-4 text-xl text-white font-extralight font-body">
        Grab a log and have a seat around the fire.
        <br />
        There’s always room for s’more.
      </p>
    </Hero>
    <section
      id="first-section"
      className="bg-radial-gradient-c from-icterine to-white"
    >
      <div className="content-center grid-cols-2 gap-20 px-8 py-10 mx-auto max-w-7xl md:px-14 md:py-40 md:grid">
        <div className="mb-6 md:mb-0">
          <StaticImage
            className="shadow-icterine"
            src="../assets/aboutus-advise.jpg"
            alt="A volunteer helping a participant with a problem."
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h2 className="mb-2 font-mono text-3xl font-bold">Volunteer 🔑</h2>
          <p className="mb-4 text-xl font-light font-body">
            Our volunteers are key to making it all happen. We are always
            looking for folks with a range of experience. Whether you’re a
            designer, developer, or are just interested in diversifying tech,
            get in touch! There’s always space for more help.
          </p>
          {/* TODO: need to link properly */}
          <Link to="/subscribe">
            <IrisLinkButton>Volunteer</IrisLinkButton>
          </Link>
        </div>
      </div>
    </section>
    <OpportunitiesSection />
    <section className="px-8 py-40 bg-icterine">
      <div className="max-w-5xl mx-auto font-body">
        <h2 className="mb-6 text-3xl font-bold uppercase text-iris">
          Corporate Partners
        </h2>
        <div className="text-lg font-light">
          <p>
            We are currently looking for monetary support and in-kind
            contributions such as:
          </p>
          <ul className="mb-4 ml-2 list-disc list-inside">
            <li>Mentors with expertise in business</li>
            <li>Funding</li>
            <li>Space to run our events</li>
            <li>Exposure</li>
            <li>Workshop materials (laptops, cloud credits, etc.)</li>
          </ul>
        </div>
        {/* TODO: link */}

        <IrisLinkButton>Let's Chat</IrisLinkButton>
      </div>
    </section>
    <MailingListSection />
    <Footer />
  </Layout>
)

export default VolunteerPage
interface Opportunity {
  title: string
  blurb: string
  description: string
}

const OpportunityComponent: React.FunctionComponent<
  Opportunity & { onClose: () => void }
> = ({ title, description, onClose }) => {
  useEffect(() => {
    function handleEscapeKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEscapeKey)
    return () => window.removeEventListener("keydown", handleEscapeKey)
  }, [onClose])
  return (
    <div>
      <div
        onClick={onClose}
        className="fixed top-0 bottom-0 left-0 right-0 z-10 w-screen h-screen bg-black opacity-50 cursor-pointer"
      />
      <div className="fixed top-0 bottom-0 left-0 right-0 z-50 py-32 bg-gray-800 px-14 lg:left-1/2 font-body">
        <span
          onClick={() => onClose()}
          className="absolute text-gray-100 cursor-pointer right-6 top-6"
        >
          <X className="w-8 h-8" />
        </span>
        <h2 className="mb-10 text-4xl font-bold text-gray-50">{title}</h2>
        <ReactMarkdown className="prose !text-gray-50 prose-lg !font-light !font-body mb-14">
          {description}
        </ReactMarkdown>

        {/* TODO: link properly */}
        <div className="text-center">
          <IcterineLinkButton>Volunteer</IcterineLinkButton>
        </div>
      </div>
    </div>
  )
}

const OpportunitiesSection: React.FunctionComponent = () => {
  const [selectedOpportunity, setSelectedOpportunity] = React.useState<
    number | null
  >(null)

  function close() {
    setSelectedOpportunity(null)
  }

  // These should be in a json file or something then I could work with them easier :shrug:

  const opportunities: Array<Opportunity> = [
    {
      title: "Workshop Instructor",
      blurb: "Develop content and teach coding skills and soft skills.",
      description: `
Our workshop creators develop content on coding skills and soft skills such as:

- Coding a new language
- How to land a job in tech
- Build along website
- Teaching git

Our campers love live-coding sessions where they can build projects. Formats can vary from a short video series to a multi-day in-person event.`,
    },
    {
      title: "Chief Diversity and Inclusion Officer",
      blurb: "Help the planning team create a more inclusive community",
      description: `Lead, plan, actively manage and oversee long lasting community building efforts and continually incorporate and update diversity and inclusivity training for staff and all contractors

- Run the ambassador program and delegate community building tasks
- Coffee chats
- Icebreakers during events
- Curate training for team and volunteers that create an inclusive community
`,
    },
    {
      title: "Advisor",
      blurb:
        "Use your business, education, or technology experience to help grow our organization",
      description: `
We are currently looking for advisors to help grow our organization. This position requires:

- Monthly attendance of meetings
- Non-profits, business, or technical expertise            
      `,
    },
  ]

  return (
    <section className="py-20 mx-auto max-w-7xl">
      {selectedOpportunity === null ? (
        ""
      ) : (
        <OpportunityComponent
          onClose={close}
          {...opportunities[selectedOpportunity]}
        />
      )}
      {/* TODO: this isn't ideal but it is good enough */}
      <h2 className="mb-10 text-4xl font-bold text-center uppercase text-iris font-body">
        Opportunities
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8 flex-flow sm:mx-auto ">
        {opportunities.map(({ title, blurb }, i) => (
          <div
            onClick={() => setSelectedOpportunity(i)}
            className="relative z-0 max-w-sm p-5 text-lg text-left bg-white border border-black cursor-pointer hover:bg-gray-100 font-body shadow-black"
          >
            <span className="absolute top-0 right-0 flex items-center justify-center px-4 py-2 text-center bg-gray-300">
              <PlusLg className="w-3 h-3 text-gray-600" />
            </span>
            <div className="font-medium">{title}</div>
            <p className="font-light text-gray-800">{blurb}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
