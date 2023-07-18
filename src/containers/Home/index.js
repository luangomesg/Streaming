import React, { useEffect, useState } from 'react'

import Contrast from '../../components/contrastMovie/index.js'
import MovieList from '../../components/moviesList/index.js'
import { ContainerMain, FirstList, SeccondList, ThirdList, FourthList, FifthList, SixthList, SeventhList, EighthList, ListRow } from './styles.js'

function Home () {
  const key = 'ed00c2b51b191413d3c65a4452f4b54a'
  const [originalMovies, setOriginalMovies] = useState([])
  const [trendingMovies, setTremdingMovies] = useState([])
  const [topratedMovies, setTopratedMovies] = useState([])
  const [actionMovies, setActionMovies] = useState([])
  const [comedyMovies, setComedyMovies] = useState([])
  const [horrorMovies, setHorrorMovies] = useState([])
  const [romanceMovies, setRomanceMovies] = useState([])
  const [documentaryMovies, setDocumentaryMovies] = useState([])
  const [featuredData, setFeaturedData] = useState(null)

  useEffect(() => {
    function originalList () {
      fetch(`https://api.themoviedb.org/3/discover/tv?with_networks=213&language=pt-BR&api_key=${key}`)
        .then(response => response.json())
        .then((response) => {
          setOriginalMovies(response.results)

          const randomNumber = Math.floor(Math.random() * (response.results.length))
          const choosen = response.results[randomNumber]
          getMovieInfo(choosen.id, 'tv')
        }).catch(error => console.log(error))
    }

    function trendingList () {
      fetch(`https://api.themoviedb.org/3/trending/all/week?language=pt-BR&api_key=${key}`)
        .then(response => response.json())
        .then((response) => {
          setTremdingMovies(response.results)
        }).catch(error => console.log(error))
    }

    function topratedList () {
      fetch(`https://api.themoviedb.org/3/movie/top_rated/?language=pt-BR&api_key=${key}`)
        .then(response => response.json())
        .then((response) => {
          setTopratedMovies(response.results)
        }).catch(error => console.log(error))
    }

    function actionList () {
      fetch(`https://api.themoviedb.org/3/discover/movie/?with_genres=28&language=pt-BR&api_key=${key}`)
        .then(response => response.json())
        .then((response) => {
          setActionMovies(response.results)
        }).catch(error => console.log(error))
    }

    function comedyList () {
      fetch(`https://api.themoviedb.org/3/discover/movie/?with_genres=35&language=pt-BR&api_key=${key}`)
        .then(response => response.json())
        .then((response) => {
          setComedyMovies(response.results)
        }).catch(error => console.log(error))
    }

    function horrorList () {
      fetch(`https://api.themoviedb.org/3/discover/movie/?with_genres=27&language=pt-BR&api_key=${key}`)
        .then(response => response.json())
        .then((response) => {
          setHorrorMovies(response.results)
        }).catch(error => console.log(error))
    }

    function romanceList () {
      fetch(`https://api.themoviedb.org/3/discover/movie/?with_genres=10749&language=pt-BR&api_key=${key}`)
        .then(response => response.json())
        .then((response) => {
          setRomanceMovies(response.results)
        }).catch(error => console.log(error))
    }

    function documentaryList () {
      fetch(`https://api.themoviedb.org/3/discover/movie/?with_genres=99&language=pt-BR&api_key=${key}`)
        .then(response => response.json())
        .then((response) => {
          setDocumentaryMovies(response.results)
        }).catch(error => console.log(error))
    }

    async function getMovieInfo (movieId, type) {
      if (movieId) {
        switch (type) {
          case 'movie':
            await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR&api_key=${key}`).then((response) => response.json())
              .then((response) => {
                setFeaturedData(response)
              })
            break
          case 'tv':
            await fetch(`https://api.themoviedb.org/3/tv/${movieId}?language=pt-BR&api_key=${key}`).then((response) => response.json())
              .then((response) => {
                setFeaturedData(response)
                console.log(response)
              })
            break
          default:
            console.log('erro')
            break
        }
      }
    }

    originalList()
    trendingList()
    topratedList()
    actionList()
    comedyList()
    horrorList()
    romanceList()
    documentaryList()
  }, [])
  return (
    <ContainerMain>
      {featuredData && <Contrast item={featuredData}/>}
      <FirstList>
        <h2>Originais da Netflix</h2>
        <MovieList>
          <ListRow>
            {originalMovies.map((movie) => {
              return (
                <div className='movie-item' key={movie.id}> <img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title} /></div>
              )
            })}

          </ListRow>

        </MovieList>
      </FirstList>

      <SeccondList>
        <h2>Recomendados para Você</h2>
        <MovieList>
          <ListRow>
            {trendingMovies.map((movie) => {
              return (
                <div className='movie-item' key={movie.id}><img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title} /></div>
              )
            })}
          </ListRow>
        </MovieList>
      </SeccondList>

      <ThirdList>
        <h2>Em Alta</h2>
        <MovieList>
          <ListRow>
            {topratedMovies.map((movie) => {
              return (
                <div className='movie-item' key={movie.id}><img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title} /></div>
              )
            })}
          </ListRow>
        </MovieList>
      </ThirdList>

      <FourthList>
        <h2>Filmes de Ação</h2>
        <MovieList>
          <ListRow>
            {actionMovies.map((movie) => {
              return (
                <div className='movie-item' key={movie.id}><img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title} /></div>
              )
            })}
          </ListRow>
        </MovieList>
      </FourthList>

      <FifthList>
        <h2>Filmes de Comédia</h2>
        <MovieList>
          <ListRow>
            {comedyMovies.map((movie) => {
              return (
                <div className='movie-item' key={movie.id}><img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title} /></div>
              )
            })}
          </ListRow>
        </MovieList>
      </FifthList>

      <SixthList>
        <h2>Filmes de Terror</h2>
        <MovieList>
          <ListRow>
            {horrorMovies.map((movie) => {
              return (
                <div className='movie-item' key={movie.id}><img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title} /></div>
              )
            })}
          </ListRow>
        </MovieList>
      </SixthList>

      <SeventhList>
        <h2>Filmes de Romance</h2>
        <MovieList>
          <ListRow>
            {romanceMovies.map((movie) => {
              return (
                <div className='movie-item' key={movie.id}><img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title} /></div>
              )
            })}
          </ListRow>
        </MovieList>
      </SeventhList>

      <EighthList>
        <h2>Filmes de Documentários</h2>
        <MovieList>
          <ListRow>
            {documentaryMovies.map((movie) => {
              return (
                <div className='movie-item' key={movie.id}><img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title} /></div>
              )
            })}
          </ListRow>
        </MovieList>
      </EighthList>
    </ContainerMain>
  )
}

export default Home
