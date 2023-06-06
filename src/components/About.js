import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <Wrapper>
      <Container>
        <ElementContent>
          <MainSectionContent>
            <SectionStyled>
              <ItemSectionStyled>
                <ImgaeWrapper>
                  <ImageStyled
                    src="https://onovo.bslthemes.com/wp-content/uploads/2023/01/serv-icon3.png"
                    alt="Creatative"
                  />
                </ImgaeWrapper>
                <TitleWrap>
                  <span> Plan </span>
                </TitleWrap>
                <div>
                  <div>
                    <p>
                      Strategic planning in marketing is the compass that
                      navigates brands towards their desired destinations,
                      orchestrating cohesive campaigns and paving the way for
                      triumph
                    </p>
                  </div>
                </div>
              </ItemSectionStyled>
            </SectionStyled>
            <SectionStyled>
              <ItemSectionStyled>
                <ImgaeWrapper>
                  <ImageStyled
                    src="https://onovo.bslthemes.com/wp-content/uploads/2023/01/serv-icon1.png"
                    alt="Creatative"
                  />
                </ImgaeWrapper>
                <TitleWrap>
                  <span> Optimization </span>
                </TitleWrap>
                <div>
                  <div>
                    <p>
                      Optimization in marketing is the key that unlocks the
                      hidden potential, maximizes efficiency, and elevates
                      brands to new heights of success
                    </p>
                  </div>
                </div>
              </ItemSectionStyled>
            </SectionStyled>
            <SectionStyled>
              <ItemSectionStyled>
                <ImgaeWrapper>
                  <ImageStyled
                    src="https://onovo.bslthemes.com/wp-content/uploads/2023/01/serv-icon2.png"
                    alt="Creatative"
                  />
                </ImgaeWrapper>
                <TitleWrap>
                  <span> Creation </span>
                </TitleWrap>
                <div>
                  <div>
                    <p>
                      Creativity in marketing is the catalyst that illuminates
                      brands, captivates audiences, and transforms ordinary
                      campaigns into extraordinary journeys
                    </p>
                  </div>
                </div>
              </ItemSectionStyled>
            </SectionStyled>
          </MainSectionContent>
        </ElementContent>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 80px 0;
  position: relative;
  @media (max-width: 992px) {
    padding-top: 40px;
  }
`;

const Container = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  --widgets-spacing: 20px;
  max-width: 90%;
  @media (max-width: 768px) {
    max-width: 590px;
  }
`;

const ElementContent = styled.div`
  --swiper-theme-color: #000;
  --swiper-navigation-size: 44px;
  --swiper-pagination-bullet-size: 6px;
  --swiper-pagination-bullet-horizontal-gap: 6px;
  position: relative;
  min-height: 1px;
  display: flex;
`;

const MainSectionContent = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  flex-wrap: wrap;
  position: relative;
`;

const SectionStyled = styled.div`
  --widgets-spacing: 20px;
  position: relative;
  min-height: 1px;
  display: flex;
  @media (min-width: 768px) {
    width: 33.333%;
  }
`;

const ItemSectionStyled = styled.div`
  margin: 0 auto;
  padding: 40px;
  position: relative;
  //   max-width: 460px;
  //   min-height: 460px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  transition: 0.25s linear;
  &:hover {
    background: rgb(248, 236, 253);
    border-radius: 30px;
  }
`;

const ImgaeWrapper = styled.div`
  margin-bottom: 20px;
  display: block;
  line-height: 1;
`;

const ImageStyled = styled.img`
  width: auto;
  max-height: 60px;
  height: auto;
  max-width: 100%;
  border: none;
  border-radius: 0;
  box-shadow: none;
`;

const TitleWrap = styled.h5`
  margin: 0;
  font-size: 42px;
  @media (max-width: 992px) {
    font-size: 32px;
  }
`;
