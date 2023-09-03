import React from "react";
import styled from "styled-components";

import color from "../../utils/color";

const Wrap = styled.div`
  overflow: hidden;
  height: 246px;
`;

const Img = styled.img`
  height: 100%;
`;

type ThumbnailProps = {
  imgUrl: string;
  alt: string;
};

function Thumbnail({ imgUrl, alt }: ThumbnailProps) {
  return (
    <Wrap>
      <Img src={imgUrl} alt={alt} />
    </Wrap>
  );
}

export default Thumbnail;
