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


export const DrawBox = styled.div`

  background-color: white;
  width: 400;
  height: 350;
  
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`

export const GiftButton = styled.button`
   font-size: 14px;
   margin-top: 40px;
   margin-left: 34%;
   padding: 5px 25px 5px 25px;
   background-color: white;
   font-weight: bold;
   box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
 :hover{
   background-color: black;
   color:white;
 }

`

export const MoveButton = styled.div`
  display: flex;
  justify-content: space-around;
 button{
  font-size: 14px;
   margin: 0px;
   padding: 5px 25px 5px 25px;
   background-color: white;
   font-weight: bold;
   box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  margin-bottom: 6%;
 }
 button:hover{
   background-color: black;
   color:white;
 }
 .gift_get{
  padding-left: 50px;
  padding-right: 50px;
  
 }
`
