import styled from 'styled-components';

export const Container = styled.div`
  color: #192A56 ;
  background-color:#f8f8f8;
  padding-bottom:60px;
  @media (max-width: 1000px) {
    /* padding:40px; */
  }
`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1600px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
   width: 337px;
    margin-left: 515px;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 0;
  @media (min-width:320px) and (max-width:375px) {
      margin: 0px -21px 41px !important;
    }
     /* @media (max-width:375px){
    margin: 0px 19px 41px;
    } */
     @media (max-width:425px){
    margin: 0px 44px 4px
    1px !important;
    }  
    /*@media (max-width:768px) {
      margin: 0px -633px 52px 80px;
    } */
  & button {
    outline: none;
    margin: 0 auto;
    max-width: 1240px;
  }
  @media (min-width: 320px) and (max-width: 475px){
   
    & button {
     
      margin-top: -30px;
    }
  
  }
  & button:hover {
    background-color: #44b272;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4,auto);
  grid-gap: 0px;
  width: 0%;

  @media (max-width: 1346px) {
    grid-template-columns: repeat(2,auto);
    grid-gap:0px;
  }
  @media(max-width:920px){
    grid-template-columns: repeat(1,auto);
    grid-gap:0px;
  }
  /* @media(max-width:768px){
    grid-template-columns: repeat(4,auto);
    grid-gap: 0;
    margin-bottom: 40px;
  } */
`;
export const Link = styled.a`
  color:  rgb(153, 153, 153);
  margin-bottom: 4px;
  font-size: 18px;
  text-decoration: none;
  &:hover {
      color:#44B272;
      transition: 200ms ease-in;
  }
`;
export const Title = styled.h3`
    text-align: center;
      margin: 58px 0 48px 0;
      font-size: 28px;
      margin-bottom: 35px !important;
      margin-top: 70px !important;
      @media (min-width:320px) and (max-width: 425px){
        padding-bottom: 40px;
      }
      `