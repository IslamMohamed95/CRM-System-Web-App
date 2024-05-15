import React from "react";
import "./Overview.css";
import profilePic from "../../public/Resize_Image-modified.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faPlus,
  faClockRotateLeft,
  faInbox,
  faCheck,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Overview() {
  return (
    <section id="Overview">
      <div className="personalView">
        <img src={profilePic} alt="profileImg" />
        <h3 id="name">Islam Mohamed</h3>
        <div id="personalActions">
          <label id="date">27/11/2024</label>
          <label id="exit">Sign out</label>
        </div>
      </div>
      <hr id="firstBreak" />
      <h4>Home</h4>
      <ul id="createAndView">
        <li>
          <FontAwesomeIcon icon={faHouseUser} /> <p>Overview</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faPlus} /> <p>Create Case</p>
        </li>
      </ul>
      <hr className="normalBreak" />
      <h4>Cases</h4>
      <ul id="cases">
        <li>
          <FontAwesomeIcon icon={faClockRotateLeft} />
          <p>Pending</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faInbox} />
          <p>Draft</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faCheck} />
          <p>Completed</p>
        </li>
      </ul>
      <hr className="normalBreak" />
      <h4>Settings</h4>
      <ul>
        <li>
          <FontAwesomeIcon icon={faUser} />
          <p>My account</p>
        </li>
      </ul>
    </section>
  );
}

export default Overview;
