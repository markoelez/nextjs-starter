import styled from 'styled-components'
import { Button } from '@shared/components'
import { font, device } from '@shared/utils/styles'

export const Section = styled.section`
  position: relative;

  z-index: 1;

  width: 100%;

  padding-right: 10px;
  padding-left: 10px;
  @media ${device.tablet} {
    padding-right: 10px;
    padding-left: 10px;
  }

  overflow: hidden;
`

export const SectionTitle = styled.h3`
  color: #191a1b;
  display: flex;
  justify-content: flex-start;
  text-align: center;

  ${font.bold};
  ${font.size(30)};
  @media ${device.laptop} {
    ${font.size(40)};
  }

  margin: 0 auto 0;
  padding-top: 64px;
  margin-bottom: 20px;
`

export const Subtitle = styled.h5`
  color: #191a1b;
  text-align: center;

  line-height: 28px;
  ${font.regular};
  ${font.size(18)};

  max-width: 680px;

  margin: 0 auto 30px auto;
  padding: 10px 0 40px;
`

export const FeaturesGrid = styled.div`
  width: 100%;
  display: grid;
  @media ${device.mobileL} {
    grid-template-columns: 1fr 1fr;
    margin: 0px auto;
    grid-column-gap: 28px;
    grid-row-gap: 35px;
  }
  @media ${device.laptopL} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 0px auto;
    grid-column-gap: 42px;
    grid-row-gap: 35px;
  }
  grid-template-columns: 1fr;
  margin: 0px auto;
  grid-column-gap: 28px;
  grid-row-gap: 35px;

  padding-bottom: 64px;
`

export const FeatureItem = styled.div`
  text-align: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  @media ${device.tablet} {
    margin-bottom: 0;
    text-align: left;
    align-items: flex-start;
  }
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  border-radius: 8px;
  padding: 30px 40px;
`

export const FeatureTitle = styled.h4`
  ${font.regular};
  text-align: center;
  ${font.size(13)};
  @media ${device.tablet} {
    text-align: left;
    ${font.size(18)};
  }
  line-height: 1.2;
  margin-bottom: 10px;
`

export const FeatureSubtitle = styled.p`
  opacity: 0.5;
  ${font.size(15)};
  @media ${device.tablet} {
    ${font.size(15)};
  }
  line-height: 22px;
`
export const FeaturePrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 30px;
`
export const Price = styled.div`
  ${font.medium};
  ${font.size(15)};
  @media ${device.tablet} {
    ${font.size(35)};
  }
  line-height: 22px;
`
export const Period = styled.div`
  opacity: 0.5;
  ${font.size(15)};
  @media ${device.tablet} {
    ${font.size(15)};
  }
  line-height: 22px;
`

export const FeatureList = styled.ul`
  ${font.size(15)};
  @media ${device.tablet} {
    ${font.size(15)};
  }
  line-height: 22px;
  padding: 20px 0;
  width: 100%;
`

export const FeatureListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  padding: 12px 0;
`

export const FeatureListItemIcon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  opacity: 0.6;
`

export const FeatureListItemText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;

  ${font.size(14)};
  @media ${device.tablet} {
    ${font.size(14)};
  }
  line-height: 22px;
  padding-left: 15px;
`

export const ActionButton = styled(Button)`
  width: 100%;
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
`
