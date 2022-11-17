import React from "react";
// import Gnav from "../components/Gnav";
// import Gicon from '../components/Gicon'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Gallery() {
  return (
    <div className="body">
      <Gnav />
      <Gicon />
      <div class="some-page-wrapper">
        <div class="column1">
          <div class="box1"></div>
          <div class="box2"></div>
          <div class="box3"></div>
          <div class="box4"></div>
        </div>
        <div class="column2">
          <div class="box1"></div>
          <div class="box2"></div>
          <div class="box3"></div>
          <div class="box4"></div>
        </div>
        <div class="column3">
          <div class="box1"></div>
          <div class="box2"></div>
          <div class="box3"></div>
          <div class="box4"></div>
        </div>
        <div class="column4">
          <div class="box1"></div>
          <div class="box2"></div>
          <div class="box3"></div>
          <div class="box4"></div>
        </div>
      </div>
      <div className="testfooter">
        <a href="https://instagram.com/gleauxsweetshop?igshid=YmMyMTA2M2Y=">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}
