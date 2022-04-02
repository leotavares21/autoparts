import {
  SiChevrolet,
  SiHonda,
  SiFord,
  SiVolkswagen,
  SiToyota,
  SiAudi,
} from "react-icons/si";

import Image from "next/image";

import carImg from "../../assets/images/car.png";

import style from "./style.module.scss";

export default function Banner() {
  return (
    <div className={style.banner_container} data-scroll-section>
      <div className={style.banner_content}>
        <div
          className={style.banner_desc}
          data-scroll
          data-scroll-speed="6"
          data-scroll-direction="top"
        >
          <h1>Os melhores fornecedores e a melhor qualidade</h1>
          <p>
            50% de desconto na sua primeira compra e revisão gratuita, não perca
            essa promoção, somente nesse final de semana.
          </p>
        </div>

        <Image
          className={style.banner_img}
          src={carImg}
          width={650}
          height={300}
          objectFit="contain"
          alt="banner image"
          data-scroll
          data-scroll-speed="3"
          data-scroll-direction="top"
          data-scroll-class={style.scroll_class}
          data-scroll-repeat="true"
        />
      </div>

      <div className={style.banner_brand}>
        <div>
          <SiHonda className={style.banner_icon} />
          <SiChevrolet className={style.banner_icon} />
          <SiAudi className={style.banner_icon} />
        </div>
        <div>
          <SiToyota className={style.banner_icon} />
          <SiVolkswagen className={style.banner_icon} />
          <SiFord className={style.banner_icon} />
        </div>
      </div>
    </div>
  );
}
