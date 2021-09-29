import Directory from './Directory';
import {Section, Main, Heading, HeadingContainer, HorizontalLine} from './Home.styles'

const Home = ({userList}) => {


    return (
        <Main>
            <Section>
                <HeadingContainer>
                <Heading>
                    User Directory
                </Heading>
                <HorizontalLine />
                </HeadingContainer>
                <Directory userList={userList} />
            </Section>
        </Main>
    )
};

export default Home