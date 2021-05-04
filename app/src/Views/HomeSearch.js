import React from 'react';
import Home from "../static/videos/home.mp4";
import HousingSearch from "../components/HousingSearch";

const HomeSearch = () => {
    return (
        <div>
            <video
                autoPlay
                loop
                muted
                style={{
                    objectFit: 'cover',
                    width: '100vw',
                    height: '100vh',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: '-100'
                }}
            >
                <source src={Home} type="video/mp4" />

            </video >
            <div style={{ margin: "auto", width: "90%", maxWidth: "800px", padding: "10px", paddingTop: "12%" }}>
                <HousingSearch />
            </div>
        </div>

    )
}

export default HomeSearch;