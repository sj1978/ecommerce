
import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div` 
  height: 60px;
  align-items: center;
  margin : 0;
    padding: 0;
 
`
const Wrapper = styled.div`
padding : 0 20px;
display: flex;
justify-content: space-between;
align-items: center;
`
const Left = styled.div`
display: flex;
align-items: center;
flex: 1;`
const Center = styled.div`
flex: 1;
text-align: center;`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;`
const Language = styled.span `
font-size: 14px;
cursor: pointer;
`
const SearchContainer = styled.div` 
  border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
  `
  const Input = styled.input `
    border: none;
    `
const Logo = styled.p`
font-weight: bold;
font-size: 24px;

`
const MenuItem =  styled.div `
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    `



const Navbar = () => {
  return (
    <Container>
    <Wrapper>
        <Left> 
            <Language>EN</Language> 
            <SearchContainer> 
                <Input/>
            <Search style={{color :"gray", fontSize: "18px"}}/>
             </SearchContainer>
        
        </Left>
        <Center> 
            <Logo>SJdev</Logo>
             </Center>
        <Right> 
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem> 
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined/>
                </Badge>
            </MenuItem>
        </Right>

    </Wrapper>

  </Container>
  )
}

export default Navbar