import React, { useState, useEffect } from "react";
import "./Past.scss";

const Past = () => {
  var meetupData = require("../meetups.json");
  const [meetupShow, setMeetupShow] = useState(false);
  const [meetupVisible, setMeetupVisible] = useState(3);
​
  const showMeetup = () => {
    const show_btn_meetup = document.getElementById("show_btn_meetup");
    if (!meetupShow) {
      setMeetupVisible((prevVal) => meetupData.length);
      setMeetupShow(true);
      show_btn_meetup.innerHTML = "Show less";
    } else {
      setMeetupVisible((prevVal) => 3);
      setMeetupShow(false);
      show_btn_meetup.innerHTML = "Show more";
    }
  };
  return (
    <div className="past-meetup">
      <div className="past-meetup-inline">
        <div id="past-meetup-title">
          <span>Past Meetups</span>
        </div>
        <button onClick={showMeetup} id="show_btn_meetup">
          Show more
        </button>
      </div>
​
      <div className="past-meetup-content">
        {meetupData.slice(0, meetupVisible).map((x) => (
          <div className="past-meetup-card">
            <div className="past-meetup-date">
              <span>{x.date}</span>
            </div>
            <div className="past-meetup-line"></div>
            <div className="past-meetup-desc">
              <span>{x.desc}</span>
            </div>
            <div className="past-meetup-attendees">
              <span>{x.attendees}</span>
              <span id="past-meetup-went"> went</span>
            </div>
            <div className="past-meetup-button">
              <button id="past-meetup-btn">View</button>
            </div>
          </div>
        ))}
      </div>
      <div className="past-meetup-card">
        <div className="past-meetup-date">27 November 2017</div>
        <div className="past-meetup-line"></div>
        <div className="past-meetup-desc">
          #39 JakartaJS April Meetup with kumparan
        </div>
        <div className="past-meetup-attendees">
          139
          <span id="past-meetup-went"> went</span>
        </div>
        <div className="past-meetup-button">
          <button id="past-meetup-btn">View</button>
        </div>
      </div>
      <div className="past-meetup-card">
        <div className="past-meetup-date">27 November 2017</div>
        <div className="past-meetup-line"></div>
        <div className="past-meetup-desc">
          #39 JakartaJS April Meetup with kumparan
        </div>
        <div className="past-meetup-attendees">
          139
          <span id="past-meetup-went"> went</span>
        </div>
        <div className="past-meetup-button">
          <button id="past-meetup-btn">View</button>
        </div>
      </div>
      <div className="past-meetup-card">
        <div className="past-meetup-date">27 November 2017</div>
        <div className="past-meetup-line"></div>
        <div className="past-meetup-desc">
          #39 JakartaJS April Meetup with kumparan
        </div>
        <div className="past-meetup-attendees">
          139
          <span id="past-meetup-went"> went</span>
        </div>
        <div className="past-meetup-button">
          <button id="past-meetup-btn">View</button>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};

export default Past;
