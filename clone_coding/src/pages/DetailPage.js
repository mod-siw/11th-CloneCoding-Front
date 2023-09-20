import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

//components
import TopBar from "../components/TopBar";

//images
import profile from "../images/profile_img/profile1.png";
import cover from "../images/cover1.png";

//data
import { data } from "../_mock/mock_data";

const DetailPage = () => {
  const navigate = useNavigate();
  const { post_id } = useParams();
  console.log(post_id, data[post_id]);

  return (
    <Container>
      <TopBar />
      <Cover src={data[post_id - 1].cover} />
      <InfoDiv>
        <UserInfo>
          <UserImg src={data[post_id - 1].profile} />
          <div style={{ marginLeft: "8px" }}>
            <UserName>{data[post_id - 1].username}</UserName>
            <UserPlace>{data[post_id - 1].place}</UserPlace>
          </div>
        </UserInfo>
        <MannerTemp>
          <TempNum>{data[post_id - 1].temp}</TempNum>
          <TempBar>
            <TempColorbar></TempColorbar>
          </TempBar>
          <TempIcon />
          <div>매너온도</div>
        </MannerTemp>
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

const Cover = styled.img`
  position: relative;
  width: 677px;
  height: 500px;
  margin: 35px auto 0px;
  border-radius: 8px;
  overflow: hidden;
  object-fit: cover;
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

// 매너온도

const MannerTemp = styled.section``;

const TempNum = styled.div``;

const TempBar = styled.div``;

const TempColorbar = styled.div``;

const TempIcon = styled.div``;

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
