

export default () => (
  <>
    <div className="container">
      <div className="row">
        <div className="two-thirds column main-box">
          <p>
            Hey there! I'm an upcoming senior studying Computer Engineering at <a href="https://ece.illinois.edu">UIUC</a>. I'm currently interning at Uber this summer and I previously interned at Tesla. I was also the Co-Director of a very new tech & social good organization - <a href="https://uiuc.hack4impact.org">Hack4Impact UIUC.</a>
          </p>
          <p>My passions lie in leading unified and effective teams, how we as humans absorb and retain information, and designing and developing beautiful products. </p>
          <p className="email-padding">Email Me: <a href="mailto:tk2@illinois.edu">tk2@illinois.edu</a></p>
          <div>
            <a href="https://resume.timothyko.org" className="personal-links">Resume</a>
            <a href="https://github.com/tko22" className="personal-links">Github</a>
            <a href="https://medium.com/@timmykko" className="personal-links">Medium</a>
            <a href="https://www.linkedin.com/in/timothy-ko/" className="personal-links">LinkedIn</a>
            <a href="https://twitter.com/timmykko6" className="personal-links">Twitter</a>
          </div>

        </div>

      </div>
      <hr className="middle-break" />
      <div className="row">
        <div className="publ-box">
          <h5 className="publ-title">My Writing</h5>
          <span className="medium-post-subtitle">Over 350k people have read my writing in the past year!</span>
          <div className="row">
            <div className="publ-text"><span className="publ-date">Mar 7, 2018</span><a
              href="https://medium.freecodecamp.org/developing-an-ethereum-decentralized-voting-application-a99de24992d9">A
              guide to developing an Ethereum decentralized voting application</a></div>
            <div className="publ-text"><span className="publ-date">Jan 8, 2018</span><a
              href="https://medium.freecodecamp.org/docker-development-workflow-a-guide-with-flask-and-postgres-db1a1843044a">Docker
              Development WorkFlow — a guide with Flask and Postgres</a></div>
            <div className="publ-text"><span className="publ-date">Nov 11, 2017</span><a
              href="https://medium.com/@timmykko/django-flask-with-react-js-3c6da2d47b52">Django/Flask
              with React.js</a></div>
            <div className="publ-text"><span className="publ-date">Oct 9, 2017</span><a
              href="https://medium.com/@timmykko/using-openssl-library-with-macos-sierra-7807cfd47892">Using
              OpenSSL Library with MacOS Sierra</a></div>
            <div className="publ-text"><span className="publ-date">Oct 7, 2017</span><a
              href="https://medium.com/@timmykko/deploying-create-react-app-with-nginx-and-ubuntu-e6fe83c5e9e7">Deploying
              create-react-app with Nginx and Ubuntu</a></div>
            <div className="publ-text"><span className="publ-date">Sep 17, 2017</span><a
              href="https://medium.com/@timmykko/best-way-to-use-django-rest-api-a4ab3218d1ac">Best
              way to use Django - REST API</a></div>
            <div className="publ-text"><span className="publ-date">Sep 9, 2017</span><a
              href="https://medium.com/@timmykko/a-quick-glance-of-django-for-beginners-688bc6630fab">A
              Quick Glance of Django</a></div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .medium-post-subtitle {
        font-size: 14px;
        color: grey;
        margin-bottom: 5px;
      }
      .email-padding {
        padding: 0 2%;
        margin-bottom: 5px;
      }
    `}</style>
  </>
)
