import PropTypes from 'prop-types'

export const carPropTypes = PropTypes.shape({
  id: PropTypes.number,
  make: PropTypes.string,
  model: PropTypes.string,
  year: PropTypes.number,
  color: PropTypes.string,
  price: PropTypes.number
})

export const carsPropTypes = PropTypes.arrayOf(carPropTypes)