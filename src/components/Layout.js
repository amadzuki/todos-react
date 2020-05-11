import React from "react"
import styled from "@xstyled/styled-components"

const Header = styled.h1`
  border-bottom: 2;
  text-align: center;
`

const Layout = ({ children }) => {
  return (
    <div>
      <Header>Todo React</Header>
      {children}
    </div>
  )
}

export default Layout
