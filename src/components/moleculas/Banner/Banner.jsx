import React from "react";
import classes from "./banner.module.scss";
import Link from "next/link";

// import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Image from "next/image";

export const Banner = () => {
  return (
    <>
      <section className={classes.banner}>
        <Swiper
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          // navigation={true}
          modules={[Autoplay, Navigation]}
        >
          <SwiperSlide>
            <div className={classes.banner__slide}>
              <div className={classes.banner__image}>
                <Image
                  src="/img/loteriaWeb3.png"
                  layout="fill"
                  priority="true"
                  alt="imagess"
                />
              </div>
              <div className={classes.banner__description}>
                <div className={classes.banner__right}>
                  <h5>El futuro del azar esta en WEB 3</h5>
                  <h1>
                    No hay herramienta de aleatoriedad mejor que la {" "}
                    <span>Blockchain</span>
                  </h1>
                  <div>
                    <button>
                      <Link href="/posts/Tokens"><a>Comprar Tokens</a></Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={classes.banner__slide}>
              <div className={classes.banner__description}>
                <div className={classes.banner__left}>
                  <h5>Al servicio de la descentralización</h5>
                  <h1>
                    El codigo es la  {"  "}
                    <span>ley</span>
                  </h1>
                  <div>
                    <button>Ver el poso actual</button>
                  </div>
                </div>
              </div>
              <div className={classes.banner__image}>
                <Image
                  src="/img/loteriaWeb3.png"
                  layout="fill"
                  priority="true"
                  alt="image"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
