import styled from "@emotion/styled";

export const Box = styled.div`
  input {
    width: 200px;
    height: 40px;
    font-size: 15px;
    margin: 0 0 40px 0;
    padding-left: 5px;
    border: 1.5px solid ;
    box-shadow: 1px 2px 4px 0.2px gray;
  }
`;



export const SpeechBubble = styled.div`
  button {
    position: relative;
    width: 180px;
    height: 40px;
    font-size: 15px;

    background: #ffffff;

    border-radius: 15px;

    border: solid 1.5px;
    box-shadow: 1px 2px 2px 0.2px gray;

    &:hover{
      background-color: red;
    }
  }
  
  button:after {
    left: 99.5%;
    top: 30.8%;
    border: solid;
    content: "";

    position: absolute;
    border-color: rgba(255, 255, 255, 0);
    border-left-color: #fff;

    border-width: 6px;
    
  }
  
  button:before {
    left: 100.3%;
    top: 27.98%;
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
    margin: 40px 0 0 90px;

    width: 110px;
    height: 60px;
    font-size: 15px;

    background: #ffffff;

    border-radius: 15px;
    border: solid 1.5px;

    box-shadow: 1px 2px 2px 0.2px gray;
  }
  
  button:after {
    left: -10.5%;
    top: 37.8%;
    border: solid;
    content: "";

    position: absolute;
    border-color: rgba(0, 255, 255, 0);
    border-right-color: #fff;

    border-width: 6px;
  }
  
  button:before {
    left: -14.9%;
    top: 35.64%;
    border: solid;
    content: "";

    position: absolute;
    border-color: rgba(0, 0, 0, 0);
    border-right-color: #000;

    border-width: 7.5px;
  }
`;

export const Title = styled.div`
`;

export const Background = styled.div`
  top: 100px;
  position: relative;

`;

export const FullBackground = styled.div`
  position: absolute;
  top:20%;
  bottom: 20%;
  right: 50%;
  padding-right:30px;
  padding-left:30px;
  padding-bottom:200px;
  transform: translateX(50%);
`;


export const LoginBox = styled.div`
  input {
  }
`;


export const GoImage = styled.div`
  img{
    width: 200px;
    left: -90px;
    position: absolute;
    bottom: -116px;
  }
`;

export const CatImage = styled.div`
  img{
    width: 120px;
    position: absolute;
    top: 140px;
    left: 180px;
  }
`