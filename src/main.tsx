import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./screens/Layout.tsx";
import { HomeScreen } from "./screens/HomeScreen.tsx";
import { AboutScreen } from "./screens/AboutScreen.tsx";
import { ServicesScreen } from "./screens/ServicesScreen.tsx";
import { CarsScreen } from "./screens/CarsScreen.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./state/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { CarScreen } from "./screens/CarScreen.tsx";
import ReservationScreen from "./screens/ReservationScreen.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
      {
        path: "/about",
        element: <AboutScreen />,
      },
      {
        path: "/services",
        element: <ServicesScreen />,
      },
      {
        path: "/cars",
        element: <CarsScreen />,
      },
      {
        path: "/cars/:carId",
        element: <CarScreen />,
      },
      {
        path: "/reservations/:carId",
        element: <ReservationScreen />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
