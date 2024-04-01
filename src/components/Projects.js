import React from "react";
import styled from "styled-components";

export default function Projects({ projectRef }) {
  return (
    <Wrapper ref={projectRef}>
      <Container>
        <HeadingTiltle>
          <H3Title>
            <span>My Project</span>
          </H3Title>
        </HeadingTiltle>
        <ContentHome>
          <TextContent>
            <HomeIntro>
              <H1Styled>Moys Camera</H1Styled>
              <h6
                style={{
                  fontSize: "20px",
                  // textAlign: "start",
                  marginBottom: "15px",
                  marginTop: 0,
                }}
              >
                Position: Marketer
              </h6>
              <H2Styled>Description</H2Styled>
              <p
                style={{
                  fontSize: "17px",
                  // textAlign: "start",
                  marginBottom: "15px",
                }}
              >
                I have helped Moy.camera achieve a follower count ranging from 0
                to 30k within 2 years. In addition to the follower growth, the
                revenue of Moy.camera has been quite impressive. The lowest
                month saw the revenue nearly quadruple the advertising costs,
                while the highest month witnessed revenue exceeding the
                advertising expenses by over 30 times. Currently, transitioning
                from a lesser-known small camera shop, it has become a store
                favored by numerous influencers for collaborations.
              </p>
              <ul className="social-link">
                <li>
                  <a
                    href="https://www.instagram.com/moy.camera/?fbcpd=IwAR0eUhXUq2ZKBQLU1sPbZZNAvfKBQlKLFvoqgw2S8jmTk1xXehTjJg7Yq-I"
                    target="_blank"
                  >
                    <i class="fab fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li style={{ padding: "0 1.5rem", fontWeight: "bold" }}>
                  More 30K Folowers
                </li>
              </ul>

              <ul className="social-link">
                <li>
                  <a
                    href="https://drive.google.com/drive/folders/1to1bKwovc9U67UzGw9AIZae4IJQ6cNsV"
                    target="_blank"
                  >
                    <i class="fab fa-google-drive"></i>
                  </a>
                </li>
                <li style={{ padding: "0 1.5rem", fontWeight: "bold" }}>
                  See My Drive
                </li>
              </ul>
            </HomeIntro>
          </TextContent>
          <DivImgStyled>
            <ImageContent>
              {/* <div style={{ width: "60%", margin: "auto", minWidth: "320px", display:"flex" }}> */}
              <ImgHome src="123.PNG" />
              <ImgHome src="456.PNG" />
              {/* </div> */}
            </ImageContent>
          </DivImgStyled>
        </ContentHome>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  padding: 80px 0;
  padding-top: 100px;
  padding-bottom: 100px;
  overflow: hidden;
  @media (max-width: 992px) {
    padding-bottom: 30px;
  }
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
    max-width: 720px;
  }
  @media (max-width: 768px) {
    max-width: 540px;
  }
`;

const DivImgStyled = styled.div`
  width: 50%;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

const ContentHome = styled.div`
  align-items: center;
  flex-direction: row-reverse;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    padding: 0 1.5rem;
  }
`;

const TextContent = styled.div`
  @media (min-width: 1200px) {
    padding-left: 3rem;
  }
  @media (min-width: 992px) {
    margin-bottom: 0;
    flex: 0 0 auto;
    width: 40%;
  }
`;

const HomeIntro = styled.div`
  max-width: 470px;
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  @media (max-width: 992px) {
    padding-top: 1.5rem;
  }
`;

const H1Styled = styled.h1`
  font-size: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-weight: 600;
  //   margin-bottom: 15px;
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
  position: relative;
  justify-content: space-around;
  //   padding: 0 1.5rem;
  @media (max-width: 992px) {
    justify-content: space-between;
  }
`;

const ImgHome = styled.img`
  width: 40%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
  z-index: 20;
  //   margin:auto;
  //   @media (max-width: 992px) {
  //     border-radius: 50%;
  //     width: 320px;
  //     height: 320px;
  //   }
  @media (max-width: 768px) {
    padding-bottom: 1.5rem;
    width: 100%;
  }
`;

const HeadingTiltle = styled.div`
  padding-bottom: 45px;
  padding-left: 1.5rem;
`;

const H3Title = styled.h3`
  position: relative;
  display: inline-block;
  vertical-align: top;
  padding-right: 45px;
  font-size: 40px;
  font-weight: 600;
  margin: 0;
  padding-bottom: 10px;
  text-transform: uppercase;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #c2e7ff;
  }
`;
