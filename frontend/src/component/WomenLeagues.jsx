import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../style/d_slider.css";
import v1 from "../img/v4.png";
import v2 from "../img/v5.png";
import v3 from "../img/v6.png";

const d_highlights = [
  {
    id: 1,
    title: "IND vs SA 2nd Test | Full Match Highlights",
    duration: "3m",
    thumbnail: v1,
  },
  {
    id: 2,
    title: "IND vs SA 2nd Test | Day 1 Highlights",
    duration: "14m",
    thumbnail:
      "https://www.iplcricketmatch.com/wp-content/uploads/2025/10/gettyimages-2187432067-612x612-1.jpg",
  },
  {
    id: 3,
    title: "IND vs SA 1st Test | Day 2 Highlights",
    duration: "11m",
    thumbnail: v3,
  },
  {
    id: 4,
    title: "IND vs SA 1st Test | Day 3 Highlights",
    duration: "9m",
    thumbnail: v2,
  },
  {
    id: 5,
    title: "IND vs SA | Best Match Moments",
    duration: "7m",
    thumbnail:
      "https://images.supersport.com/media/hrfe4lzw/cri_091125_wbb_stvhob_hd13.png?width=1920&quality=90&format=webp",
  },
  {
    id: 6,
    title: "IND vs SA | Match-Winning Performances",
    duration: "6m",
    thumbnail:
      "https://live-production.wcms.abc-cdn.net.au/e480148df4d9b6cdf41508d1fee2f9f5?impolicy=wcms_crop_resize&cropH=1800&cropW=2708&xPos=0&yPos=197&width=862&height=575",
  },
];

function WomenLeagues() {
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
        <h2 className="d_highlight_heading">Women's Big Bash League 2025</h2>

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

export default WomenLeagues;
