import React, { Suspense, lazy } from 'react';
import './App.css';
import { Route } from "react-router-dom";

const Home = lazy(() => import('./pages/Home/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs'));
const History = lazy(() => import('./pages/History/History'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Wine = lazy(() => import('./pages/Wine/Wine'));
const Gallery = lazy(() => import('./pages/Gallery/Gallery'));

function App() {
  return (
    <div className="App font-lato-300 text-left">
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/" component={Home} />
        <Route exact path="/bodega" component={AboutUs} />
        <Route exact path="/historia" component={History} />
        <Route exact path="/contacto" component={Contact} />
        <Route exact path="/vino/:id" component={Wine} />
        <Route exact path="/galeria" component={Gallery} />
      </Suspense>
    </div>
  );
}

export default App;
