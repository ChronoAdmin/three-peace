import React from "react";
import styles from "@/styles/common/sectionTitle.module.css";

const SectionTitle = ({h2Title,subTitle}) => {
  return (
    <div className={styles.title} id="about">
      <h2>{h2Title}</h2>
      <span>{subTitle}</span>
      <div className={styles.tegaki}>Three Peace</div>
    </div>
  );
};

export default SectionTitle;
