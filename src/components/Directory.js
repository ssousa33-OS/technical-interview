import {LeftButtonsContainer, ListContainer, ListHeader, RightButtonContainer} from './Directory.styles'
import { AscSortButton, DescSortButton } from './icon-buttons'
import { SearchInput } from './SearchInput'


const Directory = ({userList}) => {

    return (
        <ListContainer>
            <ListHeader>
                <LeftButtonsContainer>
                    <AscSortButton />
                    <DescSortButton />
                </LeftButtonsContainer>
                <RightButtonContainer>
                    <SearchInput />
                </RightButtonContainer>
            </ListHeader>
        </ListContainer>
    )
}

export default Directory