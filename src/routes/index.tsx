import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="max-w-(--width-container) mt-14 ml-16">
      <p>
        Front-end engineer based in France. I build fast, reliable web
        applications with a focus on performance and clean architecture.
      </p>

      <p>
        Currently at <a className="text-blue" href="https://yeap.ai">Yeap</a>. Previously{" "}
        <a className="text-purple" href="https://navya.tech">Navya</a>.
      </p>

      <p>
        Creator of <a className="text-sky" href="https://domet.blksmr.com/">domet</a> – a lightweight
        DOM library I built from scratch – and{" "}
        <a className="text-black" href="https://baryum.co">baryum.co</a>.
      </p>

      <p>
        Previously at{" "}
        <a className="text-red" href="https://www.solware.fr/en/group-solware/">Solware Auto</a>{" "}
        engineering high-performance front-end systems for the automotive
        industry.
      </p>

      <nav className="mt-4 flex gap-2">
        <a className="text-grey" href="mailto:hi@blksmr.com">Email</a>
        <a className="text-grey" href="https://github.com/blksmr">GitHub</a>
        <a className="text-grey" href="https://www.linkedin.com/in/asmirbe/">LinkedIn</a>
      </nav>
    </main>
  );
}
