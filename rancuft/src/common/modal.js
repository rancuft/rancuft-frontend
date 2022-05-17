import styled from "@emotion/styled";
import React from "react";
import Modal from "react-modal";

export const ModalStyle = {
  content: {
    position: "absolute",
    margin: "auto",
    fontSize:"14.5px",
    width: "250px",
    height: "100px",
    background: "#3E3E3E",
  },
};

export const TsModalStyle = {
  content: {
    position: "absolute",
    margin: "auto",
    width: "300px",
    fontSize:"14.5px",
    height: "100px",
    background: "#3E3E3E",
  },
};

export const Span = styled.span`
  color: white;
  padding: 10px;
  padding-top: 0px;
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const ModalButton = styled.span`
  button {
    font-size: 14px;
    margin: 0px;
    margin-top: 10px;
    padding: 5px 10px 5px 10px;
    background-color: white;
    border: none;
    font-weight: bold;
    margin-bottom: 0%;
  }
  button:hover {
    background-color: black;
    color: white;
  }
`;

export const CenterAlignment = styled.div`
  display: flex;
  justify-content: space-around;
`;
