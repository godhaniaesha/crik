import React from 'react';
import '../style/x_style.css';

import series from "../img/SERIES.png";
import series1 from "../img/SERIES(1).png";
import series2 from "../img/SERIES(2).png";
import series3 from "../img/SERIES(3).png";

export default function PopularSeries() {

  const images = [
    series, series1, series2, series3
  ];

  return (
    <section className="d_slider_wrapper x_series_section">
      <h2 className="x_series_title">Popular Series</h2>

      <div className="x_series_grid">
        {images.map((img, index) => (
          <div className="x_series_card" key={index}>
            <img src={img} alt={`popular-series-${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
