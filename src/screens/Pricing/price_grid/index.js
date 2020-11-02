import React from 'react'
import { Container } from '@components/global'
import { CheckCircle } from 'react-feather'
import {
  Section,
  ActionButton,
  SectionTitle,
  FeaturesGrid,
  FeatureItem,
  FeatureTitle,
  FeatureSubtitle,
  FeatureList,
  FeatureListItem,
  FeatureListItemText,
  FeatureListItemIcon,
  Price,
  Period,
  FeaturePrice,
} from './styles'

const PriceGrid = () => {
  return (
    <Section background="#fff">
      <Container>
        <SectionTitle>For Renters</SectionTitle>
        <FeaturesGrid>
          <FeatureItem background="#fff" color="#02044a">
            <FeatureTitle>Basic</FeatureTitle>
            <FeaturePrice>
              <Price>$0</Price>
              <Period>/ Month</Period>
            </FeaturePrice>
            <FeatureSubtitle>
              Easily link up to 5 banks to your finance account.
            </FeatureSubtitle>
            <FeatureList>
              <FeatureListItem>
                <FeatureListItemIcon>
                  <CheckCircle size={18} />
                </FeatureListItemIcon>
                <FeatureListItemText>All limited lists</FeatureListItemText>
              </FeatureListItem>
              <FeatureListItem>
                <FeatureListItemIcon>
                  <CheckCircle size={18} />
                </FeatureListItemIcon>
                <FeatureListItemText>All limited lists</FeatureListItemText>
              </FeatureListItem>
              <FeatureListItem>
                <FeatureListItemIcon>
                  <CheckCircle size={18} />
                </FeatureListItemIcon>
                <FeatureListItemText>All limited lists</FeatureListItemText>
              </FeatureListItem>
              <FeatureListItem>
                <FeatureListItemIcon>
                  <CheckCircle size={18} />
                </FeatureListItemIcon>
                <FeatureListItemText>All limited lists</FeatureListItemText>
              </FeatureListItem>
              <FeatureListItem>
                <FeatureListItemIcon>
                  <CheckCircle size={18} />
                </FeatureListItemIcon>
                <FeatureListItemText>All limited lists</FeatureListItemText>
              </FeatureListItem>
              <FeatureListItem>
                <FeatureListItemIcon>
                  <CheckCircle size={18} />
                </FeatureListItemIcon>
                <FeatureListItemText>All limited lists</FeatureListItemText>
              </FeatureListItem>
            </FeatureList>

            <ActionButton background="#5e2ede" color="#fff" variant="dark">
              Choose Plan
            </ActionButton>
          </FeatureItem>
          <FeatureItem background="#fff" color="#02044a">
            <FeatureTitle>Pro</FeatureTitle>
            <FeaturePrice>
              <Price>$25</Price>
              <Period>/ Month</Period>
            </FeaturePrice>
            <FeatureSubtitle>
              Easily link up to 5 banks to your finance account.
            </FeatureSubtitle>
            <FeatureList>
              <FeatureListItem>
                <FeatureListItemIcon>
                  <CheckCircle size={18} />
                </FeatureListItemIcon>
                <FeatureListItemText>All limited lists</FeatureListItemText>
              </FeatureListItem>
              <FeatureListItem>
                <FeatureListItemIcon>
                  <CheckCircle size={18} />
                </FeatureListItemIcon>
                <FeatureListItemText>All limited lists</FeatureListItemText>
              </FeatureListItem>
              <FeatureListItem>
                <FeatureListItemIcon>
                  <CheckCircle size={18} />
                </FeatureListItemIcon>
                <FeatureListItemText>All limited lists</FeatureListItemText>
              </FeatureListItem>
              <FeatureListItem>
                <FeatureListItemIcon>
                  <CheckCircle size={18} />
                </FeatureListItemIcon>
                <FeatureListItemText>All limited lists</FeatureListItemText>
              </FeatureListItem>
              <FeatureListItem>
                <FeatureListItemIcon>
                  <CheckCircle size={18} />
                </FeatureListItemIcon>
                <FeatureListItemText>All limited lists</FeatureListItemText>
              </FeatureListItem>
              <FeatureListItem>
                <FeatureListItemIcon>
                  <CheckCircle size={18} />
                </FeatureListItemIcon>
                <FeatureListItemText>All limited lists</FeatureListItemText>
              </FeatureListItem>
            </FeatureList>

            <ActionButton background="#5e2ede" color="#fff" variant="dark">
              Choose Plan
            </ActionButton>
          </FeatureItem>
          <FeatureItem background="#5e2ede" color="#fff">
            <FeatureTitle>Business</FeatureTitle>
            <FeaturePrice>
              <Price>$40</Price>
              <Period>/ Month</Period>
            </FeaturePrice>
            <FeatureSubtitle>
              Send money to friends and family with ease.
            </FeatureSubtitle>
            <FeatureList>
              <FeatureListItem>
                <FeatureListItemIcon>
                  <CheckCircle size={18} />
                </FeatureListItemIcon>
                <FeatureListItemText>All limited lists</FeatureListItemText>
              </FeatureListItem>
              <FeatureListItem>
                <FeatureListItemIcon>
                  <CheckCircle size={18} />
                </FeatureListItemIcon>
                <FeatureListItemText>All limited lists</FeatureListItemText>
              </FeatureListItem>
              <FeatureListItem>
                <FeatureListItemIcon>
                  <CheckCircle size={18} />
                </FeatureListItemIcon>
                <FeatureListItemText>All limited lists</FeatureListItemText>
              </FeatureListItem>
              <FeatureListItem>
                <FeatureListItemIcon>
                  <CheckCircle size={18} />
                </FeatureListItemIcon>
                <FeatureListItemText>All limited lists</FeatureListItemText>
              </FeatureListItem>
              <FeatureListItem>
                <FeatureListItemIcon>
                  <CheckCircle size={18} />
                </FeatureListItemIcon>
                <FeatureListItemText>All limited lists</FeatureListItemText>
              </FeatureListItem>
              <FeatureListItem>
                <FeatureListItemIcon>
                  <CheckCircle size={18} />
                </FeatureListItemIcon>
                <FeatureListItemText>All limited lists</FeatureListItemText>
              </FeatureListItem>
            </FeatureList>

            <ActionButton background="#fff" color="#5e2ede">
              Choose Plan
            </ActionButton>
          </FeatureItem>
          <FeatureItem background="#5e2ede" color="#fff">
            <FeatureTitle>Enterprise</FeatureTitle>
            <FeaturePrice>
              <Price>$99</Price>
              <Period>/ Month</Period>
            </FeaturePrice>
            <FeatureSubtitle>
              Send money to friends and family with ease.
            </FeatureSubtitle>
            <FeatureList>
              <FeatureListItem>
                <FeatureListItemIcon>
                  <CheckCircle size={18} />
                </FeatureListItemIcon>
                <FeatureListItemText>All limited lists</FeatureListItemText>
              </FeatureListItem>
              <FeatureListItem>
                <FeatureListItemIcon>
                  <CheckCircle size={18} />
                </FeatureListItemIcon>
                <FeatureListItemText>All limited lists</FeatureListItemText>
              </FeatureListItem>
              <FeatureListItem>
                <FeatureListItemIcon>
                  <CheckCircle size={18} />
                </FeatureListItemIcon>
                <FeatureListItemText>All limited lists</FeatureListItemText>
              </FeatureListItem>
              <FeatureListItem>
                <FeatureListItemIcon>
                  <CheckCircle size={18} />
                </FeatureListItemIcon>
                <FeatureListItemText>All limited lists</FeatureListItemText>
              </FeatureListItem>
              <FeatureListItem>
                <FeatureListItemIcon>
                  <CheckCircle size={18} />
                </FeatureListItemIcon>
                <FeatureListItemText>All limited lists</FeatureListItemText>
              </FeatureListItem>
              <FeatureListItem>
                <FeatureListItemIcon>
                  <CheckCircle size={18} />
                </FeatureListItemIcon>
                <FeatureListItemText>All limited lists</FeatureListItemText>
              </FeatureListItem>
            </FeatureList>

            <ActionButton background="#fff" color="#5e2ede">
              Choose Plan
            </ActionButton>
          </FeatureItem>
        </FeaturesGrid>
      </Container>
    </Section>
  )
}

export default PriceGrid
