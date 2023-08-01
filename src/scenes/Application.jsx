import React from "react";
import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./global/Sidebar";
import profileDataManager from "../data/profileDataManager";
import Topbar from "./global/Topbar";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./dashboard";
import FAQ from "./faq";
import BreadCrumbs from "../components/breadcrumbs/BreadCrumbs";
import Pacientes from "./pacientes";
import SessionPacients from "./pacientes/session";
import Oculus from "./oculus";

function Application() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Sidebar profileDataManager={profileDataManager} />
                    <main className="content">
                        <Topbar />
                        <BreadCrumbs/>
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/FAQ" element={<FAQ />} />
                            <Route path="/Pacientes" element={<Pacientes/>}/>
                            <Route path="/Pacientes/Sessoes/:id" element={<SessionPacients/>}/>
                            <Route path="/Oculus" element={<Oculus/>}/>
                            {/*<Route path="/Oculus/session/:id" element={<SessionOculus/>}/>*/}
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default Application;
