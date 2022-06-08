import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import * as S from "./style.js";
import * as C from "../../common/common.js";
import * as G from "../../common/gift_common.js";
import { Link, useNavigate } from "react-router-dom";

import Http from "../../api/index.js";

function GiftGet() {
  // var title= "dd";
  // var id;
  // var gift;
  const [title, setTitle] = useState("");
  const [id, setGiftId] = useState("");
  const [gift, setGift] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    Http.get("/gift")
      .then((res) => {
        setTitle(res.data.comment);
        setGiftId(res.data.id);
        setGift(res.data.imageUrl);
        console.log(title);
      })
      .catch(function (error) {
        var errorStatus = error.response.status;
        if (errorStatus == "404") {
          alert("미안! 아직 선물이 없어요.");
        }
      });
  }, []);

  return (
    <>
      <C.FullBackground>
        <C.Background>
          <G.MoveButton>
            <button className="gift_get" onClick={()=>window.location.reload()}>선물 받을래</button>
        
            
            <button className="like_gift">내가 좋아하는 선물들</button>
          </G.MoveButton>
          <S.PicBox>
            <S.Title>{title}</S.Title>
            <G.DrawBox>
              <img src={gift} width="400" height={350}></img>
            </G.DrawBox>
          </S.PicBox>
          <S.ShareBox>
            <S.ShareIconBox>
              <S.Icon>
                <img src="img/kakaotalk.svg" className="kakao" width={45}></img>
              </S.Icon>
              <S.Icon>
                <img src="img/twitter.svg" className="twitter" width={50}></img>
              </S.Icon>

              <S.Icon>
                <img src="img/insta.svg" className="insta" width={45}></img>
              </S.Icon>
            </S.ShareIconBox>
          </S.ShareBox>
          <S.ShareTextBox>
            <S.ShareText>카카오톡에 공유</S.ShareText>
            <S.ShareText>트위터에 공유</S.ShareText>
            <S.ShareText>인스타에 공유</S.ShareText>
          </S.ShareTextBox>

          <Link to="/draw">
            <G.GiftButton>선물 하러 가기</G.GiftButton>
          </Link>
        </C.Background>
      </C.FullBackground>
    </>
  );
}

export default GiftGet;
