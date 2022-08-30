import styled from 'styled-components'

const Container = styled.section `
background-color: teal;
height: 30px;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
margin: 0;
padding: 0


`

const Anouncement = () => {
  return (
<Container>
    Super Deal! Free Shipping on Orders Over $50
</Container>
  )
}

export default Anouncement