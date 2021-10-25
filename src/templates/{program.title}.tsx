import React from "react"
import { graphql, PageProps } from "gatsby"
import { Footer, LightHeader } from "../components/layout"

const Template: React.FunctionComponent<PageProps> = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  // TODO: undo ts-ignore
  // @ts-ignore
  const { markdownRemark } = data // data.markdownRemark holds your post data
  // @ts-ignore
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <LightHeader />
      <div>
        <h1>{frontmatter.title}</h1>
        <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <Footer />
    </div>
  )
}
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
