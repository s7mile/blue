import React from "react";
import styled from "styled-components";

import color from "../../utils/color";
import { mainMenus } from "@/api";

const MenuBlock = styled.ul`
  position: absolute;
  top: 16px;
  left: 13px;

  &::after {
    content: "";
    display: block;
    clear: both;
  }
`;

const Item = styled.li`
  float: left;
  height: inherit;
  background-color: transparent;
  cursor: pointer;

  &:first-child {
    padding-left: 66px;
  }
`;

const Link = styled.a<{ $color: string; $hover: string }>`
  display: block;
  position: relative;
  padding: 0 15px;
  font-size: 19px;
  font-weight: 400;
  color: ${(props) => props.$color};
  background-color: ${color.white};

  ${(props) =>
    props.$hover.length > 0 ? "&:hover {color: " + props.$hover + "}" : ""};
`;

function TopMenu() {
  return (
    <MenuBlock>
      {mainMenus.map((item, index) => (
        <TopMenuItem
          key={`top-menu-item-${index}`}
          title={item.title}
          link={item.link}
          color={item.color}
          hover={item.hover}
        />
      ))}
    </MenuBlock>
  );
}

type TopMenuItemProps = {
  title: string;
  link: string;
  color: string;
  hover: string;
};

function TopMenuItem({ title, link, color, hover }: TopMenuItemProps) {
  return (
    <Item>
      <Link href={link} $color={color} $hover={hover}>
        {title}
      </Link>
    </Item>
  );
}

export default TopMenu;
