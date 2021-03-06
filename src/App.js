import { Profiler } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Durations from "./components/durations";
import Nav from "./components/nav";
import useDuration from "./hooks/useDuration";
import LoadingImages from "./pages/loading-images";
import LoadingImagesOpt from "./pages/loading-images-opt";
import { LongListBadPerf } from "./pages/LongListBadPerf";
import { LongListGoodPerf } from "./pages/LongListGoodPerf";
import UnlessRenderingOpt from "./pages/unless-rendering-opt";
import { UslessRendering } from "./pages/usless-rendering";

function App() {
  const { durations, handleRender } = useDuration();

  return (
    <BrowserRouter>
      <div className="layout">
        <Nav />
        <Durations durations={durations} />
        <Routes>
          <Route path="/" element={<Navigate to="/long-list_bad-perf" />} />
          <Route
            path="/long-list_bad-perf"
            element={<LongListBadPerf handleRender={handleRender} />}
          />
          <Route
            path="/long-list_good-perf"
            element={<LongListGoodPerf handleRender={handleRender} />}
          />
          <Route
            path="/useless-renders"
            element={
              <Profiler id="unless-rendering" onRender={handleRender}>
                <UslessRendering />
              </Profiler>
            }
          />
          <Route
            path="/useless-renders-opt"
            element={
              <Profiler id="unless-rendering-opt" onRender={handleRender}>
                <UnlessRenderingOpt />
              </Profiler>
            }
          />
          <Route
            path="/loading-images"
            element={
              <Profiler id="loading-images" onRender={handleRender}>
                <LoadingImages />
              </Profiler>
            }
          />
          <Route
            path="/loading-images-opt"
            element={
              <Profiler id="loading-images-opt" onRender={handleRender}>
                <LoadingImagesOpt />
              </Profiler>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
