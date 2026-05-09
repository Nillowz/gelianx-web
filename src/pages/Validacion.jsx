import { Link } from "react-router-dom"
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  ShieldCheck,
  ClipboardCheck,
  Layers,
  Database,
  GitBranch,
} from "lucide-react"
import GelianxLogo from "../components/GelianxLogo"

const validationAreas = [
  {
    icon: FileText,
    title: "Documentación CSV",
    items: [
      "Soporte en documentación de validación",
      "Elaboración y revisión de evidencias",
      "Formatos, anexos y registros técnicos",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Protocolos IQ / OQ / PQ",
    items: [
      "Calificación de instalación IQ",
      "Calificación operacional OQ",
      "Calificación de desempeño PQ",
    ],
  },
  {
    icon: GitBranch,
    title: "Trazabilidad",
    items: [
      "Relación URS, FS y pruebas",
      "Matrices de trazabilidad",
      "Control documental de evidencias",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Enfoque GxP",
    items: [
      "Soporte para ambientes regulados",
      "Buenas prácticas documentales",
      "Orientación a cumplimiento y evidencia",
    ],
  },
  {
    icon: Database,
    title: "Sistemas e infraestructura",
    items: [
      "ERP, servidores y servicios TI",
      "Respaldos, accesos y continuidad",
      "Apoyo técnico en entornos críticos",
    ],
  },
  {
    icon: Layers,
    title: "Enfoque basado en riesgo",
    items: [
      "Identificación de impacto técnico",
      "Priorización de pruebas",
      "Evidencia proporcional al riesgo",
    ],
  },
]

function Validacion() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-900/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/">
            <GelianxLogo />
          </Link>

          <Link
            to="/"
            className="rounded-full border border-slate-700 px-5 py-2 text-sm font-bold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Regresar al inicio
          </Link>
        </nav>
      </header>

      <section className="relative overflow-hidden px-6 pb-24 pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.20),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.16),transparent_38%)]" />
        <div className="absolute left-1/2 top-20 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              Validación CSV / GxP
            </p>

            <h1 className="text-5xl font-black tracking-tight md:text-7xl">
              Validación de Sistemas Computarizados para entornos regulados.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Soporte técnico y documental para procesos de validación de
              sistemas computarizados, con enfoque en trazabilidad, evidencia,
              buenas prácticas GxP, protocolos IQ/OQ/PQ y continuidad operativa.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["IQ", "OQ", "PQ", "CSV", "GxP", "GAMP 5", "URS", "FS"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {validationAreas.map((area) => {
              const Icon = area.icon

              return (
                <article
                  key={area.title}
                  className="rounded-3xl border border-slate-800 bg-slate-950/70 p-7 transition hover:border-cyan-400 hover:bg-slate-950"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>

                  <h2 className="mb-5 text-2xl font-bold">{area.title}</h2>

                  <div className="space-y-3">
                    {area.items.map((item) => (
                      <div key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-400" />
                        <p className="text-sm leading-6 text-slate-400">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>

          <section className="mt-20 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8">
              <h2 className="text-3xl font-black">
                Enfoque técnico-documental
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                La validación no se aborda únicamente como generación de
                documentos, sino como una actividad que debe conectar el sistema,
                la infraestructura, los usuarios, los procesos, los riesgos y la
                evidencia generada.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-8">
              <h2 className="text-3xl font-black">
                Aplicación en sistemas reales
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                El enfoque está orientado a sistemas utilizados en operación
                empresarial, como ERP, plataformas documentales, servicios TI,
                respaldos, accesos, reportes, infraestructura y procesos
                soportados por tecnología.
              </p>
            </div>
          </section>

          <div className="mt-16 rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-10 text-center">
            <h2 className="text-3xl font-black">
              ¿Necesitas apoyo en documentación o validación CSV?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Podemos revisar el alcance del sistema, el estado documental y las
              evidencias necesarias para definir una estrategia técnica adecuada.
            </p>

            <a
              href="https://wa.me/593960451362"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-8 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Consultar por WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Validacion