import React from "react";
import styled from "styled-components";

import color from "../../utils/color";

const SearchForm = styled.form`
  position: absolute;
  right: 0;
  top: 33px;
  width: 380px;
  height: 42px;
  padding-left: 28px;
  border: 1px solid ${(props) => props.color};
  border-radius: 40px;
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

const InputButton = styled.button`
  position: absolute;
  right: 17px;
  top: 7px;
  background: url(/images/ico-top-search.png) #fff;
  background-size: 100%;
  width: 24px;
  height: 24px;
  border: 0;
`;
function Search() {
  return (
    <SearchForm action="/search" method="get" color={color.blue[1]}>
      <InputText
        type="text"
        name="searchKey"
        id="searchKey"
        placeholder="제목/작가로 검색"
        title="제목 또는 작가로 검색"
      />
      <InputButton type="submit" value="찾기" />
    </SearchForm>
  );
}

export default Search;
