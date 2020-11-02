import styled from 'styled-components'
import { Button } from '@shared/components'
import { font, device } from '@shared/utils/styles'

export const FeaturesGrid = styled.div`
  display: grid;
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    margin: 0px auto;
    grid-column-gap: 0;
    grid-row-gap: 0px;
  }
  grid-template-columns: 1fr;

  padding-top: 50px;

  width: 100%;
`

export const FeatureItem = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media ${device.tablet} {
    text-align: left;
    align-items: flex-start;
  }
`

export const FeatureTitle = styled.h4`
  color: #191a1b;
  text-align: center;
  ${font.size(30)};
  @media ${device.tablet} {
    text-align: left;
    ${font.size(40)};
  }
  line-height: 1.2;
  margin-bottom: 10px;
`

export const FeatureText = styled.p`
  color: #191a1b;
  ${font.size(16)};
  @media ${device.tablet} {
    ${font.size(18)};
  }
  line-height: 28px;
  padding-bottom: 20px;
`

export const Video = styled.video`
  max-width: 100%;
  height: auto;
  object-fit: contain;
`

export const StyledImage = styled.img`
  @media ${device.tablet} {
    width: 500px;
  }
  width: 450px;
`

export const ActionButton = styled(Button)`
  margin: 20px 0;
  @media ${device.laptop} {
    margin: 0;
  }
`
