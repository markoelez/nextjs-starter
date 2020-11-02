/* istanbul ignore file */

import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { wrapper } from '@redux/store'

// Analytics
import Router from 'next/router'
import * as gtag from '@shared/utils/analytics'

// Base styles
import NormalizeStyles from '@shared/utils/styles/normalize_styles'
import BaseStyles from '@shared/utils/styles/base_styles'
import '@shared/utils/styles/font_styles.css'

const propTypes = {
  Component: PropTypes.function,
  pageProps: PropTypes.object,
}

const WrappedApp = ({ Component, pageProps }) => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <Fragment>
      <NormalizeStyles />
      <BaseStyles />
      <Component {...pageProps} />
    </Fragment>
  )
}

WrappedApp.propTypes = propTypes

export default wrapper.withRedux(WrappedApp)
