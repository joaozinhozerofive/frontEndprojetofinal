import { Routes, Route } from 'react-router-dom';

import { SignIn } from '../Pages Comum/SignIn';
import { SignUp } from '../Pages Comum/SignUp';
import { SignInAdm } from '../Pages Comum/SignInAdm';

export function AuthRoutes() {

    return(
    <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/admin" element={<SignInAdm />} />
    </Routes>
    )
    
}