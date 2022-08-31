import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import styled from 'styled-components'
import guitars from '../images/allguitars.jpg'

const Container = styled.section `
width: 100%;
display: flex;
background-color: whitesmoke;
position: relative;
`

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
    background-color: blue;
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
height: 100%;
display: flex;



`
const Slide = styled.div`
width: 100vh;
height: 100vh;
display: flex;
align-items: center;

`
const ImageContainer = styled.div`
flex: 1;
height: 100%;`
const InfoContainer = styled.div`
flex: 1;
padding: 50px;`

const Image = styled.img`
height:80%;
`
const Title = styled.h1 `
font-size: 70px;`
const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
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
<Title>Best Guitars</Title>
<Desc>Best guitars in the world</Desc>
<Button>Shop Now</Button>
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