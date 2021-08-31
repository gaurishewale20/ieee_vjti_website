import React from "react";
import "./Magazine.css";
import { mag_og } from "../Home/index";
const Magazine = () => {
  return (
    <>
      <div
        className="magazine_div text-center"
        data-aos="fade-up"
        data-aos-duration="1300"
      >
        <h1>IEEE Annual Magazines</h1>
        <h5 className="text-secondary">Click on them to Read!</h5>

        <div className="magazine text-center">
          <h6>2020</h6>
          <a
            href="https://www.canva.com/design/DAD98MmmtKs/6oqGF4C6PHlJg8AdFgJ7Wg/view?utm_content=DAD98MmmtKs&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
            target="_blank" rel="noopener noreferrer"
          >
            <img className="img" src={mag_og} loading="lazy" alt="magazine_2020"></img>
          </a>
        </div>
      </div>
    </>
  );
};

export default Magazine;
