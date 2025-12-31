import React from 'react';
import { IoIosArrowBack, IoIosSearch, IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineLockClosed } from "react-icons/hi";
import { MdTimer } from "react-icons/md";
import '../style/d_style.css';

export default function MatchDetails() {
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
                    <div className="col-12 col-lg-8">
                        <div className="d_hero_section text-center p-4 p-md-5 mb-4">
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

                            <p className="d_match_date text-secondary">Start on Friday, Dec 19 | 7:00 pm</p>
                            <h1 className="d_timer_text mb-4">2h 30m</h1>
                            
                            <button className="btn d_buy_pass_btn d-flex align-items-center justify-content-center mx-auto">
                                <HiOutlineLockClosed className="me-2" /> BUY A PASS
                            </button>
                        </div>

                        {/* Tabs Section */}
                        <div className="d_tabs_scroll_wrapper mb-4">
                            <div className="d_tabs_container d-flex border-bottom border-secondary">
                                <div className="d_tab_item active">LIVE</div>
                                <div className="d_tab_item">SCORECARD</div>
                                <div className="d_tab_item">OVERS</div>
                                <div className="d_tab_item">COMMENTARY</div>
                                <div className="d_tab_item">SQUADS</div>
                                <div className="d_tab_item">P. TABLE</div>
                                <div className="d_tab_item">VIDEOS</div>
                            </div>
                        </div>

                        {/* Middle Content: Status */}
                        <div className="d_match_status_box py-5 text-center">
                            <MdTimer size={50} className="text-secondary mb-3" />
                            <h4 className="text-white">Match has not started yet.</h4>
                            <p className="text-secondary px-3">Official live coverage, real-time scores, and ball-by-ball commentary will begin at the toss.</p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Sidebar (Insights & Updates) */}
                    <div className="col-12 col-lg-4">
                        {/* Notification Card */}
                        <div className="d_side_card p-4 mb-4 d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <IoIosNotificationsOutline size={30} className="text-warning me-3" />
                                <div>
                                    <h6 className="m-0 text-white">Toss in 1h 50m</h6>
                                    <small className="text-secondary">19:00 IST Scheduled</small>
                                </div>
                            </div>
                            <button className="btn d_notify_btn">Notify Me</button>
                        </div>

                        {/* Insights Card */}
                        <div className="d_side_card p-4">
                            <h6 className="d_section_label mb-4">MATCH INSIGHTS</h6>
                            
                            <div className="d_insight_block mb-4">
                                <span className="d_badge_label mb-2">Pitch Report</span>
                                <p className="small text-secondary m-0">
                                    The Wanderers pitch is a batting paradise. High altitude means the ball flies. Expect 200+ runs today. Win toss and chase is the formula.
                                </p>
                            </div>

                            <div className="d_insight_block">
                                <span className="d_badge_label mb-2">Squad Update</span>
                                <p className="small text-secondary m-0">
                                    Jofra Archer is fully fit and confirmed to play. RSA might include an extra spinner.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}