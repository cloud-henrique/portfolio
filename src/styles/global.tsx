import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family:'IBM Plex Sans Thai', sans-serif;
    font-size: 16px;
    line-height: 120%;
  }

  html{
    scroll-behavior: smooth;
    /* overflow-x: hidden; */
    -ms--ms-overflow-style: none;
    /* scrollbar-width:none; */
  }

  html::-webkit-scrollbar{
    display:none;
  }


  
  body {
    background: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.light};
  }

`
