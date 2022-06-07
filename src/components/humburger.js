import Menu from 'react-burger-menu/lib/menus/slide'
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material/';
import LogoSvg from "/src/images/logo_h_color_white.svg"
import { Link } from 'gatsby';



const CustomSurgicalLogo = (
    <Link to="https://customsurgical.co/">
      <Typography variant="h6" component="h1" style={{display: "flex",
    alignItems: "center"}}>
        {/* <LogoSvg /> */}
        <img src={LogoSvg} style={{width:"150px", height:"auto", marginLeft: "1em"}}></img>
      </Typography>
    </Link>
  );

export default function Humburger() {
    const showSettings = (event) => {
    event.preventDefault();
   
  }

 
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
        <div style={{ justifyContent: 'space-between', display: "flex", backgroundColor: "#202026", position: "fixed",
        
        width: "100%",
        zIndex: "1000" }}>
        {CustomSurgicalLogo}
        
      <div>
      <Menu right>
        <li><a className='nav_link' href='https://customsurgical.co/about/'>About</a></li>
          <li><a className='nav_link' href='https://customsurgical.co/app/'>App</a></li>
          <li><a className='nav_link' href='https://customsurgical.co/distributors/'>Distributors</a></li>
          <li style={{marginBottom: "1em"}}><a className='nav_link' href='/'>Blog</a></li >
        <button className="shop"><a href="https://store.customsurgical.co/" style={{color: "white"}}>Shop now</a></button>
      </Menu></div></div>

    );
   
   
}
