import "./index.css";

const Home = () => (
  <div className="home-container">
    <h1 className="home-head">Beautiful analytics to grow smater</h1>
    <p className="home-para">
      Powerful, self-server Product and growth analytics to help you convert,
      engage, and retain more users. Trusted by 4,000 startups
    </p>
    <div className="buttons-container">
      <button className="demo-button" type="button">
        Demo
      </button>
      <button className="signin-button" type="button">
        Sign In
      </button>
    </div>
    <div className="stats-img">
      <img
        src="https://res.cloudinary.com/dg2fgkjxv/image/upload/v1731996785/Content_l6af97.png"
        alt="graph"
      />
    </div>

    <div className="companies-main-container">
      <p className="comapney-growing-para">
        Join 4,000+ companies already growing
      </p>
      <div className="partner-companies-container">
        <div className="companey-card">
          <img
            src="https://res.cloudinary.com/dg2fgkjxv/image/upload/v1732020312/Logomark_1_awpzzq.png"
            alt="boltshift"
          />
          <h1>Boltshift</h1>
        </div>
        <div className="companey-card">
          <img
            src="https://res.cloudinary.com/dg2fgkjxv/image/upload/v1732020312/Logomark_2_x0hfyu.png"
            alt="lightbox"
          />
          <h1>lightbox</h1>
        </div>
        <div className="companey-card">
          <img
            src="https://res.cloudinary.com/dg2fgkjxv/image/upload/v1732020312/Logomark_3_omhzwq.png"
            alt="FatherDev"
          />
          <h1>FatherDev</h1>
        </div>
        <div className="companey-card">
          <img
            src="https://res.cloudinary.com/dg2fgkjxv/image/upload/v1732020312/Logomark_4_dg2ptj.png"
            alt="Spherule"
          />
          <h1>Spherule</h1>
        </div>
        <div className="companey-card">
          <img
            src="https://res.cloudinary.com/dg2fgkjxv/image/upload/v1732020312/Logomark_5_si6d0u.png"
            alt="GlobalBank"
          />
          <h1>GlobalBank</h1>
        </div>
        <div className="companey-card">
          <img
            src="https://res.cloudinary.com/dg2fgkjxv/image/upload/v1732020312/Logomark_6_jj1cok.png"
            alt="Nietzsche"
          />
          <h1>Nietzsche</h1>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
