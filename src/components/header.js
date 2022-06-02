import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material/';

import { Link } from 'gatsby';
import LogoSvg from "/src/images/logo_h_color_white.svg"

export default function Header() {
  const displayDesktop = () => {
    return (
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {CustomSurgicalLogo}
        <button className="shop" href="https://store.customsurgical.co/">Shop now</button>
      </Toolbar>
    );
  };

  const CustomSurgicalLogo = (
    <Link to="https://customsurgical.co/">
      <Typography variant="h6" component="h1" style={{display: "flex",
    alignItems: "center"}}>
        {/* <LogoSvg /> */}
        <img src={LogoSvg} style={{width:"150px", height:"auto"}}></img>
      </Typography>
    </Link>
  );

  return <AppBar sx={styles.headerAppBar}>{displayDesktop()}</AppBar>;
}

const styles = {
  headerAppBar: {
    background: '#202026',
    paddingRight: '32px',
    paddingLeft: '32px',
  },
};