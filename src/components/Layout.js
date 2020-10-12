import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

const GlobalStyle = createGlobalStyle`
${normalize}

* {
  text-decoration: none;
}

h1, h2, h3 {
  margin: 0;  
}

html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
}
body {
  font-size: 16px;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  overscroll-behavior: none;
  overflow-x: hidden;
}
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
