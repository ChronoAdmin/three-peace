import React from "react";
import styles from "@/styles/top/service.module.css";
import Slider from "../common/Slider";

const Service = () => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.swiper}>
          <div className={styles.swiper_area}>
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
