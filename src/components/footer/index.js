import React from 'react'

import Logo from '@components/logo'
import { color } from '@shared/utils/styles'

import { COMPANY_LOGO_NAME } from '@shared/utils/constants/styles'
import {
  FooterColumn,
  LogoWrapper,
  FooterColumnContainer,
  FooterWrapper,
} from './styles'

import Link from 'next/link'

const Footer = () => (
  <FooterWrapper color="#fff" backgroundColor={color.secondary}>
    <FooterColumnContainer>
      <FooterColumn>
        <LogoWrapper>
          <Link href="/">
            <Logo icon={COMPANY_LOGO_NAME} color="#fff" disableFill={true} />
          </Link>
        </LogoWrapper>
      </FooterColumn>
      <FooterColumn>
        <span>Resources</span>
        <ul>
          <li>Compare</li>
          <li>Blog</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Company</span>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Social</span>
        <ul>
          <li>LinkedIn</li>
          <li>Instagram</li>
        </ul>
      </FooterColumn>
    </FooterColumnContainer>
  </FooterWrapper>
)

export default Footer
