import { createRoot } from 'react-dom/client';
import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import SignIn from './routes/SignIn';
import Layout from './routes/Layout';
import Home from './routes/Home';

function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route  index element={<Home/>}/>
                <Route path="signin" element={<SignIn/>} />
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
