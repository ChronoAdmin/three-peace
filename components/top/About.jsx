import React, { useEffect, useRef } from "react";
import styles from "@/styles/top/about.module.css";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imgRef = useRef(null);
  const img2Ref = useRef(null);
  useEffect(() => {
    gsap.from(imgRef.current, {
      width: "0",
      opacity: "0",
    });
    gsap.to(imgRef.current, {
      width: "58vw",
      opacity: 1,
      ease: "power3.out",
      duration: 1,
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 70%", // when the top of the trigger hits the bottom of the viewport
        end: "bottom bottom", // when the bottom of the trigger hits the top of the viewport
      },
    });

    gsap.from(img2Ref.current, {
      width: "0",
      opacity: "0",
    });
    gsap.to(img2Ref.current, {
      width: "58vw",
      opacity: 1,
      ease: "power3.out",
      // duration:1,
      duration: 1,
      scrollTrigger: {
        trigger: img2Ref.current,
        start: "top 70%", // when the top of the trigger hits the bottom of the viewport
        end: "bottom bottom", // when the bottom of the trigger hits the top of the viewport
      },
    });
  }, []);

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.bg}>
          <Image src="/top/aboutBg.jpg" height={1280} width={1920} />
        </div>
        <div className={styles.inner}>
          <div className={styles.notice}>
            <Link href="#">
              新型コロナウイルス感染症対策について
              <IoIosArrowForward />
            </Link>
          </div>
          <div className={styles.title} id="about">
            <h2>京都 フォトウェディング</h2>
            <span>和の心で誓う、伝統とモダンの調和</span>
            <div className={styles.tegaki}>Three Peace</div>
          </div>
          <div className={styles.container}>
            <div className={styles.item}>
              <div className={styles.img}>
                <Image
                  src="/top/aboutBg.jpg"
                  height={1280}
                  width={1920}
                  ref={imgRef}
                />
                <div className={styles.text}>
                  <h3><span style={{color:"#8b744d"}}>和</span>の背景</h3>
                  <span>
                    京都には数多くの世界遺産が点在し、その中には金閣寺や清水寺など、圧倒的な美しさを誇る歴史的な寺院や神社があります。それぞれが異なる雰囲気を持ち、和風の優雅さを感じさせます。
                  </span>
                  <span className={styles.rl}>shrine & Temple</span>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.img}>
                <Image
                  src="/top/aboutBg2.jpg"
                  height={1280}
                  width={1920}
                  ref={img2Ref}
                />
                <div className={styles.text}>
                  <h3><span style={{color:"purple"}}>多</span>彩なスタジオ</h3>
                  <span>
                  もちろん、京都の美しい街並みと自然だけが私たちのフォトウェディングの魅力ではありません。室内のプロフェッショナルな撮影スタジオもご利用いただけます。
                  </span>
                  <span className={styles.rl}>studio & staff</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
