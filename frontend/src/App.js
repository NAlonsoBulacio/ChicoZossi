import React, { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
  Outlet,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loadingGif from "./assets/loadingGif.gif"; // Importa el GIF

const Home = lazy(() => import("./pages/Home/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const History = lazy(() => import("./pages/History/History"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Wine = lazy(() => import("./pages/Wine/Wine"));
const Gallery = lazy(() => import("./pages/Gallery/Gallery"));

// Definir el layout principal
const Layout = () => {
  return (
    <div className="overflow-hidden">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <ScrollRestoration />
      <Outlet />
    </div>
  );
};

// Crear el router con rutas cargadas de forma diferida
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <Suspense
            fallback={
              <div className="w-full h-full flex justify-center items-center">
                <img src={loadingGif} alt="Loading..." className="w-32" />
              </div>
            }
          >
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/bodega"
        element={
          <Suspense
            fallback={
              <div className="w-full h-full flex justify-center items-center">
                <img src={loadingGif} alt="Loading..." className="w-32" />
              </div>
            }
          >
            <AboutUs />
          </Suspense>
        }
      />
      <Route
        path="/historia"
        element={
          <Suspense
            fallback={
              <div className="w-full h-full flex justify-center items-center">
                <img src={loadingGif} alt="Loading..." className="w-32" />
              </div>
            }
          >
            <History />
          </Suspense>
        }
      />
      <Route
        path="/contacto"
        element={
          <Suspense
            fallback={
              <div className="w-full h-full flex justify-center items-center">
                <img src={loadingGif} alt="Loading..." className="w-32" />
              </div>
            }
          >
            <Contact />
          </Suspense>
        }
      />
      <Route
        path="/vino/:id"
        element={
          <Suspense
            fallback={
              <div className="w-full h-full flex justify-center items-center">
                <img src={loadingGif} alt="Loading..." className="w-32" />
              </div>
            }
          >
            <Wine />
          </Suspense>
        }
      />
      <Route
        path="/galeria"
        element={
          <Suspense
            fallback={
              <div className="w-full h-full flex justify-center items-center">
                <img src={loadingGif} alt="Loading..." className="w-32" />
              </div>
            }
          >
            <Gallery />
          </Suspense>
        }
      />
    </Route>
  )
);

// Componente principal App
const App = () => {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
