import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Features: React.FC = () => {
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>(".parallax-image").forEach((el) => {
      gsap.to(el, {
        y: "-25%",
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".Features",
          start: "bottom bottom",
          end: "bottom+=500 top",
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      })
      
      .to(
        ".Brand",
        {
          yPercent: -150,
        },
        0
      )
      .to(
        ".title.left",
        {
          left: 20,
        },
        0.5
      )
      .to(
        ".title.right",
        {
          right: 20,
        },
        0.5
      )

      .to(
        " .title.left",
        {
          yPercent: 450,
          ease: "none",
        },
        0.5
      );
  });

  return (
    <>
      <section className="Features flex flex-col items-center justify-center gap-44">
        <div className="wrapper flex flex-row w-[95%] lg:w-[80%] gap-10 lg:gap-0 flex-wrap">
          <div className="feature-text flex flex-col justify-between w-full lg:w-[50%]">
            <h3 className="w-full lg:w-[60%]  " style={{opacity:"1"}}>Payez à votre façon</h3>
            <div className="flex flex-col gap-7 w-full lg:w-[50%]">
              <p style={{ lineHeight: "1.7rem", fontWeight: "600" }}>
                Faites vos achats sur vos sites préférés avec PayPal. Ayez
                l’esprit tranquille en sachant que la Protection des Achats
                PayPal1 vous couvre sur les achats éligibles.
              </p>
              <button className="border-2 rounded-full font-black py-2 w-[50%] lg:w-[90%] text-lg cursor-pointer hover:w-[95%] transition-all">
                Payer avec PayPal
              </button>
            </div>
          </div>

          <div className="relative w-full lg:w-[50%] h-[800px] overflow-hidden">
            <div
              className="parallax-image absolute top-0 left-0 w-full h-[120%] bg-cover bg-center"
              style={{ backgroundImage: "url('/about-1.jpg')" }}
            ></div>
          </div>
        </div>

        <div className="wrapper flex flex-row w-[95%] lg:w-[80%] gap-10 flex-wrap-reverse lg:flex-nowrap">
          <div className="relative w-[100%] lg:w-[45%] h-[800px] overflow-hidden">
            <div
              className="parallax-image absolute top-0 left-0 w-full h-[120%] bg-cover bg-center"
              style={{ backgroundImage: "url('/about-2.jpg')" }}
            ></div>
          </div>

          <div className="feature-text flex flex-col justify-between w-[100%] lg:w-[50%] ml-2">
            <h3 className="w-[100%] lg:w-[90%]" style={{opacity:"1"}}>
              Payez en une ou plusieurs fois. C’est vous qui choisissez.
            </h3>
            <div className="flex flex-col gap-7 w-[100%] lg:w-[80%]">
              <p style={{ lineHeight: "1.7rem", fontWeight: "600" }}>
                Le Paiement en 4X proposé par PayPal vous permet de régler vos
                achats en 4 versements : un le jour de l’achat et les trois
                autres mensuellement, sans frais.<sup>2</sup>
              </p>
              <button className="border-2 rounded-full font-black py-2 w-[50%] text-lg cursor-pointer hover:w-[55%] transition-all">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
        <div className="wrapper w-[95%] lg:w-[80%] flex flex-col items-center gap-10">
          <h3 className="text-4xl security self-start ml-5" style={{opacity:"1"}}>
            Une sécurité <br />
            toujours active
          </h3>

          <div className="relative w-[100%] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] overflow-hidden">
            <div
              className="parallax-image absolute top-0 left-0 w-full h-[120%] bg-cover bg-center"
              style={{ backgroundImage: "url('/about-3.jpg')" }}
            ></div>
          </div>

          <h5 className="text-4xl w-[95%] mt-2">
            Vos transactions et paiements sont cryptés. PayPal ne partage jamais
            vos informations financières complètes avec les commerçants.
          </h5>
          <button className="border-2 rounded-full font-black py-2 px-3 sm:w-[30%] sm:px-5 lg:w-[25%] text-lg cursor-pointer  self-start transition-all">
            En savoir plus
          </button>
        </div>
      </section>
      <section className="Brand mt-12">
        <div className="h-[900px] bg-cover bg-center relative">
          <h2 className="title text-white font-black left absolute sm:mt-1 -left-[2%]">
            transférez
          </h2>
          <h2 className="title text-white font-black right absolute bottom-0 -right-[2%]">
            rapidement
          </h2>
        </div>
      </section>
    </>
  );
};

export default Features;
