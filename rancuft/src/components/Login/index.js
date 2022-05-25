import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import * as S from "./style.js";
import { Link } from "react-router-dom";
import Http from '../../api/index.js'

function Login() {
  const [inputNickname, setInputNickname] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputName = (e) => {
      setInputNickname(e.target.value)
  }

  const handleInputPw = (e) => {
      console.log(e.target.value)
      setInputPassword(e.target.value)
  }



  const onLoginSubmit = () => {
     Http.post('/user', 
     {
       body: JSON.stringify({
         name: inputNickname,
         password: inputPassword,
       }),
     }).then(res => res.json())
     .then(res =>{
       if(res.ACCESS_TOKEN) {
         localStorage.setItem('login-token', res.ACCESS_TOKEN);
       }
     })
  };


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
      <S.FullBackground>
        <S.CatImage>
          <img alt="귀여운 고양이 그림입니다" src="img/cat.png"/>
        </S.CatImage>
        <S.Title>
          <S.TCute>
            귀요미
          </S.TCute>
          <S.TRandomGift>
            랜덤 선물
          </S.TRandomGift>
        </S.Title>
        <S.Background>
          <S.LoginBox>
            <S.Box>
              <input
                type="text"
                //value={Email}
                onChange={handleInputName}
                name="input_nickname"
                placeholder="닉네임을 입력해 줄래요?"
              ></input>
            </S.Box>
            <S.Box>
              <input
                type="password"
                //value={}
                onChange={handleInputPw}
                name="input_password"
                placeholder="비밀번호를 입력해 줄래요?"
              ></input>
            </S.Box>
            <S.SpeechBubble>
              <button type="button" onClick={onLoginSubmit}>
                로그인 할래요?
              </button>
            </S.SpeechBubble>
          </S.LoginBox>
          <S.TigerImage>
            <img alt = "귀여운 호랑이 그립입니다" src="img/tiger.png"/>
          </S.TigerImage>
          <Link to = "/gift-get">
          <S.GiftGetSpeechBubble>
            <button type="button" onClick={onClickGfitGive}>
              선물 <br></br>받을래요?
            </button>
            
          </S.GiftGetSpeechBubble>
          </Link>
          <S.GoImage>
          <img alt="귀여운 고슴도치 그림입니다" src="img/goImage.png"/>
        </S.GoImage>
         
        </S.Background>
        <S.Music>
          <a href="/song">
          <img alt="음표 사진 svg입니다" src="img/bi_music-note-list.svg"></img>
          </a>
        </S.Music>
       </S.FullBackground>
       
    </>
  );
}

export default Login;
