import React from "react";
import CopyrightBox from "../Boxes/CopyrightBox";
import "./MainFooter.css";

export default function MainFooter() {
  return (
    <footer className="main-footer">
      <div className="main-footer__data d-flex flex-col jc-center ai-center flex-wrap">
        <CopyrightBox />
      </div>
    </footer>
  );
}
