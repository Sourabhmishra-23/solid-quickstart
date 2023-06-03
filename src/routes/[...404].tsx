import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  return (
    <main>
      <Title>Asha Jyotish Parivar</Title>
      <HttpStatusCode code={404} />
      <h1>Page Under processing</h1>
      <p>
        Visit{" "}


        </a>{" "}
        Asha Jyotish Parivar Seva Samiti 
      </p>
    </main>
  );
}
