import {useState} from "react";
import React from "react";
import { Home } from "./components/pages/Home/Home";
import { Match } from "./components/pages/Match/Match";

export default function ChangePage() {
  const [pageChange, setPageChange] = useState ('home');
  return(
  <div> 
  {pageChange === 'home' && <Home setPageChangeProps = {setPageChange}/>}
  {pageChange === 'match' && <Match setPageChangeProps = {setPageChange}/>}   
  </div>
  )
}

