import React from "react"
import styled from "@xstyled/styled-components"

const Header = styled.h1`
  border-bottom: 2;
`

const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Layout = ({ children }) => {
  return (
    <LayoutStyle>
      <Header>Todos React</Header>
      {children}
    </LayoutStyle>
  )
}

export default Layout
