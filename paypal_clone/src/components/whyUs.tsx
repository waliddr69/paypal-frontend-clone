import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const Why: React.FC = () => {
  const screen = useMediaQuery({ query: "(min-width:768px)" });
  const scrollToDiv = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useGSAP(() => {
    if (screen) {
      gsap.from(".wrapper-why h3", {
        scrollTrigger: {
          trigger: ".Why",
          start: "top bottom",
          end: "+=600",
          scrub: true,
        },
        opacity: 0,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".why-wrapper",
            start: "-80% top",
            end: "+=700",
            pin: true,
            scrub: true,
            markers: true,
          },
        })

        .to(
          ".how-image-1",
          {
            height: "0px",
          },
          0
        )
        .to(
          ".how-image-2",
          {
            backgroundPositionY: 10,
          },
          0
        )
        .to(
          ".how-div-1 h4",
          {
            opacity: 0,
          },
          0
        )
        .to(
          ".how-div-1 div",
          {
            opacity: 0,
            translateY: -50,
          },
          0
        )
        .to(
          ".how-div-1 button",
          {
            opacity: 0,
          },
          0
        )
        .to(
          ".how-div-1",
          {
            opacity: 0,
          },
          0
        )
        .to(
          ".how-div-2 div",
          {
            translateY: 0,
          },
          0
        )
        .to(
          ".recevoir",
          {
            color: "white",
          },
          0
        )
        .to(
          ".envoyez",
          {
            color: "rgba(255, 255, 255, 0.277)",
          },
          0
        )

        .to(
          ".second",
          {
            opacity: 1,
          },
          0
        )
        .to(
          ".first",
          {
            opacity: 0,
          },
          0
        )
        .to(
          ".second-button",
          {
            opacity: 1,
          },
          0
        );
    }
  });
  return (
    <>
      <div className="why-wrapper">
        <section className="Why bg-blue-800 h-fit p-5   translate-y-[-96%] lg:translate-y-[-128%]  flex-center">
          <div className="wrapper-why  w-[70%]  flex flex-col gap-50">
            <h3 className="text-white text-md lg:text-7xl lg:leading-20">
              Envoyez de l’argent en toute sécurité et sans délai, à qui vous
              voulez, où que ce soit <sup>3</sup>
            </h3>
            {screen ? (
              <div className="flex flex-row h-[500px]   md:gap-10 lg:justify-between w-[100%]  md:-ml-25">
                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="envoyez text-6xl font-black text-white">
                      Envoyer
                    </h4>
                    <h4 className="recevoir text-6xl font-black mt-4">
                      Recevoir
                    </h4>
                  </div>
                  <div className="flex flex-col gap-5 ">
                    <p className=" text-white text-2xl relative w-[150%]  h-[80px]">
                      <span
                        className="first absolute left-0 top-0  text-white text-2xl"
                        style={{ opacity: "1" }}
                      >
                        Envoyez de l’argent à la vitesse de la lumière.
                      </span>{" "}
                      <span className="second absolute left-0 top-0 opacity-0  text-white text-2xl">
                        Soyez remboursé de manière sécurisée.
                      </span>
                    </p>

                    <div className="relative ">
                      <button className="first absolute self-start text-lg  py-2  w-[100%] rounded-full border-2 border-white font-bold text-white">
                        Envoyez de l'argent
                      </button>
                      <button className="second-button opacity-0 self-start text-lg  py-2 w-[100%] rounded-full border-2 border-white font-bold text-white">
                        Demander de l'argent
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative h-[100%] w-[50%] overflow-hidden">
                  <div
                    className="how-image-1 absolute z-10 top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: "url('/about-4.jpg')" }}
                  ></div>

                  <div className="how-div-1 absolute z-10 left-[20%] p-1 top-[15%]  w-[60%] h-[70%] bg-transparent backdrop-blur-3xl rounded-3xl flex flex-col items-center justify-evenly">
                    <h4 className="font-bold text-2xl text-white">
                      Envoyez de l'argent
                    </h4>

                    <div
                      className="w-[147.3px] h-[143.6px] bg-center bg-cover"
                      style={{
                        borderRadius: "50%",
                        backgroundImage:
                          "url('/featuredscrollsection2_item_AvatarRow_size_All.png')",
                      }}
                    ></div>

                    <h4 className="font-extrabold text-7xl text-white">35 €</h4>

                    <button className="px-2 w-[30%] rounded-full border-2 border-gray-500 font-bold text-white">
                      EURO
                    </button>
                  </div>

                  <div
                    className="how-image-2 absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('/story-scroll-02_size-mobile-up.jpg')",
                    }}
                  ></div>

                  <div className="how-div-2 absolute left-[20%] p-1 top-[15%] w-[60%] h-[70%] bg-transparent backdrop-blur-3xl rounded-3xl flex flex-col items-center justify-evenly">
                    <h4 className="font-bold text-2xl text-white">
                      Recevez de l'argent
                    </h4>

                    <div
                      className="w-[147.3px] h-[143.6px]  bg-center bg-cover translate-y-5"
                      style={{
                        borderRadius: "50%",
                        backgroundImage:
                          "url('/featuredscrollsection1_item_avatarow_size_All.png')",
                      }}
                    ></div>

                    <h4 className="font-extrabold text-7xl text-white">28 €</h4>

                    <button className="px-2 w-[30%] rounded-full border-2 border-gray-500 font-bold text-white">
                      EURO
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div className="flex justify-center gap">
                  <button className="flex flex-col">
                    <h3
                      className="text-white mr-5 cursor-pointer"
                      id="envoyer"
                      onClick={() => scrollToDiv("envoyer")}
                    >
                      Envoyer
                    </h3>
                    <div className=" h-[5px] bg-blue"></div>
                  </button>
                  <button className="flex flex-col">
                    <h3
                      className="recevoir cursor-pointer"
                      id="recevoir"
                      onClick={() => scrollToDiv(".recevoir")}
                    >
                      Recevoir
                    </h3>
                    <div className=" h-[5px] bg-gray-50 opacity-15"></div>
                  </button>
                </div>
                <div className="flex gap-10 w-[1000px] overflow-x-auto">
                  <div className=" flex flex-col justify-center rounded-b-2xl w-[80%] pb-5 overflow-hidden gap-6 bg-blue-400">
                    <div className="relative self-center h-[500px] w-full">
                      <div
                        className="how-image-1 self-start absolute z-10 top-0 left-0 w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: "url('/about-4.jpg')" }}
                      ></div>

                      <div className="how-div-1 absolute z-10 left-[20%] p-1 top-[15%] w-[60%] h-[70%] bg-transparent backdrop-blur-3xl rounded-3xl flex flex-col items-center justify-evenly">
                        <h4 className="font-bold text-2xl text-white">
                          Envoyez de l'argent
                        </h4>

                        <div
                          className="w-[147.3px] h-[143.6px]  bg-center bg-cover"
                          style={{
                            borderRadius: "50%",
                            backgroundImage:
                              "url('/featuredscrollsection2_item_AvatarRow_size_All.png')",
                          }}
                        ></div>

                        <h4 className="font-extrabold text-7xl text-white">
                          35 €
                        </h4>

                        <button className="px-2 w-[30%] rounded-full border-2 border-gray-500 font-bold text-white">
                          EURO
                        </button>
                      </div>
                    </div>

                    <p
                      style={{ justifySelf: "end", textAlign: "center" }}
                      className="font-semibold"
                    >
                      Envoyez de l'argent a la vitesse de la lumiere
                    </p>

                    <button className="font-bold border-3 rounded-full w-[50%] py-2 self-center">
                      Envoyez de l'argent
                    </button>
                  </div>
                  <div className=" flex flex-col justify-center rounded-b-2xl w-[80%] pb-5 overflow-hidden gap-6 bg-blue-400">
                    <div className="relative self-center h-[500px] w-full">
                      <div
                        className="how-image-2 absolute top-0 left-0 w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage:
                            "url('/story-scroll-02_size-mobile-up.jpg')",
                        }}
                      ></div>
                      <div className="how-div-2 absolute left-[20%] p-1 top-[15%] w-[60%] h-[70%] bg-transparent backdrop-blur-3xl rounded-3xl flex flex-col items-center justify-evenly">
                        <h4 className="font-bold text-2xl text-white">
                          Recevez de l'argent
                        </h4>

                        <div
                          className="w-[147.3px] h-[143.6px]  bg-center bg-cover translate-y-5"
                          style={{
                            borderRadius: "50%",
                            backgroundImage:
                              "url('/featuredscrollsection1_item_avatarow_size_All.png')",
                          }}
                        ></div>

                        <h4 className="font-extrabold text-7xl text-white">
                          28 €
                        </h4>

                        <button className="px-2 w-[30%] rounded-full border-2 border-gray-500 font-bold text-white">
                          EURO
                        </button>
                      </div>
                    </div>

                    <p
                      style={{ justifySelf: "end", textAlign: "center" }}
                      className="font-semibold"
                    >
                      Soyez remboursé de manière sécurisée.
                    </p>

                    <button className="font-bold border-3 rounded-full w-[50%] py-2 self-center">
                      Demander de l'argent
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Why;
