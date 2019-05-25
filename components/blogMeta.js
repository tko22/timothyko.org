import React, { Component } from "react";
import Link from "next/link"
import { ArticleJsonLd } from 'next-seo';
import { withRouter } from "next/router"

class BlogMeta extends Component {

  render() {
    const { postData, router } = this.props;
    return (
      <React.Fragment>
        <ArticleJsonLd
          url={`https://timothyko.org${router.asPath}`}
          title={postData.title}
          datePublished={postData.postDate}
          authorName="Timothy Ko"
          description={postData.description}
        />
        <div className="back-btn"><Link href="/writing"><a>← Back</a></Link></div>
        <h1 style={{ fontFamily: "Merriweather, serif" }}>{postData.title}</h1>
        <p className="publ-date">{postData.postDate}</p>
        <style jsx>{`
          .back-btn {
            margin-bottom: 15px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withRouter(BlogMeta)