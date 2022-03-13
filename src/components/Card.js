/* eslint-disable func-names */
import robin from '../images/robin.jpg';
import Button from './Button';
// import Container from './Container';
import Image from './Image';
import { ButtonContainer, CardContainer, ContentContainer } from './style/Container.styled';
import StyledTitle from './style/Custome.styled';
import { H1, P, Tag } from './style/Elements';

const Card = function() {
    return (<CardContainer>
        <ContentContainer>
                    <Tag color  = "blue">Exclusive</Tag>
        <H1>
            <StyledTitle text="React styled components" color ='#000'/>
        </H1>
        <P>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam odit, a sunt hic dicta enim similique eligendi eius reiciendis pariatur!
        </P>
        
        <ButtonContainer>
            <Button link="https://www.google.com/" text="Google.com"/>
            <Button link="https://www.google.com/" text="Google.com"/>
         
        </ButtonContainer>
            
            </ContentContainer>
            <Image imgSrc={robin} altTag="robin" width="300px"/>

            </CardContainer>
      
    );
}

export default Card;