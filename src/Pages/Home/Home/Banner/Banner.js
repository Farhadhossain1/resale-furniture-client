import React from 'react';

const Banner = () => {
    return (
        <div className="hero  min-h-screen" style={{ backgroundImage: `url("https://i.pinimg.com/originals/57/7f/25/577f251e53663fe1029614fb08ac7152.jpg")` }}>
        <div className="hero bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white font-serif">Welcome To AllForm </h1>
            <p className="mb-5 text-white font-semibold">Used AllForm is a modern and minimal furniture store with a lot of great features that any online store needs!</p>
          </div>
        </div>
      </div>
    );
};

export default Banner;