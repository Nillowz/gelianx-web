import { Link } from "react-router-dom"
import GelianxLogo from "../components/GelianxLogo"
import { ArrowRight, CheckCircle2, Network, Server, ShieldCheck, Wrench, Mail, FileText } from "lucide-react"


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
  return (
    <main className="min-h-screen bg-slate-900 px-6 py-32 text-white">
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
      <section className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Servicios
          </p>

          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            Servicios técnicos para infraestructura, redes y soporte empresarial.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-400">
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
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 transition hover:border-cyan-400 hover:bg-slate-900"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10">
                  <Icon className="h-6 w-6 text-cyan-400" />
                </div>

                <h2 className="mb-5 text-2xl font-bold">{service.title}</h2>

                <div className="space-y-3">
                  {service.items.map((item) => (
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

        <div className="mt-16 rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-10 text-center">
        <section className="mt-20 grid gap-6 lg:grid-cols-2">
  <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
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
          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-400" />
          <p className="text-sm leading-6 text-slate-400">{item}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
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
          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-400" />
          <p className="text-sm leading-6 text-slate-400">{item}</p>
        </div>
      ))}
    </div>
  </div>
</section>
          <h2 className="text-3xl font-black">
            ¿Necesitas revisar tu infraestructura?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
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