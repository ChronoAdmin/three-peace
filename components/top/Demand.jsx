import React from "react";
import styles from "@/styles/top/demand.module.css";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../common/SectionTitle";

const Demand = () => {
  return (
    <div className={styles.wrap}>
      <SectionTitle h2Title={"できること"} subTitle={"ksvvkvkmvkd"} />
      <div className={styles.boxs}>
        {/* box strat-------------------------------------- */}
        <div className={styles.box}>
          <div className={styles.img}>
            <Image src="/2.jpg" height={1080} width={1920} />
          </div>
          <div className={styles.txt}>
            <h3>ペットも一緒に</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              eius, maiores debitis unde labore esse.
            </p>
            <Link href="#">詳しくはこちら</Link>
          </div>
        </div>
        {/* box end-------------------------------------- */}
        {/* box strat-------------------------------------- */}
        <div className={styles.box}>
          <div className={styles.img}>
            <Image src="/3.jpg" height={1080} width={1920} />
          </div>
          <div className={styles.txt}>
            <h3>ペットも一緒に</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              eius, maiores debitis unde labore esse.
            </p>
            <Link href="#">詳しくはこちら</Link>
          </div>
        </div>
        {/* box end-------------------------------------- */}
        {/* box strat-------------------------------------- */}
        <div className={styles.box}>
          <div className={styles.img}>
            <Image src="/4.jpg" height={1080} width={1920} />
          </div>
          <div className={styles.txt}>
            <h3>ペットも一緒に</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              eius, maiores debitis unde labore esse.
            </p>
            <Link href="#">詳しくはこちら</Link>
          </div>
        </div>
        {/* box end-------------------------------------- */}
        {/* box strat-------------------------------------- */}
        <div className={styles.box}>
          <div className={styles.img}>
            <Image src="/5.jpg" height={1080} width={1920} />
          </div>
          <div className={styles.txt}>
            <h3>ペットも一緒に</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              eius, maiores debitis unde labore esse.
            </p>
            <Link href="#">詳しくはこちら</Link>
          </div>
        </div>
        {/* box end-------------------------------------- */}
        {/* box strat-------------------------------------- */}
        <div className={styles.box}>
          <div className={styles.img}>
            <Image src="/6.jpg" height={1080} width={1920} />
          </div>
          <div className={styles.txt}>
            <h3>ペットも一緒に</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              eius, maiores debitis unde labore esse.
            </p>
            <Link href="#">詳しくはこちら</Link>
          </div>
        </div>
        {/* box end-------------------------------------- */}
        {/* box strat-------------------------------------- */}
        <div className={styles.box}>
          <div className={styles.img}>
            <Image src="/7.jpg" height={1080} width={1920} />
          </div>
          <div className={styles.txt}>
            <h3>ペットも一緒に</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              eius, maiores debitis unde labore esse.
            </p>
            <Link href="#">詳しくはこちら</Link>
          </div>
        </div>
        {/* box end-------------------------------------- */}
      </div>
    </div>
  );
};

export default Demand;
