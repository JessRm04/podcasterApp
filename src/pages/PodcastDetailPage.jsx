import React from "react";
import { useState } from 'react'
import Header from "../atoms/Header/Header";
import Searchbar from "../atoms/Searchbar/Searchbar";
import PodcastDescriptionBox from "../molecules/PodcastDescriptionBox/PodcastDescriptionBox";
import PodcastBox from "../molecules/PodcastBox/PodcastBox";



function PodcastDetailPage() {
  return (
    <>
     <Header/>
     <PodcastBox/>
     <PodcastDescriptionBox/>
    </>
  )
}

export default PodcastDetailPage
