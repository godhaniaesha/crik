import React, { useState } from "react";
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
  MdSettingsVoice,
} from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import { RiEditCircleLine, RiVideoLine } from "react-icons/ri";
import "../style/d_style.css";
// import "../style/x_style.css";
import p1 from "../img/squads/Player Image.png";
import p2 from "../img/squads/Player Image-1.png";
import p3 from "../img/squads/Player Image-2.png";
import p4 from "../img/squads/Player Image-3.png";
import p5 from "../img/squads/Player Image-4.png";
import p6 from "../img/squads/Player Image-5.png";
import p7 from "../img/squads/Player Image-6.png";
import p8 from "../img/squads/Player Image-7.png";
import p9 from "../img/squads/Player Image-8.png";
import p10 from "../img/squads/Player Image-9.png";
import p11 from "../img/squads/Player Image-10.png";
import p12 from "../img/squads/Player Image-11.png";
import p13 from "../img/squads/Player Image-12.png";
import p14 from "../img/squads/Player Image-13.png";
import p15 from "../img/squads/Player Image-14.png";
import p16 from "../img/squads/Player Image-15.png";
import p17 from "../img/squads/Player Image-16.png";
import p18 from "../img/squads/Player Image-17.png";
import p19 from "../img/squads/Player Image-18.png";
import p20 from "../img/squads/Player Image-19.png";
import p21 from "../img/squads/Player Image-20.png";
import p22 from "../img/squads/Player Image-21.png";
import p23 from "../img/squads/Player Image-22.png";
import p24 from "../img/squads/Player Image-23.png";
import p25 from "../img/squads/Player Image-24.png";
import p26 from "../img/squads/Player Image-25.png";
import p27 from "../img/squads/Player Image-26.png";
import p28 from "../img/squads/Player Image-27.png";
import p29 from "../img/squads/Player Image-28.png";
import p30 from "../img/squads/Player Image-29.png";
import v1 from "../img/v1.png";
import v2 from "../img/v2.png";
import v3 from "../img/v3.png";

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
          ${
            run === 4
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
            <GiSandsOfTime size={50} className="text-secondary mb-3" />
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

const OversTabContent = () => {
  // બંને ટીમો માટે અલગ સ્ટેટ જેથી બાજુ-બાજુમાં હોય ત્યારે બંને ખુલી શકે
  const [openSA, setOpenSA] = useState(true);
  const [openENG, setOpenENG] = useState(true);

  // મેચ ડેટા (ઓવર ૧ થી અત્યાર સુધીની વિગતો)
  const matchOvers = {
    SA: [
      {
        ov: 18.4,
        runs: 6,
        score: "176-5",
        bowler: "Jofra Archer",
        balls: ["1", "0", "4", "1"],
        desc: "Stubbs ramps it over the keeper for four! England under pressure.",
      },
      {
        ov: 18,
        runs: 22,
        score: "170-5",
        bowler: "Sam Curran",
        balls: ["1", "1", "6", "NB+1", "6", "4", "2"],
        desc: "Game Changer! Miller destroys Curran. Momentum shifts to SA.",
      },
      {
        ov: 17,
        runs: 10,
        score: "148-5",
        bowler: "Reece Topley",
        balls: ["1", "1", "4", "2", "1", "1"],
        desc: "Good running between the wickets.",
      },
      {
        ov: 16,
        runs: 6,
        score: "138-5",
        bowler: "Jofra Archer",
        balls: ["W", "0", "1", "WD", "1", "2", "1"],
        desc: "Wicket! Phehlukwayo gone.",
      },
      {
        ov: 15,
        runs: 8,
        score: "132-4",
        bowler: "Adil Rashid",
        balls: ["1", "1", "0", "2", "4", "0"],
        desc: "Rashid keeps things tight.",
      },
      {
        ov: 14,
        runs: 11,
        score: "124-4",
        bowler: "Sam Curran",
        balls: ["4", "1", "1", "1", "4", "0"],
        desc: "Two boundaries break the pressure.",
      },
      {
        ov: 13,
        runs: 9,
        score: "113-4",
        bowler: "Liam Livingstone",
        balls: ["1", "2", "1", "4", "0", "1"],
        desc: "Good rotation.",
      },
      {
        ov: 12,
        runs: 7,
        score: "104-4",
        bowler: "Moeen Ali",
        balls: ["1", "1", "1", "0", "4", "0"],
        desc: "Moeen slows the run-rate.",
      },
      {
        ov: 11,
        runs: 10,
        score: "97-4",
        bowler: "Reece Topley",
        balls: ["1", "4", "1", "2", "1", "1"],
        desc: "Well placed four.",
      },
      {
        ov: 10,
        runs: 6,
        score: "87-4",
        bowler: "Adil Rashid",
        balls: ["1", "1", "0", "2", "1", "1"],
        desc: "Good over.",
      },
      {
        ov: 9,
        runs: 12,
        score: "81-4",
        bowler: "Sam Curran",
        balls: ["6", "1", "1", "1", "1", "2"],
        desc: "Huge six over long-on.",
      },
      {
        ov: 8,
        runs: 5,
        score: "69-4",
        bowler: "Moeen Ali",
        balls: ["0", "1", "0", "1", "2", "1"],
        desc: "Dot balls building pressure.",
      },
      {
        ov: 7,
        runs: 9,
        score: "64-4",
        bowler: "Archer",
        balls: ["1", "4", "1", "1", "0", "2"],
        desc: "Stubbs drives beautifully.",
      },
      {
        ov: 6,
        runs: 7,
        score: "55-4",
        bowler: "Topley",
        balls: ["1", "1", "1", "0", "4", "0"],
        desc: "Powerplay ends.",
      },
      {
        ov: 5,
        runs: 6,
        score: "48-3",
        bowler: "Curran",
        balls: ["1", "1", "0", "2", "1", "1"],
        desc: "Controlled batting.",
      },
      {
        ov: 4,
        runs: 10,
        score: "42-3",
        bowler: "Archer",
        balls: ["4", "1", "1", "2", "1", "1"],
        desc: "Nice timing.",
      },
      {
        ov: 3,
        runs: 8,
        score: "32-3",
        bowler: "Topley",
        balls: ["1", "0", "1", "4", "1", "1"],
        desc: "Early nerves settle.",
      },
      {
        ov: 2,
        runs: 7,
        score: "24-2",
        bowler: "Curran",
        balls: ["1", "1", "1", "0", "4", "0"],
        desc: "Good line & length.",
      },
      {
        ov: 1,
        runs: 9,
        score: "17-2",
        bowler: "Archer",
        balls: ["4", "1", "1", "1", "1", "1"],
        desc: "Positive start.",
      },
    ],
    ENG: [
      {
        ov: 20,
        runs: 9,
        score: "190-7",
        bowler: "Coetzee",
        balls: ["1", "1", "4", "W", "2", "1"],
        desc: "Brook run out. Tight finish.",
      },
      {
        ov: 19,
        runs: 20,
        score: "181-6",
        bowler: "Nortje",
        balls: ["6", "4", "2", "6", "1", "1"],
        desc: "Brook goes big.",
      },
      {
        ov: 18,
        runs: 14,
        score: "161-6",
        bowler: "Rabada",
        balls: ["1", "6", "1", "4", "1", "1"],
        desc: "Pressure release.",
      },
      {
        ov: 17,
        runs: 11,
        score: "147-6",
        bowler: "Maharaj",
        balls: ["1", "4", "1", "2", "1", "2"],
        desc: "Brook rotates strike.",
      },
      {
        ov: 16,
        runs: 8,
        score: "136-6",
        bowler: "Nortje",
        balls: ["1", "1", "1", "1", "4", "0"],
        desc: "Smart batting.",
      },
      {
        ov: 15,
        runs: 7,
        score: "128-6",
        bowler: "Rabada",
        balls: ["1", "1", "0", "1", "4", "0"],
        desc: "Rabada tight.",
      },
      {
        ov: 14,
        runs: 10,
        score: "121-6",
        bowler: "Coetzee",
        balls: ["2", "1", "1", "4", "1", "1"],
        desc: "Important runs.",
      },
      {
        ov: 13,
        runs: 6,
        score: "111-6",
        bowler: "Maharaj",
        balls: ["0", "1", "1", "1", "1", "2"],
        desc: "Spin control.",
      },
      {
        ov: 12,
        runs: 9,
        score: "105-6",
        bowler: "Shamsi",
        balls: ["1", "4", "0", "2", "1", "1"],
        desc: "Breaks shackles.",
      },
      {
        ov: 11,
        runs: 8,
        score: "96-6",
        bowler: "Nortje",
        balls: ["1", "1", "1", "1", "4", "0"],
        desc: "Good pace.",
      },
      {
        ov: 10,
        runs: 6,
        score: "88-6",
        bowler: "Maharaj",
        balls: ["1", "1", "0", "1", "1", "2"],
        desc: "Halfway mark.",
      },
      {
        ov: 9,
        runs: 12,
        score: "82-6",
        bowler: "Coetzee",
        balls: ["6", "1", "1", "2", "1", "1"],
        desc: "Big six.",
      },
      {
        ov: 8,
        runs: 7,
        score: "70-6",
        bowler: "Rabada",
        balls: ["1", "1", "0", "1", "4", "0"],
        desc: "Good over.",
      },
      {
        ov: 7,
        runs: 9,
        score: "63-6",
        bowler: "Nortje",
        balls: ["1", "4", "1", "1", "0", "2"],
        desc: "Nice placement.",
      },
      {
        ov: 6,
        runs: 6,
        score: "54-6",
        bowler: "Maharaj",
        balls: ["1", "1", "0", "2", "1", "1"],
        desc: "Powerplay ends.",
      },
      {
        ov: 5,
        runs: 5,
        score: "48-5",
        bowler: "Rabada",
        balls: ["0", "1", "1", "1", "1", "1"],
        desc: "Dot pressure.",
      },
      {
        ov: 4,
        runs: 11,
        score: "43-5",
        bowler: "Nortje",
        balls: ["4", "1", "1", "2", "1", "2"],
        desc: "Good momentum.",
      },
      {
        ov: 3,
        runs: 7,
        score: "32-4",
        bowler: "Coetzee",
        balls: ["1", "1", "1", "0", "4", "0"],
        desc: "Controlled.",
      },
      {
        ov: 2,
        runs: 6,
        score: "25-3",
        bowler: "Rabada",
        balls: ["1", "1", "0", "2", "1", "1"],
        desc: "Early wickets.",
      },
      {
        ov: 1,
        runs: 9,
        score: "19-2",
        bowler: "Nortje",
        balls: ["4", "1", "1", "1", "1", "1"],
        desc: "Positive start.",
      },
    ],
  };

  const getBallClass = (ball) => {
    if (ball === "W") return "d_ball_wicket";
    if (ball.includes("4") || ball.includes("6")) return "d_ball_boundary";
    if (ball === "0") return "d_ball_dot";
    if (ball.includes("WD")) return "d_ball_extra";
    if (ball.includes("NB")) return "d_ball_nb";
    return "d_ball_run";
  };

  const renderOverList = (teamKey, teamName, scoreInfo, isOpen, setIsOpen) => (
    <div className="d_team_accordion mb-4">
      <div
        className="d_team_header d-flex justify-content-between align-items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h6 className="m-0 fw-bold">
          {teamName}{" "}
          <span className="text-secondary small ms-2">{scoreInfo}</span>
        </h6>
        {isOpen ? (
          <MdKeyboardArrowUp size={24} />
        ) : (
          <MdKeyboardArrowDown size={24} />
        )}
      </div>

      {isOpen && (
        <div className="d_over_list">
          {matchOvers[teamKey].map((over, index) => (
            <div key={index} className="d_over_item">
              <div className="d_over_info">
                Ov <span className="d_over_num">{over.ov}</span> • {over.runs}{" "}
                runs • {teamKey} {over.score}
              </div>

              <div className="d_ball_list">
                {over.balls.map((ball, bIdx) => (
                  <div key={bIdx} className={`d_ball ${getBallClass(ball)}`}>
                    {ball}
                  </div>
                ))}
              </div>

              <div className="d_bowler_label">
                Bowler:{" "}
                <span className="text-white fw-bold">{over.bowler}</span>
              </div>
              <p className="d_commentary">{over.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="d_overs_wrapper container-fluid py-3 px-2">
      <div className="row g-3">
        <div className="col-12">
          {/* Header Status */}
          <div className="d_match_status_box text-center p-4 mb-4">
            <RiEditCircleLine size={50} className="text-secondary mb-3" />
            <h4 className="text-white">Waiting for the first ball</h4>
            <p className="text-secondary small">
              Ball-by-ball analysis, wagon wheels, and over summaries will
              appear here live.
            </p>
          </div>
        </div>
        {/* South Africa Overs - Left Column on LG */}
        <div className="col-12 col-lg-6">
          {renderOverList(
            "SA",
            "SOUTH AFRICA",
            "(18.4) 176/4",
            openSA,
            setOpenSA,
          )}
        </div>

        {/* England Overs - Right Column on LG */}
        <div className="col-12 col-lg-6">
          {renderOverList("ENG", "ENGLAND", "(20) 190/7", openENG, setOpenENG)}
        </div>
      </div>
    </div>
  );
};

const CommentaryTabContent = () => {
  // ઈમેજ image_42c2af.png મુજબનો ડેટા
  const timelineData = [
    {
      time: "18:50",
      badge: "TOSS UPDATE",
      badgeClass: "bg_toss",
      title: "Captains are walking out",
      desc: "Jos Buttler and Aiden Markram are making their way to the center. The coin toss is just moments away. A massive roar from the crowd here at the Wanderers!",
    },
    {
      time: "18:42",
      badge: "PITCH REPORT",
      badgeClass: "bg_pitch",
      title: "A batting paradise?",
      desc: "Ian Bishop reckons this is a 'road'. The surface is hard, flat, and has a nice covering of grass to hold it together. The ball will come onto the bat beautifully.",
    },
    {
      time: "18:30",
      badge: "SQUAD NEWS",
      badgeClass: "bg_squad",
      title: "Archer looks sharp",
      desc: "Jofra Archer has been steaming in during the warm-ups. He just sent a stump cartwheeling in the practice nets. Looks like he is 100% ready to unleash some hunderbolts today.",
    },
    {
      time: "18:15",
      badge: "WEATHER",
      badgeClass: "bg_weather",
      title: "Clear skies in Johannesburg",
      desc: "Perfect evening for cricket. 22°C, humidity at 45%, and absolutely zero chance of rain. The outfield is lightning fast.",
    },
    {
      time: "18:07",
      badge: "PREVIEW",
      badgeClass: "bg_preview",
      title: "Welcome to the Decider",
      desc: "Hello and welcome to our live coverage of the 3rd T20I between South Africa and England. The series is tied 1-1. It's all to play for tonight!",
    },
    {
      time: "18:00",
      badge: "ARRIVAL",
      badgeClass: "bg_arrival",
      title: "The teams are here!",
      desc: "The England team bus has just rolled into the stadium. Jos Buttler looks focused, headphones on, heading straight to the dressing room.",
    },
  ];

  const commentaryData = [
    {
      type: "over_end",
      overNum: 2,
      runs: 11,
      score: "ENG 16/0",
      bowler: "Marco Jansen (4-1-0-6-0-0)",
    },
    {
      ball: "1.6",
      result: "0",
      class: "ball_dot",
      desc: "Good length delivery to finish the over. Buttler tries to slap it over point but finds the fielder. No run.",
    },
    {
      ball: "1.5",
      result: "0",
      class: "ball_dot",
      desc: "Fuller on middle. Salt drives it firmly but straight to mid-on. He looks for a single but Buttler sends him back.",
    },
    {
      ball: "1.4",
      result: "6",
      class: "ball_boundary",
      desc: "SIX! Jansen drops it slightly short and Salt is all over it! He picks the length early and launches it high over the long-off boundary for a massive hit.",
    },
    {
      ball: "1.3",
      result: "0",
      class: "ball_dot",
      desc: "Beaten! Jansen gets this one to shape away beautifully from the right-hander. Salt fishes at it and the ball whizzes past the edge.",
    },
    {
      ball: "1.2",
      result: "1",
      class: "ball_run",
      desc: "Good length, angled across off-stump. Salt defends it with soft hands towards cover and scampers through for a quick single.",
    },
    {
      type: "over_end",
      overNum: 1,
      runs: 5,
      score: "ENG 5/0",
      bowler: "Marco Jansen (0-0-1-0-4-0)",
    },
    {
      ball: "0.6",
      result: "0",
      class: "ball_dot",
      desc: "Dot to finish. Good tight line on off stump. Salt punches it straight to the fielder at cover. No room to breathe there.",
    },
    {
      ball: "0.5",
      result: "NB+1",
      class: "ball_boundary",
      desc: "FOUR! Pure class from Buttler. Overpitched by Rabada, and he presents the full face of the bat to drive it straight down the ground past the bowler.",
    },
    {
      ball: "0.4",
      result: "1",
      class: "ball_run",
      desc: "Back of a length on off stump. Buttler steers it gently to third man and picks up a comfortable single.",
    },
    {
      ball: "0.3",
      result: "0",
      class: "ball_dot",
      desc: "Good bounce. Buttler hops back and defends it into the pitch. No run.",
    },
    {
      ball: "0.2",
      result: "1",
      class: "ball_run",
      desc: "On a good length around off. Salt taps it into the covers and they hurry through for a quick single.",
    },
    {
      ball: "0.1",
      result: "0",
      class: "ball_dot",
      desc: "First ball of the innings! Jansen hits a tight line outside off. Salt watches it closely and lets it go through to the keeper.",
    },
  ];

  return (
    <div className="d_commentary_main_wrapper container-fluid p-0">
      <div className="row m-0">
        {/* 1. Header Status Box */}
        <div className="col-12 p-0">
          <div
            className="d_match_status_box text-center p-4 mb-3"
            style={{ border: "1px solid #1a1a1a", borderRadius: "8px" }}
          >
            <MdSettingsVoice size={50} className="text-secondary mb-3" />
            <h4 className="text-white">Live Commentary</h4>
            <p className="text-secondary small">
              Stay tuned for live ball-by-ball updates and expert analysis.
            </p>
          </div>
        </div>

        {/* 2. Actual Commentary Timeline */}
        <div className="col-12 p-0">
          <div className="d_timeline_list px-3">
            {timelineData.map((item, index) => (
              <div key={index} className="d_commentary_item">
                <div className="d-flex align-items-center flex-wrap">
                  <span className="d_event_time">{item.time}</span>
                  <span className={`d_event_badge ${item.badgeClass}`}>
                    {item.badge}
                  </span>
                  <h6 className="d_event_title m-0">{item.title}</h6>
                </div>
                <p className="d_event_desc mb-0">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="d_ball_by_ball_wrapper col-12">
          <div className="px-2">
            {commentaryData.map((item, index) => (
              <React.Fragment key={index}>
                {item.type === "over_end" ? (
                  /* ઓવર એન્ડ કાર્ડ */
                  <div className="d_over_end_card d-flex justify-content-between align-items-center flex-wrap">
                    <div>
                      <span className="d_over_end_title me-3">
                        END OF OVER {item.overNum}
                      </span>
                      <span className="text-secondary small">
                        {item.runs} Runs | {item.score}
                      </span>
                    </div>
                    <div className="d_over_end_stats mt-1 mt-md-0">
                      Bowler:{" "}
                      <span className="text-white fw-bold">{item.bowler}</span>
                    </div>
                  </div>
                ) : (
                  /* બોલ બાય બોલ રો */
                  <div className="d_commentary_row">
                    <div className="d_ball_num">{item.ball}</div>
                    <div className={`d_ball_circle ${item.class}`}>
                      {item.result}
                    </div>
                    <div className="d_ball_text">{item.desc}</div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SquadsTabContent = () => {
  const [activeTeam, setActiveTeam] = useState("ENG");

  // ડેટા લોજીક image_424633.png અને image_4245f7.png મુજબ
  const teamsData = {
    ENG: {
      batters: [
        {
          id: 1,
          name: "Jos Buttler (C) (WK)",
          type: "(RHB)",
          status: "Playing XI",
          isPlaying: true,
          img: p1,
        },
        {
          id: 2,
          name: "Phil Salt",
          type: "(RHB)",
          status: "Playing XI",
          isPlaying: true,
          img: p2,
        },
        {
          id: 3,
          name: "Jonny Bairstow",
          type: "(RHB)",
          status: "Playing XI",
          isPlaying: true,
          img: p3,
        },
        {
          id: 4,
          name: "Harry Brook",
          type: "(RHB)",
          status: "Playing XI",
          isPlaying: true,
          img: p4,
        },
        {
          id: 5,
          name: "Ben Stokes",
          type: "(LHB)",
          status: "Playing XI",
          isPlaying: true,
          img: p5,
        },
        {
          id: 6,
          name: "Ben Duckett",
          type: "(LHB)",
          status: "On Bench",
          isPlaying: false,
          img: p6,
        },
      ],
      allRounders: [
        {
          id: 7,
          name: "Moeen Ali",
          type: "(LHB) (Offbreak)",
          status: "Playing XI",
          isPlaying: true,
          img: p7,
        },
        {
          id: 8,
          name: "Liam Livingstone",
          type: "(RHB) (Legbreak)",
          status: "Playing XI",
          isPlaying: true,
          img: p8,
        },
        {
          id: 9,
          name: "Sam Curran",
          type: "(LHB) (L Arm Med)",
          status: "Playing XI",
          isPlaying: true,
          img: p9,
        },
        {
          id: 10,
          name: "Chris Woakes",
          type: "(RHB) (R Arm Med)",
          status: "On Bench",
          isPlaying: false,
          img: p10,
        },
      ],
      bowlers: [
        {
          id: 11,
          name: "Jofra Archer",
          type: "(R Arm Fast)",
          status: "Playing XI",
          isPlaying: true,
          img: p11,
        },
        {
          id: 12,
          name: "Reece Topley",
          type: "(L Arm Fast)",
          status: "Playing XI",
          isPlaying: true,
          img: p12,
        },
        {
          id: 13,
          name: "Mark Wood",
          type: "(R Arm Fast)",
          status: "On Bench",
          isPlaying: false,
          img: p13,
        },
        {
          id: 14,
          name: "Adil Rashid",
          type: "(Legbreak)",
          status: "Playing XI",
          isPlaying: true,
          img: p14,
        },
        {
          id: 15,
          name: "Brydon Carse",
          type: "(R Arm Fast)",
          status: "On Bench",
          isPlaying: false,
          img: p15,
        },
      ],
    },

    RAS: {
      batters: [
        {
          id: 1,
          name: "Quinton de Kock (WK)",
          type: "(LHB)",
          status: "Playing XI",
          isPlaying: true,
          img: p15,
        },
        {
          id: 2,
          name: "Reeza Hendricks",
          type: "(RHB)",
          status: "Playing XI",
          isPlaying: true,
          img: p16,
        },
        {
          id: 3,
          name: "Aiden Markram (C)",
          type: "(RHB)",
          status: "Playing XI",
          isPlaying: true,
          img: p17,
        },
        {
          id: 4,
          name: "David Miller",
          type: "(LHB)",
          status: "Playing XI",
          isPlaying: true,
          img: p18,
        },
        {
          id: 5,
          name: "Tristan Stubbs",
          type: "(RHB)",
          status: "Playing XI",
          isPlaying: true,
          img: p19,
        },
        {
          id: 6,
          name: "Ryan Rickelton",
          type: "(LHB)",
          status: "On Bench",
          isPlaying: false,
          img: p20,
        },
      ],
      allRounders: [
        {
          id: 7,
          name: "Marco Jansen",
          type: "(LHB) (L Arm Fast)",
          status: "Playing XI",
          isPlaying: true,
          img: p21,
        },
        {
          id: 8,
          name: "Wiaan Mulder",
          type: "(RHB) (R Arm Med)",
          status: "On Bench",
          isPlaying: false,
          img: p22,
        },
      ],
      bowlers: [
        {
          id: 9,
          name: "Keshav Maharaj",
          type: "(L Arm Spin)",
          status: "Playing XI",
          isPlaying: true,
          img: p23,
        },
        {
          id: 10,
          name: "Kagiso Rabada",
          type: "(R Arm Fast)",
          status: "Playing XI",
          isPlaying: true,
          img: p24,
        },
        {
          id: 11,
          name: "Anrich Nortje",
          type: "(R Arm Fast)",
          status: "Playing XI",
          isPlaying: true,
          img: p25,
        },
        {
          id: 12,
          name: "Gerald Coetzee",
          type: "(R Arm Fast)",
          status: "Playing XI",
          isPlaying: true,
          img: p26,
        },
        {
          id: 13,
          name: "Tabraiz Shamsi",
          type: "(L Arm Wrist Spin)",
          status: "On Bench",
          isPlaying: false,
          img: p27,
        },
        {
          id: 14,
          name: "Lungi Ngidi",
          type: "(R Arm Fast)",
          status: "On Bench",
          isPlaying: false,
          img: p28,
        },
      ],
    },
  };

  const PlayerRow = ({ player }) => (
    <div className="d_player_row">
      <div className="d_player_no">{player.id}</div>
      <div className="d_player_img_wrapper">
        <img src={player.img} alt={player.name} className="d_player_img" />
      </div>
      <div className="d_player_info">
        <h6>
          {player.name}{" "}
          <span className="d_player_role text-secondary">{player.type}</span>
        </h6>
        <div className="d_playing_status">{player.status}</div>
      </div>
      {player.isPlaying && <div className="d_status_dot"></div>}
    </div>
  );

  const currentData = teamsData[activeTeam];

  return (
    <div className="col-12 d_squads_root_container">
      {/* Team Toggle Buttons */}
      <div className="d_team_toggle">
        <button
          className={`d_toggle_btn ${activeTeam === "ENG" ? "active" : ""}`}
          onClick={() => setActiveTeam("ENG")}
        >
          ENG
        </button>
        <button
          className={`d_toggle_btn ${activeTeam === "RAS" ? "active" : ""}`}
          onClick={() => setActiveTeam("RAS")}
        >
          RAS
        </button>
      </div>

      <div className="d_player_list_grid">
        {/* Batters Section */}
        <div>
          <div className="d_section_title">Batters & Keepers</div>
          {currentData.batters.map((p) => (
            <PlayerRow key={p.id} player={p} />
          ))}
        </div>

        {/* All-Rounders Section */}
        <div>
          <div className="d_section_title">All-Rounders</div>
          {currentData.allRounders.map((p) => (
            <PlayerRow key={p.id} player={p} />
          ))}
        </div>

        {/* Bowlers Section */}
        <div>
          <div className="d_section_title">Bowlers</div>
          {currentData.bowlers.map((p) => (
            <PlayerRow key={p.id} player={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

const PointsTableTabContent = () => {
  const pointTableData = [
    {
      pos: 1,
      team: "IND",
      flag: "in",
      p: 9,
      w: 8,
      l: 1,
      nrr: "+1.850",
      pts: 16,
      matches: ["W", "W", "W"],
    },
    {
      pos: 2,
      team: "AUS",
      flag: "au",
      p: 9,
      w: 7,
      l: 2,
      nrr: "+1.120",
      pts: 14,
      matches: ["W", "L", "W"],
    },
    {
      pos: 3,
      team: "RSA",
      flag: "za",
      p: 9,
      w: 6,
      l: 3,
      nrr: "+0.950",
      pts: 12,
      matches: ["L", "W", "W"],
    },
    {
      pos: 4,
      team: "ENG",
      flag: "gb",
      p: 9,
      w: 5,
      l: 4,
      nrr: "+0.450",
      pts: 10,
      matches: ["W", "W", "L"],
    },
    {
      pos: 5,
      team: "AFG",
      flag: "af",
      p: 9,
      w: 5,
      l: 4,
      nrr: "+0.120",
      pts: 10,
      matches: ["W", "L", "W"],
    },
    {
      pos: 6,
      team: "NZ",
      flag: "nz",
      p: 9,
      w: 4,
      l: 5,
      nrr: "-0.250",
      pts: 8,
      matches: ["L", "L", "W"],
    },
    {
      pos: 7,
      team: "NED",
      flag: "nl",
      p: 9,
      w: 4,
      l: 5,
      nrr: "-0.550",
      pts: 8,
      matches: ["W", "L", "L"],
    },
    {
      pos: 8,
      team: "SL",
      flag: "lk",
      p: 9,
      w: 3,
      l: 6,
      nrr: "-0.800",
      pts: 6,
      matches: ["L", "W", "L"],
    },
    {
      pos: 9,
      team: "PAK",
      flag: "pk",
      p: 9,
      w: 2,
      l: 7,
      nrr: "-1.200",
      pts: 4,
      matches: ["L", "L", "L"],
    },
    {
      pos: 10,
      team: "BAN",
      flag: "bd",
      p: 9,
      w: 1,
      l: 8,
      nrr: "-1.950",
      pts: 2,
      matches: ["L", "L", "L"],
    },
  ];

  const Flag = ({ code }) => (
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      alt={code}
      className="z_flag"
      loading="lazy"
    />
  );

  return (
    <>
      <section className="x_series_section mt-0">
        <div className="pt_table_wrapper">
          <div className="pt_table_scroll">
            <table className="pt_table">
              <thead>
                <tr>
                  <th>POS</th>
                  <th>TEAM</th>
                  <th>P</th>
                  <th>W</th>
                  <th>L</th>
                  <th>NRR</th>
                  <th>PTS</th>
                  <th>W/L</th>
                </tr>
              </thead>
              <tbody>
                {pointTableData.map((row, idx) => (
                  <tr key={idx} className="pt_table_row">
                    <td className="pt_pos">{row.pos}</td>
                    <td className="pt_team">
                      <Flag code={row.flag} />
                      <span>{row.team}</span>
                    </td>
                    <td>{row.p}</td>
                    <td className="pt_wins">{row.w}</td>
                    <td className="pt_losses">{row.l}</td>
                    <td className="pt_nrr">{row.nrr}</td>
                    <td className="pt_pts">
                      <strong>{row.pts}</strong>
                    </td>
                    <td className="pt_matches">
                      <div className="pt_match_results">
                        {row.matches.map((match, mIdx) => (
                          <div
                            key={mIdx}
                            className={`pt_match_result ${match.toLowerCase()}`}
                          >
                            {match[0]}
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

const VideosTabContent = () => {
  const videos = [
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
  return (
    <>
      <div className="col-12 p-0">
        <div
          className="d_match_status_box text-center p-4 mb-3"
          style={{ border: "1px solid #1a1a1a", borderRadius: "8px" }}
        >
          <RiVideoLine size={50} className="text-secondary mb-3" />
          <h4 className="text-white">Live Commentary</h4>
          <p className="text-secondary small">
            Stay tuned for live ball-by-ball updates and expert analysis.
          </p>
        </div>
      </div>
      {videos.length > 0 && (
        <section className="x_series_section mt-0">
          <div className="row">
            {videos.map((video, index) => (
              <div className="col-12 col-md-6 col-xl-4 mb-3" key={index}>
                <div className="d_highlight_card">
                  <div className="d_thumb_wrapper">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="d_thumb_img"
                    />
                    <span className="d_duration">{video.duration}</span>
                  </div>
                  <p className="d_highlight_title">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default function MatchDetails() {
  const [activeTab, setActiveTab] = useState("LIVE");

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
        {/* <IoIosSearch className="text-white cursor-pointer" size={26} /> */}
      </nav>

      <div className="container py-4 py-md-5">
        <div className="row g-4">
          {/* LEFT COLUMN: Main Match Info */}
          <div className="col-12 col-lg-12 p-0">
            <div className="d_hero_section text-center p-4 p-lg-5 mb-4">
              <div className="d-flex justify-content-center align-items-center gap-3 gap-md-5 mb-4">
                <div className="d_team_wrapper">
                  <div className="d_flag_circle d_eng_flag"></div>
                  <h2 className="mt-3 fw-bold">ENG</h2>
                </div>
                <div className="d_vs_circle">VS</div>
                <div className="d_team_wrapper">
                  <div className="d_flag_circle d_rsa_flag"></div>
                  <h2 className="mt-3 fw-bold">RSA</h2>
                </div>
              </div>

              <p className="d_match_date text-secondary">
                Start on Friday, Dec 19 | 7:00 pm
              </p>
              <h1 className="d_timer_text mb-4">2h 30m</h1>

              <button className="btn d_buy_pass_btn d-flex align-items-center justify-content-center mx-auto">
                <HiOutlineLockClosed className="me-2" /> BUY A PASS
              </button>
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
                  className={`d_tab_item ${
                    activeTab === "SCORECARD" ? "active" : ""
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
                  className={`d_tab_item ${
                    activeTab === "COMMENTARY" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("COMMENTARY")}
                >
                  COMMENTARY
                </div>
                <div
                  className={`d_tab_item ${
                    activeTab === "SQUADS" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("SQUADS")}
                >
                  SQUADS
                </div>
                <div
                  className={`d_tab_item ${
                    activeTab === "P. TABLE" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("P. TABLE")}
                >
                  P. TABLE
                </div>
                <div
                  className={`d_tab_item ${
                    activeTab === "VIDEOS" ? "active" : ""
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
