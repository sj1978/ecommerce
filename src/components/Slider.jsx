import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.section `
width: 100%;
height: 100vh;
display: flex;
background-color: coral;`
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
`



const Slider = () => {
  return (
<Container> 
<Arrow>
    <ArrowLeftOutlined/>
</Arrow>
<Arrow>
    <ArrowRightOutlined/>
</Arrow>
</Container>
  )
}

export default Slider