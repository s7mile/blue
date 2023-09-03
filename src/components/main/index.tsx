import React, { useState, useEffect, useMemo, createContext } from "react";
import styled from "styled-components";

import Notice from "./notice";
import MiddleCategory from "./middle-category";
import CategoryInfo from "./category-info";

export const UserContext = createContext({
  setLoggedIn: () => {},
  setLoading: () => {},
});

const MainWrap = styled.main`
  width: 1200px;
  margin: 0 auto;
`;

const InputText = styled.input`
  width: 300px;
  height: 40px;
  border: 0;
  line-height: 40px;
  background: none;
  border: 0;

  &:focus,
  &:active {
    border: 0;
    border-shadow: 0;
    outline: 0;
  }
`;

function Main() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const value = useMemo(
    () => ({ setLoggedIn, setLoading }),
    [setLoggedIn, setLoading]
  );

  return (
    <MainWrap id="content">
      <Notice />
      <MiddleCategory />
      <CategoryInfo title="기다리면 무료" />
    </MainWrap>
  );
}

export default Main;
