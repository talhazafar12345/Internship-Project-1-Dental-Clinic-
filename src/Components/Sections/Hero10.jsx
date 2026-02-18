
import { useState } from "react";
function Hero10() {
    const [isOpen, setIsOpen] = useState(false);
    const openPopup = () => {
        setIsOpen(true);
    };
    const closePopup = () => {
        setIsOpen(false);
    };
    return (
        <>
            <section className="hero" id="clinic">
                <div className="play-btn" onClick={openPopup}></div>
            </section>
            {isOpen && (
                <div className="video-popup">
                    <span className="closess-btn" onClick={closePopup}>
                        ×
                    </span>
                    <iframe onClick={(e) => e.stopPropagation()} width="500" height="315" src="https://www.youtube.com/embed/SF4aHwxHtZ0?si=Y-BjHZQvbN1FQGQd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            )}
        </>
    );
}
export default Hero10;