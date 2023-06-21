import React from 'react'
import {Routes, Route} from "react-router-dom"
import About from './About'
import Main from "./Main"

const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<Main />}></Route> 
        <Route path="/about/" element={<About />}></Route> 
    </Routes>
  )
}

export default Pages