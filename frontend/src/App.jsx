import { React, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Login = lazy(() => import("./pages/auth/Login"));
const LandingLayout = lazy(() => import("./pages/landing/LandingLayout"));
const LandingPage = lazy(() => import("./pages/landing/LandingPage"));
const OurStoryPage = lazy(() => import("./pages/landing/OurStoryPage"));
const TravelPage = lazy(() => import("./pages/landing/TravelPage"));
const PhotosPage = lazy(() => import("./pages/landing/PhotosPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="grid min-h-screen place-items-center text-sm text-zinc-500">
            Memuat halaman...
          </div>
        }
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LandingLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="cerita-kami" element={<OurStoryPage />} />
            <Route path="jalan-jalan" element={<TravelPage />} />
            <Route path="foto" element={<PhotosPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
