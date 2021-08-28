import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:'IBM Plex Sans Thai', sans-serif;
    font-size: 10px;
    line-height: 120%;
  }
  
  body {
    background: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.light};
  }

`
