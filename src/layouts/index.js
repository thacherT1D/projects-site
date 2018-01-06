import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'
import './style.css'

const Header = () => (
  <div className="header">
    <div className="header-title">
      <h1 style={{
        margin: 0,
        background: '#212F3D',
       }}>
        <Link to="/" className="link-style">
          Company Name
        </Link>
      </h1>
      <h3 className="sub-title">SubTitle</h3>
    </div>
  </div>
)

const Hero = () => (
  <div className="hero-image"></div>
)

const Footer = () => (
  <div className="footer">
    <p style={{ background: '#212F3D' }}>
      Copyright © 2018 Fun Things </p>
    <p style={{ background: '#212F3D' }}>All rights reserved.​</p>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Hero />
    <Header />
    {/* <Hero /> */}
    <div className="main">
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
