import React, { useState } from "react";
import styled from "styled-components";
import { MEDIA_QUERY_SM, MEDIA_QUERY_LG } from "../../constants/breakPoint"

const FormBody = styled.form `
  width: 1180px;
  margin: 0px auto 140px auto;
  border: solid 1px #D6D6D6;
  border-radius: 4px;
  padding: 80px 0px;
  background-color: #FFFFFF;

  ${MEDIA_QUERY_LG} {
    width: auto;
    border-style: none;
    padding: 0 34px;
  }
`

const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 580px;

  ${MEDIA_QUERY_LG} {
    width: auto;
  }
`

const Title = styled.h3 `
  display: inline-block;
  align-self: center;
  font-weight: 500;
  line-height: 30px;
  color: #01254F;

  ${MEDIA_QUERY_SM} {
    font-size: 18px;
    line-height: 21px;
  }
`

const Text = styled.p `
  display: inline-block;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #000000;
  opacity: 65%;
  white-space: pre-line;
  text-align: center;

  ${MEDIA_QUERY_SM} {
    margin-top: 16px;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
  }
`

const InputContainer = styled.div `
  margin-top: 40px;

  ${MEDIA_QUERY_LG} {
    margin-top: 20px;
  }

  ${MEDIA_QUERY_SM} {
    margin-top: 16px;
  }
`

const InputTitle = styled.p `
  display: block;
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  color: #4A4A4A;

  ${MEDIA_QUERY_SM} {
    font-size: 12px;
    line-height: 16px;
  }
`

const SelectContainer = styled.div `
  position: relative;
  display: inline-block;

  ${MEDIA_QUERY_LG} {
    display: block;
  }

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 26px;
    right: 17px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 7px 0 7px;
    border-color: #FFFFFF transparent transparent transparent;
    z-index: 1;
  }

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 26px;
    right: 16px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 8px 0 8px;
    border-color: #000000 transparent transparent transparent;
  }
`

const Select = styled.select `
  width: ${prop => prop.desktopWidth};
  margin-top: 8px;
  border: 1px solid #C6C6C6;
  border-radius: 4px;
  padding: 9px 35px 9px 12px;
  background: #FFFFFF;
  font-size: 16px;
  line-height: 22px;
  white-space: pre-line;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; 

  ${MEDIA_QUERY_LG} {
    width: ${prop => prop.width}; 
  }

  ${MEDIA_QUERY_SM} {
    font-size: 12px;
    line-height: 16px;
  }
`

const Option = styled.option `
  font-size: 16px;

  ${MEDIA_QUERY_SM} {
    font-size: 12px;
    white-space: pre-line;
    word-wrap: wrap;
  }
`

const Input = styled.input `
  display: inline-block;
  width: ${prop => prop.desktopWidth};
  height: 40px;
  margin-top: 8px;
  border: 1px solid #C6C6C6;
  border-radius: 4px;
  padding: 0px 12px 0px 12px;
  background: #FFFFFF;
  font-size: 16px;
  line-height: 22px;

  ${MEDIA_QUERY_LG} {
    width: ${prop => prop.width}; 
  }

  ${MEDIA_QUERY_SM} {
    font-size: 12px;
  }
`

const InputBottomContainer = styled.div `
  display: flex;
  align-items: center;
`

const Button = styled.button `
  width: 580px;
  height: 48px;
  margin-top: 20px;
  background: #E9E9E9;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #D1D1D1;

  ${MEDIA_QUERY_LG} {
    width: 100%;
  }

  ${MEDIA_QUERY_SM} {
    height: 32px;
    font-size: 12px;
  }
`


export default function Form() {
  const [mobileInputValue, setMobileInputValue] = useState("")

  return (
    <FormBody>
      <Wrapper>
        <Title>Register for a Webinar now</Title>
        <Text>Please fill in the form below and you will be contacted by one of our professional business experts.</Text>
        <InputContainer>
          <InputTitle>Topic</InputTitle>
          <SelectContainer>
            <Select desktopWidth="580px" width="100%">
              <Option>23/07/20 - Alistair's Favourite Chart Patterns You Can Apply to Your Trading</Option>
            </Select>
          </SelectContainer>
        </InputContainer>
        <InputContainer>
          <InputTitle>First Name</InputTitle>
          <Input desktopWidth="580px" width="100%"></Input>
        </InputContainer>
        <InputContainer>
          <InputTitle>Last Name</InputTitle>
          <Input desktopWidth="580px" width="100%"></Input>
        </InputContainer>
        <InputContainer>
          <InputTitle>Email</InputTitle>
          <Input desktopWidth="580px" width="100%"></Input>
        </InputContainer>
        <InputContainer>
          <InputTitle>Phone</InputTitle>
          <InputBottomContainer>
            <SelectContainer style={{marginRight: "40px"}}>
              <Select desktopWidth="100px" width="120px">
                <Option>+61</Option>
                <Option>+71</Option>
              </Select>
            </SelectContainer>
            <Input desktopWidth="452px" width="calc(100% - 120px - 40px)"></Input>
          </InputBottomContainer>
        </InputContainer>
        <InputContainer>
          <InputTitle>Mobile Authentication</InputTitle>
          <InputBottomContainer>
            <Input desktopWidth="100px" width="120px" style={{marginRight: "40px"}} placeholder="Get Code" onChange={(e) => setMobileInputValue(e.target.value)}></Input>
            <Input desktopWidth="452px" width="calc(100% - 120px - 40px)"></Input>
          </InputBottomContainer>
        </InputContainer>
        <Button>Register</Button>
      </Wrapper>
    </FormBody>
  )
}
