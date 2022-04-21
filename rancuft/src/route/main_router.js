import { FC, Suspense, useCallback } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import DrawContainer from "../container/Draw";
import { LoginContainer } from "../container/index";
import SongContainer from "../container/Song";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="" element={<LoginContainer />} />
      <Route path="/song" element={<SongContainer/>}/>
      <Route path="/draw" element={<DrawContainer/>}/>
    </Routes>
  );
};

export default MainRouter;
