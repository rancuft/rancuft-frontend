import styled from "@emotion/styled";

export const Box = styled.div`
  input {
    width: 136px;
    height: 25px;
    font-size: 10px;
    margin: 0 0 40px 0;
    padding-left: 5px;
    border: solid 1.5px;
    box-shadow: 1px 2px 4px 0.2px gray;
  }
`;

export const SpeechBubble = styled.div`
  button {
    position: relative;
    width: 122px;
    height: 25px;
    font-size: 10px;

    background: #ffffff;

    border-radius: 15px;

    box-shadow: 1px 2px 2px 0.2px gray;
  }
  ,
  button:after {
    left: 98.5%;
    top: 23.8%;
    border: solid;
    content: "";

    position: absolute;
    border-color: rgba(255, 255, 255, 0);
    border-left-color: #fff;

    border-width: 6px;
  }
  ,
  button:before {
    left: 99.3%;
    top: 15%;
    border: solid;
    content: "";

    position: absolute;
    border-color: rgba(0, 0, 0, 0);
    border-left-color: #000;

    border-width: 7.5px;
  }
`;

export const GiftGetSpeechBubble = styled.div`
  button {
    position: relative;
    margin: 40px 0 0 70px;

    width: 80px;
    height: 60px;
    font-size: 10px;

    background: #ffffff;

    border-radius: 15px;

    box-shadow: 1px 2px 2px 0.2px gray;
  }
  ,
  button:after {
    left: -14.5%;
    top: 37.8%;
    border: solid;
    content: "";

    position: absolute;
    border-color: rgba(0, 255, 255, 0);
    border-right-color: #fff;

    border-width: 6px;
  }
  ,
  button:before {
    left: -19.9%;
    top: 35.55%;
    border: solid;
    content: "";

    position: absolute;
    border-color: rgba(0, 0, 0, 0);
    border-right-color: #000;

    border-width: 7.5px;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
`;

export const LoginBox = styled.div`
  input {
  }
`;
