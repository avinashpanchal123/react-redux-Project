import React from 'react'
import {ReactNavbar} from "overlay-navbar"

function Header() {
  return (
    <>
   <ReactNavbar
  navColor1="rgb(0, 0, 0, 0.4)"
  link1Text="Home"
  link2Text="Cart"
  link3Text="Products"
  link1Url="/"
  link2Url="/cart"
  link3Url="/products"
  link4Url="/about"
  link1ColorHover="red"
  link2ColorHover="red"
  link3ColorHover="red"
  link4ColorHover="red"
  nav1justifyContent="flex-end"
  nav2justifyContent="flex-end"
  nav3justifyContent="flex-start"
  link1Margin="1vmax"
  link1Size =	"2vmax"
    />
    </>
  )
}

export default Header