import styled, {createGlobalStyle} from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html , body {
    margin : 0px; 
    padding : 0px;
    box-sizing: border-box;
    font-display: swap; 
    -webkit-font-smoothing : antialiased;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar{
      display: none;
    };

    transition : all 0.5s;
    font-family: 'Nanum Gothic Coding', monospace;
    font-family: 'Ubuntu', sans-serif;
    @font-face {
    font-family: 'NanumSquareRound';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }
  }
  article{
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 16px 1px;
  margin : 10px 0;
  padding : 10px;
  border-radius: 8px;
    &:hover{
    transform: translateX(10px);
    transition: 0.5s;
    }
  }
  a {
    text-decoration: none;
  }
  button{
    border: none;
    cursor: pointer;
    &:active,&:focus{
      outline: none;
    }
  }

`
export const PointColor = 'linear-gradient(135deg, #4568DC 0%, #B06AB3 100%)'
export const TextColor = '#3b3d40';

export const Container = styled.section`
/* height : calc(100vh - 200px); */
height : 100%;
`
export const Wrapper = styled.div`
width : 100%;
height : 100%;
padding : 10% 20%;
box-sizing: border-box;
`
export const Title = styled.h1`
font-size: 30px;
margin-bottom : 30px; 
`
export const SubTitle = styled.h3`
font-size : 24px;
`
export const FlexBox = styled.div`
height : 100%;
display: flex;
align-items: center;
justify-content: center;
`