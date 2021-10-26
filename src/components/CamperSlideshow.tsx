import React, { useState, useEffect } from "react"

import pongGif from "../assets/projects-pong.gif"
import spaceInvadersGif from "../assets/projects-spaceinvaders.gif"
import spongeBobGif from "../assets/projects-spongebob-food-rush.gif"

const CampersSlideshow: React.FunctionComponent<{
  interval?: number
}> = ({ children, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const maxLength = Array.isArray(children) ? children.length : 1

  useEffect(() => {
    function update() {
      setCurrentSlide(currentSlide => (currentSlide + 1) % maxLength)
    }

    const intervalId = setInterval(update, interval)

    return () => clearInterval(intervalId)
  }, [interval, maxLength])

  if (!Array.isArray(children)) {
    throw new Error("CamperSlideshow expects an array of children")
  }

  return (
    <>
      <div className="w-full px-12 py-10 bg-gray-100 min-h-[300px]">
        {children[currentSlide]}
      </div>
      <div className="flex justify-center gap-2 mt-10">
        {children.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`inline-block w-4 h-4 rounded-full cursor-pointer hover:bg-icterine ${
              i === currentSlide ? "bg-icterine" : "bg-gray-100"
            }`}
          />
        ))}
      </div>
    </>
  )
}

const CamperSlideshowSection: React.FunctionComponent = () => (
  <section className="py-10 mx-auto md:py-32 max-w-7xl">
    <div className="max-w-5xl mx-auto">
      <h2 className="mb-8 text-4xl font-bold text-center uppercase md:text-left md:ml-12 text-iris">
        Projects by Campers
      </h2>

      <CampersSlideshow>
        {[
          {
            gif: pongGif,
            title: "Ping Pong",
            event: "Mentorship Program 2020",
            description: `Check out this project made by Leah M., Adriana M., and Robyn W.
      mentored by Nicole S. and Yijang H. at our annual mentorship
      program. They built a ping pong game and added a cool new rule.`,
          },
          {
            gif: spongeBobGif,
            title: "Spongebob Food Rush",
            event: "Mentorship Program 2021",
            description: `Check out this project made by Cathay Li & Maleeha Mirza mentored by Farzaneh at our annual mentorship program.`,
          },
          {
            gif: spaceInvadersGif,
            title: "Space Invaders",
            event: "Mentorship Program 2021",
            description: `Check out this project made by Rachel and Shahad, mentored by Raghav at our annual mentorship program. In their game, the goal is to hit as many aliens as you can before they reach you!`,
          },
        ].map(({ gif, title, event, description }) => (
          <div className="flex justify-center" key={title}>
            <div className="grid-cols-8 gap-10 md:grid">
              <img
                className="col-span-3 mb-8 shadow-icterine md:mb-0"
                src={gif}
                alt="A gif of a pong game made by campers."
              />
              <div className="col-span-5 font-mono">
                <h4 className="text-2xl font-medium">{title}</h4>
                <span className="font-light uppercase ">{event}</span>
                <p className="mt-6 font-light">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </CampersSlideshow>
    </div>
  </section>
)

export default CamperSlideshowSection
