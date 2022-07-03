import { FC, Suspense, useCallback } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import DrawContainer from "../container/Draw";
import { LoginContainer } from "../container/index";
import SongContainer from "../container/Song";
import GiftContainer from "../container/GiftGet"

const MainRouter = () => {
  return (
    <Routes>
      <Route path="" element={<LoginContainer />} />
      <Route path="/song" element={<SongContainer/>}/>
      <Route path="/draw" element={<DrawContainer/>}/>
      <Route path="/gift-get" element={<GiftContainer/>}/>
    </Routes>
  );
};

export default MainRouter;
