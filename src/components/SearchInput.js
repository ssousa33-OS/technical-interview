import styled from 'styled-components'

const Input = styled.input`
    font-size: 20px;
    background-color: transparent;
    border: 1px solid white;
    margin-top: 4px;
    color: white;
`

export const SearchInput = ({...props}) => (<Input {...props} />)