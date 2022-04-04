import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import * as S from "./style.js";

function Login() {
  // const [inputNickname, setInputNickname] = useState('')
  // const [inputPassword, setInputPassword] = useState('')

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  // const handleInputId = (e) => {
  //     setInputId(e.target.value)
  // }

  // const handleInputPw = (e) => {
  //     setInputPw(e.target.value)
  // }

  // 버튼 클릭 이벤트
  const onClickLogin = () => {
    console.log("click login");
  };
  const onClickGfitGive = () => {
    console.log("click login");
  };

  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });

  return (
    <>
      {isMobile && (
        <S.FullBackground>
        <S.Background>
          <S.LoginBox>
            <S.Box>
              <input
                type="text"
                name="input_nickname"
                placeholder="닉네임을 입력해 줄래요?"
              ></input>
            </S.Box>
            <S.Box>
              <input
                type="password"
                name="input_password"
                placeholder="비밀번호를 입력해 줄래요?"
              ></input>
            </S.Box>
            <S.SpeechBubble>
              <button type="button" onClick={onClickLogin}>
                로그인 할래요?
              </button>
            </S.SpeechBubble>
          </S.LoginBox>
          <S.GiftGetSpeechBubble>
            <button type="button" onClick={onClickGfitGive}>
              선물 <br></br>받을래요?
            </button>
          </S.GiftGetSpeechBubble>
         
        </S.Background>
        
        <S.Image>
         <img alt="귀여운 고슴도치 그림입니다" src="img/goImage.png"/>
        </S.Image>
       </S.FullBackground>
      )}
      {isPc && <h2>TEST</h2>}
    </>
  );
}

export default Login;
