import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

//images
import icon1 from "../images/mannertemp/bluesmile.png";
import icon2 from "../images/mannertemp/greensmile.png"; //#329E46

const MannerTemp = ({ tempnum }) => {
  console.log(tempnum);
  return (
    <Box>
      <Container>
        <div style={{ display: "column" }}>
          <TempNum style={{ color: tempColor }}>{tempnum}ºC</TempNum>
          <TempBar>
            <TempColorbar
              style={{ width: `${tempnum}%`, backgroundColor: tempColor }}
            />
          </TempBar>
        </div>
        <TempIcon src={tempIconSrc} />
      </Container>
      <Text style={{ textAlign: "right" }}> 매너온도</Text>
    </Box>
  );
};

export default MannerTemp;

// 매너온도

const Box = styled.section`
  width: 100px;
  padding-right: 36px;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const TempNum = styled.div`
  color: #1561a9;
  text-align: right;
  font-weight: 900;
`;

const TempBar = styled.div`
  width: 100px;
  background-color: #e9ecef;
  height: 4px;
  border-radius: 100px;
  position: relative;
  margin-top: 4px;

  cursor: pointer;
`;

const TempColorbar = styled.div`
  background-color: #1561a9;
  width: 33%;
  height: 4px;
  border-radius: 100px;
`;

const TempIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 7px;
`;

const Text = styled.div`
  position: absolute;
  right: 0;
  font-size: 12px;
  color: #929ea9;
  margin-top: 7px;
`;
