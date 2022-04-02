import Link from "next/link";
import Image from "next/image";
import logoImg from "../../assets/images/logo.svg";
import style from "./style.module.scss";

export default function Footer() {
  return (
    <div className={style.container_footer} data-scroll-section>
      <ul className={style.footer_menu}>
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

      <h4>
        <Link href="/">
          <Image src={logoImg} width={80} alt="logo" />
        </Link>
      </h4>
    </div>
  );
}
