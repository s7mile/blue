import React from "react";
import styled from "styled-components";

import color from "../../utils/color";

const Wrap = styled.footer`
  margin-top: 50px;
  padding: 50px 0 0;
  height: 250px;
  border-top: 1px solid ${color.gray[2]};
  font-size: 11px;
`;

const FooterInner = styled.div`
  position: relative;
  width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.i<{ img: string }>`
  display: block;
  width: 130px;
  height: 24px;
  background-image: url(${(props) => props.img});
  background-size: 100%;
`;

const Nav = styled.nav`
  position: absolute;
  top: 10px;
  left: 220px;
`;

const Link = styled.a<{ $highlight?: boolean }>`
  color: ${(props) => (props.highlight ? color.blue[1] : color.gray[3])};
`;

const NavUl = styled.ul`
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;

const NavLi = styled.li`
  float: left;
  margin: 0 20px 0 0;
`;

const InfoWrap = styled.div`
  position: absolute;
  top: 60px;
  left: 220px;
  width: 600px;
  color: ${color.gray[1]};
`;

const InfoUl = styled.ul`
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;

const InfoLi = styled.li`
  float: left;
  padding-right: 5px;
  margin: 0 5px 10px 0;
  border-right: 1px solid ${color.gray[2]};

  &:nth-child(4) {
    float: none;
  }
`;

function Footer() {
  return (
    <Wrap>
      <FooterInner>
        <Logo img="/images/mb-footer-logo.png"></Logo>
        <Nav>
          <NavUl>
            <NavLi>
              <Link href="">회사소개</Link>
            </NavLi>
            <NavLi>
              <Link href="">이용약관</Link>
            </NavLi>
            <NavLi>
              <Link href="" $highlight={true}>
                개인정보처리방침
              </Link>
            </NavLi>
            <NavLi>
              <Link href="">청소년 보호정책</Link>
            </NavLi>
            <NavLi>
              <Link href="">블루머니 이용약관</Link>
            </NavLi>
            <NavLi>
              <Link href="">고객센터</Link>
            </NavLi>
            <NavLi>
              <Link href="" $highlight={true}>
                연재문의
              </Link>
            </NavLi>
            <NavLi>
              <Link href="">서비스 전체보기</Link>
            </NavLi>
          </NavUl>
        </Nav>

        <InfoWrap>
          <InfoUl>
            <InfoLi>미스터블루(주)</InfoLi>
            <InfoLi>대표자:조승진</InfoLi>
            <InfoLi>사업자등록번호:107-88-30967</InfoLi>
            <InfoLi>통신판매업번호: 2023-서울강서-1024</InfoLi>
            <InfoLi>서울특별시 강서구 양천로 570, 18층</InfoLi>
            <InfoLi>TEL : 02-337-0610</InfoLi>
            <InfoLi>FAX : 02-337-0630</InfoLi>
          </InfoUl>
          <p>ⓒ Mr.Blue Corp. All rights reserved.</p>
        </InfoWrap>
      </FooterInner>
    </Wrap>
  );
}

export default Footer;
