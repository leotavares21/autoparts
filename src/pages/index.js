import Banner from "../components/Banner";
import Budget from "../components/Budget";
import Projects from "../components/Projects";
import Features from "../components/Features";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <main>
        <Banner />
      </main>
      <section>
        <Budget />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <Card />
      </section>
    </>
  );
}
