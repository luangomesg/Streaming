import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import React, { useEffect, useState } from 'react'

import Contrast from '../../components/contrastMovie/index.js'
import MyHeader from '../../components/Header/index.js'
import MovieList from '../../components/moviesList/index.js'
import { ContainerMain, FirstList, SeccondList, ThirdList, FourthList, FifthList, SixthList, SeventhList, EighthList, ListRow, Footer, NavigateBefore, NavigateAfter, Loading } from './styles.js'

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
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [scrollZ, setScrollZ] = useState(0)
  const [scrollA, setScrollA] = useState(0)
  const [scrollB, setScrollB] = useState(0)
  const [scrollC, setScrollC] = useState(0)
  const [scrollD, setScrollD] = useState(0)
  const [scrollE, setScrollE] = useState(0)

  function firstLeftArrow () {
    let x = scrollX + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x = 0
    }
    setScrollX(x)
  }

  function firstRightArrow () {
    let x = scrollX - Math.round(window.innerWidth / 2)
    const listW = originalMovies.length * 200
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60
    }
    setScrollX(x)
  }

  function seccondLeftArrow () {
    let x = scrollY + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x = 0
    }
    setScrollY(x)
  }

  function seccondRightArrow () {
    let x = scrollY - Math.round(window.innerWidth / 2)
    const listW = trendingMovies.length * 200
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60
    }
    setScrollY(x)
  }

  function thirdLeftArrow () {
    let x = scrollZ + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x = 0
    }
    setScrollZ(x)
  }

  function thirdRightArrow () {
    let x = scrollZ - Math.round(window.innerWidth / 2)
    const listW = topratedMovies.length * 200
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60
    }
    setScrollZ(x)
  }

  function FourthLeftArrow () {
    let x = scrollA + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x = 0
    }
    setScrollA(x)
  }

  function FourthRightArrow () {
    let x = scrollA - Math.round(window.innerWidth / 2)
    const listW = actionMovies.length * 200
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60
    }
    setScrollA(x)
  }

  function FivethLeftArrow () {
    let x = scrollB + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x = 0
    }
    setScrollB(x)
  }

  function FivethRightArrow () {
    let x = scrollB - Math.round(window.innerWidth / 2)
    const listW = comedyMovies.length * 200
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60
    }
    setScrollB(x)
  }

  function SixthLeftArrow () {
    let x = scrollC + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x = 0
    }
    setScrollC(x)
  }

  function SixthRightArrow () {
    let x = scrollC - Math.round(window.innerWidth / 2)
    const listW = horrorMovies.length * 200
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60
    }
    setScrollC(x)
  }

  function SeventhLeftArrow () {
    let x = scrollD + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x = 0
    }
    setScrollD(x)
  }

  function SeventhRightArrow () {
    let x = scrollD - Math.round(window.innerWidth / 2)
    const listW = romanceMovies.length * 200
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60
    }
    setScrollD(x)
  }

  function EighthLeftArrow () {
    let x = scrollE + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x = 0
    }
    setScrollE(x)
  }

  function EighthRightArrow () {
    let x = scrollE - Math.round(window.innerWidth / 2)
    const listW = documentaryMovies.length * 200
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60
    }
    setScrollE(x)
  }

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
  }, [setOriginalMovies])
  return (
    <ContainerMain>
      <MyHeader/>
      {featuredData && <Contrast item={featuredData}/>}
      <FirstList>
        <h2>Originais da Netflix</h2>
        <NavigateBefore onClick={firstLeftArrow}>
          <NavigateBeforeIcon style={{ fontSize: 50 }}/>
        </NavigateBefore>
        <NavigateAfter onClick={firstRightArrow}>
          <NavigateNextIcon style={{ fontSize: 50 }}/>
        </NavigateAfter>
        <MovieList >
          <ListRow style={{ marginLeft: scrollX, width: originalMovies.length * 150 }}>
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
        <NavigateBefore onClick={seccondLeftArrow}>
          <NavigateBeforeIcon style={{ fontSize: 50 }}/>
        </NavigateBefore>
        <NavigateAfter onClick={seccondRightArrow}>
          <NavigateNextIcon style={{ fontSize: 50 }}/>
        </NavigateAfter>
        <MovieList>
          <ListRow style={{ marginLeft: scrollY, width: trendingMovies.length * 150 }}>
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
        <NavigateBefore onClick={thirdLeftArrow}>
          <NavigateBeforeIcon style={{ fontSize: 50 }}/>
        </NavigateBefore>
        <NavigateAfter onClick={thirdRightArrow}>
          <NavigateNextIcon style={{ fontSize: 50 }}/>
        </NavigateAfter>
        <MovieList>
          <ListRow style={{ marginLeft: scrollZ, width: topratedMovies.length * 150 }}>
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
        <NavigateBefore onClick={FourthLeftArrow}>
          <NavigateBeforeIcon style={{ fontSize: 50 }}/>
        </NavigateBefore>
        <NavigateAfter onClick={FourthRightArrow}>
          <NavigateNextIcon style={{ fontSize: 50 }}/>
        </NavigateAfter>
        <MovieList>
          <ListRow style={{ marginLeft: scrollA, width: actionMovies.length * 150 }}>
            {actionMovies.map((movie) => {
              return (
                <div className='movie-item' key={movie.id}><img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title} /></div>
              )
            })}
          </ListRow>
        </MovieList>
      </FourthList>

      <FifthList >
        <h2>Filmes de Comédia</h2>
        <NavigateBefore onClick={FivethLeftArrow}>
          <NavigateBeforeIcon style={{ fontSize: 50 }}/>
        </NavigateBefore>
        <NavigateAfter onClick={FivethRightArrow}>
          <NavigateNextIcon style={{ fontSize: 50 }}/>
        </NavigateAfter>
        <MovieList>
          <ListRow style={{ marginLeft: scrollB, width: comedyMovies.length * 150 }}>
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
        <NavigateBefore onClick={SixthLeftArrow}>
          <NavigateBeforeIcon style={{ fontSize: 50 }}/>
        </NavigateBefore>
        <NavigateAfter onClick={SixthRightArrow}>
          <NavigateNextIcon style={{ fontSize: 50 }}/>
        </NavigateAfter>
        <MovieList>
          <ListRow style={{ marginLeft: scrollC, width: horrorMovies.length * 150 }}>
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
        <NavigateBefore onClick={SeventhLeftArrow}>
          <NavigateBeforeIcon style={{ fontSize: 50 }}/>
        </NavigateBefore>
        <NavigateAfter onClick={SeventhRightArrow}>
          <NavigateNextIcon style={{ fontSize: 50 }}/>
        </NavigateAfter>
        <MovieList>
          <ListRow style={{ marginLeft: scrollD, width: romanceMovies.length * 150 }}>
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
        <NavigateBefore onClick={EighthLeftArrow}>
          <NavigateBeforeIcon style={{ fontSize: 50 }}/>
        </NavigateBefore>
        <NavigateAfter onClick={EighthRightArrow}>
          <NavigateNextIcon style={{ fontSize: 50 }}/>
        </NavigateAfter>
        <MovieList>
          <ListRow style={{ marginLeft: scrollE, width: documentaryMovies.length * 150 }}>
            {documentaryMovies.map((movie) => {
              return (
                <div className='movie-item' key={movie.id}><img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title} /></div>
              )
            })}
          </ListRow>
        </MovieList>
      </EighthList>
      <Footer>
        Feito com <span role='img' aria-label='coração'>❤</span> por <a href='https://www.linkedin.com/in/luan-gomes-galvão/'>Luan</a> <br/>
        Direitos de imagem para Netflix <br/>
        Dados pegos do site Themoviedb.org
      </Footer>
      {((featuredData === null) ||
(originalMovies.length < 20 ||
   trendingMovies.length < 20 ||
   topratedMovies.length < 20 ||
   actionMovies.length < 20 ||
   comedyMovies.length < 20 ||
   horrorMovies.length < 20 ||
   actionMovies.length < 20 ||
   romanceMovies.length < 20 ||
   documentaryMovies.length < 20)) &&
  <Loading>
    <img src='https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif' alt='Loading'/>
  </Loading>
}
    </ContainerMain>
  )
}

export default Home
