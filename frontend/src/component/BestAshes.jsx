import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../style/d_slider.css";
import v1 from "../img/v7.png";
import v2 from "../img/v8.png";
import v3 from "../img/v1.png";

const d_highlights = [
  {
    id: 1,
    title: "2nd Test Highlights | IND vs SA",
    duration: "3m",
    thumbnail: v1,
  },
  {
    id: 2,
    title: "2nd Test Day 1 Highlights | IND vs SA",
    duration: "14m",
    thumbnail: "https://cdn.mos.cms.futurecdn.net/5pHJZPCneVms8CreW9dWpW.jpg",
  },
  {
    id: 3,
    title: "1st Test Day 2 Highlights | IND vs SA",
    duration: "11m",
    thumbnail: v3,
  },
  {
    id: 4,
    title: "1st Test Day 3 Highlights | IND vs SA",
    duration: "9m",
    thumbnail: v2,
  },
  {
    id: 5,
    title: "Best Moments | IND vs SA Test Series",
    duration: "7m",
    thumbnail:
      "https://library.sportingnews.com/styles/crop_style_16_9_desktop_webp/s3/2023-06/Ben%20Stokes%20Pat%20Cummins%20Ashes%20062123.jpg.webp?itok=zQlbtqUY",
  },
  {
    id: 6,
    title: "Match Winning Spells | IND vs SA",
    duration: "6m",
    thumbnail:
      "https://images.immediate.co.uk/production/volatile/sites/3/2025/11/AShes-60ca16f.jpg?quality=90&resize=980,654",
  },
];


function BestAshes() {
  const d_sliderRef = useRef(null);

  const d_scrollLeft = () => {
    d_sliderRef.current.scrollBy({
      left: -420,
      behavior: "smooth",
    });
  };

  const d_scrollRight = () => {
    d_sliderRef.current.scrollBy({
      left: 420,
      behavior: "smooth",
    });
  };

  return (
    <div className="d_highlight_wrapper">
      {/* HEADER */}
      <div className="d_highlight_header">
        <h2 className="d_highlight_heading">Best of The Ashes 2025/26</h2>

        <div className="d_highlight_arrows">
          <button onClick={d_scrollLeft}>
            <FaChevronLeft />
          </button>
          <button onClick={d_scrollRight}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div className="d_highlight_slider" ref={d_sliderRef}>
        {d_highlights.map((item) => (
          <div className="d_highlight_card" key={item.id}>
            <div className="d_thumb_wrapper">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="d_thumb_img"
              />
              <span className="d_duration">{item.duration}</span>
            </div>

            <p className="d_highlight_title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestAshes;
