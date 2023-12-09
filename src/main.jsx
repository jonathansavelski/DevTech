import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './styles/GlobalStyles'
import Routes from './routes/Routes'
import { MenuProvider } from "./context/Context.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <MenuProvider>
    <GlobalStyles />
    <Routes />
  </MenuProvider>,
)
