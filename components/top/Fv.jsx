import React from "react";
import styles from "@/styles/top/fv.module.css";
import Image from "next/image";
import Sample from "../common/Slider";

const Fv = () => {
  return (
    <div className={styles.wrap}>
      {/* <Sample /> */}
      <div className={styles.fv}>
        <Image src="/top/fv.jpeg" height={1080} width={1920} />
        <div className={styles.copy}>
          <span>
            最高の一日 最高の一枚 <br /> あなたと一緒に作るウェディングフォト
          </span>
        </div>
      </div>
    </div>
  );
};

export default Fv;
