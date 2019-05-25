import Link from "next/link"
import Head from "../components/head"

const postFileNames =
  preval`
    module.exports = require("fs").readdirSync("./pages/writing")
    ` || []

const posts = postFileNames.map(name => {
  const {
    default: Component,
    meta: { title, postDate }
  } = require('./writing/' + name)

  return {
    Component,
    title,
    postDate,
    fileName: name.replace(/\.[^/.]+$/, "")
  }
})

export default () => (
  <>
    <div className="post-listing-container">
      <Head title="Timothy Ko's Writing" />
      <h1
        className="post-listing-header"
      >
        My Writing
      </h1>
      <p style={{ color: "#b5b5b5", fontSize: "14px", paddingLeft: "10px" }}>By <Link href="/"><a style={{ color: "#b5b5b5", textDecoration: "underline" }}>Timothy Ko</a></Link></p>
      {
        posts.map(post => (
          <div className="publ-text">
            <span className="post-date">{post.postDate}</span>
            <Link href={`/writing/${post.fileName}`}>
              <a className="post-link">{post.title}</a>
            </Link>
          </div>
        ))
      }
    </div >
    <style jsx>{`
      .post-listing-container {
        margin-left:auto;
        margin-right:auto;
        max-width: 624px;
        padding:0 1.1475rem 2.295rem 1.1475rem;
        font-family: 'Source Sans Pro', sans-serif;
      }
      .post-listing-header {
        line-height: 2.295rem;
        margin-bottom: 20px;
        margin-top: 0;
        box-shadow: none;
        color: inherit;
        font-family: 'Merriweather', sans-serif;
      }
      .post-link {
        text-decoration: underline;
        font-size: 16px;
      }
      .post-link:visited {
        color: #fda6b3;
      }
      .post-date {
        color: #a39999;
        padding-right: 20px;
        text-align: right;
        width: 100px;
        display: inline-block;
        font-size: 13px;
      }
    `}</style>
  </>
)
