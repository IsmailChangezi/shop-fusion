import React from "react";
import "./NewsLetter.css";
export const NewsLetter = () => {
  return (
    <div className="news-letter">
      <h1>Get Exclusive Offers On your Email</h1>
      <p>Subscibe to our Newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Please Type Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};
