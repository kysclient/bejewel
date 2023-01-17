import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import EnrolPage from "./pages/EnrolPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route index element={<MainPage/>}/>
            <Route path="/enrol" element={<EnrolPage />} />
            <Route path="/detail/:id" element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
