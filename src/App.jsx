import { GlobalStyles } from './styles/GlobalStyles.js';
import Routes from './routes/Routes';
import { MenuProvider, PopupProvider } from "./context/Context.jsx";

function App() {

  return (
    <>
      <MenuProvider>
        <PopupProvider>
          <GlobalStyles />
          <Routes />
        </PopupProvider>
      </MenuProvider>
    </>
  )
}

export default App
