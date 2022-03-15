import { FC, Suspense, useCallback } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { LoginContainer } from "../container/index";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="" element={<LoginContainer />} />
    </Routes>
    
    
  );
};

export default MainRouter;
