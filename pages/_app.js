import React from 'react'
import App, { Container } from 'next/app'
import Link from 'next/link'
import Layout from '../components/layout'
import Head from '../components/head'
import { SKELETON, STYLES } from '../utils/global-css'
import { withRouter } from 'next/router';
import NextSeo from 'next-seo';
import seoConfig from "../utils/next-seo-config"

class MyApp extends App {
  static async getInitialProps({ Component, ctx, router }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    let isPost = false
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <NextSeo config={{ ...seoConfig }} />
        <div class="title">
          <h5 class="header-text"><Link href="/"><a>TIMOTHY KO</a></Link></h5>
        </div>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <style jsx global>
          {
            SKELETON
          }
        </style>
        <style jsx>
          {STYLES}
        </style>

      </Container >
    )
  }
}

export default withRouter(MyApp)
