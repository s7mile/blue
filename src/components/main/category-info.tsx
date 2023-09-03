import React, { useState } from "react";
import styled from "styled-components";

import color from "../../utils/color";
import {
  waitFreeComicList,
  waitFreeWebtoonList,
  categoryList,
  authorList,
} from "@/api";

import Thumbnail from "./thumbnail";
import TabMenu from "./tab-menu";
import { PrevButton, NextButton } from "./move-button";

const Wrap = styled.section`
  position: relative;
`;

const Title = styled.h2`
  display: inline-block;
  padding: 0 30px;
  font-size: 30px;
  font-weight: 500;
  color: ${color.gray[3]};
`;

const MenuBlock = styled.ul`
  display: flex;
  table-layout: fixed;
  width: 1200px;
  margin: 40px auto 0;
  padding: 0 30px;
  box-sizing: border-box;
`;

const Item = styled.li`
  position: relative;
  display: table-cell;
  width: 164px;
  margin-right: 31px;
  box-sizing: border-box;

  &:last-child {
    margin-right: 0;
  }
`;

const BookTitle = styled.a`
  color: ${color.gray[3]};
`;

const InfoWrap = styled.div`
  margin-top: 15px;
`;

const AuthorLink = styled.a`
  color: ${color.gray[1]};
  font-size: 14px;

  &:after {
    content: " / ";
  }

  &:last-child:after {
    content: "";
  }
`;

const CategoryLink = styled.a`
  color: ${color.gray[1]};
  font-size: 14px;
`;

const BookInfo = styled.ul`
  display: flex;
  padding-top: 5px;

  li {
    padding-right: 10px;
    margin-right: 10px;
    border-right: 1px solid #ddd;

    &:last-child {
      padding-right: 0;
      border: 0;
    }
  }
`;

const Label = styled.div`
  display: flex;
  z-index: 1;
  position: absolute;
  top: 5px;
  left: -5px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
`;

const LabelItem = styled.p`
  padding: 0 7px;
  margin-right: 5px;
  background: ${color.blue[1]};
  color: ${color.white};
`;

const ListUl = styled.ul<{ show: string; name: string }>`
  display: ${(props) => (props.show == props.name ? "block" : "none")};
`;

type CategoryInfoProps = {
  title: string;
};

function CategoryInfo({ title }: CategoryInfoProps) {
  const [showCategory, setShowCategory] = useState<string>("webtoon");

  return (
    <Wrap>
      <Title>{title}</Title>
      <TabMenu setShowCategory={setShowCategory} showCategory={showCategory} />
      <div id="tabpanel01" role="tabpanel" aria-labelledby="tab-01">
        <ListUl show={showCategory} name="webtoon">
          <MenuBlock>
            {waitFreeWebtoonList.map((item, index) => (
              <CategoryItem
                key={`category01-${index}`}
                title={item.title}
                link={item.link}
                imgUrl={item.imgUrl}
                category={item.category}
                authors={item.authors}
                free={item.free}
                sale={item.sale}
              />
            ))}
          </MenuBlock>
        </ListUl>
      </div>
      <div id="tabpanel02" role="tabpanel" aria-labelledby="tab-02">
        <ListUl show={showCategory} name="comic">
          <MenuBlock>
            {waitFreeComicList.map((item, index) => (
              <CategoryItem
                key={`category02-${index}`}
                title={item.title}
                link={item.link}
                imgUrl={item.imgUrl}
                category={item.category}
                authors={item.authors}
                free={item.free}
                sale={item.sale}
              />
            ))}
          </MenuBlock>
        </ListUl>
      </div>

      <PrevButton
        setShowCategory={setShowCategory}
        showCategory={showCategory}
      />
      <NextButton
        setShowCategory={setShowCategory}
        showCategory={showCategory}
      />
    </Wrap>
  );
}

type CategoryItemProps = {
  title: string;
  link: string;
  imgUrl: string;
  category: string;
  authors: Array<number>;
  free: number;
  sale: number;
};

function CategoryItem({
  title,
  link,
  imgUrl,
  category,
  authors,
  free,
  sale,
}: CategoryItemProps) {
  const categoryInfo = categoryList[category];
  return (
    <Item>
      <Thumbnail imgUrl={imgUrl} alt={title} />
      <InfoWrap>
        <BookTitle href={link}>{title}</BookTitle>
        <BookInfo>
          <li>
            <CategoryLink href={categoryInfo.link}>
              {categoryInfo.title}
            </CategoryLink>
          </li>
          <li>
            {authors.map((author, index) => (
              <AuthorLink href={"/author?id=" + author} key={`author-${index}`}>
                {authorList[author]}
              </AuthorLink>
            ))}
          </li>
        </BookInfo>
        <Label>
          <LabelItem>{free}화 무료</LabelItem>
          {sale > 0 && <LabelItem>{sale}%</LabelItem>}
        </Label>
      </InfoWrap>
    </Item>
  );
}

export default CategoryInfo;
