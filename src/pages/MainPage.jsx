import React from "react";
import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import PodcastBox from '../molecules/PodcastBox/PodcastBox'
import Header from "../atoms/Header/Header";
import Searchbar from "../atoms/Searchbar/Searchbar";



function MainPage() {
  return (
    <>
     <Header/>
     <PodcastBox />
     <Outlet />
    </>
  )
}

export default MainPage
