import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../style/d_slider.css";
import v1 from "../img/v1.png";
import v2 from "../img/v2.png";
import v3 from "../img/v3.png";

const d_highlights = [
  {
    id: 1,
    title: "2nd Test: IND vs SA, Full Match Highlights",
    duration: "3m",
    thumbnail: v1,
  },
  {
    id: 2,
    title: "2nd Test: India vs South Africa, Day 1 Highlights",
    duration: "14m",
    thumbnail: "https://i.ytimg.com/vi/bGWJ2B8a1Ys/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "1st Test: IND vs SA, Day 2 Highlights",
    duration: "11m",
    thumbnail: v3,
  },
  {
    id: 4,
    title: "1st Test: India vs South Africa, Day 3 Highlights",
    duration: "9m",

    thumbnail: v2,
  },
  {
    id: 5,
    title: "IND vs SA: Best Moments Compilation",
    duration: "7m",
    thumbnail:
      "https://i.ytimg.com/vi/kXBsM0LaEf8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDIox9x2fmUfBkz4sco5pAxzsqqkQ",
  },
  {
    id: 6,
    title: "IND vs SA: Match Winning Spells",
    duration: "6m",
    thumbnail:
      "https://i.ytimg.com/vi/DWgRT0N8v_E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCdry34QkkkOJf5KX9CebVbPCt28A",
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
        <h2 className="d_highlight_heading">IND vs SA: Highlight</h2>

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

export default HighlightsSlider;