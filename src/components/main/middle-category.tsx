import React from "react";
import styled from "styled-components";

import color from "../../utils/color";
import { middleCategory } from "@/api";

const MenuBlock = styled.ul`
  display: table;
  table-layout: fixed;
  width: 1200px;
  margin: 0 auto 65px;
  background: #fbfbfb;
  box-sizing: border-box;
`;

const Item = styled.li`
  display: table-cell;
  height: 72px;
  line-height: 72px;
  border: 1px solid ${color.gray[2]};
  border-right: 0;
  box-sizing: border-box;

  &:last-child {
    border-right: 1px solid ${color.gray[2]};
  }
`;

const Link = styled.a`
  display: block;
  height: 100%;
  line-height: 72px;
  font-size: 18px;
  box-sizing: border-box;
  text-align: center;
  color: ${color.gray[3]};

  &:hover,
  &:active,
  &:focus {
    background: ${color.blue[1]};
    color: #fff;

    &:after {
      content: ">";
    }
  }
`;

function MiddleCategory() {
  return (
    <MenuBlock>
      {middleCategory.map((item, index) => (
        <MiddleCategoryItem
          key={`middle-category-${index}`}
          title={item.title}
          link={item.link}
        />
      ))}
    </MenuBlock>
  );
}

interface MiddleCategoryItemProps {
  title: string;
  link: string;
}

function MiddleCategoryItem({ title, link }: MiddleCategoryItemProps) {
  return (
    <Item>
      <Link href={link}>{title}</Link>
    </Item>
  );
}

export default MiddleCategory;
