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
    width: 400px;
    height: 350px;
    background-color: black;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }

`

export const Point = styled.div`

`