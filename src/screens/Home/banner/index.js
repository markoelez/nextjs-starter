import React from 'react'
import { Section, Container } from '@components/global'
import {
  FeaturesGrid,
  FeatureItem,
  ActionButton,
  FeatureTitle,
  StyledImage,
  FeatureText,
} from './styles'

const Banner = () => {
  return (
    <Section background="#eff1f9">
      <Container>
        <FeaturesGrid>
          <FeatureItem>
            <FeatureTitle>Loom for Teams</FeatureTitle>
            <FeatureText>
              Bring your whole team together on one subscription to communicate
              with video.
            </FeatureText>
            <ActionButton
              href="https://app.unimetrics.io"
              variant="dark"
              background="#516cf0"
              color="#fff"
            >
              Learn More
            </ActionButton>
          </FeatureItem>
          <FeatureItem>
            <StyledImage src="/demo_pic.png" />
          </FeatureItem>
        </FeaturesGrid>
      </Container>
    </Section>
  )
}

export default Banner
