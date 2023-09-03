import React from "react";
import styled from "styled-components";

import color from "../../utils/color";

const Wrap = styled.section`
  display: flex;
  height: 24px;
  margin: 20px 0 60px;
`;

const Title = styled.h2<{ img: string }>`
  width: 24px;
  height: 100%;
  margin-right: 15px;
  background-image: url(${(props) => props.img});
  background-size: 100%;
  text-indent: -999em;
  font-size: 1px;
`;

const Link = styled.a`
  display: block;
  height: 100%;
  line-height: 24px;
  color: ${color.gray[3]};
  font-size: 14px;

  &:after {
    content: ">";
    margin-left: 10px;
    color: ${color.gray[0]};
  }
`;

function Notice() {
  return (
    <Wrap>
      <Title img="/images/ico-line-notice.png">공지사항</Title>
      <Link href="https://www.mrblue.com/help/notice/28623" target="_self">
        2023년 9월 추가적립 이벤트(블루데이) 일정 안내
      </Link>
    </Wrap>
  );
}

export default Notice;
