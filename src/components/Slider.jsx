import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import styled from 'styled-components'
import guitars from '../images/allguitars.jpg'

const Container = styled.section `
width: 100%;
height: 100vh;
display: flex;
background-color: coral;
position: relative;`

const Arrow = styled.div `
width: 50px;
height: 50px;
background-color: #f5fafd;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
margin: 0 10px;
cursor: pointer;
opacity: 0.5;
transition: all 0.5s ease;
&:hover {
    background-color: #e9f4fb;
    transform: scale(1.1);
}
postition: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
margin: auto;
`
const Wrapper = styled.div`
width: 100%;
`
const Slide = styled.div`
width: 100vw;
display; flex;
align-items: center;`
const ImageContainer = styled.div`
flex: 1;`
const InfoContainer = styled.div`
flex: 1;`
const Image = styled.img`
width: 60vw;
height: 50vw;
`




const Slider = () => {
  return (
<Container> 
<Arrow direction={"left"}>
    <ArrowLeftOutlined/>
</Arrow>
<Wrapper>
<Slide>
<ImageContainer>
    <Image src={guitars}/>
   
 

</ImageContainer>
<InfoContainer>
<h1>title</h1>
</InfoContainer>
</Slide>


</Wrapper>
<Arrow direction={"right"}>
    <ArrowRightOutlined/>
</Arrow>
</Container>
  )
}

export default Slider