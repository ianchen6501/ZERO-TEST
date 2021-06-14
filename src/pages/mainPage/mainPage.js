import {useRef} from "react"
import styled from "styled-components"
import Header from "../../components/Header/index"
import Card from "../../components/card/index"
import Form from "../../components/Form/index"
import {MEDIA_QUERY_SM, MEDIA_QUERY_LG } from "../../constants/breakPoint"

const Intro = styled.section `
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 1180px;
  height: 276px;
  margin: 0 auto;

  ${MEDIA_QUERY_LG} {
    width: initial;
    height: 216px;
    padding: 0 34px;
  }
`

const IntroTitle = styled.h2 `
  font-weight: 500;
  line-height: 40px;
  color: #01254F;
`

const IntroText = styled.p `
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;

  ${MEDIA_QUERY_SM} {
    font-size: 12px;
    line-height: 20px;
  }
`

const Cards = styled.section `
  width: 100%;
  padding: 70px 0;
  background-color: #F2F2F2;

  ${MEDIA_QUERY_LG} {
    padding: 40px 0;
  }
`

const CardsWrapper = styled.div `
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 1200px;
  margin: 0 auto;

  ${MEDIA_QUERY_LG} {
    width: initial;
    padding: 0 34px;
  }

  ${MEDIA_QUERY_SM} {
    width: initial;
    padding: 0 25px;
  }
`

const Article = styled.section `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1180px;
  margin: 0 auto;
  padding: 160px 0;

  ${MEDIA_QUERY_LG} {
    flex-direction: column;
    width: initial;
    padding: 60px 34px 80px 34px;
  }

  ${MEDIA_QUERY_SM} {
    padding: 60px 25px 80px 25px;
  }
`

const ArticleLeftContainer = styled.div `
  width: 50%;
  padding-right: 120px;

  ${MEDIA_QUERY_LG} {
    width: auto;
    padding-right: 0;
  }
`

const ArticleTitle = styled.h3 `
  font-weight: 500;
  line-height: 30px;
  color: #01254F;

  ${MEDIA_QUERY_SM} {
    font-size: 20px;
  }
`

const ArticleText = styled.p `
  display: inline-block;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #000000;
  opacity: 65%;
  white-space: pre-line;

  ${MEDIA_QUERY_SM} {
    font-size: 12px;
  }
`

const ArticleAnchor = styled.a `
  display: inline-block;
  position: relative;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #000000;
  opacity: 65%;

  ${MEDIA_QUERY_SM} {
    font-size: 12px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: calc(100% + 10px);
    width: 0px;
    height: 0px;
    border: solid 6px;
    border-color: transparent transparent transparent #000000;
    margin: auto;
    opacity: 65%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom 0;
    left: calc(100% + 10px);
    width: 0px;
    height: 0px;
    border: solid 4.5px;
    border-color: transparent transparent transparent #FFFFFF;
    margin: auto;
  }
`

const Video = styled.iframe `
  position: relative;
  width: 580px;
  height: 338px;

  ${MEDIA_QUERY_SM} {
    width: 100%;
    height: 240px;
  }

  ${MEDIA_QUERY_LG} {
    margin-top: 20px;
  }
`


export default function MainPage() {
  const cardsInfo = useRef([
    {
      date: "31/10/2019",
      title: "A structured approach to deciphering FX & Gold sentiment",
      text: "Market scan across FX & Gold to determine sentiment with accuracy.",
      time: "7pm-8:30pm EST"
    },
    {
      date: "01/11/2019",
      title: "NFP - Live Trading Webinar",
      text: "Live trading the US Jobs data release.",
      time: "11pm-12am EST"
    },
    {
      date: "05/11/2019",
      title: "How to trade the risk currencies, such as the AUD",
      text: "A live analysis on how to take advantage of the current AUD volatility, plus other key FX pairs",
      time: "7pm-8:30pm EST"
    },
    {
      date: "07/11/2019",
      title: "Where to next for the GBP?",
      text: "As the Brexit saga rolls on, we hone in on the GB Pound trading opportunities.",
      time: "7pm-8:30pm EST"
    },
    {
      date: "12/11/2019",
      title: "How to dig out high probability FX trades",
      text: "We break down opportunities for FX majors and key cross FX pairs.",
      time: "7pm-8:30pm EST"
    },
    {
      date: "14/11/2019",
      title: "A live market scan demonstrating FX market correlations",
      text: "LIVE scan across key markets in FX, Gold, Oil & Indices, including strategy tools to help being positioned in these markets.",
      time: "7pm-8:30pm EST"
    }
  ])

const ArticalInfo = useRef(
    `With more than 15 years of experience covering both the FX and CFD  markets, Alistair has extensive knowledge covering algorithmic trading, market analysis & an impressive educational background.\n
    As the author of ‘Essentials for Trading Students – An Overview of the Basics for Aspiring Traders’, which was released in 2017, Alistair will take any aspiring trader from the basics right through to advanced analytics used in institutional funds.\n
    At the core of Alistair’s teachings is the ability to help each trader uncover their ‘Trading DNA', helping them flourish with the skills and timeframes that work best for them.`
  )

  return (
    <>
      <Header></Header>
      <Intro>
        <IntroTitle>Forex Webinar</IntroTitle>
        <IntroText>Whether you are new to foreign exchange trading or already have some market experience, we believe that a solid FX trading education is vital to your success as a trader.</IntroText>
      </Intro>
      <Cards>
        <CardsWrapper>
          {cardsInfo.current.map((cardInfo, index) => {
            return (
              <Card 
                key={index}
                date={cardInfo.date}
                title={cardInfo.title}
                text={cardInfo.text}
                time={cardInfo.time}
              ></Card>
            )
          })}
        </CardsWrapper>
      </Cards>
      <Article>
        <ArticleLeftContainer>
          <ArticleTitle>Meet Your Host - Alistair Schultz</ArticleTitle>
          <ArticleText>{ArticalInfo.current}</ArticleText>
          <ArticleAnchor>See more</ArticleAnchor>
        </ArticleLeftContainer>
        <Video src="https://www.youtube.com/embed/PPDNjvHUdzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Video>
      </Article>
      <Form></Form>
    </>
  );
}
