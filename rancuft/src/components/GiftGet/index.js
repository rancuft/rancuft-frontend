import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import * as S from "./style.js";
import * as C from "../../common/common.js"
import * as G from "../../common/gift_common.js"

function GiftGet() {
  const gift = "https://알고리즘.com/files/2018/06/21/c7eff37d7af8b4779f03229b2754de45";
  const title = "행복하세여. 레알루진자루 예스."
  return(
    <>
    <C.FullBackground>
      <C.Background>
        <G.MoveButton>
          <button className="gift_get">
            선물 받을래
          </button>
        </G.MoveButton>
        <G.MoveButton>
          <button className="like_gift">
            내가 좋아하는 선물들
          </button>
          
        </G.MoveButton>
        <S.PicBox>
          <S.Title>
            {title}
          </S.Title>
          <G.DrawBox>
            <img src= {gift} width="400" height={350}></img>
          </G.DrawBox>
        </S.PicBox>
        <S.ShareBox>
            <img src="" className="save"></img>
            <img src="" className="twitter"></img>
            <img src="" className="insta"></img>
            <img src="" className="kakao"></img>
        
        </S.ShareBox>
        <G.GiftButton>선물 하러 가기</G.GiftButton>

      </C.Background>
    </C.FullBackground>
    </>
  );

}

export default GiftGet;