import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../style/d_slider.css";

const d_highlights = [
  {
    id: 1,
    title: "2nd Test: IND vs SA, Full Match Highlights",
    duration: "3m",
    thumbnail:
      "https://i.ytimg.com/vi/3xkF4Z6Y2Fc/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "2nd Test: India vs South Africa, Day 1 Highlights",
    duration: "14m",
    thumbnail:
      "https://i.ytimg.com/vi/y5B2s3nZC0w/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "1st Test: IND vs SA, Day 2 Highlights",
    duration: "11m",
    thumbnail:
      "https://i.ytimg.com/vi/8mE9dJ6cQqY/maxresdefault.jpg",
  },
  {
    id: 4,
    title: "1st Test: India vs South Africa, Day 3 Highlights",
    duration: "9m",
    thumbnail:
      "https://i.ytimg.com/vi/xk2t8Y5KcW0/maxresdefault.jpg",
  },
  {
    id: 5,
    title: "IND vs SA: Best Moments Compilation",
    duration: "7m",
    thumbnail:
      "https://i.ytimg.com/vi/K9mZP4T8R1Q/maxresdefault.jpg",
  },
  {
    id: 6,
    title: "IND vs SA: Match Winning Spells",
    duration: "6m",
    thumbnail:
      "https://i.ytimg.com/vi/L9x2Y7ZkN3w/maxresdefault.jpg",
  },
];

function HighlightsSlider() {
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
        <h2 className="d_highlight_heading">
          IND vs SA: Highlight
        </h2>

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
              <span className="d_duration">
                {item.duration}
              </span>
            </div>

            <p className="d_highlight_title">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default HighlightsSlider;
