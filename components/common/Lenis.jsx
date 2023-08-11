import {Lenis} from '@studio-freight/lenis'
import { useState, useEffect, useLayoutEffect, useRef } from 'react';

const useSmoothScroll = () => {
    const [lenis, setLenis] = useState(null);
    const reqIdRef = useRef(null);

    useEffect(() => {
        const animate = (time) => {
            if (lenis) {
                lenis.raf(time);
            }
            reqIdRef.current = requestAnimationFrame(animate);
        }
        reqIdRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(reqIdRef.current);
    }, [lenis]);

    useLayoutEffect(() => {
        const lenisInstance = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        setLenis(lenisInstance);

        return () => {
            lenisInstance.destroy();
            setLenis(null);
        };
    }, []);

    return lenis;
};

export default useSmoothScroll;
