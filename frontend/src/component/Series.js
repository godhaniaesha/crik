import React from 'react'
import series from "../img/SERIES.png";
import series1 from "../img/SERIES(1).png";
import series2 from "../img/SERIES(2).png";
import series3 from "../img/SERIES(3).png";
import series4 from "../img/SERIES(4).png";
import series5 from "../img/SERIES(5).png";
import series6 from "../img/SERIES(6).png";
import series7 from "../img/SERIES(7).png";
import series8 from "../img/SERIES(8).png";
import series9 from "../img/SERIES(9).png";
import series10 from "../img/SERIES(10).png";
import series11 from "../img/SERIES(11).png";
import series12 from "../img/SERIES(12).png";
import series14 from "../img/SERIES(14).png";
import series15 from "../img/SERIES(15).png";
import series16 from "../img/SERIES(16).png";
import { useNavigate } from 'react-router';



export default function Series() {
    const navigate = useNavigate();
    const images = [
        series9, series, series4, series2, series16, series5, series6, series1, series7, series10, series14, series15, series8,
        series11, series3, series12,
    ];
    return (
        <>
            <section className="z_schedule">
                <h2 className="x_series_title">Popular Series</h2>

                <div className="x_series_grid">
                    {images.map((img, index) => (
                        <div className="x_series_card" key={index} onClick={() => {
                            navigate('/seariesdetail');
                        }}>
                            <img src={img} alt={`popular-series-${index}`} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
