import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    height: 10%;
    position: fixed;
    z-index: 20;
    top: 0;
    left: 20px;
    background-color: ${props => props.change ? '#141414' : 'transparent'};
    transition: 0.5s linear;
    
    


    img:nth-child(1) {
        height: 50px;
        cursor: pointer;
    }

    img:nth-child(2) {
        height: 40px;
        cursor: pointer;
        border-radius: 3px;
        transform: translateX(-50px);
    }
`
