import styled from "styled-components";
import {MEDIA_QUERY_SM } from "../../constants/breakPoint"

const CardContainer = styled.div `
  position: relative;
  width: 380px;
  height: 300px;
  margin: 10px;
  border: solid 1px #D6D6D6;
  border-radius: 4px;
  padding: 20px;
  background-color: #FFFFFF;
  box-shadow: 1px 2px 6px rgba(219, 219, 219, 0.5);

  ${MEDIA_QUERY_SM} {
    width: 100%;
    height: 260px;
    margin: 10px 0px;
  }
`

const Date = styled.time `
  color: #01254F;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;

  ${MEDIA_QUERY_SM} {
    font-size: 12px;
  }
`

const Title =  styled.h5 `
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #01254F;

  ${MEDIA_QUERY_SM} {
    margin-top: 16px;
    font-size: 14px;
  }
`

const Text = styled.p `
  margin-top: 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #000000;
  opacity: 65%;

  ${MEDIA_QUERY_SM} {
    margin-top: 14px;
    font-size: 12px;
  }
`

const Time = styled.time `
  display: inline-block;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #000000;
  opacity: 65%;

  ${MEDIA_QUERY_SM} {
    margin-top: 16px;
    font-size: 12px;
  }
`

const RegisterButton = styled.button `
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #6BB718;
  background-color: #FFFFFF;

  ${MEDIA_QUERY_SM} {
    margin-top: 29px;
    font-size: 12px;
  }
`

const Anchor = styled.a `
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 20px;
  right: 20px;
  width: 22px;
  height: 22px;
  border: solid 1px #6BB718; 
  border-radius: 11px;

  &::before {
    content: "";
    position: absolute;
    left: calc(11px - 3px);
    width: 0px;
    height: 0px;
    border: solid 6px;
    border-color: transparent transparent transparent #6BB718;
  }

  &::after {
    content: "";
    position: absolute;
    left: calc(11px - 3px);
    width: 0px;
    height: 0px;
    border: solid 5px;
    border-color: transparent transparent transparent #FFFFFF;
  }
`

const AnchorSign = styled.div `
  position: relative;
  width: 10px;
  height: 10px;
  border-right: solid 1px #6BB718; 
  border-top: solid 1px #6BB718; 
  transform: rotate(45deg);
`

const Arrow = styled.div `
  width: 12px;
  height: 12px;
`

export default function Header({date, title, text, time}) {

  return (
    <CardContainer>
      <Date>{date}</Date>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Time>{time}</Time>
      <RegisterButton>Register Now</RegisterButton>
      <Anchor></Anchor>
    </CardContainer>
  )
}
