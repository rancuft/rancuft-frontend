import styled from "@emotion/styled";
import { useState } from "react";



export const PicBox = styled.div`
`

export const Title = styled.div`
  text-align: center;
  padding-bottom: 6%;
  font-size: 20px;
  padding-top: 6%;
  text-decoration: overline underline ;
  text-decoration-style: wavy;
  text-decoration-color: skyblue;
  text-underline-position: under;
`

export const ShareIconBox = styled.div`
  margin-left: 15px;
  margin-right: 2px;
  margin-top: 15%;
  
  & > div:last-child {
    padding-right: 0px;
  }
  
`

export const Icon = styled.div`
  display: inline-block;
  padding-right:50px;
  
`

export const ShareText = styled.p`
  font-size: 2px;
  display: inline-block;
  font-weight: bold;
  margin-left: 11.5%;
`

export const ShareBox = styled.div`
  margin-left: 16%;
  margin-right: 16%;
  & > p:first-of-type {
    margin-left: 0%;
  }
`