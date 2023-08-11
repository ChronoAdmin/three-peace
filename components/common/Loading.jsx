import React, { useEffect, useRef } from "react";
import styles from "@/styles/common/loading.module.css";

import { gsap } from "gsap";
import Image from "next/image";

const Loading = () => {
  const loading_ref = useRef(null);
  const cam1_ref = useRef(null);
  const cam2_ref = useRef(null);
  const cam3_ref = useRef(null);
  const cam4_ref = useRef(null);
  const cam5_ref = useRef(null);
  const cam6_ref = useRef(null);
  const cam7_ref = useRef(null);
  const cam8_ref = useRef(null);
  const cam9_ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      loading_ref.current,
      { height: "100vh" },
      { height: "0%", duration: 2, ease: "power4.out", delay: 5 }
    );
    gsap.fromTo(
      cam1_ref.current,
      { x: "100px",opacity: "0" },
      { x: "0",  ease: "power4.out", delay:1,opacity: "1" }
    );
    gsap.fromTo(
      cam2_ref.current,
      { x: "-100px",opacity: "0" },
      { x: "0",  ease: "power4.out", delay:1.5,opacity: "1" }
    );
    gsap.fromTo(
      cam3_ref.current,
      { x: "100px",opacity: "0",y:"-100px" },
      { x: "0",y:"0",  ease: "power4.out", delay:2,opacity: "1" }
    );
    gsap.fromTo(
      cam4_ref.current,
      { x: "-100px",opacity: "0",y:"100px" },
      { x: "0",y:"0",  ease: "power4.out", delay:2.5,opacity: "1" }
    );
    gsap.fromTo(
      cam5_ref.current,
      { x: "100px",opacity: "0",y:"-100px" },
      { x: "0",y:"0",  ease: "power4.out", delay:2.7,opacity: "1" }
    );
    gsap.fromTo(
      cam6_ref.current,
      { x: "-100px",opacity: "0",y:"100px" },
      { x: "0",y:"0",  ease: "power4.out", delay:3,opacity: "1" }
    );
    gsap.fromTo(
      cam7_ref.current,
      { x: "-100px",opacity: "0",y:"-100px" },
      { x: "0",y:"0",  ease: "power4.out", delay:3.2,opacity: "1" }
    );
    gsap.fromTo(
      cam8_ref.current,
      { x: "-100px",opacity: "0",y:"100px" },
      { x: "0",y:"0",  ease: "power4.out", delay:3.4,opacity: "1" }
    );
    gsap.fromTo(
      cam9_ref.current,
      { x: "100px",opacity: "0",y:"-100px" },
      { x: "0",y:"0",  ease: "power4.out", delay:3.5,opacity: "1" }
    );
  }, []);

  return (
    <>
      <div className={styles.wrap} ref={loading_ref}>
        {/* <Image src="/kasa.png" height={1080} width={1080} className={styles.kasa} /> */}
        <div className={`${styles.cam} ${styles.cam1}`} ref={cam1_ref}>
          <Image src="/fv.webp" height={1080} width={1920} />
        </div>
        <div className={`${styles.cam} ${styles.cam2}`} ref={cam2_ref}>
          <Image src="/backImg.png" height={900} width={500} />
        </div>
        <div className={`${styles.cam} ${styles.cam3}`} ref={cam3_ref}>
          <Image src="/2.jpg" height={900} width={500} />
        </div>
        <div className={`${styles.cam} ${styles.cam4}`} ref={cam4_ref}>
          <Image src="/3.jpg" height={900} width={500} />
        </div>
        <div className={`${styles.cam} ${styles.cam5}`} ref={cam5_ref}>
          <Image src="/4.jpg" height={900} width={500} />
        </div>
        <div className={`${styles.cam} ${styles.cam6}`} ref={cam6_ref}>
          <Image src="/5.jpg" height={900} width={500} />
        </div>
        <div className={`${styles.cam} ${styles.cam7}`} ref={cam7_ref}>
          <Image src="/6.jpg" height={900} width={500} />
        </div>
        <div className={`${styles.cam} ${styles.cam8}`} ref={cam8_ref}>
          <Image src="/7.jpg" height={900} width={500} />
        </div>
        <div className={`${styles.cam} ${styles.cam9}`} ref={cam9_ref}>
          <Image src="/8.jpg" height={900} width={500} />
        </div>
      </div>
    </>
  );
};

export default Loading;
