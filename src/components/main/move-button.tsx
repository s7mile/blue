import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Button = styled.button<{ $isPrev: boolean }>`
  position: absolute;
  ${(props) => (props.$isPrev ? "left: 0" : "right: 0")};
  bottom: 155px;
  width: 30px;
  background: none;
  border: 0;
  cursor: pointer;
`;

type ButtonProps = {
  setShowCategory: React.Dispatch<React.SetStateAction<string>>;
  showCategory: string;
};

export function PrevButton({ setShowCategory, showCategory }: ButtonProps) {
  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    setShowCategory("webtoon");
  };

  return (
    <Button $isPrev={true} onClick={buttonHandler}>
      <svg
        width="20"
        height="30"
        viewBox="0 0 20 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 27 2 15 14 3"
          stroke="#AAA"
          stroke-width="3"
          fill="transparent"
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </Button>
  );
}

export function NextButton({ setShowCategory, showCategory }: ButtonProps) {
  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    setShowCategory("comic");
  };

  return (
    <Button $isPrev={false} onClick={buttonHandler}>
      <svg
        width="20"
        height="30"
        viewBox="0 0 20 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m2 27 12-12L2 3"
          stroke="#AAA"
          stroke-width="3"
          fill="transparent"
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </Button>
  );
}
