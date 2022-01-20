import React from "react"
import { graphql, Link, PageProps } from "gatsby"
import { Footer, Header } from "../../components/layout"
import { IcterineLinkButton } from "../../components/LinkButton"
import { Tag, Program } from "../programs"

const Template: React.FunctionComponent<PageProps> = ({ data }) => {
  const { markdownRemark } = data as { markdownRemark: Program }
  const {
    frontmatter: { tags, creators, title, app_link },
    html,
  } = markdownRemark
  return (
    <div>
      <Header bg="light" />
      <div className="max-w-5xl px-8 py-10 mx-auto">
        <div className="px-8 py-10 mb-4 bg-gray-100 rounded font-body">
          {tags ? (
            <div className="flex gap-2 mb-2">
              {tags.map(tag => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          ) : null}
          <h1 className="font-mono text-3xl font-bold">{title}</h1>
          {creators ? (
            <div>
              <span className="font-bold">Creators: </span>
              {creators.join(", ")}
            </div>
          ) : null}

          <div
            className="prose font-body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        {app_link ?
          <Link to={app_link}>
            <IcterineLinkButton >
              Apply Now
            </IcterineLinkButton>
          </Link>
        : null}
        <Link to="/programs" className="float-right font-body">
          View More Programs >
        </Link>
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
        tags
        creators
        app_link
      }
    }
  }
`

export default Template
