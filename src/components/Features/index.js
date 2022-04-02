import Image from "next/image";
import { FiSettings } from "react-icons/fi";
import { VscTools } from "react-icons/vsc";
import { FaRegHandshake } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";

import style from "./style.module.scss";

export default function Features() {
  return (
    <div className={style.container_features} data-scroll-section>
      <h3>Benefícios</h3>
      <p>
        Veja alguns benefícios que você terá quando fizer negócio com a faraway
        autopeças, bora trabalhar juntos?
      </p>

      <ul className={style.features_list}>
        <li
          data-scroll
          data-scroll-speed="1"
          data-scroll-repeat="true"
          data-scroll-class={style.scroll_class}
        >
          <FiSettings className={style.icon} />
          <strong>Peças premium para seu carro</strong>
        </li>
        <li
          data-scroll
          data-scroll-speed="2"
          data-scroll-repeat="true"
          data-scroll-class={style.scroll_class}
        >
          <VscTools className={style.icon} />
          <strong>Mão de obra qualificada</strong>
        </li>
        <li
          data-scroll
          data-scroll-speed="3"
          data-scroll-repeat="true"
          data-scroll-class={style.scroll_class}
        >
          <FaRegHandshake className={style.icon} />

          <strong>Confiabilidade de trabalho</strong>
        </li>
        <li
          data-scroll
          data-scroll-speed="4"
          data-scroll-repeat="true"
          data-scroll-class={style.scroll_class}
        >
          <BiPhoneCall className={style.icon} />

          <strong>Pronto atendimento</strong>
        </li>
      </ul>
    </div>
  );
}
