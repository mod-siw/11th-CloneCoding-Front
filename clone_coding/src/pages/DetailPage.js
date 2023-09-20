import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

//components
import TopBar from "../components/TopBar";
import MannerTemp from "../components/MannerTemp";
import ImgCarousel from "../components/ImgCarousel";

//data
import { data } from "../_mock/mock_data";

import cover1 from "../images/cover1.png";
import cover2 from "../images/cover2.jpg";
import cover3 from "../images/cover3.jpg";

const DetailPage = () => {
  const navigate = useNavigate();
  const { post_id } = useParams();
  const sample = [cover1, cover2, cover3];

  return (
    <Container>
      <TopBar />
      <div style={{ width: "729px", margin: "0 auto" }}>
        <ImgCarousel cover={data[post_id - 1].cover} />
      </div>
      <InfoDiv>
        <UserInfo>
          <UserImg src={data[post_id - 1].profile} />
          <div style={{ marginLeft: "8px" }}>
            <UserName>{data[post_id - 1].username}</UserName>
            <UserPlace>{data[post_id - 1].place}</UserPlace>
          </div>
        </UserInfo>
        <MannerTemp tempnum={data[post_id - 1].temp} />
      </InfoDiv>
      <ContentDiv>
        <Title>{data[post_id - 1].title}</Title>
        <div style={{ marginTop: "4px", display: "flex" }}>
          <GrayText>기타 중고물품</GrayText>
          {" ∙ "}
          <GrayText>2일 전</GrayText>
        </div>
        <Price>{data[post_id - 1].price}원</Price>
        <Content>{data[post_id - 1].content}</Content>
        <GrayText>
          <GrayText>관심 {data[post_id - 1].attention}</GrayText>
          {" ∙ "}
          <GrayText>채팅 {data[post_id - 1].chatting}</GrayText>
          {" ∙ "}
          <GrayText>조회 976</GrayText>
        </GrayText>
      </ContentDiv>
    </Container>
  );
};

export default DetailPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 60px;
`;

const Font = styled.div`
  color: #fff;
  font-family: "Pretendard-Regular";
  font-style: normal;
  line-height: 100%; /* 15px */
  letter-spacing: -0.3px;
`;

// 사용자 정보

const InfoDiv = styled.div`
  width: 677px;
  margin: 0px auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 25px;
  padding-bottom: 23px;
  position: relative;
  text-decoration: none;
  border-bottom: 1px solid rgb(233, 236, 239);
`;

const UserInfo = styled.section`
  display: flex;
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

const UserName = styled.div`
  font-size: 15px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.6px;
  color: #212529;
`;

const UserPlace = styled.div`
  font-size: 13px;
  line-height: 1.46;
  letter-spacing: -0.6px;
  color: #212529;
`;

// 글 관련

const ContentDiv = styled.section`
  width: 677px;
  padding: 15px 0px;
  margin: 0px auto;
  border-bottom: 1px solid rgb(233, 236, 239);
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.02px;
  color: #212529;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 2px;
  line-height: 1.5;
  font-weight: normal;
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  margin-top: 4px;
  line-height: 1.76;
  letter-spacing: -0.6px;
`;

const Content = styled.div`
  font-size: 17px;
  line-height: 1.6;
  letter-spacing: -0.6px;
  word-break: break-all;
  margin: 16px 0px;
`;

const GrayText = styled.div`
  display: flex;
  font-size: 13px;
  line-height: 1.46;
  letter-spacing: -0.6px;
  color: rgb(134, 142, 150);
  font-size: 12px;
  margin-right: 4px;
`;
