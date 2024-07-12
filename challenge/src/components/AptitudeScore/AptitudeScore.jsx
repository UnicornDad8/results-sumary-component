import React from "react";
import "../../index.css";

import icon1 from "../../assets/images/icon-reaction.svg";
import icon2 from "../../assets/images/icon-memory.svg";
import icon3 from "../../assets/images/icon-verbal.svg";
import icon4 from "../../assets/images/icon-visual.svg";

const svgs = [
  { icon: icon1 },
  { icon: icon2 },
  { icon: icon3 },
  { icon: icon4 },
];

const AptitudeScore = ({ category, score, index }) => {
  return (
    <li>
      <div className={`pill-bg bg-color-${index + 1}`} />

      <article className="pill">
        <div className="pill-left">
          <span>
            <img
              width={20}
              height={20}
              src={`${svgs[index].icon}`}
              alt={category}
            />
          </span>
          <h3 id={`text-color-${index + 1}`} className="category">
            {category}
          </h3>
        </div>
        <div className="pill-right">
          <p>
            <span className="dark-score">{score}</span>
            <span className="light-score">/</span>
            <span className="light-score">100</span>
          </p>
        </div>
      </article>
    </li>
  );
};

export default AptitudeScore;
