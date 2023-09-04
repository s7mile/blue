import React from "react";
import styled from "styled-components";

import color from "../../utils/color";
import { subMenus } from "@/api";

const MenuBlock = styled.ul`
  position: absolute;
  right: 0;
  top: 20px;

  &::after {
    content: "";
    display: block;
    clear: both;
  }
`;

const Item = styled.li`
  float: left;
  height: inherit;
  padding: 0 15px;
  background-color: transparent;
  border-right: 1px solid ${color.gray[2]};

  &:first-child {
    padding-left: 66px;
  }

  &:last-child {
    padding-right: 0;
    border-right: 0;
  }
`;

const Link = styled.a<{ $color: string; $hover: string }>`
  display: block;
  position: relative;
  font-size: 15px;
  color: ${(props) => props.$color};
  background-color: ${color.white};

  ${(props) =>
    props.$hover.length > 0 ? "&:hover {color: " + props.$hover + "}" : ""};
`;

function SubMenu() {
  return (
    <MenuBlock>
      {subMenus.map((item, index) => (
        <SubMenuItem
          key={`sub-menu-item-${index}`}
          title={item.title}
          link={item.link}
          color={item.color}
          hover={item.hover}
        />
      ))}
    </MenuBlock>
  );
}

type SubMenuItemProps = {
  title: string;
  link: string;
  color: string;
  hover: string;
};

function SubMenuItem({ title, link, color, hover }: SubMenuItemProps) {
  return (
    <Item>
      <Link href={link} $color={color} $hover={hover}>
        {title}
      </Link>
    </Item>
  );
}

export default SubMenu;
