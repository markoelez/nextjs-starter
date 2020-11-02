import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Hamburger from 'hamburger-react'
import Scrollspy from 'react-scrollspy'
import Link from 'next/link'

import {
  StyledNav,
  MobileLinkItem,
  Content,
  Section,
  ActionsSection,
  Mobile,
  MobileMenu,
  LogoWrapper,
  CompanyName,
  LinkItem,
  LinksSection,
} from './styles'

const propTypes = {
  scrolledMobileToggleColor: PropTypes.string,
  mobileTextColor: PropTypes.string,
  mobileToggleColor: PropTypes.string,
  mobileBackground: PropTypes.string,
  items: PropTypes.list,
  renderLogo: PropTypes.func,
  renderButton: PropTypes.func,
  renderScrolledButton: PropTypes.func,
  brandText: PropTypes.string,
  textColor: PropTypes.string,
  scrolledTextColor: PropTypes.string,
  scrolledLogoColor: PropTypes.string,
  textColorHover: PropTypes.string,
  background: PropTypes.string,
  scrolledBackground: PropTypes.string,
  logoColor: PropTypes.string,
  logoTextColor: PropTypes.string,
  position: PropTypes.oneOf(['fixed', 'absolute', 'relative']),
  borderType: PropTypes.oneOf(['dark', 'light', 'none']),
  //route: PropTypes.string,
}

const defaultProps = {
  scrolledMobileToggleColor: '#000',
  mobileTextColor: '#000',
  mobileToggleColor: '#000',
  mobileBackground: '#fff',
  items: undefined,
  brandText: undefined,
  scrolledTextColor: '#000',
  scrolledLogoColor: '#000',
  textColor: '#000',
  textColorHover: '#000',
  position: 'absolute',
  background: '#fff',
  scrolledBackground: '#fff',
  logoColor: '#000',
  logoTextColor: '#000',
  borderType: 'light',
  //route: '/',
  renderLogo: undefined,
  renderButton: undefined,
  renderScrolledButton: undefined,
}

const Nav = ({
  mobileTextColor,
  mobileToggleColor,
  mobileBackground,
  brandText,
  items,
  //route,
  textColor,
  scrolledTextColor,
  textColorHover,
  renderLogo,
  renderButton,
  renderScrolledButton,
  background,
  scrolledBackground,
  scrolledLogoColor,
  logoColor,
  logoTextColor,
  borderType,
  position,
  scrolledMobileToggleColor,
}) => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  }

  const [hasScrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  const handleScroll = () => {
    const scrollTop = window.pageYOffset
    if (scrollTop > 60) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getRoute = (name) => {
    return '/' + name.toLowerCase().replace(/\s/g, '-')
  }

  return (
    <Fragment>
      <StyledNav
        background={background}
        scrolledBackground={scrolledBackground}
        borderType={borderType}
        position={position}
        scrolled={hasScrolled}
      >
        <Content>
          <Scrollspy offset={-64}>
            <Section scrolled={hasScrolled}>
              {renderLogo && (
                <LogoWrapper
                  color={logoColor}
                  scrolledColor={scrolledLogoColor}
                  scrolled={hasScrolled}
                >
                  <Link href="/">{renderLogo()}</Link>
                </LogoWrapper>
              )}
              {brandText && (
                <Link href="/">
                  <CompanyName
                    color={logoTextColor}
                    scrolledColor={scrolledLogoColor}
                    scrolled={hasScrolled}
                  >
                    {brandText}
                  </CompanyName>
                </Link>
              )}
            </Section>
          </Scrollspy>

          <LinksSection
            color={textColor}
            scrolledColor={scrolledTextColor}
            scrolled={hasScrolled}
          >
            {items.map((v, i) => (
              <Link key={i} href={getRoute(v)}>
                <LinkItem
                  onClick={() => setMobileMenuOpen(false)}
                  key={i}
                  isActive={false}
                  textColorHover={textColorHover}
                  activeColor={logoColor}
                >
                  {v.toLowerCase()}
                </LinkItem>
              </Link>
            ))}
          </LinksSection>
          <ActionsSection>
            <Mobile>
              {!hasScrolled && renderButton && renderButton()}
              {hasScrolled && renderScrolledButton && renderScrolledButton()}
            </Mobile>
            <Mobile hide={true}>
              <Hamburger
                toggled={mobileMenuOpen}
                toggle={toggleMobileMenu}
                size={25}
                color={
                  hasScrolled ? scrolledMobileToggleColor : mobileToggleColor
                }
              />
            </Mobile>
          </ActionsSection>
        </Content>
      </StyledNav>
      {
        <MobileMenu
          color={mobileTextColor}
          background={mobileBackground}
          initial={false}
          animate={mobileMenuOpen ? 'open' : 'closed'}
          variants={variants}
        >
          {items.map((v, i) => (
            <Link key={i} href={'/' + v.toLowerCase()}>
              <MobileLinkItem
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                key={i}
                isActive={false}
                textColorHover={textColorHover}
                activeColor={logoColor}
              >
                {v.toLowerCase()}
              </MobileLinkItem>
            </Link>
          ))}
        </MobileMenu>
      }
    </Fragment>
  )
}

Nav.propTypes = propTypes

Nav.defaultProps = defaultProps

export default Nav
