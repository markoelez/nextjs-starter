import React from 'react'
import PropTypes from 'prop-types'

import { StyledIcon } from './styles'

const fontIconCodes = {
  [`arrow-right`]: '\\2023',
}

const propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(fontIconCodes)).isRequired,
  size: PropTypes.number,
  left: PropTypes.number,
  top: PropTypes.number,
}

const defaultProps = {
  className: undefined,
  size: 16,
  left: 0,
  top: 0,
}

const Icon = ({ type, ...iconProps }) => (
  <StyledIcon
    {...iconProps}
    data-testid={`icon:${type}`}
    code={fontIconCodes[type]}
  />
)

Icon.propTypes = propTypes
Icon.defaultProps = defaultProps

export default Icon
