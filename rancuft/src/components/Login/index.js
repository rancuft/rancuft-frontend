import { useState } from "react";
import * as S from "./style.js"

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
        console.log('click login')
    }

    return(
        <S.Background>
          <S.LoginBox>
            <S.Box>
                <input type="text" name="input_nickname" placeholder="닉네임을 입력해 줄래요?"></input>
            </S.Box>
            <S.Box>
                <input type="password" name="input_password" placeholder="비밀번호를 입력해 줄래요?"></input>
            </S.Box>
            <S.SpeechBubble>
                <button type="button" onClick={onClickLogin}>로그인 할래요?</button>
            </S.SpeechBubble>
          </S.LoginBox>
        </S.Background>
    )
}

export default Login;