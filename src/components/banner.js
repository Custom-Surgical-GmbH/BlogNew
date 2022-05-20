import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import sub from "/src/images/sub.svg"
const BlogIndex = ({ data, location }) => {
    console.log(data)
const [emailError, setEmailError] = useState ('')
const [inputEmail, setInputEmail] = useState ('');

const emailValidation = async (email) => {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(regex.test(email) === false){
        setEmailError('Email is not valid')
        return false;
    }
    return true;
  }
  //const post = data.markdownRemark
  const listFields = {
    ORIGIN: 'blog',
   /* POSTPATH: post.fields.slug,
    POSTTAGS: post.frontmatter.tags,*/
  }
 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`introducing customer email > ${inputEmail}`)
    if (emailValidation(inputEmail)){

      
      let myHeaders = new Headers();
      myHeaders.append("Authorization", process.env.MAILCHIMP_API_KEY);
      myHeaders.append("Content-Type", "text/plain");
      let raw = `{\n    \"email_address\": ${inputEmail},\n    
      \"status\":\"subscribed\",  \n   
       \"merge_fields\": {\n        \"ORIGIN\": \"blog\",\n        
         }\n}`;
      let requestOptions = {
        method: 'post',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      fetch("https://us1.api.mailchimp.com/3.0/lists/fde7015bd7/members", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

      // const response = addToMailchimp(inputEmail, listFields).then(res => {
      //   if (response.status === 200){
      //     <Alert severity="success">This is a success alert — check it out!</Alert>
      //   }
      // })
    }
    
    // I recommend setting `result` to React state
    // but you can do whatever you want
  }
  return (
<div className="banner">
        <img src={sub} className = "sub"></img>
        <div className="banner_text"><div className="sub_text">SUBSCRIBE TO OUR NEWSLETTER</div>
        <div className="sub_small">Discover how to get the best-recording settings, news, and exclusive discounts!</div>
        <div className="sub_form">
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Email" value={inputEmail} onInput={e => setInputEmail(e.target.value)} name="email"   required style={{
          background: "#F9F9F9",
          borderRadius: "5px",
          padding: "10px 30px",
          border: "1px",
          marginTop: "8%",
          marginRight: "3%"
        }}></input>
        <input type="submit" value="Subscribe" style={{
          background: "#FFA100",    
        boxShadow: "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
          borderRadius: "5px",
          padding: "10px 30px",
          fontWeight: "500",
          fontSize: "14px",
          border: "1px",
          color: "white",
        }}></input></form>
        <span style={{ color: 'red' }}>{emailError}</span>
        </div>
        </div>
        </div>
  )
}

export default BlogIndex
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        timeToRead
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          views
          tags
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`