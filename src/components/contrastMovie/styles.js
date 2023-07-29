import styled from 'styled-components'

export const Section = styled.section`
    display: flex;
    height: 100vh;
    width: 100vw;
    margin-left: 30px;
    
`

export const ContrastWindowVertical = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);

    
`

export const ContrastWindowHorizontal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 30%, transparent 70%);
    font-weight: bolder;
    justify-content: center;
    transform: translateY(-80px);
    

    .movie-infos {
        display: flex;
        gap: 10px;

        div:nth-child(1) {
            color: #3DA464
        }
    }

    .movie-name {
        color: #fff;
        font-size: 60px;
        font-weight: bolder;
    }

    .movie-description {
        width: 30%;
        color: #8E8A8F;
    }

    .movie-buttons {
        display: flex;
        gap: 10px;

        button:nth-child(1) {
            display: flex;
            background-color: #fff;
            width: 120px;
            border-radius: 5px;
            border: none;

            &:hover {
                    opacity: 0.8;
                }
            
            a {
                display: block;  
                color: #000;
                text-decoration: none;
                font-size: 15px;
                font-weight: bolder;
                width: 100%;
                padding: 10px;
                border: none;

                
            }
        }

        button:nth-child(2) {
            display: flex;
            background-color: #343334;
            width: 140px;
            border-radius: 5px;
            border: none;

            &:hover {
                    opacity: 0.8;
                }

            a {
                display: block;  
                color: #fff;
                text-decoration: none;
                font-size: 15px;
                font-weight: bolder;
                width: 100%;
                padding: 10px;
                border: none;
            }
        }
    }

    .movie-genres {
        color: #8E8A8F;
    }
`
