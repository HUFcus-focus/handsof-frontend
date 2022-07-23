import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

const Main = lazy(() => import("pages/Main"));
const Translate = lazy(() => import("pages/Translate"));
const Log = lazy(() => import("pages/Log"));

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<></>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/translate" element={<Translate />} />
            <Route path="/log" element={<Log />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
