import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';

const Cat = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
}))

const style = {
  news: {
    color: "#FFA100",
    padding: "5px",
    padding: "5px 35px",
    width: "max-content",
    borderRadius: "5px",
    textAlign: "center",
    fontSize: "16px",
    textTransform: "uppercase",
  },
  education: {
    color: "#8F4FFF",
    padding: "5px",
    padding: "5px 35px",
    width: "max-content",
    borderRadius: "5px",
    textAlign: "center",
    fontSize: "16px",
    textTransform: "uppercase",
  },
  medicine: {
    color: "#FFA100",
    padding: "5px",
    padding: "5px 35px",
    width: "max-content",
    borderRadius: "5px",
    textAlign: "center",
    fontSize: "16px",
    textTransform: "uppercase",
  },
  technology: {
    color: "#00C5B7",
    padding: "5px",
    padding: "5px 35px",
    width: "max-content",
    borderRadius: "5px",
    textAlign: "center",
    fontSize: "16px",
    textTransform: "uppercase",
  },
}

export default function FullWidthGrid() {
  return (
    <div className="category">
      <h3 className="category_text">Browse by Category</h3>
      <h5 className="select_category">
        Select a Category to see more related content
      </h5>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} className="box">
          <Grid item>
            <Link to="/news">
              {" "}
              <Cat itemID="grid_category-news" style={style.news}>
                NEWS
              </Cat>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/education">
              {" "}
              <Cat itemID="grid_category-education" style={style.education}>
                EDUCATION
              </Cat>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/technology">
              {" "}
              <Cat itemID="grid_category-technology" style={style.technology}>
                TECHNOLOGY
              </Cat>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/medicine">
              {" "}
              <Cat itemID="grid_category-medicine" style={style.medicine}>
                MEDICINE
              </Cat>
            </Link>
          </Grid>
      </Grid>
    </Box></div>
  );
}

