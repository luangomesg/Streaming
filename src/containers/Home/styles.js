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
    margin-top: -150px;
    z-index: 19;

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
    display: flex;
    padding-left: 30px;
    transition: all 0.4s ease;

    .movie-item {
        display: inline-block;
        width: 200px;

        img {
            width: 200px;
            transform: scale(0.9);
            transition: all 0.2s;
            cursor: pointer;

            &:hover {
                transform: scale(1)
            }
        }
    }
`

export const Footer = styled.footer`
    margin: 50px 0;
    text-align: center;

    a {
        color: #E50914;
        text-decoration: none;
        font-weight: bold;
    }

    span {
        color: #E50914
    }
`

export const NavigateBefore = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 300px;
    left: 0;
    z-index: 20;
    overflow: hidden;
    background-color: rgba(0,0,0, 0.6);
    cursor: pointer;
    opacity: 0;
    transition: all 0.5s;

    &:hover {
        opacity: 1;
    }
`

export const NavigateAfter = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 300px;
    right: 0;
    z-index: 20;
    overflow: hidden;
    background-color: rgba(0,0,0, 0.6);
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5s;

    &:hover {
        opacity: 1;
    }
`
