import styled from 'styled-components'

export const Section = styled.section`
    height: 100vh;
    width: 100vw;
`

export const ContrastWindowVertical = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);
`

export const ContrastWindowHorizontal = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 30%, transparent 70%);

    .movie-infos {
        display: flex;
        gap: 10px;
    }
`
