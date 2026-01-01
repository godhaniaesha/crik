import React, { useState } from "react";
import { FaCalendarAlt, FaChevronDown } from "react-icons/fa";
import Calendar from "react-calendar";

const Flag = ({ code }) => (
    <img
        src={`https://flagcdn.com/w40/${code}.png`}
        alt={code}
        className="z_flag"
        loading="lazy"
    />
);

const scheduleData = [
    {
        day: "YESTERDAY, 29 Dec",
        dayDate: "2025-12-29",
        matches: [
            {
                title: "3rd Test | Day 5 • AUS tour of IND • Melbourne",
                type: "Intl",
                teams: [
                    { code: "au", name: "AUS", score: "474 & 234" },
                    { code: "in", name: "IND", score: "369 & 201" }
                ],
                time: "Completed"
            },
            {
                title: "2nd T20I • SA tour of PAK • Lahore",
                type: "T20",
                teams: [
                    { code: "sa", name: "SA", score: "183/9 (20)" },
                    { code: "pk", name: "PAK", score: "187/4 (18.2)" }
                ],
                time: "Completed"
            },
            {
                title: "1st ODI • SL tour of NED • Rotterdam",
                type: "Intl",
                teams: [
                    { code: "sl", name: "SL", score: "289/7 (50)" },
                    { code: "ne", name: "NED", score: "246 (47.4)" }
                ],
                time: "Completed"
            }
        ]
    },
    {
        day: "TODAY, 30 Dec",
        dayDate: "2025-12-30",
        matches: [
            {
                title: "1st Test | Day 3 • OMN tour of NZ • Auckland",
                type: "Intl",
                teams: [
                    { code: "om", name: "OMN" },
                    { code: "nz", name: "NZ" }
                ],
                time: "5:40 AM IST"
            }
        ]
    },
    {
        day: "TOMORROW, 31 Dec",
        dayDate: "2025-12-31",
        matches: [
            {
                title: "2nd ODI • SL tour of NED, 2025 • Rotterdam",
                type: "Intl",
                teams: [
                    { code: "sl", name: "SL" },
                    { code: "ne", name: "NED" }
                ],
                time: "2:30 PM IST"
            },
            {
                title: "Final • ICC U19 T20 WC • Dubai",
                type: "T20",
                teams: [
                    { code: "in", name: "IND-U19" },
                    { code: "au", name: "AUS-U19" }
                ],
                time: "7:00 PM IST"
            }
        ]
    },
    {
        day: "WEDNESDAY, 01 Jan",
        dayDate: "2026-01-01",
        matches: [
            {
                title: "New Year Special T20 • ENG tour of SA • Cape Town",
                type: "Intl",
                teams: [
                    { code: "gb-eng", name: "ENG" },
                    { code: "sa", name: "SA" }
                ],
                time: "6:00 PM IST"
            }
        ]
    },
    {
        day: "THURSDAY, 02 Jan",
        dayDate: "2026-01-02",
        matches: [
            {
                title: "1st T20I • IND tour of AUS • Sydney",
                type: "T20",
                teams: [
                    { code: "in", name: "IND" },
                    { code: "au", name: "AUS" }
                ],
                time: "1:30 PM IST"
            }
        ]
    },
    {
        day: "FRIDAY, 03 Jan",
        dayDate: "2026-01-03",
        matches: [
            {
                title: "2nd Test | Day 1 • PAK tour of ENG • Manchester",
                type: "Intl",
                teams: [
                    { code: "pk", name: "PAK" },
                    { code: "gb-eng", name: "ENG" }
                ],
                time: "3:30 PM IST"
            },
            {
                title: "Qualifier • BBL 2026 • Melbourne",
                type: "T20",
                teams: [
                    { code: "au", name: "Stars" },
                    { code: "au", name: "Renegades" }
                ],
                time: "10:00 AM IST"
            }
        ]
    },
    {
        day: "SATURDAY, 04 Jan",
        dayDate: "2026-01-04",
        matches: [
            {
                title: "3rd ODI • BAN tour of WI • Bridgetown",
                type: "Intl",
                teams: [
                    { code: "bd", name: "BAN" },
                    { code: "us-wi", name: "WI" }
                ],
                time: "7:00 PM IST"
            }
        ]
    },
    {
        day: "SUNDAY, 05 Jan",
        dayDate: "2026-01-05",
        matches: [
            {
                title: "Final • BBL 2026 • Sydney",
                type: "T20",
                teams: [
                    { code: "au", name: "Sixers" },
                    { code: "au", name: "Heat" }
                ],
                time: "2:00 PM IST"
            }
        ]
    },
    {
        day: "MONDAY, 06 Jan",
        dayDate: "2026-01-06",
        matches: [
            {
                title: "1st ODI • SA tour of NZ • Wellington",
                type: "Intl",
                teams: [
                    { code: "sa", name: "SA" },
                    { code: "nz", name: "NZ" }
                ],
                time: "6:45 AM IST"
            }
        ]
    }
];

export default function Schedule() {
    const [showCalendar, setShowCalendar] = useState(false);
    const [date, setDate] = useState(new Date());
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const filterOptions = ["All", "Domestic", "Intl", "T20s"];
    const [activeFilter, setActiveFilter] = useState("All");

    // Fix timezone issue - get local date string
    const getLocalDateString = (dateObj) => {
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const selectedDateStr = selectedDate
        ? getLocalDateString(selectedDate)
        : null;

    const filteredSchedule = (selectedDateStr
        ? scheduleData.filter(item => item.dayDate === selectedDateStr)
        : scheduleData
    ).map(day => ({
        ...day,
        matches: day.matches.filter(match => {
            // Search filter - if no search term, show all
            const searchMatch = searchTerm.trim() === "" || (
                match.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                match.teams.some(team =>
                    team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    team.code.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );

            // Type filter
            const filterMatch =
                activeFilter === "All" ||
                match.type === activeFilter ||
                (activeFilter === "T20s" && match.type === "T20");

            return searchMatch && filterMatch;
        })
    })).filter(day => day.matches.length > 0);

    const formattedDate = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    const displayDate = (selectedDate || today).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    return (
        <div className="z_schedule">
            <div className="z_sticky_top">
                {/* DATE HEADER */}
                <div
                    className="z_date_header mb-3 d-flex gap-2 align-items-center"
                    onClick={() => setShowCalendar(!showCalendar)}
                >
                    <div className="z_date_left gap-1 d-flex align-items-center">
                        <FaCalendarAlt className="z_cal_icon" />
                        <span className="z_date_text">
                            {selectedDate ? ` ${displayDate}` : formattedDate}
                        </span>
                    </div>

                    <FaChevronDown
                        className={`z_caret ${showCalendar ? "z_rotate" : ""}`}
                    />
                </div>

                {/* CALENDAR */}
                {showCalendar && (
                    <div className="z_calendar_wrapper">
                        <Calendar
                            onChange={(val) => {
                                setSelectedDate(val);
                                setShowCalendar(false);
                            }}
                            value={selectedDate || new Date()}
                            calendarType="gregory"
                        />
                    </div>
                )}

                {/* SEARCH */}
                <div className="z_search_box">
                    <input
                        placeholder="Search by match, tours, team or series"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* FILTER */}
                <div className="z_filter_chips">
                    {filterOptions.map(filter => (
                        <span
                            key={filter}
                            className={`z_chip ${activeFilter === filter ? "z_chip_active" : ""}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </span>
                    ))}
                </div>
            </div>

            {filteredSchedule.length > 0 ? (
                filteredSchedule.map((dayItem, i) => (
                    <div className="z_day_section" key={i}>
                        <h3>📅 {dayItem.day}</h3>

                        <div className="row">
                            {dayItem.matches.map((match, idx) => (
                                <div className="col-12 col-md-6 mb-4" key={idx}>
                                    <div className="z_match_card">
                                        <div className="z_match_title">{match.title}</div>
                                        <div className="d-flex justify-content-between align-items-start">
                                            <div className="z_match_teams">
                                                {match.teams.map((team, tIdx) => (
                                                    <div className="z_team_row" key={tIdx}>
                                                        <div className="z_team">
                                                            <Flag code={team.code} />
                                                            <span>{team.name}</span>
                                                        </div>

                                                        {team.score && (
                                                            <span className="z_score">{team.score}</span>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>

                                            {/* DIVIDER */}
                                            <div className="z_match_divider"></div>

                                            {/* LIVE OR TIME */}
                                            {match.live ? (
                                                <button className="z_live_btn">WATCH LIVE</button>
                                            ) : (
                                                match.time && (
                                                    <div className="z_time z_time_end text-end">
                                                        Watch live at <br />
                                                        <b>{match.time}</b>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <div className="z_no_match">
                    <svg
                        width="200"
                        height="200"
                        viewBox="0 0 200 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="z_no_match_svg"
                    >
                        <rect
                            x="40"
                            y="50"
                            width="120"
                            height="130"
                            rx="8"
                            stroke="#333"
                            strokeWidth="3"
                            fill="#1a1a1a"
                        />
                        <rect
                            x="40"
                            y="50"
                            width="120"
                            height="30"
                            fill="#2a2a2a"
                        />
                        <circle cx="65" cy="50" r="5" fill="#444" />
                        <circle cx="100" cy="50" r="5" fill="#444" />
                        <circle cx="135" cy="50" r="5" fill="#444" />
                        <circle cx="60" cy="100" r="3" fill="#333" />
                        <circle cx="80" cy="100" r="3" fill="#333" />
                        <circle cx="100" cy="100" r="3" fill="#333" />
                        <circle cx="120" cy="100" r="3" fill="#333" />
                        <circle cx="140" cy="100" r="3" fill="#333" />
                        <circle cx="60" cy="120" r="3" fill="#333" />
                        <circle cx="80" cy="120" r="3" fill="#333" />
                        <circle cx="100" cy="120" r="3" fill="#ff4444" />
                        <circle cx="120" cy="120" r="3" fill="#333" />
                        <circle cx="140" cy="120" r="3" fill="#333" />
                        <circle cx="60" cy="140" r="3" fill="#333" />
                        <circle cx="80" cy="140" r="3" fill="#333" />
                        <circle cx="100" cy="140" r="3" fill="#333" />
                        <circle cx="120" cy="140" r="3" fill="#333" />
                        <circle cx="140" cy="140" r="3" fill="#333" />
                        <circle cx="60" cy="160" r="3" fill="#333" />
                        <circle cx="80" cy="160" r="3" fill="#333" />
                        <circle cx="100" cy="160" r="3" fill="#333" />
                        <circle cx="120" cy="160" r="3" fill="#333" />
                        <circle cx="140" cy="160" r="3" fill="#333" />
                        <line
                            x1="50"
                            y1="90"
                            x2="150"
                            y2="170"
                            stroke="#ff4444"
                            strokeWidth="4"
                            strokeLinecap="round"
                            opacity="0.7"
                        />
                        <line
                            x1="150"
                            y1="90"
                            x2="50"
                            y2="170"
                            stroke="#ff4444"
                            strokeWidth="4"
                            strokeLinecap="round"
                            opacity="0.7"
                        />
                        <circle cx="20" cy="100" r="4" fill="#222" opacity="0.5" />
                        <circle cx="180" cy="100" r="4" fill="#222" opacity="0.5" />
                        <circle cx="100" cy="20" r="4" fill="#222" opacity="0.5" />
                        <circle cx="100" cy="190" r="4" fill="#222" opacity="0.5" />
                    </svg>

                    <div className="z_no_match_text">
                        <h4>No Matches Scheduled</h4>
                        <p>There are no matches scheduled for this date</p>
                    </div>
                </div>
            )}
        </div>
    );
}