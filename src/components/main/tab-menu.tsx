import React from "react";
import styled from "styled-components";

import color from "../../utils/color";

const TabMenuUl = styled.ul`
  display: inline-block;
  margin-left: 20px;
`;

const TabMenuLi = styled.li`
  float: left;
  padding-right: 20px;
  margin-right: 20px;
  border-right: 1px solid ${color.gray[2]};

  &:last-child {
    border: 0;
  }
`;

const Menu = styled.button<{ color?: string }>`
  background: none;
  border: 0;
  cursor: pointer;

  font-size: 18px;
  color: ${(props) => props.color};
`;

type TabMenuProps = {
  setShowCategory: React.Dispatch<React.SetStateAction<string>>;
  showCategory: string;
};

function TabMenu({ setShowCategory, showCategory }: TabMenuProps) {
  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    setShowCategory(button.name);
  };

  return (
    <TabMenuUl role="tablist">
      <TabMenuLi>
        <Menu
          onClick={buttonHandler}
          name="webtoon"
          role="tab"
          aria-controls="tabpanel01"
          color={showCategory === "webtoon" ? color.blue[0] : color.gray[0]}
        >
          웹툰
        </Menu>
      </TabMenuLi>
      <TabMenuLi>
        <Menu
          onClick={buttonHandler}
          name="comic"
          role="tab"
          aria-controls="tabpanel02"
          color={showCategory === "comic" ? color.green : color.gray[0]}
        >
          만화
        </Menu>
      </TabMenuLi>
    </TabMenuUl>
  );
}

export default TabMenu;
