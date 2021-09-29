import styled from 'styled-components'

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    width: 450px;
    border: 1px solid #fafafa;
    margin: 0 auto;
`

const ListHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 4px 8px;
`

const LeftButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 8px;
    flex: 2 0;
`

const RightButtonContainer = styled.div`
    justify-content: flex-end;
    column-gap: 8px;
    align-items: center;
    flex: 1 0;
    flex-direction: row;
`

const IconButton = styled.button`
    border: none;
    outline: none;
    color: #fafafa;
    background-color: transparent;
    cursor: pointer;
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
`



export {ListContainer, ListHeader, LeftButtonsContainer, RightButtonContainer, IconButton}