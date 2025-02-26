"use client";

import GetImage from "@/assets/get-form -image.png";
import Image from "next/image";
import "@/style/getPopup.css";
import { useState } from "react";
import PopMain from "./Pop-main";

export default function GetPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosedPopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      <div className="popup-main">
        <div className="popup-inner">
          <div className="get-connect-btn">
            <button className="pop-btn" onClick={handleShowPopup}>
              Get Connect
            </button>
          </div>
          <div className="get-connect-image">
            <Image src={GetImage} alt="Get form Image" className="Image-pop" />
          </div>
        </div>
      </div>
      {showPopup && <PopMain onClose={handleClosedPopup} />}
    </>
  );
}
