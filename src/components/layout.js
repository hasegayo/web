/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Header from './header'
import Footer from './footer'
import '../styles/global.css'

const Layout = ({ children, title }) => [
  <>
    <div className="siteContainer">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="siteContent">
        <Header />
        <main className="main">{children}</main>
      </div>
      <Footer />
    </div>
  </>,
]

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
