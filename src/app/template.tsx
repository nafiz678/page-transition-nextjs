"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { type ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
    useGSAP(() => {
        const bannerOne = document.getElementById("banner-1");
        const bannerTwo = document.getElementById("banner-2");
        const bannerThree = document.getElementById("banner-3");
        const bannerFour = document.getElementById("banner-4");
        const bannerFive = document.getElementById("banner-5");

        if (bannerOne && bannerTwo && bannerThree && bannerFour && bannerFive) {
            const tl = gsap.timeline();

            tl.set([bannerOne, bannerTwo, bannerThree, bannerFour, bannerFive], {
                yPercent: -100,
            }).to([bannerOne, bannerTwo, bannerThree, bannerFour, bannerFive], {
                yPercent: 0,
                stagger: 0.15,
                duration: 0.4,
                ease: "none"
            }).to([bannerOne, bannerTwo, bannerThree, bannerFour, bannerFive], {
                yPercent: 100,
                stagger: 0.15,
                duration: 0.5,
                ease: "none"
            });
        }
    }, []);
    return (
        <section>
            <div
                id="banner-1"
                className="fixed left-0 top-0 z-50 min-h-screen w-1/5 bg-foreground"
            />
            <div
                id="banner-2"
                className="fixed left-[20%] top-0 z-50 min-h-screen w-1/5 bg-foreground"
            />
            <div
                id="banner-3"
                className="fixed left-[40%] top-0 z-50 min-h-screen w-1/5 bg-foreground"
            />
            <div
                id="banner-4"
                className="fixed left-[60%] top-0 z-50 min-h-screen w-1/5 bg-foreground"
            />
            <div
                id="banner-5"
                className="fixed left-[80%] top-0 z-50 min-h-screen w-1/5 bg-foreground"
            />
            <main>
                {children}
            </main>
        </section>
    );
}
