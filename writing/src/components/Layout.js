import React from 'react'
import { Link } from 'gatsby'
import gray from "gray-percentage"
import { rhythm, scale } from '../utils/typography'

import "../../static/style.css"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1),
            marginBottom: rhythm(0.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
            marginBottom: rhythm(0.65),
            color: gray(60),
            fontSize: "15px"
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {"← Back"}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `0 ${rhythm(3 / 4)} ${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <div className="title">
          <a style={{ textDecoration: "none", color: "black" }} href="https://timothyko.org"><h5 className="header-text" style={{ fontFamily: "Raleway", fontWeight: "100" }}>TIMOTHY KO</h5></a>
        </div>
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
