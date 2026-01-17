import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="max-w-(--width-container) mt-14 ml-16">
      <h1 className="text-sm font-bold">blkcsmr</h1>
      <p className="text-sm leading-relaxed mb-4">
        Front-end engineer based in France. I build fast, reliable web
        applications with a focus on performance and clean architecture.
      </p>

      <p className="text-sm leading-relaxed mb-4">
        Currently at <a href="https://yeap.ai">Yeap</a>. Previously{" "}
        <a href="https://navya.tech">Navya</a>.
      </p>

      <p className="text-sm leading-relaxed mb-4">
        Creator of <a href="https://domet.blksmr.com/">domet</a> – a lightweight
        DOM library I built from scratch – and{" "}
        <a href="https://baryum.co">baryum.co</a>.
      </p>

      <p className="text-sm leading-relaxed mb-4">
        Previously at{" "}
        <a href="https://www.solware.fr/en/group-solware/">Solware Auto</a>{" "}
        engineering high-performance front-end systems for the automotive
        industry.
      </p>

      <div className="text-sm mt-4 flex gap-2">
        <a href="mailto:hi@blksmr.com">Email</a>
        <a href="https://github.com/blksmr">GitHub</a>
        <a href="https://www.linkedin.com/in/asmirbe/">LinkedIn</a>
      </div>
    </main>
  );
}
