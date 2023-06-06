import React, { useState } from "react";
import styled from "styled-components";

export default function Header({ homeRef, blogRef, projectRef, inforRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleScroll = (target) => {
    setIsOpen(false)
    const targetElement = target?.current.offsetTop;
    if (targetElement) {
      window.scrollTo({
        top: targetElement, // Cuộn đến vị trí của phần tử mục tiêu
        behavior: "smooth", // Có hiệu ứng cuộn mượt
      });
    }
  };

  const handleClick = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderStyled>
      <HeaderContainer>
        <div className="logo">
          <NavBrand>
            <ImgLogo href="#" src="Tri.jpg" />
          </NavBrand>
        </div>
        <MainMenu>
          <LiStyled
            onClick={() => {
              handleScroll(homeRef);
            }}
          >
            <LiContent>
              <span>HOME</span>
            </LiContent>
          </LiStyled>
          <LiStyled
            onClick={() => {
              handleScroll(inforRef);
            }}
          >
            <LiContent>
              <span>ABOUT</span>
            </LiContent>
          </LiStyled>
          <LiStyled
            onClick={() => {
              handleScroll(projectRef);
            }}
          >
            <LiContent>
              <span>PROJECTS</span>
            </LiContent>
          </LiStyled>
          <LiStyled
            onClick={() => {
              handleScroll(blogRef);
            }}
          >
            <LiContent>
              <span>BLOGS</span>
            </LiContent>
          </LiStyled>
        </MainMenu>
        <DropBar>
          <Icon onClick={handleClick} className="fa fa-bars"></Icon>
          {isOpen ? (
            <DropMenu>
              <LiStyled
                onClick={() => {
                  handleScroll(homeRef);
                }}
              >
                <LiContent>
                  <span>HOME</span>
                </LiContent>
              </LiStyled>
              <LiStyled
                onClick={() => {
                  handleScroll(inforRef);
                }}
              >
                <LiContent>
                  <span>ABOUT</span>
                </LiContent>
              </LiStyled>
              <LiStyled
                onClick={() => {
                  handleScroll(projectRef);
                }}
              >
                <LiContent>
                  <span>PROJECTS</span>
                </LiContent>
              </LiStyled>
              <LiStyled
                onClick={() => {
                  handleScroll(blogRef);
                }}
              >
                <LiContent>
                  <span>BLOGS</span>
                </LiContent>
              </LiStyled>
            </DropMenu>
          ) : null}
        </DropBar>
      </HeaderContainer>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1080;
  transition: all 0.35s ease;
  padding: 15px 0;
  right: 0;
  background: #f3f6fc;
`;

const HeaderContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
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

const NavBrand = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  //   color: var(--px-theme-text);
  line-height: 1;
  font-size: 18px;
  text-decoration: none;
  white-space: nowrap;
  min-width: 90px;
`;

const ImgLogo = styled.img`
  display: block;
  max-width: 100%;
  width: 100px;
  height: 92px;
  border-radius: 50%;
`;

const MainMenu = styled.ul`
  padding: 0 20px;
  display: flex;
  margin: 0;
  list-style: none;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const LiStyled = styled.li`
  margin: 0 5px;
  cursor: pointer;
`;

const LiContent = styled.a`
  padding: 6px 15px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 30px;
  flex-direction: column;
  text-decoration: none;
  color: #444746;
  font-weight: 500;
  &:hover {
    background: #c2e7ff;
    color: black;
    border-radius: 30px;
  }
`;

const DropBar = styled.div`
  float: right;
`;

const Icon = styled.i`
  text-decoration: none;
  font-size: 24px;
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const DropMenu = styled.div`
  padding: 10px 20px;
  display: flex;
  margin: 0px;
  list-style: none;
  -webkit-box-pack: center;
  justify-content: space-around;
  flex-direction: column;
  position: absolute;
  right: 50%;
  transform: translate(50%);
  text-align: center;
  height: 20vh;
  background: white;
  width: 100vh;
  border-radius: 20px;
  top: 100%;
`;
