import styled from "@emotion/styled";
import { useState } from "react";



export const PicBox = styled.div`
`

export const Title = styled.div`
  text-align: center;
  padding-bottom: 6%;
  font-size: 20px;
  padding-top: 2%;
  text-decoration: overline underline ;
  text-decoration-style: wavy;
  text-decoration-color: skyblue;
  text-underline-position: under;
`

export const ShareIconBox = styled.div`
  margin-left: 20px;
  margin-right: 2px;
  margin-top: 15%;
  display: flex;
  justify-content: space-around;
  
  
  & > div:last-child {
    padding-right: 0px;
  }
  
`

export const Icon = styled.div`
  display: inline-block;
  padding-right:50px;
  
`

export const ShareText = styled.p`
  font-size: 12px;
  display: inline-block;
  font-weight: bold;
`

export const ShareTextBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 6%;
  margin-right: 6%;
  & > p:first-of-type {
    margin-left: 10px;
  }

`

export const ShareBox = styled.div`
  margin-left: 12%;
  margin-right: 12%;
 
`