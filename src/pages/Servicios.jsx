import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import GelianxLogo from "../components/GelianxLogo"
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Mail,
  Moon,
  Network,
  Server,
  ShieldCheck,
  Sun,
  Wrench,
} from "lucide-react"

const detailedServices = [
  {
    icon: Network,
    title: "Redes empresariales",
    items: [
      "Instalación y revisión de puntos de red",
      "Configuración básica de switches y VLANs",
      "Soporte en conectividad LAN/WAN",
      "Diagnóstico de fallas de red",
    ],
  },
  {
    icon: Server,
    title: "Infraestructura TI",
    items: [
      "Soporte en servidores Windows y Linux",
      "Revisión de servicios críticos",
      "Apoyo en virtualización y almacenamiento",
      "Revisión de continuidad operativa",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Seguridad y conectividad",
    items: [
      "Revisión de firewall y VPN",
      "Segmentación básica de red",
      "Buenas prácticas de acceso",
      "Revisión de conectividad segura",
    ],
  },
  {
    icon: Wrench,
    title: "Soporte técnico",
    items: [
      "Mantenimiento preventivo y correctivo",
      "Soporte a usuarios y estaciones de trabajo",
      "Revisión de impresoras y periféricos",
      "Diagnóstico técnico documentado",
    ],
  },
  {
    icon: Mail,
    title: "Microsoft 365",
    items: [
      "Soporte en usuarios y correos",
      "Revisión de licencias",
      "Apoyo en SharePoint, OneDrive y Teams",
      "Buenas prácticas de colaboración",
    ],
  },
  {
    icon: FileText,
    title: "Documentación técnica",
    items: [
      "Inventarios técnicos",
      "Checklists de mantenimiento",
      "Diagramas básicos de red",
      "Evidencia del servicio realizado",
    ],
  },
]

function Servicios() {
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
    card: darkMode
      ? "border-slate-800 bg-slate-900 text-white shadow-xl shadow-slate-950/40"
      : "border-slate-200 bg-[#F4F8FB]/78 text-slate-950 shadow-xl shadow-slate-200/70 backdrop-blur-sm",
    cardHover: darkMode ? "hover:bg-slate-950" : "hover:bg-[#F8FBFD]",
    panel: darkMode
      ? "border-cyan-400/20 bg-slate-900/95 text-white shadow-xl shadow-slate-950/40"
      : "border-cyan-500/25 bg-[#F4F8FB]/72 text-slate-950 shadow-xl shadow-slate-200/70 backdrop-blur-sm",
  }

  return (
    <main
      className={`relative isolate min-h-screen overflow-hidden px-6 py-32 transition-colors duration-500 ${theme.main}`}
    >
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

      <header
        className={`fixed left-0 top-0 z-50 w-full border-b backdrop-blur-xl transition-colors duration-500 ${theme.navbar}`}
      >
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
  {darkMode ? (
    <Sun className="h-5 w-5" />
  ) : (
    <Moon className="h-5 w-5" />
  )}
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

      <section className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className={`mb-4 text-sm font-bold uppercase tracking-[0.3em] ${theme.accentText}`}>
            Servicios
          </p>

          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            Servicios técnicos para infraestructura, redes y soporte empresarial.
          </h1>

          <p className={`mt-6 text-lg leading-8 ${theme.mutedText}`}>
            Gelianx ofrece servicios orientados a pequeñas empresas, oficinas y
            entornos corporativos que requieren soporte técnico ordenado,
            continuidad operativa, conectividad estable y documentación clara.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {detailedServices.map((service) => {
            const Icon = service.icon

            return (
              <article
                key={service.title}
                className={`rounded-3xl border p-7 transition hover:border-cyan-400 ${theme.card} ${theme.cardHover}`}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                  <Icon className={`h-6 w-6 ${theme.accentText}`} />
                </div>

                <h2 className="mb-5 text-2xl font-bold">{service.title}</h2>

                <div className="space-y-3">
                  {service.items.map((item) => (
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
          <div className={`rounded-3xl border p-8 ${theme.card}`}>
            <h2 className="mb-6 text-3xl font-black">
              ¿Qué incluye una intervención?
            </h2>

            <div className="space-y-4">
              {[
                "Diagnóstico inicial del requerimiento",
                "Revisión técnica del entorno",
                "Ejecución del servicio acordado",
                "Validación funcional posterior",
                "Recomendaciones y evidencia del trabajo realizado",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className={`mt-1 h-5 w-5 shrink-0 ${theme.accentText}`} />
                  <p className={`text-sm leading-6 ${theme.softText}`}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`rounded-3xl border p-8 ${theme.card}`}>
            <h2 className="mb-6 text-3xl font-black">
              ¿Cuándo solicitar el servicio?
            </h2>

            <div className="space-y-4">
              {[
                "Fallas recurrentes de red o conectividad",
                "Lentitud en equipos, servicios o sistemas",
                "Problemas con correo, usuarios o Microsoft 365",
                "Necesidad de ordenar infraestructura o documentación",
                "Mantenimiento preventivo antes de auditorías o períodos críticos",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className={`mt-1 h-5 w-5 shrink-0 ${theme.accentText}`} />
                  <p className={`text-sm leading-6 ${theme.softText}`}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className={`mt-16 rounded-3xl border border-cyan-400/30 p-10 text-center ${theme.panel}`}>
          <h2 className="text-3xl font-black">
            ¿Necesitas revisar tu infraestructura?
          </h2>

          <p className={`mx-auto mt-4 max-w-2xl ${theme.mutedText}`}>
            Podemos revisar tu necesidad técnica y definir un alcance adecuado
            antes de ejecutar cualquier servicio.
          </p>

          <a
            href="https://wa.me/593960451362"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-8 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Solicitar evaluación técnica
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  )
}

export default Servicios
