import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
const MainRouter = React.lazy(() => import("./main_router"));

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading..</div>}>
        <MainRouter />
      </Suspense>
    </BrowserRouter>
  );
};

export default RootRouter;