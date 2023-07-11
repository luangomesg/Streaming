import styled from 'styled-components'

export const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #111;
    color: #fff;
    overflow-x: hidden;

    h2 {
        margin-left: 30px;
    }

`

export const FirstList = styled.div`
    background-color: transparent;


`

export const SeccondList = styled.div`
    background-color: transparent;
`

export const ThirdList = styled.div`
    background-color: transparent;
`

export const FourthList = styled.div`
    background-color: transparent;
`

export const FifthList = styled.div`
    background-color: transparent;
`

export const SixthList = styled.div`
    background-color: transparent;
`

export const SeventhList = styled.div`
    background-color: transparent;
`

export const EighthList = styled.div`
    background-color: transparent;
`

export const ListRow = styled.div`
    padding-left: 30px;

    .movie-item {
        display: inline-block;
        width: 200px;

        img {
            width: 100%;
            transform: scale(0.9);
            transition: all 0.2s;
            cursor: pointer;

            &:hover {
                transform: scale(1)
            }
        }
    }
`
