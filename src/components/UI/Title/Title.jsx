import React from 'react'
import classNames from 'classnames'
import propTypes from 'prop-types'

const Title = ({ size, isUppercase, className, children, ...attrs }) => {
  const classes = classNames(`ui-title-${size}`, className, { isUppercase })

  return (
    <p
      className={classes}
      contentEditable
      suppressContentEditableWarning
      spellCheck={false}
      {...attrs}
    >
      {children}
    </p>
  )
}

Title.propTypes = {
  size: propTypes.oneOf(['1', '2', '3']),
  isUppercase: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node.isRequired,
}

Title.defaultProps = {
  size: '1',
  isUppercase: false,
  className: '',
}

export default Title
