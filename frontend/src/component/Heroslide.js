import React from "react";
import Slider from "react-slick";
import "../style/x_style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s3 from "../img/slide3.png";
import s2 from "../img/slide2.png";



export default function Heroslider() {
    const slides = [
        {
            id: 1,
            live: "Live (29L)",
            team1: "INDIA",
            team2: "SOUTH AFRICA",
            score: "IND - 45/1 (5.2)",
            tour: "South Africa tour India 2025",
            bg: "https://www.shutterstock.com/shutterstock/photos/2599594355/display_1500/stock-photo-epic-cricket-sports-poster-featuring-an-intense-south-africa-vs-pakistan-cricket-rivalry-for-the-2599594355.jpg"
        },
        {
            id: 2,
            live: "2ndODI-Highlight",
            team1: "England",
            team2: "AUSTRALIA",
            score: "ENG Won by 7 Wicket (25 balls left)",
            tour: "AUS tour of ENG 2025 - 13m",
            bg: s2
        },
        {
            id: 3,
            live: "PREVIEW",
            team1: "HUR",
            team2: "THUNDER",
            score: "Hobart Hurricanes won 3 matches in row",
            tour: "Big Bash League 2025/26",
            bg: s3
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: true
    };

    return (
        <div className="x_hero_slider_container">
            <Slider {...settings} className="x_hero_slider">
                {slides.map((slide) => (
                    <a key={slide.id} href="#" className="x_hero_slide_link">
                        <section
                            className="x_hero_slide"
                            style={{ backgroundImage: `url(${slide.bg})` }}
                        >
                            <div className="x_hero_slide_overlay"></div>
                            <div className="x_hero_slide_content">
                                <span className="x_live_badge">{slide.live}</span>
                                <h2 className="x_team_names">
                                    {slide.team1} <span className="x_vs_text">VS</span> {slide.team2}
                                </h2>
                                <p className="x_match_score">
                                    {slide.score}
                                    <br />
                                    {slide.tour}
                                </p>
                            </div>
                        </section>
                    </a>
                ))}
            </Slider>
        </div>
    );
}
