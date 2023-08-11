import React from "react";
import styles from "@/styles/common/couponPop.module.css";
import Image from "next/image";
import Link from "next/link";
import {RxCross2} from "react-icons/rx"

const CouponPop = () => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.close}><RxCross2 /></div>
        <Link href="/">
          <div className={styles.label}>期間限定キャンペーン</div>
          <div className={styles.box}>
            <div className={styles.img}>
              <Image src="/couponPop.jpg" height={960} width={540} />
            </div>
            <div className={styles.text}>
              <span>
                最大10万円分のCB
                <br />
                キャンペーン中！
              </span>
              <p>内容</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CouponPop;
