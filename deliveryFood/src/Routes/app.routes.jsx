import  { Routes, Route } from 'react-router-dom';

import { Home } from '../Pages Comum/Home';
import { NewPlate } from '../Pages Adm/NewPlate';
import { Dishes } from '../Pages Comum/Dishes';
import { FoodCart } from '../Pages Comum/FoodCart';
import { OrdersClient } from '../Pages Comum/OrdersClient';
import { EditPlate } from '../Pages Adm/EditPlate';
import { Menu } from '../Pages Comum/Menu';


export function AppRoutes(){
    return(
        <Routes>
            <Route path= '/' element= {<Home/> } />
            <Route path= '/new' element={<NewPlate/> } />
            <Route path= '/edit' element={<EditPlate/> } />
            <Route path= '/plates' element={<Dishes/> } />
            <Route path= '/carrinho' element={<FoodCart/> } />
            <Route path= '/pedidos' element={<OrdersClient/> } />
            <Route path= '/menu' element={<Menu/> } />
        </Routes>
    )
}