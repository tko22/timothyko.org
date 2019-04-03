import { Fragment } from 'react'
import Head from "./head"

export default ({ children, isPost }) => (
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
  </div>
)
