import React from "react";

export default function CopyrightBox() {
  return (
    <div className="copyright-box d-flex flex-col jc-center ai-center white-space-nw">
      <p>Copyright &copy; 2023. All rights reserved.</p>
      <p>
        Designed and developed by{" "}
        <a
          href={"https://maralnajafi.github.io/personal-website/about"}
          target="_blank"
          rel="noreferrer"
        >
          <span className="td-underline">Maral Najafi</span>
        </a>
      </p>
    </div>
  );
}
