import React from "react";
import { useState } from 'react'
import PodcastBox from '../molecules/PodcastBox/PodcastBox'
import Header from "../atoms/Header/Header";
import Searchbar from "../atoms/Searchbar/Searchbar";



function MainPage() {
  return (
    <>
     <Header/>
     <PodcastBox />
    </>
  )
}

export default MainPage
