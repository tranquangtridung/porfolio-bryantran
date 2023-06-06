import React from "react";
import styled from "styled-components";

export default function Blogs({ blogRef }) {
  return (
    <Wrapper ref={blogRef}>
      <Container>
        <HeadingTiltle>
          <H3Title>
            <span>My Blogs</span>
          </H3Title>
        </HeadingTiltle>
        <div>
          <Main
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Item>
              <Box>
                <Iframe
                  style={{ width: "100%" }}
                  src="https://www.brandsvietnam.com/congdong/topic/332504-Doanh-nghiep-Start-up-san-pham-moi-tren-thi-truong-nen-tap-trung-vao-hoat-dong-Marketing-nao?fbclid=IwAR2_waALN_VNRGknZsx-ZvhG9XKX8zbUy5JkS5x71EFALxUZwM8wvpWInKw"
                ></Iframe>
                <a
                  style={{
                    marginTop: "1rem",
                    display: "block",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                  target="_blank"
                  href="https://www.brandsvietnam.com/congdong/topic/332504-Doanh-nghiep-Start-up-san-pham-moi-tren-thi-truong-nen-tap-trung-vao-hoat-dong-Marketing-nao?fbclid=IwAR2_waALN_VNRGknZsx-ZvhG9XKX8zbUy5JkS5x71EFALxUZwM8wvpWInKw"
                >
                  <i>Link here</i>
                </a>
              </Box>
            </Item>
            <Item>
              <Box>
                <Iframe
                  style={{ width: "100%" }}
                  src="https://www.brandsvietnam.com/congdong/topic/332403-Chien-luoc-quang-cao-giup-Moy-camera-thanh-cong-tren-Instagram?fbclid=IwAR3CMS1old61dAb7XiPBP_D_Rl9fBKIJoBSKfdUmOz6WgGn2byQo7xCChGI"
                ></Iframe>
                <a
                  style={{
                    marginTop: "1rem",
                    display: "block",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                  target="_blank"
                  href="https://www.brandsvietnam.com/congdong/topic/332403-Chien-luoc-quang-cao-giup-Moy-camera-thanh-cong-tren-Instagram?fbclid=IwAR3CMS1old61dAb7XiPBP_D_Rl9fBKIJoBSKfdUmOz6WgGn2byQo7xCChGI"
                >
                  <i>Link here</i>
                </a>
              </Box>
            </Item>
          </Main>
        </div>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 100px 0;
  position: relative;
  background-color: #f8fafd;
  padding-bottom: 120px;
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

const Main = styled.div`
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const Item = styled.div`
  flex: 0 0 auto;
  width: 48%;
  max-width: 100%;
  margin-top: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Box = styled.div`
  border: 2px solid #e1e3e1;
  padding: 10px;
  border-radius: 10px;
  position: relative;
  background-color: white;
  padding: 1rem;
`;

const Iframe = styled.iframe`
  max-height: 475px;
  height: 485px;
  @media (max-width: 768px) {
    height: 350px;
  }
`;
