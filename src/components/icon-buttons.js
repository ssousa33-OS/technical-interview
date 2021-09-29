import {AiOutlineSortDescending, AiOutlineSortAscending, AiOutlineSearch} from 'react-icons/ai'
import { IconButton } from './Directory.styles'
import styled from 'styled-components'

export const AscSortButton = ({...props}) => (<IconButton><AiOutlineSortAscending /></IconButton>)
export const DescSortButton = ({...props}) => (<IconButton><AiOutlineSortDescending /></IconButton>)

const IconHolder = styled.div`
    width: 16px;
    height: 16px;
    color:#fafafa;
`
export const SearchIcon = () => {
    <IconHolder>
        <AiOutlineSearch />
    </IconHolder>
}