import PropTypes from 'prop-types'
import React from 'react'

import { Section } from './styles.js'

function Contrast (props) {
  return (
        <Section style={{
          backgroundImage: `url(http://image.tmdb.org/t/p/original${props.item.backdrop_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>

            <div>{props.item.name}</div>
        </Section>
  )
}

export default Contrast

Contrast.propTypes = {
  item: PropTypes.object
}
