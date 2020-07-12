import Styled from 'styled-components'

export const Container = Styled.div`
  height:100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;  

`
export const Header = Styled.header`
  height:20%;
  padding: 10px 0;
  
`

export const Main = Styled.main`
  height:40%;
  
    div {
        border: 1px solid #034;
        width:70vw;
        height:150px;
        padding: 6px;
        box-shadow:0 0 10px grey;
    }
    button {
        margin-top: 8px;
        padding: 6px 16px;
        border: 1px solid #034;
        border-radius: 2px;
     }
 
`


export const Section = Styled.section`
  height:40%;
  display:flex;
  flex-direction:column;
  
    div {
        padding:20px;
        display:flex;
        flex-wrap:wrap;
        justify-content: center;
        width:360px;
      }

    p {
      font-size:14px;
      padding: 4px;
      border-radius: 2px;
      border: 1px solid #ccc;
      transition:0.25s ease; 
     }
     p:active{
       background: #034;
       color:#fff;
     }

     p:hover{
       background: #034;
       color:#fff;
     }

`


