import { Profiler } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Durations from "./components/durations";
import Nav from "./components/nav";
import useDuration from "./hooks/useDuration";
import { LongListBadPerf } from "./pages/LongListBadPerf";
import { LongListGoodPerf } from "./pages/LongListGoodPerf";
import UnlessRenderingOpt from "./pages/unless-rendering-opt";
import { UslessRendering } from "./pages/usless-rendering";

function LoadingImagesSlow() {
  return <h1>Loading images slow</h1>;
}

function LoadingImagesLazy() {
  return <h1>Loading images lazy</h1>;
}

function App() {
  const { durations, handleRender } = useDuration();

  return (
    <BrowserRouter>
      <div className="layout">
        <Nav />
        <Durations
        durations={durations}
        />
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
              
                <UslessRendering handleRender={handleRender}/>
            }
          />
          <Route
            path="/useless-renders-opt"
            element={
              // <Profiler id="unless-rendering-opt" onRender={handleRender}>
                <UnlessRenderingOpt handleRender={handleRender}/>
              // </Profiler>
            }
          />
          <Route path="/loading-images-slow" element={<LoadingImagesSlow />} />
          <Route path="/loading-images-lazy" element={<LoadingImagesLazy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
