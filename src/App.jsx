import { motion } from "framer-motion"
import {
  Activity,
  CheckCircle2,
  Cloud,
  Database,
  FileText,
  Mail,
  Network,
  Server,
  ShieldCheck,
  Terminal,
  Wrench,
  ArrowRight,
  Cpu,
  HardDrive,
  Wifi,
} from "lucide-react"

const services = [
  {
    icon: Network,
    title: "Redes empresariales",
    description:
      "Instalación y mantenimiento de redes LAN/WAN, puntos de red, switches, VLANs, WiFi empresarial y conectividad estructurada.",
  },
  {
    icon: Server,
    title: "Infraestructura TI",
    description:
      "Soporte para servidores, estaciones de trabajo, respaldos, virtualización, almacenamiento y continuidad operativa.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad y conectividad",
    description:
      "VPN, segmentación de red, firewall, control de accesos, hardening básico y buenas prácticas de seguridad.",
  },
  {
    icon: Wrench,
    title: "Soporte técnico",
    description:
      "Mantenimiento preventivo y correctivo para usuarios, equipos, impresoras, servicios corporativos y operación diaria.",
  },
  {
    icon: Mail,
    title: "Microsoft 365",
    description:
      "Soporte en correos corporativos, usuarios, licencias, SharePoint, OneDrive, Teams y colaboración empresarial.",
  },
  {
    icon: FileText,
    title: "Documentación técnica",
    description:
      "Inventarios, diagramas, procedimientos, checklists, evidencias y documentación para ambientes empresariales.",
  },
]

const technologies = [
  "Cisco",
  "Fortinet",
  "Microsoft 365",
  "Windows Server",
  "Linux",
  "VMware",
  "Zabbix",
  "SharePoint",
  "Veeam",
  "Power BI",
]

const terminalLines = [
  "gelianx@infra:~$ running infrastructure assessment",
  "✓ Network topology reviewed",
  "✓ VLAN segmentation and routing checked",
  "✓ Firewall and VPN policies validated",
  "✓ Backup status verification completed",
  "✓ Technical documentation updated",
]

const metrics = [
  {
    icon: Activity,
    label: "Continuidad",
    value: "Operativa",
  },
  {
    icon: ShieldCheck,
    label: "Enfoque",
    value: "Seguro",
  },
  {
    icon: FileText,
    label: "Gestión",
    value: "Documentada",
  },
  {
    icon: Cloud,
    label: "Soporte",
    value: "Empresarial",
  },
]

const processSteps = [
  {
    number: "01",
    title: "Diagnóstico inicial",
    description:
      "Revisión del problema, infraestructura actual, alcance técnico y necesidades reales del cliente.",
  },
  {
    number: "02",
    title: "Propuesta técnica",
    description:
      "Definición de la solución recomendada, recursos necesarios, prioridades y riesgos técnicos.",
  },
  {
    number: "03",
    title: "Implementación",
    description:
      "Ejecución ordenada del servicio, configuración, instalación, mantenimiento o corrección requerida.",
  },
  {
    number: "04",
    title: "Validación y pruebas",
    description:
      "Verificación funcional del servicio, conectividad, disponibilidad, seguridad y operación esperada.",
  },
  {
    number: "05",
    title: "Documentación",
    description:
      "Entrega de evidencia, recomendaciones, inventario, checklist o documentación técnica según aplique.",
  },
]

const strengths = [
  {
    icon: Cpu,
    title: "Criterio técnico",
    description:
      "Servicios abordados desde la comprensión real de infraestructura, conectividad y operación TI.",
  },
  {
    icon: HardDrive,
    title: "Continuidad operativa",
    description:
      "Priorización de disponibilidad, respaldo, estabilidad y reducción de interrupciones en servicios críticos.",
  },
  {
    icon: Database,
    title: "Orden y evidencia",
    description:
      "Documentación técnica, checklists y trazabilidad básica para dejar constancia del trabajo ejecutado.",
  },
  {
    icon: Wifi,
    title: "Entornos corporativos",
    description:
      "Experiencia práctica en soporte, redes, sistemas, usuarios y plataformas usadas en operación empresarial.",
  },
]

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 shadow-lg shadow-cyan-400/10">
              <Network className="h-5 w-5 text-cyan-400" />
            </div>
            <span className="text-2xl font-black tracking-tight">
              Gelianx<span className="text-cyan-400">.</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#servicios" className="transition hover:text-cyan-400">
              Servicios
            </a>
            <a href="#tecnologias" className="transition hover:text-cyan-400">
              Tecnologías
            </a>
            <a href="#metodologia" className="transition hover:text-cyan-400">
              Metodología
            </a>
            <a href="#enfoque" className="transition hover:text-cyan-400">
              Enfoque
            </a>
            <a href="#contacto" className="transition hover:text-cyan-400">
              Contacto
            </a>
          </div>

          <a
            href="https://wa.me/593960451362"
            className="hidden rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300 sm:inline-flex"
          >
            WhatsApp
          </a>
        </nav>
      </header>

      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.18),transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
        <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              Servicios profesionales de infraestructura TI
            </div>

            <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-cyan-400">
              Infraestructura • Redes • Seguridad
            </p>

            <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Tecnología confiable para operaciones empresariales.
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">
              Instalación, mantenimiento, soporte e implementación de servicios
              TI orientados a disponibilidad, seguridad, documentación y
              continuidad operativa.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/593960451362"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-8 py-3 text-center font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
              >
                Solicitar asesoría
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>

              <a
                href="#servicios"
                className="rounded-full border border-slate-600 px-8 py-3 text-center font-bold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Ver servicios
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur"
          >
            <div className="rounded-2xl bg-slate-900 p-6">
              <div className="mb-5 flex items-center gap-3 border-b border-slate-800 pb-4">
                <Terminal className="h-5 w-5 text-cyan-400" />
                <span className="text-sm font-semibold text-slate-300">
                  gelianx-terminal
                </span>
                <span className="ml-auto rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-400">
                  Ready
                </span>
              </div>

              <div className="space-y-4 font-mono text-sm">
                {terminalLines.map((line, index) => (
                  <motion.p
                    key={line}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.13 }}
                    className={index === 0 ? "text-cyan-300" : "text-emerald-300"}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {["Diagnóstico", "Implementación", "Validación", "Documentación"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                    >
                      <CheckCircle2 className="mb-2 h-5 w-5 text-cyan-400" />
                      <p className="font-semibold">{item}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="servicios" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              Servicios
            </p>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
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
                  className="group rounded-3xl border border-slate-800 bg-slate-900/80 p-7 transition hover:-translate-y-1 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-950/30"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 transition group-hover:bg-cyan-400/20">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">{service.title}</h3>
                  <p className="leading-7 text-slate-400">
                    {service.description}
                  </p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="tecnologias" className="relative border-y border-white/10 bg-slate-900/50 px-6 py-24">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              Tecnologías
            </p>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Experiencia aplicada en entornos reales.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              Herramientas y plataformas utilizadas en operaciones de
              infraestructura, conectividad, soporte, monitoreo y colaboración
              empresarial.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {metrics.map((metric) => {
              const Icon = metric.icon
              return (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6"
                >
                  <Icon className="mb-5 h-7 w-7 text-cyan-400" />
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-2xl font-black">{metric.value}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="metodologia" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              Metodología
            </p>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Un proceso claro para servicios técnicos bien ejecutados.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              Cada intervención se aborda con orden, criterio técnico y enfoque
              en continuidad operativa, evitando improvisaciones y dejando
              evidencia del trabajo realizado.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-400 hover:bg-slate-900"
              >
                <p className="mb-6 text-4xl font-black text-cyan-400/40">
                  {step.number}
                </p>
                <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                <p className="text-sm leading-6 text-slate-400">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="enfoque" className="border-y border-white/10 bg-slate-900/50 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              Enfoque
            </p>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Tecnología con criterio técnico y documentación.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              Gelianx nace como una marca personal técnica para brindar servicios
              de infraestructura, redes, soporte y mantenimiento con una visión
              profesional, ordenada y orientada a resultados.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {strengths.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <Icon className="mb-5 h-7 w-7 text-cyan-400" />
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="contacto" className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-10 text-center shadow-2xl shadow-cyan-950/30">
          <h2 className="mb-4 text-4xl font-black">
            ¿Necesitas soporte o asesoría?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            Escríbeme para revisar tu necesidad y definir una solución técnica
            adecuada para tu red, infraestructura o servicio TI.
          </p>

          <a
            href="https://wa.me/593960451362"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-8 py-3 font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
          >
            Contactar por WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Gelianx. Servicios profesionales de infraestructura TI, redes y soporte empresarial.
      </footer>
    </main>
  )
}

export default App