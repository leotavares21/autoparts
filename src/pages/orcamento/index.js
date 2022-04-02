import { useState, useEffect } from "react";
import Image from "next/image";
import budgetImg from "../../assets/images/budget.jpg";
import style from "./style.module.scss";

export default function Budget() {
  const [services, setServices] = useState([]);

  useEffect(() => {}, [services]);

  function handleServices(value) {
    if (services.find((service) => service === value)) {
      return;
    } else {
      setServices([...services, value]);
    }
  }

  function handleDeleteService(event, index) {
    event.preventDefault();
    const newServices = services.filter(
      (service, serviceIndex) => serviceIndex !== index
    );
    setServices(newServices);
  }

  return (
    <div className={style.budget_container} data-scroll data-scroll-section>
      <div className={style.budget_text}>
        <div>
          <h1>Faça seu orçamento</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nulla
            ea reiciendis dolorem quo ipsum facere aperiam praesentium eos illum
            itaque repellat iure odit rem animi rerum, perferendis voluptatum
            unde consequatur pariatur maxime molestias asperiores. Praesentium,
            asperiores. Delectus, qui et sapiente itaque quaerat asperiores,
            est, optio sit cumque ad ex. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Vel quibusdam sunt consectetur autem, aspernatur
            totam, voluptatibus ullam quisquam dolor eveniet quidem dolores
            quaerat quas dolore officiis laudantium? Aperiam deserunt culpa
            asperiores ducimus voluptas eaque quaerat odit sed, quas fugiat,
            impedit velit reiciendis debitis minima earum molestiae quam
            eveniet, rem dolores!
          </p>
        </div>

        <Image src={budgetImg} />
      </div>

      <form className={style.budget_form}>
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

        <label for="message">
          <span> Mensagem </span>
          <textarea name="message" placeholder="Mensagem..." />
        </label>

        <label for="service">
          <span> Serviços *</span>
          <select onChange={(event) => handleServices(event.target.value)}>
            <option value="Outros">Outros</option>
            <option value="Acabamento">Acabamento</option>
            <option value="Pintura">Pintura</option>
            <option value="Manutenção">Manutenção</option>
            <option value="Revisão">Revisão</option>
            <option value="Personalização">Personalização</option>
          </select>
        </label>

        {services.length > 0 && (
          <div className={style.service_list}>
            {services.map((name, index) => (
              <div className={style.service_btn}>
                <span>{name}</span>{" "}
                <button onClick={(event) => handleDeleteService(event, index)}>
                  &#10005;
                </button>
              </div>
            ))}
          </div>
        )}

        <button type="submit" class="btn btn-dark">
          Enviar
        </button>
      </form>
    </div>
  );
}
