import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getScale = () => {
    const w = viewport.width;
    if (w <= 640) return 2;
    if (w <= 724) return 2.1;
    if (w <= 1020) return 2.4;
    return 3;
  };

  const getX = () => {
    const w = viewport.width;
    if (w <= 944) return 60;
    return 20;
  };

  const scale = getScale();
  const x = getX();

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [viewport.width]);

  useGSAP(
    () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".Hero",
            start: "top top",
            end: "+=1000",
            scrub: true,
            pin: true,
          },
        })
        .to(
          ".hero-photo",
          { scale, transformOrigin: "center", ease: "none" },
          0
        )
        .to(".hero-photo h3", { opacity: 0 }, 0)
        .to(".hero-title", { yPercent: -150 }, 0)
        .to(".Hero .buttons", { yPercent: -550 }, 0)
        .to(".Hero .photo-title.left", { left: x }, 0);

      gsap.to(".Hero .photo-title.left", {
        scrollTrigger: {
          trigger: ".Hero",
          start: "bottom 95%",
          scrub: true,
        },
        bottom: 100,
        ease: "none",
      });

      gsap.to(".Hero .photo-title.right", {
        scrollTrigger: {
          trigger: ".Hero",
          start: "bottom 50%",
          scrub: true,
        },
        right: x,
      });
    },
    { dependencies: [scale, x] }
  );

  return (
    <>
      <div className="scroll-trigger">
        <section className="Hero h-[100vh] bg-blue">
          <div className="hero-wrapper flex flex-col items-center h-[100%] w-[100%] relative">
            <div className="buttons border-2 border-black rounded-full   flex flex-row justify-between mt-10 ">
              <button className="bg-black text-white rounded-full px-3 py-2 font-bold">
                Personnel
              </button>
              <button className="px-3 py-2 font-bold">Professionnel</button>
            </div>

            <h1 className="hero-title w-4/6 text-center mt-10 heading-hero ">
              Payez, envoyez, recevez de l’argent plus simplement
            </h1>

            <div className="hero-photo flex flex-col py-5 absolute h-10/12 bg-white w-[350px] sm:w-[400px] md:w-[500px] lg:w-[39%] overflow-y-hidden rounded-4xl items-center -bottom-6/12 gap-1.5">
              <h3 className="mt-2 font-extrabold">PayPal</h3>
              <div className="cover w-[90%] h-[100%] rounded relative">
                <h2 className="photo-title left absolute sm:mt-1  -left-2/3">
                  Payez
                </h2>

                <h2 className="photo-title right absolute bottom-0 -right-96">
                  Plus malin
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div style={{ height: "140vh" }}></div>
    </>
  );
};

export default Hero;
