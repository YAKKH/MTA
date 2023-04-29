import { createRoot } from 'react-dom/client';
import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Contact from './routes/Contact';
import Layout from './routes/Layout';
import Home from './routes/Home';

function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout username="hank"/>}>
                <Route  index element={<Home/>}/>
                <Route path="contact" element={<Contact/>} />
            </Route>
        </Routes>
        </BrowserRouter>
    )
}


const domNode = document.getElementById('root');
const root = createRoot(domNode);



root.render(
       <App/>
);
