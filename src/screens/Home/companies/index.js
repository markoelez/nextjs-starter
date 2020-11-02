import React from 'react'
import { Section, Container } from '@components/global'
import { Subtitle, Grid, Company } from './styles'

const Companies = () => {
  return (
    <Section>
      <Container>
        <Subtitle>
          More than 4 million people across 90,000 companies choose Loom
        </Subtitle>
        <Grid>
          <Company src="atlassian.svg" />
          <Company src="atlassian.svg" />
          <Company src="atlassian.svg" />
          <Company src="atlassian.svg" />
          <Company src="atlassian.svg" />
          <Company src="atlassian.svg" />
        </Grid>
      </Container>
    </Section>
  )
}

export default Companies
