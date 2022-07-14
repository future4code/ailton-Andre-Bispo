import React from "react"
import { TripDetails } from "../components/pages/TripDetails";
import { HomePage } from "../components/pages/Home";
import { AdminHome } from "../components/pages/AdminHome";
import { FormPage } from "../components/pages/FormPage";
import { ErrorPage } from "../components/pages/Error";
import { LoginPage } from "../components/pages/Login";
import { ListTrip } from "../components/pages/ListTrip";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = ()=> {
    return(
        <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element ={<LoginPage/>} />
          <Route path="/adm" element ={<AdminHome/>} />
          <Route path="/tripDetails" element={<TripDetails />} />
          <Route path="/formPage" element ={<FormPage/>} />
          <Route path="/listTrip" element={<ListTrip/>} />
          <Route path="*" element={<ErrorPage />} />

        </Routes>
      </BrowserRouter>

    )


}