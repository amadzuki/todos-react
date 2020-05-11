import React from "react"
import styled from "@xstyled/styled-components"

const Header = styled.div`
  font-size: 20;
  border-bottom: 2;
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
