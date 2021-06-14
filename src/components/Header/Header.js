import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import logoImg from "../../static/logo.png"
import mobleLogoImg from "../../static/logo_mobile.png"
import { MEDIA_QUERY_LG } from "../../constants/breakPoint"

const HeaderContainer = styled.div `
  position: relative;
  display: flex;
  width: 1180px;
  height: 100px;
  margin: 0 auto;
  background-color: #FFFFFF;  

  ${MEDIA_QUERY_LG} {
    width: 100%;
  }
`

const Logo = styled.div `
  width: 100px;
  margin-right: 20px; 
  background-image: url(${logoImg});
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: 100px;
  background-position: center center;
`

const SelectContainer = styled.div `
  width: calc(70% - 50px);
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Select = styled.select `
  outline: none;
  border: none;
  font-size: 16px;

  ${prop => prop.isSidebarOn && `
    background-color: #888888;
    color: #FFFFFF;
  `}
`

const ButtonContainer = styled.div `
  display: inline-block;
  width: calc(30% - 50px);
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${MEDIA_QUERY_LG} {
    position: absolute;
    flex-direction: column;
    right: 0px;
    width: auto;
    height: 100%;
    padding: 10px 20px;
  }
`

const Button = styled.button `
  width: 80px;
  height: 25px;
  border: solid 2px #01254F;
  border-radius: 2px;
  background-color: #FFFFFF;
  font-size: 16px;

  &:nth-child(2){
    background-color: #01254F;
    color: #FFFFFF;
  } 
`

const MobileLogo = styled.div `
  display: inline-block;
  position: relative;
  top: calc(100px - 25px - 20px);
  left: 20px;
  width: 89px;
  height: 25px;
  background-image: url(${mobleLogoImg});
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: 89px 25px;
  background-position: center center;
`

const Hamburger = styled.div `
  display: inline-block;
  position: relative;
  top: calc(100px - 25px - 20px);
  left: 20px;
  width: 25px;
  height: 25px;
  margin-right: 20px;
  background-color: #01254F;
  cursor: pointer;
  ${prop => prop.isSidebarOn && "visibility: hidden"}

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    left: 0px;
    top: 5px;
    width: 25px;
    height: 5px;
    background-color: #FFFFFF;
  }

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    left: 0px;
    top: 15px;
    width: 25px;
    height: 5px;
    background-color: #FFFFFF;
  }
`

const Sidebar = styled.div `
  position: fixed;
  display: inline-block;
  width: 300px;
  height: 500px;
  background-color: #888888;
  z-index: 1;
`

const SidebarHamburger = styled.div `
  display: inline-block;
  position: absolute;
  top: calc(100px - 25px - 20px);
  left: 20px;
  width: 25px;
  height: 25px;
  margin-right: 20px;
  background-color: #FFFFFF;
  cursor: pointer;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    left: 0px;
    top: 5px;
    width: 25px;
    height: 5px;
    background-color: #888888;
  }

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    left: 0px;
    top: 15px;
    width: 25px;
    height: 5px;
    background-color: #888888;
  }
`

const SidebarSelectContainer = styled.div `
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: calc(100% - 100px);
  margin: 80px 20px 20px 20px;
  background-color: #888888;
`


export default function Header() {
  const mediaLargeWidth = parseInt(MEDIA_QUERY_LG.replace("@media screen and (max-width: ", "").replace("px)", ""))
  const [windowWidth, setWindowWidth] = useState(null)
  const [isSidebarOn, setIsSidebarOn] = useState(false)

  function handleSetWindowWidth() {
    setWindowWidth(window.innerWidth)
  }

  function handleHamburgerClick() {
    setIsSidebarOn(!isSidebarOn)
  }

  useEffect(() => {
    handleSetWindowWidth()
    window.addEventListener("resize", () => {
      handleSetWindowWidth()
    })

    return () => {
      window.removeEventListener("resize", handleSetWindowWidth)
    }
  }, [])

  if(!windowWidth) {
    return <HeaderContainer></HeaderContainer>
  } else if (windowWidth > mediaLargeWidth) {
    return (
      <HeaderContainer>
        <Logo />
        <SelectContainer>
          <Select><option>Why ACY</option></Select>
          <Select><option>Productions</option></Select>
          <Select><option>Platforms</option></Select>
          <Select><option>Educations</option></Select>
          <Select><option>Partners</option></Select>
        </SelectContainer>
        <ButtonContainer>
          <Button>Login</Button>
          <Button>Register</Button>
        </ButtonContainer>
      </HeaderContainer>
    )
  } else {
    return (
      <HeaderContainer>
        <Hamburger onClick={handleHamburgerClick} isSidebarOn={isSidebarOn}/>
          {isSidebarOn && (
            <Sidebar>
              <SidebarHamburger onClick={handleHamburgerClick}/>
              <SidebarSelectContainer>
                <Select isSidebarOn={isSidebarOn}><option>Why ACY</option></Select>
                <Select isSidebarOn={isSidebarOn}><option>Productions</option></Select>
                <Select isSidebarOn={isSidebarOn}><option>Platforms</option></Select>
                <Select isSidebarOn={isSidebarOn}><option>Educations</option></Select>
                <Select isSidebarOn={isSidebarOn}><option>Partners</option></Select>
              </SidebarSelectContainer>
            </ Sidebar>
          )}
        <MobileLogo />
        <ButtonContainer>
          <Button>Login</Button>
          <Button>Register</Button>
        </ButtonContainer>
      </HeaderContainer>
    )
  }
}
