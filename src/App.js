import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import profileDataManager from "./data/profileDataManager";
import FAQ from "./scenes/faq";

function App() {
  const [theme, colorMode] = useMode();
  return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            {/* Passing profileDataManager as a prop to Sidebar */}
            <Sidebar profileDataManager={profileDataManager} />
            <main className="content">
              <Topbar/>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                {/*<Route path="/oculus" element={<Oculus/>}/>*/}
                {/*<Route path="/oculusData" element={<OculusData/>}/>*/}
                {/*<Route path="/form" element={<Form/>}/>*/}
                <Route path="/faq" element={<FAQ/>}/>
                {/*<Route path="/calendar" element={<Calendar/>}/>*/}
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
  );
}

export default App;