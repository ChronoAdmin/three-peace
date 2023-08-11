import React from "react";
import styles from "@/styles/common/c_header.module.css";
import Link from "next/link";
import Image from "next/image";
import { FiInstagram } from "react-icons/fi";
import { BsLine } from "react-icons/bs";
import Nav from "../top/Nav";

const C_header = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.backImg}>
        <Image src="/backImg.png" height={577} width={433} />
      </div>
      <div className={styles.contact}>
        <h1>
          <Link href="/">お問い合わせはこちら</Link>
        </h1>
      </div>
      <div className={styles.nav}>
        <Nav />
      </div>
      <div className={styles.bottom}>
        <div className={styles.sns}>
          <div className={styles.icon}>
            <BsLine className={styles.line} />
          </div>
          <div className={styles.icon}>
            <FiInstagram />
          </div>
        </div>
        <div className={styles.logo}>
          <Image src="/logo-1.png" width={711} height={124} />
        </div>
      </div>
    </div>
  );
};

export default C_header;
