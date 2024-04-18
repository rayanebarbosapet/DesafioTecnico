import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React from 'react';

import Login from "../pages/Login";
import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';


export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/Home' element={<Home />}></Route>
                <Route path='/Cadastro' element={<Cadastro />}/><Route/>
                
            </Routes>
        </BrowserRouter>
    )
}