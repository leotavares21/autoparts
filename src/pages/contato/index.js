import style from "./style.module.scss";

export default function Contact() {
  return (
    <div className={style.contact_container} data-scroll data-scroll-section>
      <h1>Contato</h1>
      <form className={style.contact_form}>
        <div className={style.firstLabels}>
          <label for="name">
            <span>Nome *</span>
            <input type="text" name="name" placeholder="Nome" required />
          </label>
          <label for="lastName">
            <span>Sobrenome *</span>
            <input
              type="text"
              name="lastName"
              placeholder="Sobrenome"
              required
            />
          </label>
        </div>

        <label for="email">
          <span>E-mail *</span>
          <input type="email" name="email" placeholder="E-mail" required />
        </label>

        <label for="subject">
          <span> Assunto *</span>
          <input type="text" name="subject" placeholder="Assunto" required />
        </label>

        <label for="message">
          <span> Mensagem *</span>
          <textarea name="message" placeholder="Mensagem..." required />
        </label>

        <button type="submit" class="btn btn-dark">
          Enviar
        </button>
      </form>
    </div>
  );
}
