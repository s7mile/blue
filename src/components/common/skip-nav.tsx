import React from "react";
import styled from "styled-components";

import color from "../../utils/color";

const Link = styled.a`
  position: absolute;
  top: -30px;
  left: 0;
  background: ${color.blue[1]};
  width: 100%;
  height: 30px;
  line-height: 30px;
  color: #fff;
  text-align: center;

  &:focus,
  &:active {
    z-index: 999;
    top: 0;
  }
`;

function SkipNav() {
  return (
    <>
      <Link href="#gnb">메뉴목록으로 바로가기</Link>
      <Link href="#content">컨텐츠로 바로가기</Link>
    </>
  );
}

export default SkipNav;
