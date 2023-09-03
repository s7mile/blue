import React from "react";
import styled from "styled-components";

import color from "../../utils/color";
import HamburgerMenu from "./hamburger-menu";
import TopMenu from "./top-menu";
import SubMenu from "./sub-menu";
import Search from "./search";

const HeaderWrap = styled.div`
  position: relative;
  background-color: ${color.white};
`;

const Logo = styled.h1`
  height: 94px;

  a {
    position: absolute;
    top: 32px;
    left: 0;

    img {
      width: 167px;
    }
  }
`;

const HeaderInner = styled.div`
  position: relative;
  width: 1200px;
  margin: 0 auto;
`;

const HeaderTopInner = styled(HeaderInner)`
  height: 94px;
`;

const HeaderBottomInner = styled(HeaderInner)`
  height: 53px;
`;

const HeaderBottomWrap = styled(HeaderWrap)`
  border-bottom: 1px solid #ddd;
`;

function BlueHead() {
  return (
    <header>
      <HeaderWrap>
        <HeaderTopInner>
          <Logo>
            <a href="/">
              <img src="/images/mb-site-logo.png" alt="미스터블루" />
            </a>
          </Logo>
          <Search />
        </HeaderTopInner>
      </HeaderWrap>
      <HeaderBottomWrap>
        <HeaderBottomInner>
          <HamburgerMenu />
          <TopMenu />
          <SubMenu />
        </HeaderBottomInner>
      </HeaderBottomWrap>
    </header>
  );
}

export default BlueHead;
