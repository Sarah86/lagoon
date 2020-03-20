import React from 'react';

const SocialList = (props) => {
  return(
    <ul className={props.className}>
    <li><a href="#"><i className="fa fa-facebook" /></a></li>
    <li><a href="#"><i className="fa fa-instagram" /></a></li>
  </ul>
  )
}

export default SocialList