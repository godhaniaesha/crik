import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import { FaCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../style/d_slider.css";

const matches = [
  {
    id: 1,
    status: "LIVE",
    isLive: true,
    matchType: "T20I",
    matchNumber: "3rd T20I",
    venue: "Adelaide Oval",
    team1: {
      code: "IND",
      name: "India",
      flag: "https://flagcdn.com/w40/in.png",
      score: 225,
      wickets: 5,
      overs: "20.0",
    },
    team2: {
      code: "AUS",
      name: "Australia",
      flag: "https://flagcdn.com/w40/au.png",
      score: 159,
      wickets: 9,
      overs: "18.4",
    },
    note: "Australia need 66 runs in 8 balls",
  },

  {
    id: 2,
    status: "DRINKS",
    isLive: true,
    matchType: "TEST",
    matchNumber: "2nd Test",
    venue: "Wellington",
    team1: {
      code: "NZ",
      name: "New Zealand",
      flag: "https://flagcdn.com/w40/nz.png",
      score: 210,
      wickets: 4,
      overs: "62.1",
    },
    team2: {
      code: "ENG",
      name: "England",
      flag: "https://flagcdn.com/w40/gb-eng.png",
    },
    note: "Day 1 – Drinks Break",
  },

  {
    id: 3,
    status: "UPCOMING",
    isLive: false,
    matchType: "T20",
    matchNumber: "Qualifier 1",
    venue: "Narendra Modi Stadium",
    team1: {
      code: "CSK",
      name: "Chennai Super Kings",
      flag: "https://upload.wikimedia.org/wikipedia/en/2/2b/Chennai_Super_Kings_Logo.svg",
    },
    team2: {
      code: "MI",
      name: "Mumbai Indians",
      flag: "https://upload.wikimedia.org/wikipedia/en/c/cd/Mumbai_Indians_Logo.svg",
    },
    note: "Match starts at 7:30 PM IST",
  },

  {
    id: 4,
    status: "RESULT",
    isLive: false,
    matchType: "ODI",
    matchNumber: "Final",
    venue: "Dubai",
    team1: {
      code: "PAK",
      name: "Pakistan",
      flag: "https://flagcdn.com/w40/pk.png",
      score: 287,
      wickets: 10,
    },
    team2: {
      code: "SL",
      name: "Sri Lanka",
      flag: "https://flagcdn.com/w40/lk.png",
      score: 289,
      wickets: 7,
    },
    note: "Sri Lanka won by 3 wickets",
  },

  {
    id: 5,
    status: "LIVE",
    isLive: true,
    matchType: "T20I",
    matchNumber: "1st T20I",
    venue: "Eden Gardens",
    team1: {
      code: "IND",
      name: "India",
      flag: "https://flagcdn.com/w40/in.png",
      score: 198,
      wickets: 6,
      overs: "19.2",
    },
    team2: {
      code: "ENG",
      name: "England",
      flag: "https://flagcdn.com/w40/gb-eng.png",
      score: 165,
      wickets: 7,
      overs: "17.4",
    },
    note: "England need 34 runs in 14 balls",
  },

  {
    id: 6,
    status: "UPCOMING",
    isLive: false,
    matchType: "T20",
    matchNumber: "League Match",
    venue: "Wankhede Stadium",
    team1: {
      code: "RCB",
      name: "Royal Challengers Bengaluru",
      flag: "https://www.royalchallengers.com/themes/custom/rcbbase/images/rcb-logo-new.png",
    },
    team2: {
      code: "KKR",
      name: "Kolkata Knight Riders",
      flag: "https://upload.wikimedia.org/wikipedia/en/4/4c/Kolkata_Knight_Riders_Logo.svg",
    },
    note: "IPL 2025 – Match Day",
  },
];

function LiveUpc() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -360, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 360, behavior: "smooth" });
  };

  return (
    <Container fluid className="d_slider_wrapper">
      {/* HEADER */}
      <div className="d_slider_header">
        <h3 className="d_slider_title">Live & Upcoming Match</h3>

        <div className="d_slider_arrows">
          <button onClick={scrollLeft}>
            <FaChevronLeft />
          </button>
          <button onClick={scrollRight}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div className="d_slider" ref={sliderRef}>
        {matches.map((item) => (
          <div className="d_match_card" key={item.id}>
            {/* Header */}
            <div className="d_match_header">
              <span
                className={`d_status ${item.isLive ? "d_live" : "d_break"}`}
              >
                {item.isLive && <FaCircle className="d_live_dot" />}
                {item.status}
              </span>

              <span className="d_match_title">
                {item.matchNumber} • {item.matchType} • {item.venue}
              </span>
            </div>

            {/* Body */}
            <div className="d_match_body">
              <div className="d_team">
                <div>
                  <img
                    src={item.team1.flag}
                    alt={item.team1.code}
                    className="d_flag"
                  />

                  <span className="d_team_code">{item.team1.code}</span>
                </div>
                {item.team1.score !== undefined && (
                  <span className="d_score">
                    {item.team1.score}/{item.team1.wickets}
                    <small> ({item.team1.overs})</small>
                  </span>
                )}
              </div>

              <div className="d_team">
                <div>
                   <img
                    src={item.team1.flag}
                    alt={item.team1.code}
                    className="d_flag"
                  />
                  <span className="d_team_code">{item.team2.code}</span>
                </div>
                {item.team2.score !== undefined && (
                  <span className="d_score">
                    {item.team2.score}/{item.team2.wickets}
                    <small> ({item.team2.overs})</small>
                  </span>
                )}
              </div>
            </div>

            {/* Footer */}
            {item.note && <div className="d_match_footer">{item.note}</div>}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default LiveUpc;
