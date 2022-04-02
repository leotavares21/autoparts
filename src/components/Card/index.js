import style from "./style.module.scss";

export default function Card() {
  return (
    <div className={style.container_card} data-scroll-section>
      <h3
        data-scroll
        data-scroll-class={style.scroll_class}
        data-scroll-repeat="true"
      >
        Venha fazer parte
      </h3>
      <p
        data-scroll
        data-scroll-class={style.scroll_class}
        data-scroll-repeat="true"
      >
        Em dúvida sobre o que fazer com seu carro, a faraway sabe!
      </p>
      <button className="btn btn-light">Saiba mais</button>
    </div>
  );
}
