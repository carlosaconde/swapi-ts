import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

// import {LazyPage1,LazyPage2,LazyPage3} from '../01-lazyload/pages'

import { routes } from "./routes";
import {
  AppBar,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import logo from "../Star_Wars_logo.png";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});
export const Navigation = () => {
  return (
    <Suspense fallback={<span>loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <ThemeProvider theme={darkTheme}>
            <AppBar color="primary">
              <Container maxWidth="xl">
                <Toolbar
                  disableGutters
                  sx={{ justifyContent: "space-between" }}
                >
                  <img src={logo} style={{ width: "100px" }} alt="" />

                  {routes.map((route) => (
                    <Button key={route.to}>
                      <NavLink to={route.to}>
                       
                        <Typography color={"white"}>
                          {route.name}
                        </Typography>
                      </NavLink>
                    </Button>
                  ))}
                </Toolbar>
              </Container>
            </AppBar>
          </ThemeProvider>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.to}
                path={route.path}
                element={<route.Component />}
              />
            ))}

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
