import PropTypes from 'prop-types'
import React from 'react'

import { List } from './styles.js'

function MovieList (props) {
  return (
        <List>{props.children}</List>
  )
}

export default MovieList

MovieList.propTypes = {
  children: PropTypes.array
}
