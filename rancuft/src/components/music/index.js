import * as S from "./style.js";

function Song() {
  return (
    <>
    <S.Mobile>
      <text>안녕하세요...<br/>
      혹시 노래가 나올 줄 알고 누르셨나요...?<br/>
      그렇다면 죄송합니다</text>
      <br/><br/>
      <text>
        제가 지금 노래를 듣고 있는데요?<br/>
        너무 좋아서 노래 추천을 드리고 싶었습니다
      </text>
      <S.Recommend>
      <S.RecommendBox>
        <text>
        가수: 장기하와 얼굴들<br></br>
        제목: 그러게 왜 그랬어<br></br>
        기분: 후회하고 싶을 때<br/>
        </text>
      </S.RecommendBox>
      <S.RecommendBox>
        <text>
        저쩌구
        </text>
      </S.RecommendBox>
      </S.Recommend>
      </S.Mobile>
    </>

  )

}


export default Song;
