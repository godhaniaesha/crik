import React from 'react';
import '../style/x_style.css';
import sc from "../img/Series Card.png";
import sc1 from "../img/Series Card (1).png";
import sc2 from "../img/Series Card (2).png";
import sc3 from "../img/Series Card (4).png";


export default function BrowseSeries() {
    const images = [
        sc,
        sc1,
        sc2,
        sc3,
        sc,
        sc1,
        sc2,
        sc3,
        sc,
        sc1,
        sc2,
        sc3,
    ];

    return (
        <section className="x_series_section">
            <h2 className="x_series_title">Browse Series</h2>

            <div className="x_series_slider">
                {images.map((img, index) => (
                    <div className="x_series_card" key={index}>
                        <img src={img} alt={`series-${index}`} />
                    </div>
                ))}
            </div>

        </section>
    );
}
