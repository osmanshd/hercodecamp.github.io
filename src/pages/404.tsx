import { PageProps } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"

const NotFoundPage: React.FunctionComponent<PageProps> = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
  </Layout>
)

export default NotFoundPage
