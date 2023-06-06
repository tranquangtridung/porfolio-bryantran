import React from "react";
import styled from "styled-components";

export default function Home({homeRef}) {
  return (
    <Wrapper>
      <div ref={homeRef}>
        <DecorOne></DecorOne>
        <DecorTwo></DecorTwo>
        <Container>
          <ContentHome>
            <TextContent>
              <HomeIntro>
                <h6
                  style={{
                    fontSize: "20px",
                    // textAlign: "start",
                    marginBottom: "15px",
                  }}
                >
                  Hi, I'm
                </h6>
                <H1Styled>Bryan Tran</H1Styled>
                <H2Styled>I'm Marketer</H2Styled>
                <p
                  style={{
                    fontSize: "17px",
                    // textAlign: "start",
                    marginBottom: "15px",
                  }}
                >
                  We work with professionals and leaders who want to build
                  careers that fulfil them intellectually, financially
                </p>
              </HomeIntro>
            </TextContent>
            <DivImgStyled>
              <ImageContent>
                <div
                  style={{ width: "60%", margin: "auto", minWidth: "320px" }}
                >
                  <ImgHome src="IMG_0695.JPG" />
                </div>
              </ImageContent>
            </DivImgStyled>
          </ContentHome>
        </Container>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  padding: 100px 0;
  padding-top: 200px;
  padding-bottom: 100px;
  overflow: hidden;
  @media (max-width: 992px) {
    padding-bottom: 30px;
  }
`;

const DecorOne = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.25;
  pointer-events: none;
  z-index: -1;
  top: 50px;
  right: 0;
  bottom: auto;
  background: #f64f59;
`;

const DecorTwo = styled.div`
  bottom: 50px;
  left: 0;
  background: #c471ed;
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.25;
  pointer-events: none;
  z-index: -1;
`;

const Container = styled.div`
  position: relative !important;
  margin: auto;
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
  @media (max-width: 1400px) {
    max-width: 1140px;
  }
  @media (max-width: 1200px) {
    // max-width: 720px;
  }
  @media (max-width: 768px) {
    max-width: 540px;
  }
`;

const DivImgStyled = styled.div`
  width: 40%;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

const ContentHome = styled.div`
  align-items: center !important;
  flex-direction: row-reverse;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 992px) {
    flex-direction: column-reverse;
  }
`;

const TextContent = styled.div`
  @media (min-width: 1200px) {
    padding-left: 3rem;
  }
  @media (min-width: 992px) {
    margin-bottom: 0;
    flex: 0 0 auto;
    width: 50%;
  }
`;

const HomeIntro = styled.div`
  max-width: 470px;
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const H1Styled = styled.h1`
  font-size: 62px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-weight: 600;
  margin-bottom: 15px;
  line-height: 1.2;
  color: #1f1f1f;
  margin-top: 0;
`;

const H2Styled = styled.h2`
  font-weight: 500;
  margin-bottom: 25px;
  font-size: 25px;
  line-height: 1.2;
  margin-top: 0;
  color: #1f1f1f;
  text-align: start;
`;

const ImageContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ImgHome = styled.img`
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 180px 180px 180px 180px;
  z-index: 20;
  //   margin:auto;
  @media (max-width: 992px) {
    border-radius: 50%;
    width: 320px;
    height: 320px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
