import React, { useEffect, useState } from "react";
import styled from "styled-components";

import color from "../../utils/color";
import { allMenus } from "@/api";

const Nav = styled.nav`
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
`;

const MenuBlock = styled.ul`
  z-index: 999;
  position: relative;
  width: 510px;
  height: 400px;
  margin-top: 50px;
  background: ${color.white};
  border: 2px solid ${color.blue[1]};
`;

const Item = styled.li`
  float: left;
  height: 100%;
  padding: 30px 50px 30px;
  background-color: transparent;
  border-right: 1px solid ${color.gray[2]};

  &:last-child {
    border: 0;
  }
`;

const Link = styled.a<{ color: string }>`
  display: block;
  position: relative;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 19px;
  color: ${(props) => props.color};
`;

const SubItem = styled.li`
  margin-bottom: 15px;
`;

const SubLink = styled.a`
  display: block;
  position: relative;
  font-size: 14px;
  color: ${color.gray[3]};
`;

const Button = styled.button<{ img: string; $showCategory: boolean }>`
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${(props) => props.img});
  background-size: 54px;
  background-position: center center;
  border: 2px solid ${color.white};
  border-bottom: 0;
  width: 52px;
  height: 52px;
  cursor: pointer;
  text-indent: -999em;
  font-size: 1px;

  ${(props) =>
    props.$showCategory &&
    `
  background-color: ${color.white};
  border: 2px solid ${color.blue[1]};
  border-bottom: 0;
  `}
`;

function HamburgerMenu() {
  const [showCategory, setShowCategory] = useState<boolean>(false);

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowCategory(!showCategory);
  };

  return (
    <Nav id="gnb">
      <Button
        img="/images/ico-gnb-menu.png"
        onClick={buttonHandler}
        $showCategory={showCategory}
      >
        메뉴 열기
      </Button>
      {showCategory && (
        <MenuBlock>
          {allMenus.map((item, index) => (
            <HamburgerMenuItem
              key={`hamburger-menu-item-${index}`}
              item={item}
            />
          ))}
        </MenuBlock>
      )}
    </Nav>
  );
}

type HamburgerMenuItemProps = {
  item: any;
};

function HamburgerMenuItem({ item }: HamburgerMenuItemProps) {
  return (
    <Item>
      <Link href={item?.url} color={item.color}>
        {item?.title}
      </Link>
      <ul>
        {item.subCategory.map((subItem) => (
          <SubItem>
            <SubLink href={subItem?.link}>{subItem?.title}</SubLink>
          </SubItem>
        ))}
      </ul>
    </Item>
  );
}

export default HamburgerMenu;
