import { useRouter } from "next/router";
import style from "./style.module.scss";

export default function Budget() {
  const router = useRouter();

  return (
    <div className={style.budget_container} data-scroll-section>
      <div className={style.budget_img_container}>
        <div
          className={style.budget_img}
          data-scroll
          data-scroll-speed="4"
          data-scroll-class={style.scroll_class}
          data-scroll-repeat="true"
        />
        <div
          className={style.budget_img}
          data-scroll
          data-scroll-speed="6"
          data-scroll-class={style.scroll_class}
          data-scroll-repeat="true"
        />
      </div>

      <div className={style.budget_desc} data-scroll data-scroll-speed="2">
        <h2>Vamos começar?</h2>
        <p>
          Cansado de passar raiva? Essa é a sua grande chance! Aqui na Faraway a
          gente tem as melhores condições para você mexer no seu veículo sem
          ficar com a parcela alta. Você merece mais conforto e praticidade no
          seu dia e a gente está aqui para te ajudar!
        </p>
        <button
          onClick={() => router.push("/orcamento")}
          className="btn btn-dark"
        >
          Faça seu orçamento
        </button>
      </div>
    </div>
  );
}
