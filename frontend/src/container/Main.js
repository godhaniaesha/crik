import React from 'react'
import Heroslider from '../component/Heroslide'
import BrowseSeries from '../component/BrowseSeries'
import LiveUpc from '../component/LiveUpc'
import HighlightsSlider from '../component/HighlightsSlider'

export default function Main() {
  return (
    <>
      <Heroslider></Heroslider>
      <BrowseSeries></BrowseSeries>
      <LiveUpc></LiveUpc>
      <HighlightsSlider></HighlightsSlider>
    </>
  )
}
