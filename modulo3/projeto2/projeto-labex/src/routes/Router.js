import React from "react"
import { TripDetails } from "../components/pages/TripDetails";
import { HomePage } from "../components/pages/Home"
import { ErrorPage } from "../components/pages/Error"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = ()=> {
    return(
        <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="about/" element={<TripDetails />} />
          <Route path="*" element={<ErrorPage />} />

        </Routes>
      </BrowserRouter>

    )


}