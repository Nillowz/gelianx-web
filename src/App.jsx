import { motion } from "framer-motion"
import {
  Network,
  Server,
  ShieldCheck,
  Wrench,
  Mail,
  FileText,
  CheckCircle2,
} from "lucide-react"

const services = [
  {
    icon: Network,
    title: "Redes empresariales",
    description:
      "Instalación y mantenimiento de redes LAN/WAN, puntos de red, switches, VLANs y conectividad estructurada.",
  },
  {
    icon: Server,
    title: "Infraestructura TI",
    description:
      "Soporte para servidores, estaciones de trabajo, respaldos, virtualización y continuidad operativa.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad y conectividad",
    description:
      "VPN, segmentación de red, firewall, control de accesos y buenas prácticas de seguridad.",
  },
  {
    icon: Wrench,
    title: "Soporte técnico",
    description:
      "Mantenimiento preventivo y correctivo para usuarios, equipos, impresoras y servicios corporativos.",
  },
  {
    icon: Mail,
    title: "Microsoft 365",
    description:
      "Soporte en correos corporativos, usuarios, licencias, SharePoint, OneDrive y Teams.",
  },
  {
    icon: FileText,
    title: "Documentación técnica",
    description:
      "Inventarios, diagramas, procedimientos, checklists y documentación para ambientes empresariales.",
  },
]

const capabilities = [
  "Diagnóstico técnico",
  "Implementación ordenada",
  "Documentación clara",
  "Soporte post-servicio",
]

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-2xl font-bold tracking-tight">
            Gelianx<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#servicios" className="hover:text-cyan-400">Servicios</a>
            <a href="#enfoque" className="hover:text-cyan-400">Enfoque</a>
            <a href="#contacto" className="hover:text-cyan-400">Contacto</a>
          </div>

          <a
            href="https://wa.me/593960451362"
            className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            WhatsApp
          </a>
        </nav>
      </header>

      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.22),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.16),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Infraestructura TI • Redes • Soporte
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Soluciones tecnológicas para entornos empresariales.
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">
              Instalación, mantenimiento, soporte e implementación de servicios
              TI orientados a disponibilidad, seguridad y continuidad operativa.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/593960451362"
                className="rounded-full bg-cyan-400 px-8 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Solicitar asesoría
              </a>

              <a
                href="#servicios"
                className="rounded-full border border-slate-600 px-8 py-3 text-center font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Ver servicios
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur"
          >
            <div className="rounded-2xl bg-slate-900 p-6">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm text-slate-400">Panel técnico</span>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                  Disponible
                </span>
              </div>

              <div className="space-y-4">
                {capabilities.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">
                <p className="text-sm leading-6 text-slate-300">
                  Servicio técnico enfocado en diagnóstico, implementación,
                  documentación y mejora continua de infraestructura.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="servicios" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Servicios
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Áreas donde puedo ayudarte
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              Servicios técnicos para pequeñas empresas, oficinas, áreas
              administrativas y entornos que requieren soporte confiable.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="rounded-3xl border border-slate-800 bg-slate-900/80 p-7 transition hover:-translate-y-1 hover:border-cyan-400"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold">{service.title}</h3>
                  <p className="leading-7 text-slate-400">{service.description}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="enfoque" className="border-y border-white/10 bg-slate-900/50 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Enfoque
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Tecnología con criterio técnico y documentación.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              Gelianx nace como una marca personal técnica para brindar servicios
              de infraestructura, redes, soporte y mantenimiento con una visión
              profesional, ordenada y orientada a resultados.
            </p>
            <p>
              El objetivo es entregar soluciones claras, bien documentadas y
              alineadas a la necesidad real del cliente, evitando improvisaciones
              y priorizando la continuidad operativa.
            </p>
          </div>
        </div>
      </section>

      <section id="contacto" className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-10 text-center">
          <h2 className="mb-4 text-4xl font-bold">¿Necesitas soporte o asesoría?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            Escríbeme para revisar tu necesidad y definir una solución técnica
            adecuada para tu red, infraestructura o servicio TI.
          </p>

          <a
            href="https://wa.me/593960451362"
            className="inline-flex rounded-full bg-cyan-400 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Gelianx. Servicios profesionales de infraestructura TI.
      </footer>
    </main>
  )
}

export default App