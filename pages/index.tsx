import { useState } from "react";
import Head from "next/head";

import Nav from "../components/Nav";
import Footer  from '../components/Footer'

const Home = () => {
  const [info] = useState(
    "I'm a software developer based in Tacloban City, PH specializing in building websites and applications."
  );

  return (
    <div className="main-container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Christian Paranas | Software Developer</title>
        <meta
          property="og:title"
          content="Christian Paranas | Software Developer"
        />
        <meta property="og:url" content="https://robsoriano.com" />
        <meta
          property="og:site_name"
          content="Christian Paranas | Software Developer"
        />
        <meta
          property="og:image"
          content="https://og-image.vercel.app/robertsoriano.com.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Christian Paranas is a software developer based in Tacloban City, PH specializing in building websites and applications."
        />
      </Head>

      <Nav />

      <div className="home-page">
        <div className="me">
          <img src="/me.png" alt="dre nadara" />
        </div>
        <div className="msg">
          <span className="s1">Hi. I'm</span>
          <span className="s2">Christian R. Paranas</span>
          <span className="s3">{info}</span>
        </div>
        <div className="options">
          <div className="see">Projects</div>
          <div className="cv">
            Curriculum Vitae <i className="fas fa-file-download"></i>
          </div>
        </div>
        <div className="can">
          <div className="web">
            <img src="/computer-mouse.svg" alt="" />
            <div className="title">Web Development</div>
            <div className="dis">
              I can build your website from simple features to advance,
              front-end and back-end development.
            </div>
          </div>
          <div className="ui">
            <img className="ux" src="/web-layout.svg" alt="" />
            <div className="title">UX/UI Design</div>
            <div className="dis">
              I can make you simple landing page and complex design for your web
              app
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
