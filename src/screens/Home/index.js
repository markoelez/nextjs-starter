/* istanbul ignore file */
/* Ignored due to video rendering issue in tests */

import React from 'react'
import Head from 'next/head'

import Nav from '@components/nav'
import { NavRoutes } from '@utils/constants/nav_routes'

import { Page, Container, Main, Title, Description } from './styles'

const Home = () => {
  const ANIMATION_DELAY = 0.2
  const ANIMATION_DURATION = 0.5
  const DELTA_Y = -50
  const TRANSITION_EASE_IN = [0.48, 0.15, 0.25, 0.96]

  return (
    <Page>
      <Head>
        <title>Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav
        bgColor="transparent"
        textColor="#000"
        textColorHover="#888"
        logoColor="#000"
        borderType="dark"
        buttonVariant="primary"
        route={NavRoutes.HOME}
      />

      <Container>
        <Main>
          <Title
            initial={{ opacity: 0, y: DELTA_Y }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: ANIMATION_DELAY,
              duration: ANIMATION_DURATION,
              ease: TRANSITION_EASE_IN,
            }}
          >
            Title
          </Title>

          <Description
            initial={{ opacity: 0, y: DELTA_Y }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: ANIMATION_DELAY,
              duration: ANIMATION_DURATION,
              ease: TRANSITION_EASE_IN,
            }}
          >
            Subtitle
          </Description>
        </Main>
      </Container>
    </Page>
  )
}

export default Home
