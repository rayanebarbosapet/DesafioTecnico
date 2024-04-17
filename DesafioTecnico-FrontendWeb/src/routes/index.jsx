import {Route, Routes} from 'react-router-dom';
import React from 'react';

import Login from "../pages/Login";

export default function AppRouter (){
    return(
        <Routes>
            <Route path='/' element={<Login/>}></Route>
        </Routes>
    )
}