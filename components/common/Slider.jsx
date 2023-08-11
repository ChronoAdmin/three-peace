import React from "react";
import styles from "@/styles/common/slider.module.css";

const Slider = () => {
  const slides = [
    { url: "/2.jpg", alt: "チャーハン" },
    { url: "/3.jpg", alt: "サラダ" },
    { url: "/4.jpg", alt: "クレープ" },
    { url: "/5.jpg", alt: "サンドイッチ" },
    // 追加のスライド...
  ];

  return (
    <div className={styles.loopSlide}>
      <ul>
        {slides.map((slide, index) => (
          <li key={index}>
            <a href="#">
              <img src={slide.url} alt={slide.alt} />{slide.alt}
            </a>
          </li>
        ))}
      </ul>
      <ul>
        {slides.map((slide, index) => (
          <li key={index}>
            <a href="#">
              <img src={slide.url} alt={slide.alt} />{slide.alt}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
