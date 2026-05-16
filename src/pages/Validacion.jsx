import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  ShieldCheck,
  ClipboardCheck,
  Layers,
  Database,
  GitBranch,
  Moon,
  Sun,
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
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("gelianx-theme")
    return savedTheme ? savedTheme === "dark" : false
  
  })

  useEffect(() => {
    localStorage.setItem("gelianx-theme", darkMode ? "dark" : "light")
  }, [darkMode])

  const theme = {
    main: darkMode ? "bg-slate-900 text-white" : "bg-[#EEF4F8] text-slate-950",
    navbar: darkMode
      ? "border-white/10 bg-slate-900/75"
      : "border-slate-200 bg-[#EEF4F8]/80",
    mutedText: darkMode ? "text-slate-300" : "text-slate-700",
    softText: darkMode ? "text-slate-400" : "text-slate-600",
    accentText: darkMode ? "text-cyan-400" : "text-cyan-700",
    accentSoftText: darkMode ? "text-cyan-200" : "text-cyan-800",
    card: darkMode
      ? "border-slate-800 bg-slate-950/95 text-white shadow-xl shadow-slate-950/40"
      : "border-slate-200 bg-[#F4F8FB]/78 text-slate-950 shadow-xl shadow-slate-200/70 backdrop-blur-sm",
    cardHover: darkMode ? "hover:bg-slate-950" : "hover:bg-[#F8FBFD]",
    panel: darkMode
      ? "border-cyan-400/20 bg-cyan-400/10 text-white"
      : "border-cyan-500/25 bg-[#F4F8FB]/72 text-slate-950 backdrop-blur-sm",
  }

  return (
    <main className={`relative isolate min-h-screen overflow-hidden transition-colors duration-500 ${theme.main}`}>
      {/* BACKGROUND GLOBAL GELIANX */}
      <div className="pointer-events-none absolute inset-0 -z-10 min-h-full overflow-hidden">
        <div
          className={`absolute -top-52 right-[-18rem] h-[62rem] w-[62rem] rounded-full blur-3xl transition-all duration-700 ${
            darkMode ? "bg-cyan-400/30" : "bg-cyan-400/38"
          }`}
        />

        <div
          className={`absolute top-[8%] left-[-16rem] h-[52rem] w-[52rem] rounded-full blur-3xl transition-all duration-700 ${
            darkMode ? "bg-blue-500/22" : "bg-sky-400/26"
          }`}
        />

        <div
          className={`absolute top-[38%] right-[-14rem] h-[58rem] w-[58rem] rounded-full blur-3xl transition-all duration-700 ${
            darkMode ? "bg-cyan-300/18" : "bg-cyan-300/28"
          }`}
        />

        <div
          className={`absolute top-[62%] left-[-12rem] h-[54rem] w-[54rem] rounded-full blur-3xl transition-all duration-700 ${
            darkMode ? "bg-blue-500/16" : "bg-sky-300/24"
          }`}
        />

        <div
          className={`absolute bottom-[-18rem] right-[5%] h-[60rem] w-[60rem] rounded-full blur-3xl transition-all duration-700 ${
            darkMode ? "bg-cyan-500/16" : "bg-cyan-400/25"
          }`}
        />

        <div
          className={`absolute inset-0 bg-[size:64px_64px] transition-opacity duration-700 ${
            darkMode
              ? "bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] opacity-25"
              : "bg-[linear-gradient(to_right,rgba(14,165,233,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.08)_1px,transparent_1px)] opacity-55"
          }`}
        />

        <div
          className={`absolute inset-0 transition-colors duration-700 ${
            darkMode ? "bg-slate-950/18" : "bg-[#EEF4F8]/18"
          }`}
        />
      </div>
      <header className={`fixed left-0 top-0 z-50 w-full border-b backdrop-blur-xl transition-colors duration-500 ${theme.navbar}`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/">
            <GelianxLogo />
          </Link>

          <div className="flex items-center gap-3">
            <button
            onClick={() => setDarkMode(!darkMode)}
            className={`rounded-xl border border-cyan-400/30 p-2 transition hover:bg-cyan-400/10 ${
              darkMode ? "text-cyan-500" : "text-cyan-700"
            }`}
            title={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

            <Link
              to="/"
              className={`rounded-full border px-5 py-2 text-sm font-bold transition ${
                darkMode
                  ? "border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
                  : "border-slate-300 bg-[#F5F9FC]/75 text-slate-700 hover:border-cyan-500 hover:text-cyan-700"
              }`}
            >
              Regresar al inicio
            </Link>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden px-6 pb-24 pt-36">
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.14),transparent_38%)]"
              : "bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.10),transparent_38%)]"
          }`}
        />
        <div className="absolute left-1/2 top-20 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className={`mb-4 text-sm font-bold uppercase tracking-[0.3em] ${theme.accentText}`}>
              Validación CSV / GxP
            </p>

            <h1 className="text-5xl font-black tracking-tight md:text-7xl">
              Validación de Sistemas Computarizados para entornos regulados.
            </h1>

            <p className={`mt-6 text-lg leading-8 ${theme.mutedText}`}>
              Soporte técnico y documental para procesos de validación de
              sistemas computarizados, con enfoque en trazabilidad, evidencia,
              buenas prácticas GxP, protocolos IQ/OQ/PQ y continuidad operativa.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["IQ", "OQ", "PQ", "CSV", "GxP", "GAMP 5", "URS", "FS"].map(
                (item) => (
                  <span
                    key={item}
                    className={`rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold ${theme.accentSoftText}`}
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
                  className={`rounded-3xl border p-7 transition hover:border-cyan-400 ${theme.card} ${theme.cardHover}`}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                    <Icon className={`h-6 w-6 ${theme.accentText}`} />
                  </div>

                  <h2 className="mb-5 text-2xl font-bold">{area.title}</h2>

                  <div className="space-y-3">
                    {area.items.map((item) => (
                      <div key={item} className="flex gap-3">
                        <CheckCircle2 className={`mt-1 h-5 w-5 shrink-0 ${theme.accentText}`} />
                        <p className={`text-sm leading-6 ${theme.softText}`}>
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
            <div className={`rounded-3xl border p-8 ${theme.panel}`}>
              <h2 className="text-3xl font-black">
                Enfoque técnico-documental
              </h2>
              <p className={`mt-5 leading-8 ${theme.mutedText}`}>
                La validación no se aborda únicamente como generación de
                documentos, sino como una actividad que debe conectar el sistema,
                la infraestructura, los usuarios, los procesos, los riesgos y la
                evidencia generada.
              </p>
            </div>

            <div className={`rounded-3xl border p-8 ${theme.card}`}>
              <h2 className="text-3xl font-black">
                Aplicación en sistemas reales
              </h2>
              <p className={`mt-5 leading-8 ${theme.mutedText}`}>
                El enfoque está orientado a sistemas utilizados en operación
                empresarial, como ERP, plataformas documentales, servicios TI,
                respaldos, accesos, reportes, infraestructura y procesos
                soportados por tecnología.
              </p>
            </div>
          </section>

          <div className={`mt-16 rounded-3xl border border-cyan-400/30 p-10 text-center shadow-2xl shadow-cyan-950/20 ${darkMode ? "bg-slate-900/95" : "bg-[#F4F8FB]/72 backdrop-blur-sm"}`}>
            <h2 className="text-3xl font-black">
              ¿Necesitas apoyo en documentación o validación CSV?
            </h2>

            <p className={`mx-auto mt-4 max-w-2xl ${theme.mutedText}`}>
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