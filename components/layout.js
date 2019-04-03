import { Fragment, Component } from 'react'
import Head from "./head"
import { withRouter } from "next/router"

class Layout extends Component {
  render() {
    const { router, children } = this.props
    let isPost = false
    if (router.route.includes("/writing") && router.route !== "/writing") {
      isPost = true
    }
    return (
      <div>
        <Head />
        {isPost ?
          <div className="container posts" style={{ fontFamily: "Source Sans Pro" }}>
            <div style={{ maxWidth: "600px", margin: "auto" }}>
              {children}
            </div>
          </div> :
          <Fragment>
            <div style={{ fontFamily: "'Raleway', 'HelveticaNeue', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'" }}>
              {children}
            </div>
          </Fragment>

        }
        {/* <style jsx>{`
      .posts {
        font-family: 'Source Sans Pro', sans-serif;
      }

    `}</style> */}
      </div>)
  }
}

export default withRouter(Layout)