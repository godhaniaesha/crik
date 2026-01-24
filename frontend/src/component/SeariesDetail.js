import React, { useState } from 'react'
import v1 from "../img/v1.png";
import v2 from "../img/v2.png";
import v3 from "../img/v3.png";
import { SlLockOpen } from "react-icons/sl";
import { RxDotFilled } from "react-icons/rx";
import series9 from "../img/icon.png";

export default function SeariesDetail() {
    const [selectedTab, setSelectedTab] = useState("matches");
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
            thumbnail: "https://i.ytimg.com/vi/kXBsM0LaEf8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDIox9x2fmUfBkz4sco5pAxzsqqkQ",
        },
        {
            id: 6,
            title: "IND vs SA: Match Winning Spells",
            duration: "6m",
            thumbnail: "https://i.ytimg.com/vi/DWgRT0N8v_E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCdry34QkkkOJf5KX9CebVbPCt28A",
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

    const todayMatches = [
        {
            title: "1st Test | Day 3 • OMN tour of NZ • Auckland",
            teams: [
                { code: "om", name: "OMN" },
                { code: "nz", name: "NZ" }
            ],
            time: "5:40 AM IST"
        },
        {
            title: "2nd ODI • SL tour of NED • Rotterdam",
            teams: [
                { code: "sl", name: "SL" },
                { code: "ne", name: "NED" }
            ],
            time: "2:30 PM IST"
        },
        {
            title: "Final • ICC U19 T20 WC • Dubai",
            teams: [
                { code: "in", name: "IND-U19" },
                { code: "au", name: "AUS-U19" }
            ],
            time: "7:00 PM IST"
        }
    ];

    const pointTableData = [
        { pos: 1, team: "IND", flag: "in", p: 9, w: 8, l: 1, nrr: "+1.850", pts: 16, matches: ["W", "W", "W"] },
        { pos: 2, team: "AUS", flag: "au", p: 9, w: 7, l: 2, nrr: "+1.120", pts: 14, matches: ["W", "L", "W"] },
        { pos: 3, team: "RSA", flag: "za", p: 9, w: 6, l: 3, nrr: "+0.950", pts: 12, matches: ["L", "W", "W"] },
        { pos: 4, team: "ENG", flag: "gb", p: 9, w: 5, l: 4, nrr: "+0.450", pts: 10, matches: ["W", "W", "L"] },
        { pos: 5, team: "AFG", flag: "af", p: 9, w: 5, l: 4, nrr: "+0.120", pts: 10, matches: ["W", "L", "W"] },
        { pos: 6, team: "NZ", flag: "nz", p: 9, w: 4, l: 5, nrr: "-0.250", pts: 8, matches: ["L", "L", "W"] },
        { pos: 7, team: "NED", flag: "nl", p: 9, w: 4, l: 5, nrr: "-0.550", pts: 8, matches: ["W", "L", "L"] },
        { pos: 8, team: "SL", flag: "lk", p: 9, w: 3, l: 6, nrr: "-0.800", pts: 6, matches: ["L", "W", "L"] },
        { pos: 9, team: "PAK", flag: "pk", p: 9, w: 2, l: 7, nrr: "-1.200", pts: 4, matches: ["L", "L", "L"] },
        { pos: 10, team: "BAN", flag: "bd", p: 9, w: 1, l: 8, nrr: "-1.950", pts: 2, matches: ["L", "L", "L"] }
    ];

    const bannerData = [
        {
            id: 1,
            icon: series9,
            title: "ICC T20 WORLD CUP",
            year: "2025-26",
            type: "World Cup",
            date: "2 Dec - 14 Jan 2026",
            match: "25 Matches",
            bg: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&h=350&fit=crop",
            btn_txt: "BUY A PASS",
        }
    ];
    return (
        <>
            <div className='z_schedule'>
                {/* Banner Section */}
                <div className="banner_container">
                    {bannerData.map((banner) => (
                        <div key={banner.id} className="banner_card">
                            <div
                                className="banner_bg"
                                style={{
                                    backgroundImage: `url('${banner.bg}')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <div className="banner_overlay"></div>
                                <div className="banner_content">
                                    <img src={banner.icon} style={{height:"70px", width:"70px"}} alt="" className="banner_icon" />
                                    <h2 className="banner_title">{banner.title}</h2>
                                    <p className="banner_title">{banner.year}</p>
                                    <div className="banner_info d-flex flex-">
                                        <span className="banner_type">{banner.type}</span><RxDotFilled  className='mt-1'/>
                                        <span className="banner_date">{banner.date}</span><RxDotFilled  className='mt-1'/>
                                        <span className="banner_match">{banner.match}</span>
                                    </div>
                                    <div>
                                        <button className="banner_btn"><SlLockOpen className='me-2 mb-1' style={{ fontSize: "16px" }} />{banner.btn_txt}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* tab section */}
                <div className="d_tabs_scroll_wrapper mb-2">
                    <div className="d_tabs_container d-flex border-bottom border-secondary pt-2">
                        <div
                            className={`d_tab_item ${selectedTab === "matches" ? "active" : ""}`}
                            onClick={() => setSelectedTab("matches")}
                        >
                            Matches
                        </div>
                        <div
                            className={`d_tab_item ${selectedTab === "pointtable" ? "active" : ""}`}
                            onClick={() => setSelectedTab("pointtable")}
                        >
                            Point Table
                        </div>
                        <div
                            className={`d_tab_item ${selectedTab === "videos" ? "active" : ""}`}
                            onClick={() => setSelectedTab("videos")}
                        >
                            Videos
                        </div>
                    </div>
                </div>

                {/* Matches section */}
                {selectedTab === "matches" && (
                    <>
                        <section className="x_series_section">
                            <h2 className="x_series_title">Today's Matches</h2>

                            <div className="row">
                                {todayMatches.map((match, index) => (
                                    <div className="col-12 col-md-6 mb-3" key={index}>
                                        <div className="z_match_card">
                                            <div className="z_match_title">
                                                {match.title}
                                            </div>

                                            <div className="d-flex justify-content-between align-items-start">
                                                <div className="z_match_teams">
                                                    {match.teams.map((team, tIdx) => (
                                                        <div className="z_team_row" key={tIdx}>
                                                            <div className="z_team">
                                                                <Flag code={team.code} />
                                                                <span>{team.name}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="z_match_divider"></div>

                                                {match.time && (
                                                    <div className="z_time z_time_end text-end">
                                                        Watch live at <br />
                                                        <b className="x_time">{match.time}</b>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <section className="x_series_section">
                            <h2 className="x_series_title">THU, 01 Jan</h2>

                            <div className="row">
                                {todayMatches.slice(1, 3).map((match, index) => (
                                    <div className="col-12 col-md-6 mb-3" key={index}>
                                        <div className="z_match_card">
                                            <div className="z_match_title">
                                                {match.title}
                                            </div>

                                            <div className="d-flex justify-content-between align-items-start">
                                                <div className="z_match_teams">
                                                    {match.teams.map((team, tIdx) => (
                                                        <div className="z_team_row" key={tIdx}>
                                                            <div className="z_team">
                                                                <Flag code={team.code} />
                                                                <span>{team.name}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="z_match_divider"></div>

                                                {match.time && (
                                                    <div className="z_time z_time_end text-end">
                                                        Watch live at <br />
                                                        <b className="x_time">{match.time}</b>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <section className="x_series_section">
                            <h2 className="x_series_title">THU, 02 Jan</h2>

                            <div className="row">
                                {todayMatches.slice(0, 2).map((match, index) => (
                                    <div className="col-12 col-md-6 mb-3" key={index}>
                                        <div className="z_match_card">
                                            <div className="z_match_title">
                                                {match.title}
                                            </div>

                                            <div className="d-flex justify-content-between align-items-start">
                                                <div className="z_match_teams">
                                                    {match.teams.map((team, tIdx) => (
                                                        <div className="z_team_row" key={tIdx}>
                                                            <div className="z_team">
                                                                <Flag code={team.code} />
                                                                <span>{team.name}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="z_match_divider"></div>

                                                {match.time && (
                                                    <div className="z_time z_time_end text-end">
                                                        Watch live at <br />
                                                        <b className="x_time">{match.time}</b>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <section className="x_series_section">
                            <h2 className="x_series_title">THU, 03 Jan</h2>

                            <div className="row">
                                {todayMatches.slice(1, 2).map((match, index) => (
                                    <div className="col-12 col-md-6 mb-3" key={index}>
                                        <div className="z_match_card">
                                            <div className="z_match_title">
                                                {match.title}
                                            </div>

                                            <div className="d-flex justify-content-between align-items-start">
                                                <div className="z_match_teams">
                                                    {match.teams.map((team, tIdx) => (
                                                        <div className="z_team_row" key={tIdx}>
                                                            <div className="z_team">
                                                                <Flag code={team.code} />
                                                                <span>{team.name}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="z_match_divider"></div>

                                                {match.time && (
                                                    <div className="z_time z_time_end text-end">
                                                        Watch live at <br />
                                                        <b className="x_time">{match.time}</b>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <section className="x_series_section">
                            <h2 className="x_series_title">THU, 04 Jan</h2>

                            <div className="row">
                                {todayMatches.slice(2, 3).map((match, index) => (
                                    <div className="col-12 col-md-6 mb-3" key={index}>
                                        <div className="z_match_card">
                                            <div className="z_match_title">
                                                {match.title}
                                            </div>

                                            <div className="d-flex justify-content-between align-items-start">
                                                <div className="z_match_teams">
                                                    {match.teams.map((team, tIdx) => (
                                                        <div className="z_team_row" key={tIdx}>
                                                            <div className="z_team">
                                                                <Flag code={team.code} />
                                                                <span>{team.name}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="z_match_divider"></div>

                                                {match.time && (
                                                    <div className="z_time z_time_end text-end">
                                                        Watch live at <br />
                                                        <b className="x_time">{match.time}</b>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </>
                )}

                {/* Point Table Section */}
                {selectedTab === "pointtable" && (
                    <section className="x_series_section">
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
                                                <td className="pt_pts"><strong>{row.pts}</strong></td>
                                                <td className="pt_matches">
                                                    <div className="pt_match_results">
                                                        {row.matches.map((match, mIdx) => (
                                                            <div key={mIdx} className={`pt_match_result ${match.toLowerCase()}`}>
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
                )}

                {/* videos section */}
                {selectedTab === "videos" && (
                    <>
                        {videos.length > 0 && (
                            <section className="x_series_section">
                                <h2 className="x_series_title">Videos</h2>
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
                )}
            </div>
        </>
    )
}
