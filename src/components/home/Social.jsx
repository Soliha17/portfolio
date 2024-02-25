import React from "react";

function Social() {
  return (
    <div className="home__social">
      <a
        href="https://t.me/solyadev"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="bx bxl-telegram"></i>
      </a>
      <a
        href="https://github.com/Soliha17"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-github-alt"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/soliha-tursuntosheva/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="bx bxl-linkedin"></i>
      </a>
    </div>
  );
}

export default Social;
