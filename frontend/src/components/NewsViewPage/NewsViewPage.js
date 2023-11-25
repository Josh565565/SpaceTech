import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Components import start
// import DropdownMenu from "../NewsPage/DropdownMenu";
// import SearchdropDown from "../NewsPage/SearchdropDown";
import NewsHeader from "../NewsHeader/NewsHeader";
// Components import end

import "./NewsViewPage.css"; // Import your CSS file

import Logo from "../Assets/Images/Logo.svg";
import Notification from "../Assets/Images/notification-line.svg";
import Profile from "../Assets/Images/Sarah-profile.svg";
import SearchIcon from "../Assets/Images/search.svg";
import DropDown from "../Assets/Images/drop-down-line.svg";
import Facebook from "../Assets/Facebook.png";
import LinkedIn from "../Assets/LinkedIn.png";
import Instagram from "../Assets/Instagram.png";
import ArrowUp from "../Assets/arrowup.png";
import ArrowRight from "../Assets/arrowRight.png";
import Laptop from "../Assets/Laptop.png";

export default function NewsViewPage() {

  


  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/model/spacetech/')  // Use the correct API endpoint
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      // .catch(error => {
      //   console.error('Error fetching data:', error);
      // });
  }, []);
 
  return (
    <div>
      <NewsHeader />
      <div>
          {data.map(item => (
        <div className="container">
          <div className="market">
            <h1 className="header-text">
            {item.title}
            </h1>
          </div>

          <div className="profile-picture">
            <img className="profile-1" src={Profile} alt="Profile" />
            <div>
              <div className="author-div">
                <p className="author">Sarah</p>
                <a href="" className="follow-author">
                  Follow
                </a>
              </div>
              <p className="date">9:01 PM WAT-September 11, 2023</p>
            </div>
          </div>

          <div className="laptop">
            <img className="laptop-pic" src={Laptop} alt="Laptop" />
          </div>

          <div className="article-content">
            <p>
            {item.description}
            </p>

          </div>

          <div className="comment-con">
            <h2 className="comment">COMMENTS</h2>

            <div className="sarah-comment-div">
              <div className="profile-sarah">
                <img className="profile-img" src={Profile} alt="Profile" />
                <p className="author-comment">Sarah | September 11, 2023</p>
              </div>
              <p className="sarah-comment">
                This is a nice article, I have been looking for this link for a
                while now, I will be waiting for your next article and I will
                also give you a follow right now
              </p>
            </div>
          </div>

          {/* Repeat the comment section as needed... */}

          <div className="comment-form">
            <h2 className="comment">Leave a comment</h2>
            <div className="comment-form"></div>
            <form>
              <div className="form-control"></div>
              <textarea
                className="comment-input"
                type="text"
                placeholder="Comment"
                cols={50}
                rows={10}
              />
            </form>
            <input className="submit-post" type="submit" value="Post comment" />
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
