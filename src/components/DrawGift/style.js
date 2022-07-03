import styled from "@emotion/styled";
import { useState } from "react";

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

export const ColorSet = styled.div`
  display: inline-block;
 margin: 10px;
 width: 35px;
 height: 35px;
 border-radius: 50%;
 border-color: black;
`

export const DrawBox = styled.div`

    background-color: white;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);


`
export const Pan = styled.div`
  float: right;
  img{
    cursor: pointer;
    width: 30px;
  }
`
export const Point = styled.div`
  padding-top: 15px;
  input{
    cursor: pointer; // 올z렸을시 손가락으로 변경
    border-color: red;
  }
`

export const PanSetBox = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 58%;

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

export const GiftButton = styled.div`
 button{
   font-size: 14px;
   margin-top: 40px;
   margin-left: 37%;
   padding: 5px 25px 5px 25px;
   background-color: white;
   font-weight: bold;
   box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
 }
 button:hover{
   background-color: black;
   color:white;
 }
`

export const MoveButton = styled.div`
 button{
   
   padding: 5px 25px 5px 25px;
   background-color: white;
   font-weight: bold;
   box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
 }
 button:hover{
   background-color: black;
   color:white;
 }
 .gift_get{ 
  float: left;

  padding-left: 50px;
  padding-right: 50px;
  

 }
 .like_gift{
   margin-left: 10px;
 }
`

function Test1() {
  const [modal, setModal] = useState('');
}