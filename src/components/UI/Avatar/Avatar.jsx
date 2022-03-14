import styled from 'styled-components'
import propTypes from 'prop-types'

const Avatar = styled.div`
  width: 10rem;
  height: 10rem;
  margin-right: 4rem;
  border-radius: ${(props) => (props.isSquare ? '10px' : '50%')};
  background-color: #bfbfbf;
`

Avatar.propTypes = {
  isSquare: propTypes.bool,
  onClick: propTypes.func,
}

Avatar.defaultProps = {
  isSquare: false,
  onClick: () => {},
}

export default Avatar
