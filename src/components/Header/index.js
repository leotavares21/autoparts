import { useState } from "react";
import { Spin } from "hamburger-react";

import Image from "next/image";
import Link from "next/link";
import style from "./style.module.scss";

import logoImg from "../../assets/images/logo.svg";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header
      className={`${style.header_container} ${isActive ? style.isActive : ""}`}
    >
      <h3>
        <a href="/">
          <Image src={logoImg} alt="ferreira autopeças logo" />
        </a>
      </h3>
      <nav className={isActive ? style.isActive : ""}>
        <ul>
          <li>
            <Link href="/">Início</Link>
          </li>
          <li>
            <Link href="/sobre">Sobre</Link>
          </li>
          <li>
            <Link href="/contato">Contato</Link>
          </li>
        </ul>
      </nav>

      <button className={style.btn_menu}>
        <Spin toggled={isActive} toggle={() => setIsActive(!isActive)} />
      </button>
    </header>
  );
}
