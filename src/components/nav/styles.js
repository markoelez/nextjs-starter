/* istanbul ignore file */

import styled, { css } from 'styled-components'
import { font, mixin, device } from '@utils/styles'

export const StyledNav = styled.nav`
  position: absolute;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px 10px;

  ${({ borderType }) => handleBorderType(borderType)};

  background: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};

  z-index: 20;

  @media ${device.laptop} {
    padding: 25px 5%;
  }
`

const handleBorderType = (type) => {
  switch (type) {
    case 'light':
      return css`
        border-bottom: 1px solid rgba(255, 255, 255, 0.15);
      `
    case 'dark':
      return css`
        border-bottom: 1px solid rgb(241, 241, 241);
      `
    case 'none':
      return
    default:
      return
  }
}

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-left: auto;
  margin-right: auto;
`

export const CompanyName = styled.div`
  ${font.bold};
  ${font.size(30)};

  color: ${(props) => props.logoColor};

  ${mixin.clickable};

  padding-left: 12px;
`

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LinksSection = styled(Section)`
  display: none;

  @media ${device.laptop} {
    display: flex;
  }
`

export const LogoWrapper = styled.div`
  ${mixin.clickable};

  min-width: 40px;
`

export const LinkItem = styled.div`
  display: flex;

  color: ${(props) => props.textColor};

  &:hover {
    color: ${(props) => props.textColorHover};
  }

  transition-property: color, border-color, background-color;
  transition: 0.1s linear;

  text-transform: uppercase;

  ${mixin.clickable};

  ${({ isActive, activeColor }) =>
    isActive &&
    css`
      //border-bottom: 2px solid ${activeColor};
    `};

  ${font.medium};
  ${font.size(14)};

  padding: 0 30px;
`

export const LinkButton = styled.div`
  display: flex;

  ${mixin.clickable};

  ${font.medium};
  ${font.size(14)};

  border-radius: 3px;

  padding: 10px 15px;

  background: ${(props) => props.buttonColor};
  color: ${(props) => props.buttonTextColor};
  text-transform: uppercase;

  transition: 0.1s linear;
  transition-property: color, border-color, background-color;

  &:hover {
    background: ${(props) => mixin.lighten(props.buttonColor, 0.3)};
  }

  @media ${device.laptop} {
    ${font.medium};
    ${font.size(13)};
    padding: 10px 18px;
  }
`
