import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import LoginForm from './LoginForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <React.StrictMode> */}
  <BrowserRouter>
    {/* <h1>Hi</h1> */}
    <Routes>
      <Route path="authorize" element={<LoginForm />}></Route>
    </Routes>
    </BrowserRouter>
  {/* </React.StrictMode> */}
  </>
);
