import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import logo from "../../images/logo.png"

function Header() {
  return (
    <>
   <ReactNavbar
  navColor1="#ffffff"
  logo ={ logo}
  logoWidth = "20vmax"
  link1Text="Home"
  link2Text="Cart"
  link3Text="Products"
  link4Text="Login"
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