import React, { useState } from "react"
import { Facebook, Twitter, Linkedin } from 'react-feather';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';

const ShareButtons = ({ url, title, description }) => {
return(
  <div className="post-meta-share-icons">
    <FacebookShareButton url={url} quote={description}>
      <Facebook strokeWidth={1.25} />
    </FacebookShareButton>

    <LinkedinShareButton url={url} title={title} summary={description}>
      <Linkedin strokeWidth={1.25} />
    </LinkedinShareButton>

    <TwitterShareButton url={url} title={description}>
      <Twitter strokeWidth={1.25}  />
    </TwitterShareButton>

    
  </div>
)}

export default ShareButtons