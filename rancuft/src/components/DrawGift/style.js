import styled from "@emotion/styled";

export const Background = styled.div`
  top: 30px;
  position: relative;
`;

export const FullBackground = styled.div`
  position: absolute;
  top:15%;
  bottom: 20%;
  right: 50%;
  padding-right:30px;
  padding-left:30px;
  padding-bottom:200px;
  transform: translateX(50%);
`;


export const DrawBox = styled.div`
  canvas{
    background-color: white;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }

`
export const Pan = styled.div`
  float: right;
  img{
    cursor: pointer;
    margin-left: 5px;
    margin-bottom: 10px;
    width: 30px;
  }
`

export const Point = styled.div`
float: right;
  input{
    cursor: pointer; // 올렸을시 손가락으로 변경
    border-color: red;
    margin-top: 15px;
  }
`

export const Title = styled.div`
  margin-top: 35px;
  margin-left: 30px;
  input{
    padding: 10px 20px 10px 20px;
    width: 300px;
    font-size: 15px;

    border: solid 1.5px gray;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
`