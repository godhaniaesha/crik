import React, { useState, useRef, useEffect } from "react";
import {
  IoIosArrowBack,
  IoIosSearch,
  IoIosNotificationsOutline,
} from "react-icons/io";
import { HiOutlineLockClosed } from "react-icons/hi";
import {
  MdTimer,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdPlayArrow,
  MdReplay10,
  MdForward10,
  MdSettings,
  MdFullscreen,
  MdClose,
  MdCheck,
  MdPause,
} from "react-icons/md";
import "../style/h_style.css";
import maximise from "../img/maximize.png";
import { IoPlayBackOutline, IoPlayForwardOutline } from "react-icons/io5";

const LiveTabContent = () => {
  // Mock Data based on image
  const batters = [
    {
      name: "David Miller",
      isStrike: true,
      r: 49,
      b: 29,
      fours: 3,
      sixes: 2,
      sr: "168.90",
    },
    {
      name: "Tristan Stubbs",
      isStrike: false,
      r: 26,
      b: 13,
      fours: 3,
      sixes: 1,
      sr: "200.00",
    },
  ];

  const bowler = {
    name: "Jofra Archer",
    o: "3.4",
    m: 0,
    r: 41,
    w: 1,
    er: "11.1",
  };
  const recentBalls = [1, 0, 4, 1, 1, 1, 6, "NB", 6, 4, 2, 1];

  return (
    <div className="container-fluid  p-3">
      <div className="row g-4">
        {/* Existing Section (Toss/Insights) */}
        <div className="col-12 d-md-flex align-items-center gap-4">
          <div className="d_match_status_box text-center align-items-center flex-grow-1 p-4 mb-3 mb-md-0">
            <MdTimer size={50} className="text-secondary mb-3" />
            <h4 className="text-white">Match has not started yet.</h4>
            <p className="text-secondary px-3">
              Official live coverage, real-time scores, and ball-by-ball
              commentary will begin at the toss.
            </p>
          </div>

          <div className="flex-grow-1">
            <div className="d_side_card p-4 mb-4 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <IoIosNotificationsOutline
                  size={30}
                  className="text-warning me-3"
                />
                <div>
                  <h6 className="m-0 text-white">Toss in 1h 50m</h6>
                  <small className="text-secondary">19:00 IST Scheduled</small>
                </div>
              </div>
              <button className="btn d_notify_btn">Notify Me</button>
            </div>

            <div className="d_side_card p-4">
              <h6 className="d_section_label mb-4">MATCH INSIGHTS</h6>
              <div className="d_insight_block mb-4">
                <span className="d_badge_label mb-2">Pitch Report</span>
                <p className="small text-secondary m-0">
                  The Wanderers pitch is a batting paradise. High altitude means
                  the ball flies. Expect 200+ runs today. Win toss and chase is
                  the formula.
                </p>
              </div>
              <div className="d_insight_block">
                <span className="d_badge_label mb-2">Squad Update</span>
                <p className="small text-secondary m-0">
                  Jofra Archer is fully fit and confirmed to play. RSA might
                  include an extra spinner.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="d_score_card">
            {/* Top Status Bar */}
            <div className="d_header_row p-3 d-flex flex-wrap justify-content-between align-items-center gap-3">
              <div className="d-flex align-items-center gap-2">
                <span className="d_text_warning_custom fw-bold">Toss:</span>
                <span className="text-white-50 small">
                  Eng won the toss and chose to Batting
                </span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span className="d_text_cyan_custom fw-bold">Target:</span>
                <span className="text-white fw-bold h5 m-0">191</span>
              </div>
            </div>

            <div className="p-4">
              {/* Partnership Bar */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="text-secondary small letter-spacing-1">
                  CURRENT PARTNERSHIP:{" "}
                  <span className="text-white fw-bold ms-1">14 (8)</span>
                </div>
                <button
                  className="btn btn-link text-warning p-0 text-decoration-none small fw-bold"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#d_keyStatsCanvas"
                >
                  MORE
                </button>

                {/* OFFCANVAS */}
                <div
                  className="offcanvas offcanvas-end d_key_canvas"
                  tabIndex="-1"
                  id="d_keyStatsCanvas"
                >
                  <div className="d_key_canvas_header">
                    <h6 className="m-0">KEY STATS</h6>
                    <button
                      className="btn-close btn-close-white"
                      data-bs-dismiss="offcanvas"
                    ></button>
                  </div>

                  <div className="d_key_canvas_body">
                    <div className="d_key_row">
                      <span>Partnership</span>
                      <span>41 (16)</span>
                    </div>

                    <div className="d_key_row">
                      <span>Last Wkt</span>
                      <span>A. Phehlukwayo 3 (4) – 135/5 (16.0 ov)</span>
                    </div>

                    <div className="d_key_row">
                      <span>Last 10 ov</span>
                      <span>92 runs, 3 wkts</span>
                    </div>

                    <div className="d_key_row">
                      <span>Last 5 ov</span>
                      <span>57 runs, 2 wkts</span>
                    </div>

                    <div className="d_key_row">
                      <span>Toss</span>
                      <span>ENG (Batting)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* BATTERS TABLE */}
              <div className="table-responsive">
                <table className="table d_transparent_table">
                  <thead>
                    <tr>
                      <th className="ps-0" style={{ minWidth: "200px" }}>
                        Batters
                      </th>
                      <th className="text-center">R</th>
                      <th className="text-center">B</th>
                      <th className="text-center">4s</th>
                      <th className="text-center">6s</th>
                      <th className="text-end">SR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {batters.map((b, i) => (
                      <tr key={i}>
                        <td className="ps-0 fw-bold">
                          {b.name}{" "}
                          {b.isStrike && (
                            <span className="d_strike_indicator">*</span>
                          )}
                        </td>
                        <td className="text-center d_highlight_bold">{b.r}</td>
                        <td className="text-center text-secondary">{b.b}</td>
                        <td className="text-center">{b.fours}</td>
                        <td className="text-center">{b.sixes}</td>
                        <td className="text-end text-secondary">{b.sr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* BOWLER TABLE */}
              <div className="table-responsive mt-4">
                <table className="table d_transparent_table">
                  <thead>
                    <tr>
                      <th className="ps-0" style={{ minWidth: "200px" }}>
                        Bowler
                      </th>
                      <th className="text-center">O</th>
                      <th className="text-center">M</th>
                      <th className="text-center">R</th>
                      <th className="text-center">W</th>
                      <th className="text-end">ER</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="ps-0 fw-bold text-info">{bowler.name}</td>
                      <td className="text-center">{bowler.o}</td>
                      <td className="text-center">{bowler.m}</td>
                      <td className="text-center">{bowler.r}</td>
                      <td className="text-center fw-bold text-danger h5 m-0">
                        {bowler.w}
                      </td>
                      <td className="text-end text-secondary">{bowler.er}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* RECENT BALLS UI */}
              <div className="mt-5 pt-4 border-top border-secondary">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h6 className="text-secondary small m-0 uppercase letter-spacing-1">
                    Bowler
                  </h6>
                  <span className="badge bg-secondary opacity-50">
                    Over 3.4
                  </span>
                </div>

                {/* Scroll Row */}
                <div className="d_ball_scroll py-2 px-1">
                  {recentBalls.map((run, index) => (
                    <div
                      key={index}
                      className={`d_ball_circle
                      ${run === 4
                          ? "d_ball_four"
                          : run === 6
                            ? "d_ball_six"
                            : run === 0
                              ? "d_ball_dot"
                              : run === "NB"
                                ? "d_ball_nb"
                                : "d_ball_run"
                        }`}
                    >
                      {run}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScorecardTabContent = () => {
  const [activeTeam, setActiveTeam] = useState("ENG"); // Squad tab selection
  const [openInnings, setOpenInnings] = useState("SA"); // Scorecard toggle selection

  // Detailed Match Data (Based on images)
  const saData = {
    total: "176/4",
    overs: "18.4",
    batters: [
      {
        name: "Q. de Kock (wk)",
        out: "c Salt b Topley",
        r: 18,
        b: 12,
        f4: 2,
        s6: 1,
        sr: "150.00",
      },
      {
        name: "R. Hendricks",
        out: "b Rashid",
        r: 24,
        b: 20,
        f4: 2,
        s6: 0,
        sr: "120.00",
      },
      {
        name: "A. Markram (c)",
        out: "c Brook b Livingstone",
        r: 35,
        b: 25,
        f4: 3,
        s6: 1,
        sr: "140.00",
      },
      {
        name: "H. Klaasen",
        out: "b Archer",
        r: 12,
        b: 8,
        f4: 0,
        s6: 1,
        sr: "150.00",
      },
      {
        name: "David Miller",
        out: "Not Out",
        r: 48,
        b: 28,
        f4: 3,
        s6: 2,
        sr: "171.42",
        isStrike: true,
      },
      {
        name: "Tristan Stubbs",
        out: "Not Out",
        r: 24,
        b: 14,
        f4: 2,
        s6: 1,
        sr: "171.40",
        isStrike: true,
      },
    ],
    extras: "15 (lb 4, w 10, nb 1)",
    didNotBat: "Coetzee, Maharaj, Rabada, Nortje",
    bowlers: [
      { name: "Reece Topley", o: "4.0", m: 0, r: 32, w: 1, er: "8.00" },
      { name: "Sam Curran", o: "4.0", m: 0, r: 45, w: 1, er: "11.20" },
      { name: "Adil Rashid", o: "4.0", m: 0, r: 28, w: 1, er: "7.00" },
    ],
    fallOfWickets: [
      { p: "Q. de Kock", s: "30-1", o: "3.4" },
      { p: "Reeza Hendricks", s: "75-2", o: "9.1" },
    ],
  };

  const engData = {
    total: "190/7",
    overs: "20",
    batters: [
      {
        name: "Phil Salt",
        out: "c Miller b Rabada",
        r: 15,
        b: 10,
        f4: 2,
        s6: 0,
        sr: "150.00",
      },
      {
        name: "Jos Buttler (c)",
        out: "c Klaasen b Jansen",
        r: 72,
        b: 45,
        f4: 6,
        s6: 3,
        sr: "160.00",
      },
    ],
    extras: "2 (w 2)",
    didNotBat: "Marco Jansen, Gerald Coetzee, Keshav Maharaj",
    bowlers: [
      { name: "Marco Jansen", o: "4.0", m: 0, r: 40, w: 1, er: "10.00" },
      { name: "Kagiso Rabada", o: "4.0", m: 0, r: 32, w: 1, er: "8.00" },
    ],
  };

  const squads = {
    ENG: {
      batters: [
        { name: "Jos Buttler (C) (WK)", meta: "(RHB)" },
        { name: "Phil Salt", meta: "(RHB)" },
        { name: "Will Jacks", meta: "(RHB)" },
        { name: "Jonny Bairstow", meta: "(RHB)" },
        { name: "Harry Brook", meta: "(RHB)" },
      ],
      allRounders: [
        { name: "Moeen Ali", meta: "(LHB) (Offbreak)" },
        { name: "Liam Livingstone", meta: "(RHB) (Legbreak)" },
        { name: "Sam Curran", meta: "(LHB) (Left Arm Medium)" },
      ],
      bowlers: [
        { name: "Jofra Archer", meta: "(Right Arm Fast)" },
        { name: "Adil Rashid", meta: "(Legbreak)" },
        { name: "Reece Topley", meta: "(Left Arm Fast Medium)" },
      ],
    },
    RAS: {
      batters: [
        { name: "Quinton de Kock (WK)", meta: "(LHB)" },
        { name: "Reeza Hendricks", meta: "(RHB)" },
        { name: "Aiden Markram (C)", meta: "(RHB)" },
        { name: "Heinrich Klaasen", meta: "(RHB)" },
        { name: "David Miller", meta: "(LHB)" },
      ],
      allRounders: [{ name: "Marco Jansen", meta: "(LHB) (Left Arm Fast)" }],
      bowlers: [
        { name: "Kagiso Rabada", meta: "(Right Arm Fast)" },
        { name: "Anrich Nortje", meta: "(Right Arm Fast)" },
        { name: "Keshav Maharaj", meta: "(SLA)" },
        { name: "Tabraiz Shamsi", meta: "(LWS)" },
        { name: "Ottneil Baartman", meta: "(Right Arm Medium Fast)" },
      ],
    },
  };

  // Helper to render Innings Table
  const renderInnings = (teamName, data) => (
    <div className="d_card mb-3">
      <div
        className="d_innings_header p-3 d-flex justify-content-between align-items-center"
        onClick={() => setOpenInnings(openInnings === teamName ? "" : teamName)}
        style={{ cursor: "pointer", background: "#111" }}
      >
        <h6 className="m-0 fw-bold text-white">
          {teamName === "SA" ? "SOUTH AFRICA" : "ENGLAND"}
          <span className="d_text_muted small ms-2">
            ({data.overs}) {data.total}
          </span>
        </h6>
        {openInnings === teamName ? (
          <MdKeyboardArrowUp size={24} className="text-white" />
        ) : (
          <MdKeyboardArrowDown size={24} className="text-white" />
        )}
      </div>

      {openInnings === teamName && (
        <div className="d_innings_body">
          <div className="table-responsive">
            <table className="table d_transparent_table">
              <thead>
                <tr>
                  <th className="ps-3">Batters</th>
                  <th className="text-end">R</th>
                  <th className="text-end">B</th>
                  <th className="text-end d-none d-md-table-cell">4s</th>
                  <th className="text-end d-none d-md-table-cell">6s</th>
                  <th className="text-end pe-3">SR</th>
                </tr>
              </thead>
              <tbody>
                {data.batters.map((b, i) => (
                  <tr key={i}>
                    <td className="ps-3">
                      <div className="text-white fw-bold">
                        {b.name}{" "}
                        {b.isStrike && <span className="text-danger">*</span>}
                      </div>
                      <div className="d_text_muted small">{b.out}</div>
                    </td>
                    <td className="text-end fw-bold text-white">{b.r}</td>
                    <td className="text-end d_text_muted">{b.b}</td>
                    <td className="text-end d-none d-md-table-cell d_text_muted">
                      {b.f4}
                    </td>
                    <td className="text-end d_none d-md-table-cell d_text_muted">
                      {b.s6}
                    </td>
                    <td className="text-end pe-3 d_text_muted">{b.sr}</td>
                  </tr>
                ))}
                {/* Extras & Did Not Bat */}
                <tr>
                  <td colSpan="6" className="ps-3 py-3 border-0">
                    <div className="d-flex gap-2 small">
                      <span className="d_text_muted fw-bold">EXTRAS:</span>
                      <span className="text-white">{data.extras}</span>
                    </div>
                    <div className="d-flex gap-2 small mt-2">
                      <span className="d_text_muted fw-bold">DID NOT BAT:</span>
                      <span className="text-white">{data.didNotBat}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bowlers Table */}
          <div className="table-responsive border-top border-secondary">
            <table className="table d_transparent_table">
              <thead>
                <tr className="d_text_muted">
                  <th className="ps-3">Bowler</th>
                  <th className="text-end">O</th>
                  <th className="text-end">M</th>
                  <th className="text-end">R</th>
                  <th className="text-end">W</th>
                  <th className="text-end pe-3">ER</th>
                </tr>
              </thead>
              <tbody>
                {data.bowlers.map((bw, i) => (
                  <tr key={i}>
                    <td className="ps-3 text-white">{bw.name}</td>
                    <td className="text-end text-white">{bw.o}</td>
                    <td className="text-end text-white">{bw.m}</td>
                    <td className="text-end text-white">{bw.r}</td>
                    <td className="text-end fw-bold text-white">{bw.w}</td>
                    <td className="text-end pe-3 d_text_muted">{bw.er}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="d_scorecard_root container-fluid py-3">
      <div className="row justify-content-center">
        <div className="col-12">
          {/* Header Status */}
          <div className="d_match_status_box text-center p-4 mb-4">
            <MdTimer size={50} className="text-secondary mb-3" />
            <h4 className="text-white">Match In Progress</h4>
            <p className="text-secondary small">
              Live Scorecard & Playing XI below.
            </p>
          </div>
        </div>

        {/* Left Column: Full Scorecard */}
        <div className="col-lg-7 col-12">
          {/* Playing XI Section (Existing logic) */}
          <div className="d_tab_container ">
            <button
              className={`d_tab_btn ${activeTeam === "ENG" ? "active" : ""}`}
              onClick={() => setActiveTeam("ENG")}
            >
              ENG
            </button>
            <button
              className={`d_tab_btn ${activeTeam === "RAS" ? "active" : ""}`}
              onClick={() => setActiveTeam("RAS")}
            >
              RAS
            </button>
          </div>
          <div className="d_squad_card p-4 mt-2">
            <h6 className="text-white fw-bold mb-3">
              {activeTeam === "ENG" ? "ENGLAND" : "SOUTH AFRICA"} (Playing XI)
            </h6>
            <div className="d_section_title">Batters</div>
            {squads[activeTeam].batters.map((p, i) => (
              <div key={i} className="d_player_item">
                {i + 1}. {p.name}{" "}
                <span className="d_player_meta">{p.meta}</span>
              </div>
            ))}
            <div className="d_section_title">All-Rounders</div>
            {squads[activeTeam].allRounders.map((p, i) => (
              <div key={i} className="d_player_item">
                {squads[activeTeam].batters.length + i + 1}. {p.name}{" "}
                <span className="d_player_meta">{p.meta}</span>
              </div>
            ))}
            <div className="d_section_title">Bowlers</div>
            {squads[activeTeam].bowlers.map((p, i) => (
              <div key={i} className="d_player_item border-0">
                {squads[activeTeam].batters.length +
                  squads[activeTeam].allRounders.length +
                  i +
                  1}
                . {p.name} <span className="d_player_meta">{p.meta}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Match Info */}
        <div className="col-lg-5 col-12 mt-lg-0 mt-4">
          <div className="d_match_info_box sticky-top" style={{ top: "20px" }}>
            <div className="d_info_header">Match Info</div>
            <div className="d_info_row">
              <span className="d_info_label">Toss:</span>
              <span className="d_info_value">
                Eng won the toss and chose to Batting.
              </span>
            </div>
            <div className="d_info_row">
              <span className="d_info_label">Umpires:</span>
              <span className="d_info_value">
                Richard Kettleborough, Joel Wilson
              </span>
            </div>
            <div className="d_info_row">
              <span className="d_info_label">Third Umpire:</span>
              <span className="d_info_value">Kumar Dharmasena</span>
            </div>
            <div className="d_info_row border-0">
              <span className="d_info_label">Match Referee:</span>
              <span className="d_info_value">Richie Richardson</span>
            </div>

            {/* Venue Insight (Optional) */}
            <div className="p-3 border-top border-secondary mt-2">
              <span className="d_badge_label bg-dark text-warning mb-2 d-inline-block">
                Pitch Report
              </span>
              <p className="small text-secondary m-0">
                Balanced pitch with support for fast bowlers early on. Expect
                high scores in middle overs.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 mt-3">
          <h6 className="d_section_label text-secondary mb-3">
            MATCH SCORECARD
          </h6>
          {renderInnings("SA", saData)}
          {renderInnings("ENG", engData)}
        </div>
      </div>
    </div>
  );
};

const OversTabContent = () => (
  <div className="col-12">
    {/* Header Status */}
    <div className="d_match_status_box text-center p-4 mb-4">
      <MdTimer size={50} className="text-secondary mb-3" />
      <h4 className="text-white">Waiting for the first ball</h4>
      <p className="text-secondary small">
        Ball-by-ball analysis, wagon wheels, and over summaries will appear here
        live.
      </p>
    </div>
  </div>
);

const CommentaryTabContent = () => (
  <div className="col-12">
    <div className="d_side_card p-4 text-white">
      Commentary will appear here.
    </div>
  </div>
);

const SquadsTabContent = () => (
  <div className="col-12">
    <div className="d_side_card p-4 text-white">
      Squad details will appear here.
    </div>
  </div>
);

const PointsTableTabContent = () => (
  <div className="col-12">
    <div className="d_side_card p-4 text-white">
      Points table will appear here.
    </div>
  </div>
);

const VideosTabContent = () => (
  <div className="col-12">
    <div className="d_side_card p-4 text-white">
      Match videos will appear here.
    </div>
  </div>
);

// Sample video URL – replace with your match stream / VOD
const VIDEO_SRC =
  "https://www.shutterstock.com/shutterstock/videos/1029135716/preview/stock-footage-mumbai-india-december-people-playing-cricket-in-the-central-park-at-mumbai-slow-motion.webm";

export default function MatchVideo() {
  const [activeTab, setActiveTab] = useState("LIVE");

  // ========== LIVE FUNCTIONALITY ==========
  const [isLive, setIsLive] = useState(false);
  const goToLive = () => {
    setIsLive(true);
    const v = videoRef.current;
    if (v) {
      const d = v.duration;
      if (isFinite(d) && d > 0) v.currentTime = d;
      v.play().catch(() => { });
    }
    setIsPlaying(true);
  };

  // ========== VIDEO FUNCTIONALITY ==========
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [selectedQuality, setSelectedQuality] = useState(
    "Full HD (Upto 1080p 50fps)",
  );
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const controlsTimeoutRef = useRef(null);
  const timelineRef = useRef(null);
  const isScrubbingRef = useRef(false);

  const formatTime = (seconds) => {
    const s = Math.max(0, Math.floor(seconds));
    const m = Math.floor(s / 60);
    return `${String(m).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  };

  const togglePlayPause = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => { });
      if (totalDuration > 0 && v.currentTime >= totalDuration - 1)
        setIsLive(true);
    } else {
      v.pause();
    }
  };

  const rewind = () => {
    const v = videoRef.current;
    if (!v) return;
    const t = Math.max(0, (v.currentTime || 0) - 10);
    v.currentTime = t;
    setCurrentTime(t);
    if (t < (v.duration || 0) - 1) setIsLive(false);
  };

  const forward = () => {
    const v = videoRef.current;
    if (!v) return;
    const d = v.duration || 0;
    const t = Math.min(d, (v.currentTime || 0) + 10);
    v.currentTime = t;
    setCurrentTime(t);
    if (t >= d - 1) setIsLive(true);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      playerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleShowControls = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
  };

  const seekFromClientX = (clientX) => {
    const v = videoRef.current;
    const el = timelineRef.current;
    if (!v || !v.duration || !el) return;
    const rect = el.getBoundingClientRect();
    const p = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const t = p * v.duration;
    v.currentTime = t;
    setCurrentTime(t);
    setIsLive(t >= v.duration - 1);
  };

  const handleTimelineClick = (e) => {
    if (isScrubbingRef.current) return;
    seekFromClientX(e.clientX);
  };

  const handleScrubberMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isLive) return;
    isScrubbingRef.current = true;
    seekFromClientX(e.clientX);

    const onMouseMove = (ev) => {
      ev.preventDefault();
      seekFromClientX(ev.clientX);
    };
    const onMouseUp = (ev) => {
      ev.preventDefault();
      seekFromClientX(ev.clientX);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      isScrubbingRef.current = false;
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const handleScrubberTouchStart = (e) => {
    if (isLive) return;
    const touch = e.touches[0];
    if (!touch) return;
    isScrubbingRef.current = true;
    seekFromClientX(touch.clientX);

    const onTouchMove = (ev) => {
      ev.preventDefault();
      const t = ev.touches[0];
      if (t) seekFromClientX(t.clientX);
    };
    const onTouchEnd = (ev) => {
      const t = ev.changedTouches[0];
      if (t) seekFromClientX(t.clientX);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
      isScrubbingRef.current = false;
    };

    document.addEventListener("touchmove", onTouchMove, { passive: false });
    document.addEventListener("touchend", onTouchEnd);
  };

  const progressPercentage = totalDuration
    ? isLive
      ? 100
      : (currentTime / totalDuration) * 100
    : 0;

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTimeUpdate = () => setCurrentTime(v.currentTime);
    const onLoadedMetadata = () => setTotalDuration(v.duration);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);
    v.addEventListener("timeupdate", onTimeUpdate);
    v.addEventListener("loadedmetadata", onLoadedMetadata);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("ended", onEnded);
    return () => {
      v.removeEventListener("timeupdate", onTimeUpdate);
      v.removeEventListener("loadedmetadata", onLoadedMetadata);
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("ended", onEnded);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    };
  }, []);

  const renderActiveTab = () => {
    switch (activeTab) {
      case "LIVE":
        return <LiveTabContent />;
      case "SCORECARD":
        return <ScorecardTabContent />;
      case "OVERS":
        return <OversTabContent />;
      case "COMMENTARY":
        return <CommentaryTabContent />;
      case "SQUADS":
        return <SquadsTabContent />;
      case "P. TABLE":
        return <PointsTableTabContent />;
      case "VIDEOS":
        return <VideosTabContent />;
      default:
        return null;
    }
  };

  return (
    <div className="d_match_details_page">
      {/* Header / Navbar */}
      <nav className="d_navbar d-flex align-items-center justify-content-between px-3 px-md-5 py-3">
        <div className="d-flex align-items-center">
          <IoIosArrowBack className="d_back_icon me-2 me-md-3" size={24} />
          <h5 className="m-0 d_header_title">ENG vs RSA — 3rd T20I LIVE</h5>
        </div>
        <IoIosSearch className="text-white cursor-pointer" size={26} />
      </nav>

      <div className="container py-4 py-md-5">
        <div className="row g-4">
          {/* LEFT COLUMN: Main Match Info */}
          <div className="col-12 col-lg-12 p-0">
            {/* Video Player Section */}
            <div
              className="h_video_player_wrapper mb-4"
              ref={playerRef}
              onMouseMove={handleShowControls}
              onMouseLeave={() => {
                if (isPlaying) setShowControls(false);
              }}
              onTouchStart={handleShowControls}
            >
              {/* Video Container */}
              <div className="h_video_container">
                {/* Video element */}
                <video
                  ref={videoRef}
                  src={VIDEO_SRC}
                  className="h_video_element"
                  playsInline
                  onClick={togglePlayPause}
                />

                {/* Controls Overlay */}
                <div
                  className={`h_video_controls ${showControls || !isPlaying ? "h_show_controls" : ""
                    }`}
                >
                  <div
                    className="h_video_controls_backdrop"
                    aria-hidden="true"
                  />

                  {/* Video Controls - only when paused or hovered */}
                  {(!isPlaying || showControls) && (
                    <>
                      {/* Top Right Controls */}
                      <div className="h_top_controls">
                        <button
                          className="h_control_btn"
                          onClick={() => setShowSettings(true)}
                        >
                          <MdSettings size={24} />
                        </button>
                        <button
                          className="h_control_btn"
                          onClick={toggleFullscreen}
                        >
                          <img src={maximise} alt="fullscreen" />
                        </button>
                      </div>

                      {/* Center Playback Controls */}
                      <div className="h_center_controls">
                        <button className="h_nav_btn" onClick={rewind}>
                          <IoPlayBackOutline size={32} />
                        </button>
                        <button
                          className="h_play_pause_btn"
                          onClick={togglePlayPause}
                        >
                          {isPlaying ? (
                            <MdPause size={48} />
                          ) : (
                            <MdPlayArrow size={48} />
                          )}
                        </button>
                        <button className="h_nav_btn" onClick={forward}>
                          <IoPlayForwardOutline size={32} />
                        </button>
                      </div>
                    </>
                  )}

                  {/* Bottom Control Bar - show timeline only when not live or when controls visible */}
                  {(!isLive || showControls || !isPlaying) && (
                    <div className="h_bottom_controls">
                      {/* Timeline - hide when live and playing without hover */}
                      {(!isLive || showControls || !isPlaying) && (
                        <div
                          className={`h_timeline_container ${isLive ? "h_timeline_live" : ""}`}
                        >
                          <div
                            ref={timelineRef}
                            className="h_timeline"
                            onClick={handleTimelineClick}
                            role="slider"
                            aria-label="Video timeline"
                          >
                            <div
                              className="h_timeline_progress"
                              style={{ width: `${progressPercentage}%` }}
                            >
                              {!isLive && (
                                <div
                                  className="h_timeline_scrubber"
                                  onMouseDown={handleScrubberMouseDown}
                                  onTouchStart={handleScrubberTouchStart}
                                  role="slider"
                                  aria-label="Scrub video"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                      <div
                        className={`h_control_bar ${isLive ? "h_control_bar_live" : ""}`}
                      >
                        {!isLive && (
                          <span className="h_time_display">
                            {formatTime(currentTime)}
                          </span>
                        )}
                        <div className="h_live_section">
                          {isLive ? (
                            <span className="h_live_indicator">LIVE</span>
                          ) : (
                            <button
                              type="button"
                              className="h_go_live_btn"
                              onClick={goToLive}
                            >
                              GO LIVE
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Live-only minimal overlay - outside controls so always visible when live */}
                {isLive && isPlaying && !showControls && (
                  <div className="h_live_minimal_overlay">
                    <span className="h_live_indicator">LIVE</span>
                  </div>
                )}
              </div>

              {/* Settings dropdown – video ની અંદર (fullscreen માં પણ) */}
              {showSettings && (
                <>
                  <div
                    className="h_settings_overlay"
                    onClick={() => setShowSettings(false)}
                  />
                  <div
                    className={`h_settings_modal ${showSettings ? "h_show" : ""}`}
                  >
                    <div className="h_settings_header">
                      <h6 className="h_settings_title">Video Settings</h6>
                      <button
                        className="h_settings_close_btn"
                        onClick={() => setShowSettings(false)}
                      >
                        <MdClose size={24} />
                      </button>
                    </div>
                    <div className="h_settings_content">
                      <div
                        className={`h_quality_option ${selectedQuality === "Auto (Recommended)"
                          ? "h_selected"
                          : ""
                          }`}
                        onClick={() => setSelectedQuality("Auto (Recommended)")}
                      >
                        {selectedQuality === "Auto (Recommended)" && (
                          <MdCheck className="h_check_icon" size={20} />
                        )}
                        <span>Auto (Recommended)</span>
                      </div>
                      <div
                        className={`h_quality_option ${selectedQuality === "Full HD (Upto 1080p 50fps)"
                          ? "h_selected"
                          : ""
                          }`}
                        onClick={() =>
                          setSelectedQuality("Full HD (Upto 1080p 50fps)")
                        }
                      >
                        {selectedQuality === "Full HD (Upto 1080p 50fps)" && (
                          <MdCheck className="h_check_icon" size={20} />
                        )}
                        <span>Full HD (Upto 1080p 50fps)</span>
                      </div>
                      <div
                        className={`h_quality_option ${selectedQuality === "Full HD (Upto 1080p 25fps)"
                          ? "h_selected"
                          : ""
                          }`}
                        onClick={() =>
                          setSelectedQuality("Full HD (Upto 1080p 25fps)")
                        }
                      >
                        {selectedQuality === "Full HD (Upto 1080p 25fps)" && (
                          <MdCheck className="h_check_icon" size={20} />
                        )}
                        <span>Full HD (Upto 1080p 25fps)</span>
                      </div>
                      <div
                        className={`h_quality_option ${selectedQuality === "HD (Upto 720p)"
                          ? "h_selected"
                          : ""
                          }`}
                        onClick={() => setSelectedQuality("HD (Upto 720p)")}
                      >
                        {selectedQuality === "HD (Upto 720p)" && (
                          <MdCheck className="h_check_icon" size={20} />
                        )}
                        <span>HD (Upto 720p)</span>
                      </div>
                      <div
                        className={`h_quality_option ${selectedQuality === "Data Saver" ? "h_selected" : ""
                          }`}
                        onClick={() => setSelectedQuality("Data Saver")}
                      >
                        {selectedQuality === "Data Saver" && (
                          <MdCheck className="h_check_icon" size={20} />
                        )}
                        <span>Data Saver</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Tabs Section */}
            <div className="d_tabs_scroll_wrapper mb-4">
              <div className="d_tabs_container d-flex border-bottom border-secondary">
                <div
                  className={`d_tab_item ${activeTab === "LIVE" ? "active" : ""}`}
                  onClick={() => setActiveTab("LIVE")}
                >
                  LIVE
                </div>
                <div
                  className={`d_tab_item ${activeTab === "SCORECARD" ? "active" : ""
                    }`}
                  onClick={() => setActiveTab("SCORECARD")}
                >
                  SCORECARD
                </div>
                <div
                  className={`d_tab_item ${activeTab === "OVERS" ? "active" : ""}`}
                  onClick={() => setActiveTab("OVERS")}
                >
                  OVERS
                </div>
                <div
                  className={`d_tab_item ${activeTab === "COMMENTARY" ? "active" : ""
                    }`}
                  onClick={() => setActiveTab("COMMENTARY")}
                >
                  COMMENTARY
                </div>
                <div
                  className={`d_tab_item ${activeTab === "SQUADS" ? "active" : ""
                    }`}
                  onClick={() => setActiveTab("SQUADS")}
                >
                  SQUADS
                </div>
                <div
                  className={`d_tab_item ${activeTab === "P. TABLE" ? "active" : ""
                    }`}
                  onClick={() => setActiveTab("P. TABLE")}
                >
                  P. TABLE
                </div>
                <div
                  className={`d_tab_item ${activeTab === "VIDEOS" ? "active" : ""
                    }`}
                  onClick={() => setActiveTab("VIDEOS")}
                >
                  VIDEOS
                </div>
              </div>
            </div>
          </div>

          {renderActiveTab()}
        </div>
      </div>
    </div>
  );
}
