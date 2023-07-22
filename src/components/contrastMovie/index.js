import PropTypes from 'prop-types'
import React from 'react'

import { Section, ContrastWindowVertical, ContrastWindowHorizontal } from './styles.js'

function Contrast (props) {
  const firstDate = new Date(props.item.first_air_date)
  const genres = []

  for (const i in props.item.genres) {
    genres.push(props.item.genres[i].name)
  }
  return (
        <Section style={{
          backgroundImage: `url(http://image.tmdb.org/t/p/original${props.item.backdrop_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>

          <ContrastWindowVertical>
            <ContrastWindowHorizontal>
            <div className='movie-name'>{props.item.name}</div>
            <div className='movie-infos'>
              <div>{props.item.vote_average} pontos</div>
              <div>{firstDate.getFullYear()}</div>
              <div>{props.item.number_of_seasons} temporada{props.item.number_of_seasons === 1 ? '' : 's'}</div>
            </div>
            <div className='movie-description'>
                {props.item.overview}
            </div>
            <div className='movie-buttons'>
              <button><a href={`/watch${props.item.id}`}>► Assistir</a></button>
              <button><a href={`/list/add${props.item.id}`}>+ Minha Lista</a></button>
            </div>
            <div className='movie-genres'>Gêneros: {genres.join(', ')}</div>

            </ContrastWindowHorizontal>
          </ContrastWindowVertical>

        </Section>
  )
}

export default Contrast

Contrast.propTypes = {
  item: PropTypes.object
}
