import * as S from "./style.js";

function Song() {
  const data = [
    {
      id:1,
      singer:'장기하와 얼굴들',
      title:'그러게 왜 그랬어',
      who:'후회하고 싶을 때'
    },
    {
      id:2,
      singer:'화해',
      title:'화해하자',
      who:'후회하고 싶을 때'
    },
    {
      id:3,
      singer:'화해',
      title:'화해하자',
      who:'후회하고 싶을 때'
    }
  ]
  return (
    <>
    <S.Mobile>
      <p>안녕하세요...<br/>
      혹시 노래가 나올 줄 알고 누르셨나요...?<br/>
      그렇다면 죄송합니다</p>
      <p>
        제가 지금 노래를 듣고 있는데요?<br/>
        너무 좋아서 노래 추천을 드리고 싶었습니다
      </p>
      <S.Recommend>
      <S.RecommendBox>
        <p>
        가수: 장기하와 얼굴들<br></br>
        제목: 그러게 왜 그랬어<br></br>
        기분: 후회하고 싶을 때<br/>
        </p>
      </S.RecommendBox>
      <S.RecommendBox>
        <p>
        저쩌구
        </p>
      </S.RecommendBox>
      </S.Recommend>
      </S.Mobile>
    </>

  )

}


export default Song;
