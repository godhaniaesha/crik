import React, { useState, useEffect } from 'react'
import '../style/x_style.css';
import { IoCloseCircleOutline, IoSearch } from "react-icons/io5";


import series from "../img/SERIES.png";
import series1 from "../img/SERIES(1).png";
import series2 from "../img/SERIES(2).png";
import series3 from "../img/SERIES(3).png";
import nores from "../img/nores.png";
import v1 from "../img/v1.png";
import v2 from "../img/v2.png";
import v3 from "../img/v3.png";

// Videos data from highlights
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
        thumbnail: "https://i.ytimg.com/vi/kXBsM0LaEf8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDIox9x2fmUfBkz4sco5pAxzsqqkQ",
    },
    {
        id: 6,
        title: "IND vs SA: Match Winning Spells",
        duration: "6m",
        thumbnail: "https://i.ytimg.com/vi/DWgRT0N8v_E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCdry34QkkkOJf5KX9CebVbPCt28A",
    },
];

export default function Search() {
    const [inputValue, setInputValue] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTab, setSelectedTab] = useState("all");
    const [searchHistory, setSearchHistory] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const images = [
        series, series1, series2, series3
    ];
    // Load search history from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('searchHistory');
        if (saved) {
            setSearchHistory(JSON.parse(saved));
        }
    }, []);
    const Flag = ({ code }) => (
        <img
            src={`https://flagcdn.com/w40/${code}.png`}
            alt={code}
            className="z_flag"
            loading="lazy"
        />
    );
    // 👇 Schedule mathi TODAY vala matches
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
        },
        {
            title: "New Year Special T20 • ENG vs SA",
            teams: [
                { code: "gb-eng", name: "ENG" },
                { code: "sa", name: "SA" }
            ],
            time: "6:00 PM IST"
        },
        {
            title: "1st T20I • IND tour of AUS",
            teams: [
                { code: "in", name: "IND" },
                { code: "au", name: "AUS" }
            ],
            time: "1:30 PM IST"
        }
    ];
    // Filter logic
    const filteredMatches = todayMatches.filter(match =>
        match.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        match.teams.some(team =>
            team.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    const filteredVideos = d_highlights.filter(video =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const filteredSeries = images.map((img, idx) => ({
        id: idx,
        name: `Series ${idx + 1}`,
        image: img
    })).filter(series =>
        series.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Get filtered results based on selected tab
    const getFilteredResults = () => {
        if (selectedTab === "matches") return { matches: filteredMatches, videos: [], series: [] };
        if (selectedTab === "series") return { matches: [], videos: [], series: filteredSeries };
        if (selectedTab === "videos") return { matches: [], videos: filteredVideos, series: [] };
        return { matches: filteredMatches, videos: filteredVideos, series: filteredSeries };
    };
    const filteredResults = getFilteredResults();
    const noResults = searchTerm && Object.values(filteredResults).every(arr => arr.length === 0);
    const handleSearch = (term) => {
        setSearchTerm(term);
        setHasSearched(true);
        if (term && !searchHistory.includes(term)) {
            const newHistory = [term, ...searchHistory].slice(0, 5);
            setSearchHistory(newHistory);
            localStorage.setItem('searchHistory', JSON.stringify(newHistory));
        }
    };

    const handleHistoryClick = (term) => {
        handleSearch(term);
    };

    const highlightText = (text, searchTerm) => {
        if (!searchTerm) return text;

        const regex = new RegExp(`(${searchTerm})`, "gi");
        return text.split(regex).map((part, i) =>
            part.toLowerCase() === searchTerm.toLowerCase() ? (
                <span key={i} className="z_highlight">{part}</span>
            ) : (
                part
            )
        );
    };

    return (
        <>
            <div className="z_schedule">
                <div className='z_sticky_top border-0'>
                    <div className="z_search_box position-relative">
                        <input
                            placeholder="Search by match, tours or series"
                            value={searchTerm}
                            onChange={(e) => handleSearch(e.target.value)}
                        />

                        {searchTerm && (
                            <IoCloseCircleOutline
                                className="z_clear_icon"
                                style={{fontSize:"24px"}}
                                onClick={() => {
                                    setSearchTerm("");
                                    setSelectedTab("all");
                                    setHasSearched(false);
                                }}
                            />
                        )}
                    </div>

                    {/* Search History */}
                    {hasSearched && !searchTerm && searchHistory.length > 0 && (
                        <div className="z_search_history">
                            <div className="z_history_items">
                                {searchHistory.map((item, index) => (
                                    <button
                                        key={index}
                                        className="z_history_item"
                                        onClick={() => handleHistoryClick(item)}
                                    >
                                      <IoSearch />  {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Tabs */}
                    {searchTerm && (
                        <div className="d_tabs_scroll_wrapper mb-2">
                            <div className="d_tabs_container d-flex border-bottom border-secondary pt-2">
                                <div
                                    className={`d_tab_item ${selectedTab === "all" ? "active" : ""}`}
                                    onClick={() => setSelectedTab("all")}
                                >
                                    All
                                </div>
                                <div
                                    className={`d_tab_item ${selectedTab === "matches" ? "active" : ""}`}
                                    onClick={() => setSelectedTab("matches")}
                                >
                                    Matches
                                </div>
                                <div
                                    className={`d_tab_item ${selectedTab === "series" ? "active" : ""}`}
                                    onClick={() => setSelectedTab("series")}
                                >
                                    Series
                                </div>
                                <div
                                    className={`d_tab_item ${selectedTab === "videos" ? "active" : ""}`}
                                    onClick={() => setSelectedTab("videos")}
                                >
                                    Videos
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {!searchTerm ? (
                    <>
                        <section className="x_series_section">
                            <h2 className="x_series_title">Popular Series</h2>

                            <div className="x_series_grid">
                                {images.map((img, index) => (
                                    <div className="x_series_card" key={index}>
                                        <img src={img} alt={`popular-series-${index}`} />
                                    </div>
                                ))}
                            </div>
                        </section>

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
                    </>
                ) : noResults ? (
                    <div className="z_no_result">
                        <img
                            src={nores}
                            alt="No results"
                            className="z_no_result_img"
                        />

                        <h3>No Results Found</h3>
                        <p>
                            We couldn't find any matches. <br />
                            Try a different keyword or check your spelling.
                        </p>
                    </div>
                ) : (
                    <>
                        {/* Matches Section */}
                        {filteredResults.matches.length > 0 && (
                            <section className="x_series_section">
                                <h2 className="x_series_title">Matches</h2>
                                <div className="row">
                                    {filteredResults.matches.map((match, index) => (
                                        <div className="col-12 col-md-6 mb-3" key={index}>
                                            <div className="z_match_card">
                                                <div className="z_match_title">
                                                    {highlightText(match.title, searchTerm)}
                                                </div>

                                                <div className="d-flex justify-content-between align-items-start">
                                                    <div className="z_match_teams">
                                                        {match.teams.map((team, tIdx) => (
                                                            <div className="z_team_row" key={tIdx}>
                                                                <div className="z_team">
                                                                    <Flag code={team.code} />
                                                                    <span>{highlightText(team.name, searchTerm)}</span>
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
                        )}

                        {/* Videos Section */}
                        {filteredResults.videos.length > 0 && (
                            <section className="x_series_section">
                                <h2 className="x_series_title">Videos</h2>
                                <div className="row">
                                    {filteredResults.videos.map((video, index) => (
                                        <div className="col-12 col-md-4 mb-3" key={index}>
                                            <div className="d_highlight_card">
                                                <div className="d_thumb_wrapper">
                                                    <img
                                                        src={video.thumbnail}
                                                        alt={video.title}
                                                        className="d_thumb_img"
                                                    />
                                                    <span className="d_duration">{video.duration}</span>
                                                </div>
                                                <p className="d_highlight_title">{highlightText(video.title, searchTerm)}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Series Section */}
                        {filteredResults.series.length > 0 && (
                            <section className="x_series_section">
                                <h2 className="x_series_title">Series</h2>
                                <div className="x_series_grid">
                                    {filteredResults.series.map((s) => (
                                        <div className="x_series_card" key={s.id}>
                                            <img src={s.image} alt={s.name} />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </>
                )}


            </div>
        </>
    );
}
