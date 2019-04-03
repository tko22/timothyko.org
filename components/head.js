import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'
import { withRouter } from "next/router"

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''
const defaultKeywords = "Tim, Ko, software, development, medium, UIUC, Timothy, Timothy Ko, Tim Ko, blog, Timothy Ko Blog"

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <meta name="keywords" content={props.keywords != undefined ? `defaultKeywords, ${props.keywords}` : defaultKeywords} />
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
  keywords: string
}

export default withRouter(Head)
