import React from "react";
import styled from "styled-components";

export default function Information({ inforRef }) {
  return (
    <Wrapper ref={inforRef}>
      <Container>
        <MainContent>
          <AboutMeStyled>
            <TiltleAboutMe>
              <span>About Me</span>
            </TiltleAboutMe>
            <DescriptionMe>
              <h3
                style={{
                  marginBottom: "10px",
                  fontSize: "20px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                }}
              >
                My Name Is Tran Quang Tri Dung
              </h3>
              <h5
                style={{
                  fontSize: "30px",
                  marginBottom: "6px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                }}
              >
                <span>I Am Available</span> Marketer
              </h5>
              <p style={{ marginBottom: "1rem", marginTop: "3px" }}>
                Born in 2002. As a marketer, I believe that marketing
                encompasses all the tasks required to promote and deliver
                products to customers. It demands a diverse range of skills, and
                I am constantly striving to expand my knowledge every day. In my
                work, I always aim to align my actions with the outlined plan
                rather than relying on spontaneous decisions. Therefore, my work
                philosophy can be summarized as follows: Working scientifically,
                optimizing diligently, and embracing creativity.
              </p>
            </DescriptionMe>
            <LineDivideContent />
            <TiltleAboutMe style={{ marginTop: "3rem" }}>
              <span>EXPERIENCE</span>
            </TiltleAboutMe>
            <div>
              <ResumeBox>
                <ListExStyled>
                  <TimeStyled>2022 - Present</TimeStyled>
                  <TitleList>Marketer</TitleList>
                  <p>I work as a freelance marketer at Moy.camera.</p>
                  <TitleList>Achivement</TitleList>
                  <p>
                    Reached nearly 30k followers with an annual revenue of
                    around 5 billion
                  </p>
                </ListExStyled>
                <ListExStyled>
                  <TimeStyled>2023</TimeStyled>
                  <TitleList>Marketer</TitleList>
                  <p>I am interning as a Facebook Ads intern at Jobsgo.</p>
                </ListExStyled>
                <ListExStyled>
                  <TimeStyled>2023</TimeStyled>
                  <TitleList>Marketer</TitleList>
                  <p>
                    I work as a freelance marketer at Bánh Mỳ 35 Thái Thịnh.
                  </p>
                </ListExStyled>
                <ListExStyled>
                  <TimeStyled>2023-2024</TimeStyled>
                  <TitleList>Marketer</TitleList>
                  <p>I work as a marketer and sub-leader at Tester Viet</p>
                  <TitleList>Achivement</TitleList>
                  <p>Top 1 SEO</p>
                </ListExStyled>
                <ListExStyled>
                  <TimeStyled>2023</TimeStyled>
                  <TitleList>Marketer</TitleList>
                  <p>I work as a freelance marketer at Flannel.baa</p>
                  <TitleList>Achivement</TitleList>
                  <p>Reached nearly 6k followers</p>
                </ListExStyled>
              </ResumeBox>
            </div>
          </AboutMeStyled>
          <ImgaeInfor>
            <MainContent>
              <ImgWrap>
                <ImgDiv>
                  <ImgStyled src="IMG_0695.JPG" alt="Tri_Dung_Img" />
                </ImgDiv>
              </ImgWrap>
              <ContactWrap>
                <div>
                  <ListContact>
                    <ContactItem>
                      <ContactIconWrap>
                        <i className="fab fa-skype"></i>
                      </ContactIconWrap>
                      <TextContact>
                        <a href="skype:-skype-name-?chat" target="_blank">
                          Skype Me
                        </a>
                      </TextContact>
                    </ContactItem>
                    <ContactItem>
                      <ContactIconWrap>
                        <i className="fab fa-facebook"></i>
                      </ContactIconWrap>
                      <TextContact>
                        <a
                          href="https://www.facebook.com/profile.php?id=100011700329804"
                          target="_blank"
                        >
                          Facebook
                        </a>
                      </TextContact>
                    </ContactItem>
                    <ContactItem>
                      <ContactIconWrap>
                        <i className="fa fa-envelope"></i>
                      </ContactIconWrap>
                      <TextContact>
                        <a
                          href="mailto:tranquangtridung@gmail.com"
                          target="_blank"
                        >
                          Email
                        </a>
                      </TextContact>
                    </ContactItem>
                    <ContactItem>
                      <ContactIconWrap>
                        <i className="fa fa-phone"></i>
                      </ContactIconWrap>
                      <TextContact>
                        <a href="tel:0353308330">0353308330</a>
                      </TextContact>
                    </ContactItem>
                  </ListContact>
                </div>
              </ContactWrap>
            </MainContent>
          </ImgaeInfor>
        </MainContent>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 80px 0;
  position: relative;
  background-color: #f8fafd;
`;

const Container = styled.div`
  margin: auto;
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
  @media (max-width: 1400px) {
    max-width: 1140px;
  }
  @media (max-width: 1200px) {
    max-width: 960px;
  }
  @media (max-width: 992px) {
    max-width: 720px;
  }
  @media (max-width: 768px) {
    max-width: 540px;
  }
`;

const MainContent = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
`;

const AboutMeStyled = styled.div`
  padding-bottom: 1.5rem;
  max-width: 100%;
  @media (min-width: 992px) {
    padding-bottom: 0;
  }
  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 42%;
  }
`;
const TiltleAboutMe = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  padding-left: 20px;
  color: #1f1f1f;
  margin-bottom: 30px;

  &::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 0;
    width: 8px;
    height: 8px;
    background: #c2e7ff;
  }

  @media (max-width: 768px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    &::after {
      left: 10px;
    }
  }
`;

const DescriptionMe = styled.div`
  padding: 0 10% 0 0;
  padding-bottom: 3rem;
  @media (max-width: 768px) {
    padding: 1.5rem;
    padding-bottom: 3rem;
  }
`;

const LineDivideContent = styled.hr`
  margin: 1rem 0;
  color: inherit;
  border: 0;
  border-top: 1px solid;
  opacity: 0.25;
`;

const ResumeBox = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ListExStyled = styled.li`
background-color: #fff;
border: 2px solid #e1e3e1;
padding: 15px 15px 20px 20px;
border-radius: 12px;
position: relative;
transition: all .35s ease;
margin-top:20px;
}
`;

const TimeStyled = styled.span`
  font-size: 12px;
  display: flex;
  width: 100%;
  padding-bottom: 4px;
`;

const TitleList = styled.h5`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
`;

const ImgaeInfor = styled.div`
  @media (min-width: 1201px) {
    top: 60px;
  }
  @media (min-width: 1200px) {
    padding-left: 3rem !important;
  }
  @media (min-width: 992px) {
    position: -webkit-sticky;
    position: sticky;
    z-index: 1020;
  }
  @media (min-width: 992px) {
    top: 0;
  }
  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 52%;
  }
`;

const ImgWrap = styled.div`
  padding-top: 1.5rem;
  padding: 1.5rem;
  padding-bottom: 1.5rem;
  @media (min-width: 768px) {
    flex: 0 0 auto;
    width: 50%;
  }
`;

const ImgDiv = styled.div`
  border-radius: 16px;
  overflow: hidden;
`;

const ImgStyled = styled.img`
  max-width: 100%;
`;

const ContactWrap = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  @media (min-width: 768px) {
    flex: 0 0 auto;
    width: 40%;
  }
  @media (max-width: 768px) {
    padding: 1.5rem;
    width: 100%;
  }
`;

const ListContact = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ContactItem = styled.li`
  display: flex;
  border: 2px solid #e1e3e1;
  background-color: #fff;
  padding: 12px 15px;
  border-radius: 12px;
  align-items: center;
  position: relative;
  transition: all 0.35s ease;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background: #c2e7ff;
  }
`;

const TextContact = styled.div`
  flex: 1 1;
  padding-left: 20px;
  color: black;
  font-weight: 500;
  & a::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    content: "";
  }
`;

const ContactIconWrap = styled.div`
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #f3f6fc;
  color: grey;
  font-size: 20px;
`;
