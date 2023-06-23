import NavBar from "./components/Navbar/NavBar.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import router from './router'
import {ThemeProvider} from "@mui/material";
import theme from "./utils/theme";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <NavBar />
                <Routes>
                    {router.map((route, index) => (<Route key={index} element={route.element} path={route.path} /> ))}
                    {/*<Route path={'/'} element={Home()} />*/}
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
