import React, { useEffect, useRef, useState } from 'react';
import '../style/x_style.css';
import sc from "../img/Series Card.png";
import sc1 from "../img/Series Card (1).png";
import sc2 from "../img/Series Card (2).png";
import sc3 from "../img/Series Card (4).png";


export default function BrowseSeries() {
    const images = [
        sc,
        sc,
        sc,
        sc,
        sc,
        sc1,
        sc2,
        sc3,
        sc,
        sc1,
        sc2,
        sc3
    ];

    const sliderRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const GAP = 14; // must match CSS gap
        let step = 0;
        const calcStep = () => {
            const first = slider.querySelector('.x_series_card');
            if (first) {
                const rect = first.getBoundingClientRect();
                step = Math.round(rect.width + GAP);
            }
        };

        calcStep();
        const onResize = () => calcStep();
        window.addEventListener('resize', onResize);

        let intervalId = null;
        const startAuto = () => {
            if (intervalId) return;
            intervalId = setInterval(() => {
                if (isPaused) return;
                if (!slider) return;

                const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
                // if we're at (or very near) the end, jump back to start
                if (Math.ceil(slider.scrollLeft) >= maxScrollLeft) {
                    slider.scrollTo({ left: 0, behavior: 'auto' });
                } else {
                    // scroll one card (step) at a time
                    slider.scrollBy({ left: step || slider.clientWidth, behavior: 'smooth' });
                }
            }, 2200); // advance every ~2.2s
        };

        startAuto();

        return () => {
            window.removeEventListener('resize', onResize);
            if (intervalId) clearInterval(intervalId);
        };
    }, [isPaused]);

    return (
        <section className="x_series_section">
            <h2 className="x_series_title">Browse Series</h2>

            <div
                className="x_series_slider"
                ref={sliderRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {images.map((img, index) => (
                    <div className="x_series_card" key={index}>
                        <img src={img} alt={`series-${index}`} />
                    </div>
                ))}
            </div>

        </section>
    );
}
