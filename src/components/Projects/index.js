import { useState } from "react";
import Image from "next/image";

import style from "./style.module.scss";

import sedan1Img from "../../assets/images/sedan1.jpg";
import sedan2Img from "../../assets/images/sedan2.jpg";
import sedan3Img from "../../assets/images/sedan3.jpg";
import hatch1Img from "../../assets/images/hatch1.jpg";
import hatch2Img from "../../assets/images/hatch2.jpg";
import hatch3Img from "../../assets/images/hatch3.jpg";
import offRoad1Img from "../../assets/images/offroad1.jpg";
import offRoad2Img from "../../assets/images/offroad2.jpg";
import offRoad3Img from "../../assets/images/offroad3.jpg";
import sports1Img from "../../assets/images/sports1.jpg";
import sports2Img from "../../assets/images/sports2.jpg";
import sports3Img from "../../assets/images/sports3.jpg";

export default function Projects() {
  const [tabName, setTabName] = useState("tab1");

  function handleClickTab(name) {
    setTabName(name);
  }

  return (
    <div className={style.container_projects} data-scroll-section>
      <h3>Nossos projetos</h3>
      <p>
        Veja alguns do nossos projetos feitos aqui na faraway e venha fazer
        parte desse sonho, Não perca essa oportunidade de turbinar seu veículo.
      </p>

      <ul className={style.projects_menu}>
        <li
          className={`btn ${tabName === "tab1" ? "btn-dark" : "btn-gray"}`}
          onClick={() => handleClickTab("tab1")}
        >
          Sedans
        </li>
        <li
          className={`btn ${tabName === "tab2" ? "btn-dark" : "btn-gray"}`}
          onClick={() => handleClickTab("tab2")}
        >
          Hatchs
        </li>
        <li
          className={`btn ${tabName === "tab3" ? "btn-dark" : "btn-gray"}`}
          onClick={() => handleClickTab("tab3")}
        >
          Off&nbsp;-&nbsp;Roads
        </li>
        <li
          className={`btn ${tabName === "tab4" ? "btn-dark" : "btn-gray"}`}
          onClick={() => handleClickTab("tab4")}
        >
          Sports
        </li>
      </ul>

      <div
        className={`${style.projects_img} ${
          tabName === "tab1" ? `${style.active}` : ""
        }`}
      >
        <Image
          className={style.scroll_img}
          src={sedan1Img}
          width={350}
          height={200}
          objectFit="cover"
          alt="banner image"
          data-scroll
          data-scroll-class={style.scroll_class}
          data-scroll-repeat="true"
          data-scroll-delay="0.95"
        />
        <Image
          className={style.scroll_img}
          src={sedan2Img}
          width={350}
          height={200}
          objectFit="cover"
          alt="banner image"
          data-scroll
          data-scroll-class={style.scroll_class}
          data-scroll-repeat="true"
          data-scroll-delay="0.95"
        />
        <Image
          className={style.scroll_img}
          src={sedan3Img}
          width={350}
          height={200}
          objectFit="cover"
          alt="banner image"
          data-scroll
          data-scroll-class={style.scroll_class}
          data-scroll-repeat="true"
          data-scroll-delay="0.95"
        />
      </div>

      <div
        className={`${style.projects_img} ${
          tabName === "tab2" ? `${style.active}` : ""
        }`}
      >
        <Image
          className={style.scroll_img}
          src={hatch1Img}
          width={350}
          height={200}
          objectFit="cover"
          alt="banner image"
          data-scroll
          data-scroll-class={style.scroll_class}
          data-scroll-repeat="true"
          data-scroll-delay="0.95"
        />
        <Image
          className={style.scroll_img}
          src={hatch2Img}
          width={350}
          height={200}
          objectFit="cover"
          alt="banner image"
          data-scroll
          data-scroll-class={style.scroll_class}
          data-scroll-repeat="true"
          data-scroll-delay="0.95"
        />
        <Image
          className={style.scroll_img}
          src={hatch3Img}
          width={350}
          height={200}
          objectFit="cover"
          alt="banner image"
          data-scroll
          data-scroll-class={style.scroll_class}
          data-scroll-repeat="true"
          data-scroll-delay="0.95"
        />
      </div>

      <div
        className={`${style.projects_img} ${
          tabName === "tab3" ? `${style.active}` : ""
        }`}
      >
        <Image
          className={style.scroll_img}
          src={offRoad1Img}
          width={350}
          height={200}
          objectFit="cover"
          alt="banner image"
          data-scroll
          data-scroll-class={style.scroll_class}
          data-scroll-repeat="true"
          data-scroll-delay="0.95"
        />
        <Image
          className={style.scroll_img}
          src={offRoad2Img}
          width={350}
          height={200}
          objectFit="cover"
          alt="banner image"
          data-scroll
          data-scroll-class={style.scroll_class}
          data-scroll-repeat="true"
          data-scroll-delay="0.95"
        />
        <Image
          className={style.scroll_img}
          src={offRoad3Img}
          width={350}
          height={200}
          objectFit="cover"
          alt="banner image"
          data-scroll
          data-scroll-class={style.scroll_class}
          data-scroll-repeat="true"
          data-scroll-delay="0.95"
        />
      </div>

      <div
        className={`${style.projects_img} ${
          tabName === "tab4" ? `${style.active}` : ""
        }`}
      >
        <Image
          className={style.scroll_img}
          src={sports1Img}
          width={350}
          height={200}
          objectFit="cover"
          alt="banner image"
          data-scroll
          data-scroll-class={style.scroll_class}
          data-scroll-repeat="true"
          data-scroll-delay="0.95"
        />
        <Image
          className={style.scroll_img}
          src={sports2Img}
          width={350}
          height={200}
          objectFit="cover"
          alt="banner image"
          data-scroll
          data-scroll-class={style.scroll_class}
          data-scroll-repeat="true"
          data-scroll-delay="0.95"
        />
        <Image
          className={style.scroll_img}
          src={sports3Img}
          width={350}
          height={200}
          objectFit="cover"
          alt="banner image"
          data-scroll
          data-scroll-class={style.scroll_class}
          data-scroll-repeat="true"
          data-scroll-delay="0.95"
        />
      </div>

      <a
        href="/projetos"
        className="btn btn-outline"
        data-scroll
        data-scroll-speed="0"
      >
        Veja mais
      </a>
    </div>
  );
}
