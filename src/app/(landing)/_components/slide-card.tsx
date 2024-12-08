"use client";

import React, { useState, useEffect } from "react";

const FeatureWall = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const features = [
    {
      imgSrc: "/sk.png",
      text: "Convert anything.",
    },
    {
      imgSrc: "/kjs.png",
      text: "Search files.",
    },
    {
      imgSrc: "/za.png",
      text: "Run scripts.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 5000); // 5 saniye

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="page_sectionContainer__86OJv">
      <div className="FeatureWall_container__ealcz">
        <div className="FeatureWall_left__5x6NB">
          <div className="FeatureWall_wall__BRIeA">
            <span className="FeatureWall_heading__J_9u_">What else can do?</span>
            <br />
            {features.map((feature, index) => (
              <span key={index}>
                <span
                  className={`FeatureWall_text__KtcCg ${index === activeIndex ? "FeatureWall_active__FMz4U" : ""}`}
                  tabIndex={0}
                  role="button"
                >
                  {feature.text}
                  {/* */}.
                </span>{" "}
              </span>
            ))}
            <br />
            <a className="FeatureWall_text__KtcCg" href="./store">
              And much, much more.
            </a>
          </div>
          <div style={{ position: "relative" }}>
            <div className="FeatureWall_feature__slN9b">
              <div className="FeatureBadge_badge__DD_AT">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none">
                  <path
                    fill="url(#command-search-screenshots-16_svg__a)"
                    d="M.515 6.92c0-2.24 0-3.36.436-4.216A4 4 0 0 1 2.699.956C3.554.52 4.674.52 6.915.52h2.16c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748c.436.856.436 1.976.436 4.216v2.16c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748c-.856.436-1.976.436-4.216.436h-2.16c-2.24 0-3.36 0-4.216-.436A4 4 0 0 1 .95 13.296C.515 12.44.515 11.32.515 9.08z"
                  />
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M6.878 4.884a.19.19 0 0 0-.174.107l-.307.615c-.2.4-.609.653-1.056.653h-.263a.88.88 0 0 0-.882.882v3.093c0 .487.395.882.882.882h5.844a.88.88 0 0 0 .882-.882V7.141a.88.88 0 0 0-.882-.882h-.263a1.18 1.18 0 0 1-1.056-.653l-.307-.615.44-.22-.44.22a.19.19 0 0 0-.174-.107zM5.822 4.55c.2-.4.609-.653 1.056-.653h2.244c.447 0 .856.253 1.056.653l.307.615-.426.214.427-.214c.032.066.1.107.173.107h.263c1.032 0 1.868.837 1.868 1.869v3.093a1.87 1.87 0 0 1-1.868 1.869H5.078a1.87 1.87 0 0 1-1.868-1.869V7.141c0-1.032.836-1.869 1.868-1.869h.263c.073 0 .14-.041.174-.107zM8 7.29a1.054 1.054 0 1 0 0 2.107A1.054 1.054 0 0 0 8 7.29M5.96 8.344a2.04 2.04 0 1 1 4.08 0 2.04 2.04 0 0 1-4.08 0"
                    clipRule="evenodd"
                  />
                  <defs>
                    <linearGradient
                      id="command-search-screenshots-16_svg__a"
                      x1="0.515"
                      x2="15.475"
                      y1="0.52"
                      y2="15.48"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF6363" />
                      <stop offset={1} stopColor="#D72A2A" />
                    </linearGradient>
                  </defs>
                </svg>
                Search Screenshots
              </div>
              <p className="FeatureWall_featureSubtitle__dMaIn">
                Search for a screenshot using text that appears in the image.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="FeatureWall_right__Nfe6o">
          <div className="FeatureWall_desktopWrapper__a9h7u">
            <div className="FeatureWall_desktop__y7X6D">
              {features.map((feature, index) => (
                <img
                  key={index}
                  alt={`Feature ${index}`}
                  width={1257}
                  height={1256}
                  loading="lazy"
                  className={`FeatureWall_featureImage__CkDFo ${index === activeIndex ? "FeatureWall_featureImageActive__boRpC" : ""}`}
                  src={feature.imgSrc}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              ))}
            </div>
          </div>
          <div
            className="FeatureWall_pagination__QxDAX"
            key={activeIndex} // Key değişimi animasyonun yeniden başlamasını sağlar
            style={
              {
                "--animation-duration": "5s",
                "--animation-play-state": "running",
              } as React.CSSProperties
            }
          >
            <div className="FeatureWall_page___6ylx FeatureWall_current__adA_j" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureWall;
