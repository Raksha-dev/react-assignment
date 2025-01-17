import styled from "styled-components";

export const FeaturedServicesWrapper = styled.div `
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    position: relative;
    color: #666;

    & :hover {
        background-color: green;
        color: #fff;
    }
    @media (min-width: 320px) and (max-width: 768px) {
        display: block;
        margin-left: 15px;
        margin-right: 15px;
    }
`
export const FeaturedServices = styled.a `
    transition: all 0.3s ease-in-out;
    flex: 1;
    margin: 15px;
    background-color: #f5f5f5;
    padding: 40px;
    position: relative;
    overflow: hidden;
    @media (min-width: 320px) and (max-width: 768px) {
        padding: 0px;
    }
`
export const FeaturedServicesContent = styled.div `
    display: table;
    height: 100%;
    padding-left: 105px;
    position: relative;
    z-index: 20;
    @media (min-width: 320px) and (max-width: 425px){
        background-color: #f5f5f5;
    }
    @media(max-width: 768px){
        /* width: 85%; */
    }
`
export const FeaturedServicesAlignment = styled.div `
    display: table-cell;
    vertical-align: middle;
    @media (min-width: 320px) and (max-width: 768px){
        padding-bottom: 20px;
    padding-top: 20px;
    }
    
    & i {
    font-size: 72px;
    line-height: 95px;
    position: absolute;
    left: 0;
    font-family: 'linearicons' !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    }
    @media (min-width: 320px) and (max-width: 768px){
        & i{
            margin-top: 20px;
        }
    }
    & h4 {
        line-height: 1.1;
    font-family: "Montserrat", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: none;
    }
    & p {
        line-height: 1.1;
    font-family: "Montserrat", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: none;
    @media (max-width: 320px) {
        & p{
            width: 100%;
        }
    }
    }
`