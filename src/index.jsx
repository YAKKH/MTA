import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import MainContainer from './routes/MainContainer';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Navbar from './components/Navbar';
import Successful from './components/Successful';

import './components/input.css';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<MainContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path='/successful' element={<Successful />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
