import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <div className='category'><h3 className='category_text'>Category</h3>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4} className='box'>
        <Grid item  >
        <Link to="/first"> <Item>Gatsby<StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/logo.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      /></Item></Link> 
        </Grid>
        <Grid item >
          <Item><StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/logo.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      /></Item>
        </Grid>
        <Grid item >
          <Item><StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/logo.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      /></Item>
        </Grid>
        <Grid item >
          <Item><StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/logo.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      /></Item>
        </Grid>
      </Grid>
    </Box></div>
  );
}

