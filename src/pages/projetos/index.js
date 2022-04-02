import React from "react";

import Image from "next/image";
import sports1Img from "../../assets/images/sports1.jpg";
import sports2Img from "../../assets/images/sports2.jpg";
import sports3Img from "../../assets/images/sports3.jpg";

import employerImg from "../../assets/images/employer.jpg";

import style from "./style.module.scss";

export default function Projetos() {
  return (
    <div className={style.projects_container} data-scroll data-scroll-section>
      <h1>Sports</h1>
      <section>
        <Image
          src={sports1Img}
          alt="Sports"
          width={780}
          height={520}
          objectFit="cover"
        />

        <div className={style.project_info}>
          <figure className={style.project_img}>
            <Image src={employerImg} width={80} height={80} alt="employer" />
            <caption>Wagner Mattos</caption>
            <span>Mecânico</span>
          </figure>

          <div className={style.project_desc}>
            <strong
              data-scroll
              data-scroll-class={style.scroll_class}
              data-scroll-delay="0.25"
            >
              Mercedes AMG-770
            </strong>

            <ul
              data-scroll
              data-scroll-class={style.scroll_class}
              data-scroll-delay="0.25"
            >
              <li>Assentos</li>
              <li>Pintura</li>
              <li>Rodas</li>
              <li>Motor</li>
              <li>Eletrônicos</li>
            </ul>

            <span
              data-scroll
              data-scroll-class={style.scroll_class}
              data-scroll-delay="0.25"
            >
              Preço do projeto: R$ 2899.00
            </span>
          </div>
        </div>
      </section>
      <section>
        <Image
          src={sports2Img}
          alt="Sports"
          width={780}
          height={520}
          objectFit="cover"
        />

        <div className={style.project_info}>
          <figure className={style.project_img}>
            <Image src={employerImg} width={80} height={80} alt="employer" />
            <caption>Wagner Mattos</caption>
            <span>Mecânico</span>
          </figure>

          <div className={style.project_desc}>
            <strong
              data-scroll
              data-scroll-class={style.scroll_class}
              data-scroll-delay="0.25"
            >
              Lamborghini Aventador
            </strong>

            <ul
              data-scroll
              data-scroll-class={style.scroll_class}
              data-scroll-delay="0.25"
            >
              <li>Assentos</li>
              <li>Pintura</li>
              <li>Rodas</li>
              <li>Motor</li>
              <li>Eletrônicos</li>
            </ul>

            <span
              data-scroll
              data-scroll-class={style.scroll_class}
              data-scroll-delay="0.25"
            >
              Preço do projeto: R$ 2899.00
            </span>
          </div>
        </div>
      </section>
      <section>
        <Image
          src={sports3Img}
          alt="Sports"
          width={780}
          height={520}
          objectFit="cover"
        />

        <div className={style.project_info}>
          <figure className={style.project_img}>
            <Image src={employerImg} width={80} height={80} alt="employer" />
            <caption>Wagner Mattos</caption>
            <span>Mecânico</span>
          </figure>

          <div className={style.project_desc}>
            <strong
              data-scroll
              data-scroll-class={style.scroll_class}
              data-scroll-delay="0.25"
            >
              Maserati Ghibli
            </strong>

            <ul
              data-scroll
              data-scroll-class={style.scroll_class}
              data-scroll-delay="0.25"
            >
              <li>Assentos</li>
              <li>Pintura</li>
              <li>Rodas</li>
              <li>Motor</li>
              <li>Eletrônicos</li>
            </ul>

            <span
              data-scroll
              data-scroll-class={style.scroll_class}
              data-scroll-delay="0.25"
            >
              Preço do projeto: R$ 2899.00
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
