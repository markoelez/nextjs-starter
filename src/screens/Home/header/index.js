import React from 'react'
import { Button, Input } from '@shared/components'
import Link from 'next/link'
import {
  HeaderWrapper,
  Flex,
  HeaderTextGroup,
  Container,
  FormSubtitleLink,
  HeaderForm,
  InputWrapper,
  FormSubtitle,
  ImageWrapper,
  StyledImage,
} from './styles'
import { color } from '@shared/utils/styles'

const Header = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <HeaderWrapper>
      <Container>
        <Flex>
          <HeaderTextGroup>
            <h1>
              One course,
              <br />
              infinite possibilities
            </h1>
            <h2>
              Train remotely to become a software engineer and pay no tuition
              until you’re hired.
            </h2>
            <HeaderForm onSubmit={handleSubmit}>
              <InputWrapper>
                <Input placeholder="Your email" />
              </InputWrapper>
              <Button
                href="https://app.unimetrics.io"
                variant="dark"
                background={color.primary}
                color="#fff"
              >
                Get Started
              </Button>
            </HeaderForm>
            <FormSubtitle>
              Already have an account?
              <FormSubtitleLink>
                <Link href="/">Sign in</Link>
              </FormSubtitleLink>
            </FormSubtitle>
          </HeaderTextGroup>
          <ImageWrapper>
            <StyledImage src="/couch.png" />
          </ImageWrapper>
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
