import styled from 'styled-components'
import { mixin, color, font, device } from '@shared/utils/styles'

import Link from 'next/link'

export const Container = styled.div`
  text-align: center;

  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media ${device.mobileL} {
    max-width: 540px;
  }

  @media ${device.tablet} {
    max-width: 720px;
  }

  @media ${device.laptop} {
    max-width: 960px;
  }

  @media ${device.laptopL} {
    max-width: 1200px;
  }

  ${(props) =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #fff;

  width: 100%;

  padding: 200px 0 50px 0;

  position: relative;
  //clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
`
export const Subtitle = styled.h5`
  font-size: 16px;
  color: ${color.textLight};
  letter-spacing: 0px;
  margin-bottom: 16px;
`

export const HeaderTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;

  > div {
    margin: 0 16px;
    @media ${device.laptop} {
      width: 120%;
      margin-bottom: -4.5%;
    }
  }

  h1 {
    ${font.size(50)};
    max-width: 700px;
    color: ${color.textLight};
    margin: 0 0 24px;
  }

  h2 {
    line-height: 30px;
    color: ${color.textLight};
    margin-bottom: 24px;
    ${font.size(22)};
    ${font.regular};
  }

  p {
    margin-bottom: 48px;
  }
`

export const Flex = styled.div`
  @media ${device.laptop} {
    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: 1fr;
  }
  justify-content: space-between;
  align-items: center;
  grid-template-columns: 1fr;
  grid-gap: 64px;
`

export const HeaderForm = styled.form`
  flex-direction: column;
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-bottom: 12px;
  }
  padding-bottom: 20px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
`

export const FormSubtitle = styled.span`
  color: ${color.textLight};
  ${font.size(15)};
  margin: 20px 0;
  @media ${device.laptop} {
    padding: 0;
  }
`

export const FormSubtitleLink = styled(Link)`
  color: ${color.textLink};
  padding-bottom: 1px;
  margin-left: 8px;
  text-decoration: none;
  border-bottom: 1px solid ${color.textLink};
`

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-bottom: 10px;
  @media ${device.tablet} {
    padding-bottom: 0;
  }
  margin-right: 20px;
`

export const HeaderButton = styled.button`
  display: inline-block;

  ${mixin.clickable};

  ${font.medium};
  ${font.size(12)};

  padding: 12px 18px;

  border-radius: 3px;

  white-space: nowrap;

  background: #fff;
  color: ${color.primary};
  text-transform: uppercase;

  transition: 0.1s linear;
  transition-property: color, border-color, background-color;

  &:hover {
    background: ${mixin.lighten('#0071e3', 0.3)};
  }
`
export const ImageWrapper = styled.div`
  display: none;
  @media ${device.laptop} {
    display: flex;
    justify-self: center;
  }
`
