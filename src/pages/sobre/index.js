import style from "./style.module.scss";
import Image from "next/image";
import { IoCheckboxOutline } from "react-icons/io5";

import aboutImg from "../../assets/images/aboutImg.jpg";

export default function About() {
  return (
    <main className={style.about_container} data-scroll data-scroll-section>
      <Image
        src={aboutImg}
        width={1300}
        height={500}
        objectFit="cover"
        alt="about image"
      />
      <section className={style.about_content}>
        <h1>Sobre nós</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente cum
          aspernatur suscipit necessitatibus vitae praesentium dolorem quos,
          sint consequatur accusamus facere, facilis cumque. Ea eveniet itaque
          rerum ad eos quasi autem ullam maxime cum inventore sapiente
          necessitatibus, recusandae distinctio. Suscipit nihil excepturi
          aliquid praesentium placeat maxime voluptatibus perspiciatis?
          Repellendus aut iste laborum deserunt repudiandae deleniti incidunt
          voluptates veritatis fuga porro. Nostrum provident voluptatibus
          corporis, fugiat iusto fugit quaerat libero! Nostrum architecto
          exercitationem eius accusamus qui fugiat, veniam excepturi quae,
          repellat molestiae recusandae non ullam neque inventore ipsum aut
          praesentium officia magnam delectus facere reiciendis nihil
          voluptates? Vel, ea placeat. Odit? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Obcaecati blanditiis sed, repellendus
          enim harum ut consequuntur quis et dolorum quam, tempore iste
          sapiente, nobis eaque esse praesentium eum unde! Deleniti! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Consequuntur suscipit
          deserunt nostrum, dolore ipsum repellendus, molestiae eum quia iste
          nam quo cupiditate explicabo perspiciatis veniam nisi necessitatibus
          neque dolorum iure impedit perferendis, facere saepe! Libero
          consequuntur doloremque, a exercitationem illo fugit aspernatur. Totam
          iste ullam, quia doloribus iusto voluptatem velit?
        </p>
      </section>

      <section className={style.about_mission}>
        <h2>Missão</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          praesentium rerum repellendus dolores, hic similique porro modi
          reprehenderit dolore dolor! Voluptatem tenetur placeat quae,
          voluptatum nihil quo tempore quis temporibus, qui nesciunt libero?
          Voluptate, incidunt consequuntur. Perspiciatis voluptatibus, tempore
          molestias ipsum officia, commodi facilis corrupti nisi, consectetur
          quia quis laborum?
        </p>
      </section>

      <section className={style.about_values}>
        <h2>Valores</h2>
        <ul>
          <li>
            <IoCheckboxOutline className={style.icon} />
            <div>
              <strong>Responsabilidade</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                impedit architecto quas est rem fugiat reiciendis. Voluptatibus
                cum adipisci placeat veritatis minima! Necessitatibus, velit.
                Cumque, ullam illo. Deserunt, dolorum animi?
              </p>
            </div>
          </li>

          <li>
            <IoCheckboxOutline className={style.icon} />
            <div>
              <strong>Autenticidade</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                impedit architecto quas est rem fugiat reiciendis. Voluptatibus
                cum adipisci placeat veritatis minima! Necessitatibus, velit.
                Cumque, ullam illo. Deserunt, dolorum animi?
              </p>
            </div>
          </li>

          <li>
            <IoCheckboxOutline className={style.icon} />
            <div>
              <strong>Honestidade</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                impedit architecto quas est rem fugiat reiciendis. Voluptatibus
                cum adipisci placeat veritatis minima! Necessitatibus, velit.
                Cumque, ullam illo. Deserunt, dolorum animi?
              </p>
            </div>
          </li>

          <li>
            <IoCheckboxOutline className={style.icon} />
            <div>
              <strong>Integridade</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                impedit architecto quas est rem fugiat reiciendis. Voluptatibus
                cum adipisci placeat veritatis minima! Necessitatibus, velit.
                Cumque, ullam illo. Deserunt, dolorum animi?
              </p>
            </div>
          </li>

          <li>
            <IoCheckboxOutline className={style.icon} />
            <div>
              <strong>Qualidade</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                impedit architecto quas est rem fugiat reiciendis. Voluptatibus
                cum adipisci placeat veritatis minima! Necessitatibus, velit.
                Cumque, ullam illo. Deserunt, dolorum animi?
              </p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
