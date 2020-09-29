import React from 'react'
import PropTypes from 'prop-types'

import Logo from '@components/logo'
import { Button } from '@shared'
import { NavRoutes } from '@utils/constants/nav_routes'
import { color } from '@utils/styles'

import Link from 'next/link'

import {
  StyledNav,
  Content,
  Section,
  LogoWrapper,
  CompanyName,
  LinkItem,
  LinksSection,
} from './styles'

const propTypes = {
  textColor: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  textColorHover: PropTypes.string,
  bgColor: PropTypes.string,
  logoColor: PropTypes.string,
  borderType: PropTypes.oneOf(['dark', 'light', 'none']),
  buttonVariant: PropTypes.oneOf(['dark', 'light']),
  route: PropTypes.string,
}

const defaultProps = {
  textColor: color.textLight,
  textColorHover: '#000',
  buttonColor: '#000',
  buttonTextColor: '#fff',
  bgColor: '#fff',
  logoColor: 'primary',
  borderType: 'light',
  buttonVariant: 'light',
  route: NavRoutes.HOME,
}

const Nav = ({
  route,
  textColor,
  buttonColor,
  buttonTextColor,
  textColorHover,
  bgColor,
  logoColor,
  borderType,
  buttonVariant,
}) => {
  return (
    <StyledNav textColor={textColor} bgColor={bgColor} borderType={borderType}>
      <Content>
        <Section>
          <LogoWrapper>
            <Link href="/">
              <Logo icon="company" color={logoColor} disableFill={true} />
            </Link>
          </LogoWrapper>
          <Link href="/">
            <CompanyName logoColor={logoColor}>Unimetrics</CompanyName>
          </Link>
        </Section>

        <LinksSection>
          <Link href="/product">
            <LinkItem
              isActive={route === NavRoutes.FORUM}
              textColorHover={textColorHover}
              activeColor={logoColor}
            >
              Product
            </LinkItem>
          </Link>
          <Link href="/solutions">
            <LinkItem
              isActive={route === NavRoutes.MISSION}
              activeColor={logoColor}
              textColorHover={textColorHover}
            >
              Solutions
            </LinkItem>
          </Link>
          <Link href="/learn">
            <LinkItem
              isActive={route === NavRoutes.COMPANY}
              activeColor={logoColor}
              textColorHover={textColorHover}
            >
              Learn
            </LinkItem>
          </Link>
          <Link href="/pricing">
            <LinkItem
              isActive={route === NavRoutes.SERVICES}
              activeColor={logoColor}
              textColorHover={textColorHover}
            >
              Pricing
            </LinkItem>
          </Link>
        </LinksSection>
        <Section>
          <Button
            href="https://app.unimetrics.io"
            icon="arrow-right"
            iconPos="after"
            variant={buttonVariant}
            backgroundColor={buttonColor}
            color={buttonTextColor}
          >
            Sign Up
          </Button>
        </Section>
      </Content>
    </StyledNav>
  )
}

Nav.propTypes = propTypes

Nav.defaultProps = defaultProps

export default Nav
