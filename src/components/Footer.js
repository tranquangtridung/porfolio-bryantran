import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <FooterInfor>
        <FooterAva>
          <ImgAva src="IMG_0695.JPG" />
        </FooterAva>
        <h3>Bryan Tran</h3>
      </FooterInfor>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background-color: var(--px-bg);
  border-top: 2px solid var(--px-gray-2);
  padding-bottom: 60px;
`;

const FooterInfor = styled.div`
  text-align: center;
  margin: auto;
  margin-top: -50px;
`;

const FooterAva = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  margin: 0 auto;
  border-radius: 50%;
  border: 8px solid var(--px-gray-1);
  padding: 5px;
  background-color: var(--px-gray-3);
`;

const ImgAva = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
