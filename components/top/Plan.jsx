import React from "react";
import styles from "@/styles/top/plan.module.css";
import SectionTitle from "../common/SectionTitle";
import Link from "next/link";
import Image from "next/image";

const Plan = () => {
  return (
    <>
      <div className={styles.wrap}>
        <SectionTitle
          h2Title={"Plan"}
          subTitle={"mvskmkmkmkmk;zxm;kxmkmkzmvz"}
        />
        <div className={styles.boxs}>
          {/* box start----------------------------------------- */}
          <div className={styles.box}>
            <div className={styles.inner}>
            <Link href="#"></Link>
              <div className={styles.contents}>
                <div className={styles.img}>
                  <Image src="/2.jpg" height={300} width={300} />
                </div>
                <div className={styles.txt}></div>
              </div>
              <div className={styles.list}>
                <Link href="#">詳しいプラン</Link>
              </div>
            </div>
          </div>
          {/* box end----------------------------------------- */}
          {/* box start----------------------------------------- */}
          <div className={styles.box}>
            <div className={styles.inner}>
            <Link href="#"></Link>
              <div className={styles.contents}>
                <div className={styles.img}>
                  <Image src="/2.jpg" height={300} width={300} />
                </div>
                <div className={styles.txt}></div>
              </div>
              <div className={styles.list}>
                <Link href="#">詳しいプラン</Link>
              </div>
            </div>
          </div>
          {/* box end----------------------------------------- */}
          {/* box start----------------------------------------- */}
          <div className={styles.box}>
            <div className={styles.inner}>
            <Link href="#"></Link>
              <div className={styles.contents}>
                <div className={styles.img}>
                  <Image src="/2.jpg" height={300} width={300} />
                </div>
                <div className={styles.txt}></div>
              </div>
              <div className={styles.list}>
                <Link href="#">詳しいプラン</Link>
              </div>
            </div>
          </div>
          {/* box end----------------------------------------- */}

        </div>
      </div>
    </>
  );
};

export default Plan;
