import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//components
import TopBar from "../components/TopBar";
import DetailContent from "../components/DetailContent";

//images
import cover from "../images/coverimg.png";

import cover1 from "../images/cover1.png";
import cover2 from "../images/cover1.png";
import cover3 from "../images/cover1.png";

const data = [
  {
    post_id: 1,
    cover: cover1,
    title: "먹태깡 팝니다",
    price: 1000,
    place: "진주시",
    attention: 11,
    chatting: 13,
  },
  {
    post_id: 2,
    cover: cover2,
    title: "불꽃남자의 농구공",
    price: 2000,
    place: "울산시",
    attention: 21,
    chatting: 17,
  },
  {
    post_id: 3,
    cover: cover3,
    title: "뭔가를 팝니다",
    price: 1500,
    place: "통영시",
    attention: 13,
    chatting: 16,
  },
  {
    post_id: 4,
    cover: cover3,
    title: "뭔가를 팔까해요",
    price: 1500,
    place: "통영시",
    attention: 13,
    chatting: 16,
  },
  {
    post_id: 5,
    cover: cover3,
    title: "무료나눔합니다",
    price: 1500,
    place: "제주시",
    attention: 13,
    chatting: 16,
  },
  {
    post_id: 6,
    cover: cover3,
    title: "이게 맞나 싶어요",
    price: 1500,
    place: "통영시",
    attention: 13,
    chatting: 16,
  },
  {
    post_id: 7,
    cover: cover3,
    title: "데이터 언제 다 쌓지",
    price: 1500,
    place: "통영시",
    attention: 13,
    chatting: 16,
  },
  {
    post_id: 8,
    cover: cover3,
    title: "뭔가를 팝니다",
    price: 1500,
    place: "통영시",
    attention: 13,
    chatting: 16,
  },
];

const MainPage = () => {
  const navigate = useNavigate();

  const [datalist, setDatalist] = useState(data);

  return (
    <>
      <TopBar />
      <Container>
        <Cover>
          <CoverContent>
            <Big>
              믿을 만한 <br /> 이웃 간 중고거래
            </Big>
            <Small>
              동네 주민들과 가깝고 따뜻한 거래를 <br /> 지금 경험해보세요.
            </Small>
            <CoverImg src={cover} />
          </CoverContent>
        </Cover>
        <Content>
          <Text>중고거래 인기매물</Text>
          <ArticleList>
            {datalist.map((item, index) => (
              <DetailContent key={index} item={item} />
            ))}
          </ArticleList>
        </Content>
      </Container>
    </>
  );
};

export default MainPage;

//전체 styled

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Font = styled.div`
  color: #fff;
  font-family: "Pretendard-Regular";
  font-style: normal;
  line-height: 100%; /* 15px */
  letter-spacing: -0.3px;
`;

const Cover = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff1aa;
  width: 100%;

  height: 315px;
  padding: 0 16px 0 16px;
`;

const CoverContent = styled.div`
  position: relative;
  height: 100%;
  box-sizing: border-box;

  padding-top: 50px;
  width: 768px;
  margin: 0 auto;
`;

const CoverImg = styled.img`
  position: absolute;
  display: flex;
  bottom: 0;
  right: 0;
  height: 315px;
  width: 416px;

  z-index: 5;
`;

const Big = styled.div`
  position: relative;
  z-index: 10;
  line-height: 1.5;
  font-size: 33px;
  letter-spacing: -0.32px;
  font-weight: 700;
`;

const Small = styled.div`
  position: relative;
  z-index: 10;
  line-height: 1.32;
  font-size: 18px;
  letter-spacing: -0.18px;
  margin-top: 16px;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 64px;
`;

const Text = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

const ArticleList = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  justify-content: center;
  margin: 40px auto;
`;
