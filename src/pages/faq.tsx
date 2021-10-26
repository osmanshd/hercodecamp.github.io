import React from "react"
import { Footer, Header } from "../components/layout"

const FAQPage: React.FunctionComponent = () => (
  <div>
    <Header bg="light" />
    <section className="py-20 mx-auto max-w-7xl px-11">
      <h1 className="mb-10 font-bold text-7xl font-body">FAQs</h1>
      <div className="flex flex-wrap gap-8 sm:mx-auto ">
        {[
          {
            question: `Do I need programming experience?`,
            answer: `No prior coding experience is needed.`,
          },
          {
            question: `What is the target group?`,
            answer: `We are looking for participants in high school for the 2021/2022 calendar year.`,
          },
          {
            question: `What skills do I need?`,
            answer: `Participants should be highly motivated to learn and collaborate.`,
          },
          {
            question: `Do I need my own computer?`,
            answer: `For any virtual events, you *will* need it. Will this be a problem? Reach out to us!`,
          },
          {
            question: `How has COVID-19 impacted the program?`,
            answer: `We’ve gone virtual for the foreseeable future!`,
          },
        ].map(({ question, answer }) => (
          <div
            key={question}
            className="max-w-sm p-5 text-lg text-left bg-white border border-black font-body shadow-black"
          >
            <div className="font-medium">{question}</div>
            <p className="font-light text-gray-800">{answer}</p>
          </div>
        ))}
      </div>
    </section>
    <Footer />
  </div>
)

export default FAQPage
