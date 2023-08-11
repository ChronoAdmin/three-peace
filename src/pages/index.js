import React, { useState, useEffect } from "react";
import C_header from "../../components/common/C_header";
import CouponPop from "../../components/common/CouponPop";
import Fv from "../../components/top/Fv";
import Loading from "../../components/common/Loading";
import About from "../../components/top/About";
import Service from "../../components/top/Service";
import BotArea from "../../components/chatgpt/BotArea";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      setIsLoading(true);

      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("hasVisited", "true");
      }, 7000);

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <C_header />
      <div className="main">
        {/* <CouponPop /> */}
        <Fv />
        <About />
        <Service />
        {/* <BotArea /> */}
      </div>
    </>
  );
}
