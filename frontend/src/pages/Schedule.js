import React, { useState } from "react";
import { FaCalendarAlt, FaChevronDown } from "react-icons/fa";
import Calendar from "react-calendar";

const Flag = ({ code }) => (
    <img
        src={`/flags/${code}.png`}
        alt={code}
        className="z_flag"
    />
);


const scheduleData = [
    {
        day: "TODAY, 29 Dec",
        dayDate: "2025-12-29",
        matches: [
            {
                title: "1st ODI • SL tour of NED, 2025 • Amstelveen",
                teams: [
                    { code: "sl", name: "SL", score: "154/5 (18.4)" },
                    { code: "ned", name: "NED" }
                ],
                live: true
            },
            {
                title: "Eliminator • ICC U19 T20 WC • Sharjah",
                teams: [
                    { code: "ind", name: "IND-U19" },
                    { code: "pak", name: "PAK-U19" }
                ],
                time: "1:45 PM IST"
            },
            {
                title: "5th T20I • USA tour of RSA • Johannesburg",
                teams: [
                    { code: "usa", name: "USA" },
                    { code: "rsa", name: "RSA" }
                ],
                time: "9:30 PM IST"
            }
        ]
    },
    {
        day: "TOMORROW, 30 Dec",
        dayDate: "2025-12-30",
        matches: [
            {
                title: "1st Test | Day 3 • OMN tour of NZ • Auckland",
                teams: [
                    { code: "omn", name: "OMN" },
                    { code: "nz", name: "NZ" }
                ],
                time: "5:40 AM IST"
            }
        ]
    },
    {
        day: "TUESDAY, 31 Dec",
        dayDate: "2025-12-31",
        matches: [
            {
                title: "2nd ODI • SL tour of NED, 2025 • Rotterdam",
                teams: [
                    { code: "sl", name: "SL" },
                    { code: "ned", name: "NED" }
                ],
                time: "2:30 PM IST"
            },
            {
                title: "Final • ICC U19 T20 WC • Dubai",
                teams: [
                    { code: "ind", name: "IND-U19" },
                    { code: "aus", name: "AUS-U19" }
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
                teams: [
                    { code: "eng", name: "ENG" },
                    { code: "sa", name: "SA" }
                ],
                time: "6:00 PM IST"
            }
        ]
    }
];


export default function Schedule() {
    const [showCalendar, setShowCalendar] = useState(false);
    const [date, setDate] = useState(new Date());
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState(null);


    const selectedDateStr = selectedDate
        ? selectedDate.toISOString().split("T")[0]
        : null;

    const filteredSchedule = selectedDateStr
        ? scheduleData.filter(item => item.dayDate === selectedDateStr)
        : scheduleData;


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
                    className="z_date_header mb-3"
                    onClick={() => setShowCalendar(!showCalendar)}
                >
                    <div className="z_date_left">
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
                    <input placeholder="Search by match, tours, team or series" />
                </div>

                {/* FILTER */}
                <div className="z_filter_chips">
                    <span className="z_chip z_chip_active">All</span>
                    <span className="z_chip">Domestic</span>
                    <span className="z_chip">Int’l</span>
                    <span className="z_chip">T20s</span>
                </div>
            </div>


            {filteredSchedule.length > 0 ? (
                filteredSchedule.map((dayItem, i) => (
                    <div className="z_day_section" key={i}>
                        <h3>📅 {dayItem.day}</h3>

                        {dayItem.matches.map((match, idx) => (
                            <div className="z_match_card" key={idx}>
                                <div className="z_match_title">{match.title}</div>

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

                                {match.live && (
                                    <button className="z_live_btn">WATCH LIVE</button>
                                )}

                                {match.time && (
                                    <div className="z_time">
                                        Watch live at <b>{match.time}</b>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ))
            ) : (
                <div className="z_no_match">No matches scheduled for this date</div>
            )}
        </div>
    );
}
