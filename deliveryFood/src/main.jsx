import { Header } from './components/Header/index.jsx'
import { Banners } from './components/Banners/index.jsx'
import { Footer } from './components/Footer/index.jsx'
import { Ingredients } from './components/Ingredients/index.jsx'
import { Meals } from './components/Meals/index.jsx'
import { Order } from './components/Order/index.jsx'
import { Tables } from './components/Tables/index.jsx'
import { CardsSnacks } from './components/CardsSnack/index.jsx'
import { Form } from './components/Form/index.jsx'
import { TagItem } from './components/TagItem/index.jsx'


import { Home } from './Pages Comum/Home/index.jsx'
import { Dishes } from './Pages Comum/Dishes/index.jsx'
import { FoodCart } from './Pages Comum/FoodCart/index.jsx'
import { OrdersClient } from './Pages Comum/OrdersClient/index.jsx'
import { NewPlate } from './Pages Adm/NewPlate/index.jsx'
import { EditPlate } from './Pages Adm/EditPlate/index.jsx'
import { SignIn } from './Pages Comum/SignIn/index.jsx'
import { SignUp } from './Pages Comum/SignUp/index.jsx'
import { Menu } from './Pages Comum/Menu/index.jsx'


import { Routes } from './Routes/index.jsx'
import { AuthProvider } from './hooks/auth'

import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from "../src/Styles/globalStyle.js"
import { ThemeProvider } from 'styled-components';
import theme from './Styles/theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
<ThemeProvider theme={theme}>
  <GlobalStyle/>
  <AuthProvider>
    <Routes />
    </AuthProvider>
  </ThemeProvider>
  </React.StrictMode>,
)
