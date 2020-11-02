import React from 'react'
import { HeaderWrapper, Flex, HeaderTextGroup, Container } from './styles'

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Flex>
          <HeaderTextGroup>
            <h1>Choose the plan that’s right for you or your team</h1>
          </HeaderTextGroup>
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
