import React from 'react';
import { Route, Routes } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import seniorLogo from '../../../assets/img/logo_high_resolution.png';
import SignIn from "./signIn";
import SignUp from "./signUp";

const defaultTheme = createTheme();

export default function AuthPage() {
    return (
        <div className="contentAuthPage" style={{backgroundColor: "#FAFAFA"}}>
            <div className="authPage">
                <ThemeProvider theme={defaultTheme}>
                    <Grid container component="main" sx={{ height: '50%', width: '100vw'}} id="grid">
                        <CssBaseline />
                        <Grid
                            item
                            xs={false}
                            sm={4}
                            md={7}
                            sx={{
                                backgroundImage: `url(${seniorLogo})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '100%',
                                backgroundPosition: 'center',
                            }}
                        />
                        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                            <Routes>
                                <Route path="auth/signin" element={<SignIn />} />
                                <Route path="auth/signup" element={<SignUp />} />
                            </Routes>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </div>
        </div>
    );
}
