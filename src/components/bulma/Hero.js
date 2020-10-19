import React from "react";

const Hero = () => (
  <section className="hero is-primary is-large">
    <HeroHead />
    <HeroBody />
    <HeroFoot />
  </section>
);

const HeroHead = () => (
  <div className="hero-head">
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img
              src="https://bulma.io/images/bulma-type-white.png"
              alt="Logo"
            />
          </a>
        </div>
      </div>
    </nav>
  </div>
);

const HeroBody = () => (
  <div className="hero-body">
    <div className="container has-text-centered">
      <p className="title">0xAlchemist's</p>
      <p className="subtitle">React Boilerplate</p>
    </div>
  </div>
);

const HeroFoot = () => (
  <div className="hero-foot">
    <nav className="tabs is-large is-boxed is-fullwidth">
      <div className="container">
        <ul>
          <li className="is-active">
            <a href="https://reactjs.org/" target="_blank">
              React Docs
            </a>
          </li>
          <li>
            <a href="https://bulma.io/" target="_blank">
              Bulma CSS Docs
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Hero;
