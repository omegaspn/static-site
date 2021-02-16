import React from "react"
import { PageProps } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function IndexRoute(props: PageProps) {
  return (
    <>
      <Layout>
        <h1>Pathasdfasdfasdf:</h1>
        <p>{props.path}</p>
        <Link to="/about">Contact</Link>
      </Layout>
    </>
  )
}
