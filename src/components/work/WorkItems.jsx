import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="portfolio" className="work__img" />
      <span className="card__links">
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="work__button"
        >
          <i class="bx bx-world"></i>
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        <a
          href={item.github}
          target="_blank"
          rel="noreferrer"
          className="work__button"
        >
          <i className="uil uil-github-alt"></i>
          Github <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </span>
    </div>
  );
};

export default WorkItems;
