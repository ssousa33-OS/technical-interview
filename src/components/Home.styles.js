import styled from 'styled-components'

const Main = styled.main`
    width: 100%;
    padding-top: 96px;
    max-width: 1120px;
    position: relative;
    margin: 0 auto;
    @media(max-width: 1119px){
        width: 100%
        padding: 96px 5% 0 5%
    }
`

const Section = styled.section`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
`

const Heading = styled.h1`
    font-size: 24px;
    color: #fafafa;
    text-align: center;
    margin: 6px 0px;
`

const HorizontalLine = styled.hr`
    background-color: white;
    width: 300px;
`

const HeadingContainer = styled.div`
    margin: 24px 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`




export {Section, Main, Heading, HeadingContainer, HorizontalLine}