import React from 'react'
import { Section, Container } from '@components/global'
import {
  Subtitle,
  SectionTitle,
  FeaturesGrid,
  FeatureItem,
  Video,
  FeatureTitle,
  FeatureText,
} from './styles'

const Features = () => {
  return (
    <Section background="#f9f9f9">
      <Container>
        <SectionTitle>Take back your time</SectionTitle>
        <Subtitle>
          Sending a Loom is more efficient than typing long emails or spending
          your day in meetings having conversations that don’t need to happen in
          real-time.
        </Subtitle>
        <FeaturesGrid>
          <FeatureItem>
            <Video
              playsinline
              loop
              autoPlay
              muted
              preload="auto"
              height="360"
              width="570"
            >
              <source src="/slack-integration.mp4" type="video/mp4" />
            </Video>
          </FeatureItem>
          <FeatureItem>
            <FeatureTitle>Aggregation</FeatureTitle>
            <FeatureText>
              Easily link up to 5 banks to your finance account.
            </FeatureText>
          </FeatureItem>
          <FeatureItem>
            <FeatureTitle>Payments</FeatureTitle>
            <FeatureText>
              Send money to friends and family with ease.
            </FeatureText>
          </FeatureItem>
          <FeatureItem>
            <Video
              playsinline
              loop
              autoPlay
              muted
              preload="auto"
              height="360"
              width="570"
            >
              <source src="/slack-integration.mp4" type="video/mp4" />
            </Video>
          </FeatureItem>
        </FeaturesGrid>
      </Container>
    </Section>
  )
}

export default Features
