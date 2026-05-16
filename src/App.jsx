// ==============================
// IMPORTS
// ==============================
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Cpu,
  Database,
  FileText,
  HardDrive,
  Mail,
  Menu,
  Moon,
  Network,
  Server,
  ShieldCheck,
  Terminal,
  Sun,
  Wifi,
  Wrench,
  X,
} from "lucide-react";

import GelianxLogo from "./components/GelianxLogo";

import ciscoNetwork from "./assets/cisco-network.jpeg";
import fortinetSecurity from "./assets/fortinet-security.jpeg";
import microsoft365Image from "./assets/microsoft365.jpeg";
import windowsServer from "./assets/windows-server.jpeg";
import linuxServer from "./assets/linux-server.jpeg";
import vmwareImage from "./assets/vmware.jpeg";

// ==============================
// DATA: SERVICIOS DEL HOME
// ==============================
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
];

// ==============================
// DATA: TECNOLOGÍAS
// ==============================
const technologies = [
  {
    name: "Cisco",
    description:
      "Segmentación de red, VLANs, conectividad crítica y estabilidad operativa en ambientes corporativos.",
    image: ciscoNetwork,
  },
  {
    name: "Fortinet",
    description:
      "Control de accesos, VPN, políticas de seguridad y protección perimetral empresarial.",
    image: fortinetSecurity,
  },
  {
    name: "Microsoft 365",
    description:
      "Administración de usuarios, colaboración empresarial, seguridad y continuidad operativa cloud.",
    image: microsoft365Image,
  },
  {
    name: "Windows Server",
    description:
      "Servicios críticos, Active Directory, recursos compartidos y administración de infraestructura.",
    image: windowsServer,
  },
  {
    name: "Linux",
    description:
      "Soporte para servicios, monitoreo, automatización y operación de entornos empresariales.",
    image: linuxServer,
  },
  {
    name: "VMware",
    description:
      "Virtualización de infraestructura, optimización de recursos y continuidad operativa.",
    image: vmwareImage,
  },
];

// ==============================
// DATA: TERMINAL DEL HERO
// ==============================
const terminalLines = [
  "gelianx@infra:~$ iniciando evaluacion de infraestructura",
  "✓ Topología de red revisada",
  "✓ Segmentación VLAN verificada",
  "✓ Políticas de firewall y VPN validadas",
  "✓ Verificación de respaldos completada",
  "✓ Monitoreo y registros operativos",
  "✓ Documentación técnica sincronizada",
];

// ==============================
// DATA: TARJETAS DEL HERO
// ==============================
const floatingCards = [
  {
    label: "Firewall",
    value: "Políticas revisadas",
  },
  {
    label: "VPN",
    value: "Acceso seguro",
  },
  {
    label: "Backups",
    value: "Verificación activa",
  },
];

// ==============================
// DATA: METODOLOGÍA
// ==============================
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
];

// ==============================
// DATA: ENFOQUE
// ==============================
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
];

// ==============================
// COMPONENTE PRINCIPAL
// ==============================
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showValidationPopup, setShowValidationPopup] = useState(false);
  const [activeTechnology, setActiveTechnology] = useState(0);
  const [pauseTechnologyCarousel, setPauseTechnologyCarousel] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
  const savedTheme = localStorage.getItem("gelianx-theme");
  return savedTheme ? savedTheme === "dark" : false;
});

  // Popup automático CSV/GxP
  useEffect(() => {
    const openTimer = setTimeout(() => {
      setShowValidationPopup(true);
    }, 2000);

    const closeTimer = setTimeout(() => {
      setShowValidationPopup(false);
    }, 17000);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
    };
  }, []);
  useEffect(() => {
  localStorage.setItem("gelianx-theme", darkMode ? "dark" : "light");
}, [darkMode]);

  // Carrusel automático de tecnologías
  useEffect(() => {
    if (pauseTechnologyCarousel) return;

    const techTimer = setInterval(() => {
      setActiveTechnology((current) => (current + 1) % technologies.length);
    }, 7000);

    return () => clearInterval(techTimer);
  }, [pauseTechnologyCarousel]);

  const theme = {
    main: darkMode ? "bg-slate-900 text-white" : "bg-[#EEF4F8] text-slate-950",
    navbar: darkMode ? "border-white/10 bg-slate-900/75" : "border-slate-200 bg-[#EEF4F8]/80",
    navbarText: darkMode ? "text-slate-300" : "text-slate-700",
    mobileMenu: darkMode ? "border-white/10 bg-slate-900/95 text-slate-300" : "border-slate-200 bg-[#EEF4F8]/95 text-slate-700",
    heroText: darkMode ? "text-slate-300" : "text-slate-700",
    mutedText: darkMode ? "text-slate-400" : "text-slate-700",
    accentText: darkMode ? "text-cyan-400" : "text-cyan-700",
    accentSoftText: darkMode ? "text-cyan-300" : "text-cyan-700",
    accentPillText: darkMode ? "text-cyan-200" : "text-cyan-800",
    accentButtonText: darkMode ? "text-cyan-500" : "text-cyan-700",
    sectionAlt: darkMode ? "border-white/10 bg-slate-900" : "border-slate-200 bg-[#F4F8FB]/35 backdrop-blur-sm",
    card: darkMode ? "border-slate-800 bg-slate-900 text-white shadow-xl shadow-slate-950/40" : "border-slate-200 bg-[#F4F8FB]/78 text-slate-950 shadow-xl shadow-slate-200/70 backdrop-blur-sm",
    cardSoft: darkMode ? "border-slate-800 bg-slate-950 text-white shadow-xl shadow-slate-950/40" : "border-slate-200 bg-[#F4F8FB]/78 text-slate-950 shadow-xl shadow-slate-200/70 backdrop-blur-sm",
    terminal: darkMode ? "border-white/5 bg-slate-900/95" : "border-slate-200 bg-slate-950",
    darkPanelText: darkMode ? "text-slate-300" : "text-slate-200",
    chip: darkMode ? "border-white/10 bg-slate-900/95 text-slate-300" : "border-slate-200 bg-[#F5F9FC]/70 text-slate-700 shadow-sm",
    miniCard: darkMode ? "border-slate-800 bg-slate-950/95 text-slate-200" : "border-slate-200 bg-[#F4F8FB]/75 text-slate-700 shadow-sm backdrop-blur-sm",
    footer: darkMode ? "border-white/10 bg-slate-900" : "border-slate-200 bg-[#EEF4F8]/55 backdrop-blur-sm",
  };

  return (
    <main className={`relative isolate min-h-screen overflow-hidden transition-colors duration-500 ${theme.main}`}>
      <div className="pointer-events-none absolute inset-0 -z-10 min-h-full overflow-hidden">
        {/* GLOW PRINCIPAL */}
        <div
          className={`absolute -top-48 right-[-14rem] h-[56rem] w-[56rem] rounded-full blur-3xl transition-all duration-700 ${
            darkMode ? "bg-cyan-400/30" : "bg-cyan-400/30"
          }`}
        />

        {/* GLOW CENTRAL IZQUIERDO */}
        <div
          className={`absolute top-[22%] left-[-14rem] h-[48rem] w-[48rem] rounded-full blur-3xl transition-all duration-700 ${
            darkMode ? "bg-blue-500/25" : "bg-sky-400/22"
          }`}
        />

        {/* GLOW INFERIOR */}
        <div
          className={`absolute bottom-[-16rem] right-[10%] h-[46rem] w-[46rem] rounded-full blur-3xl transition-all duration-700 ${
            darkMode ? "bg-cyan-300/18" : "bg-cyan-300/22"
          }`}
        />

        {/* GLOW EXTRA CENTRAL */}
        <div
          className={`absolute top-[58%] left-[38%] h-[40rem] w-[40rem] rounded-full blur-3xl transition-all duration-700 ${
            darkMode ? "bg-blue-400/18" : "bg-cyan-400/16"
          }`}
        />

        {/* GLOW SUPERIOR SUAVE */}
        <div
          className={`absolute top-[5%] left-[20%] h-[34rem] w-[34rem] rounded-full blur-3xl transition-all duration-700 ${
            darkMode ? "bg-cyan-500/10" : "bg-blue-300/16"
          }`}
        />

        {/* OVERLAY CYBER GRID */}
        <div
          className={`absolute inset-0 bg-[size:64px_64px] ${
            darkMode
              ? "bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] opacity-25"
              : "bg-[linear-gradient(to_right,rgba(14,165,233,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.07)_1px,transparent_1px)] opacity-55"
          }`}
        />

        {/* CAPA SUAVIZADO */}
        <div
          className={`absolute inset-0 ${
            darkMode ? "bg-slate-950/18" : "bg-[#EEF4F8]/18"
          }`}
        />
      </div>
     {/* POPUP VALIDACIÓN CSV/GxP */}
<AnimatePresence>
  {showValidationPopup && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      className={`fixed left-0 top-0 z-[80] flex h-[100dvh] w-screen items-center justify-center overflow-y-auto px-6 py-8 backdrop-blur-md ${
        darkMode ? "bg-slate-950/80" : "bg-slate-900/30"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.94 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={`relative my-auto max-h-[90dvh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-cyan-400/20 p-8 shadow-2xl shadow-cyan-950/30 ${
          darkMode
            ? "bg-gradient-to-br from-cyan-400/10 via-slate-900 to-slate-950 text-white"
            : "bg-gradient-to-br from-[#F8FBFD] via-cyan-50 to-[#EAF2F7] text-slate-950"
        }`}
      >
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />

        <button
          onClick={() => setShowValidationPopup(false)}
          className={`absolute right-5 top-5 z-10 rounded-full border p-2 transition hover:border-cyan-400 hover:text-cyan-400 ${
            darkMode
              ? "border-slate-700 text-slate-400"
              : "border-slate-300 bg-[#F5F9FC]/70 text-slate-600"
          }`}
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative pr-10">
          <p className={`mb-4 text-sm font-bold uppercase tracking-[0.3em] ${theme.accentText}`}>
            Especialidad técnica
          </p>

          <h3 className="max-w-2xl text-4xl font-black leading-tight md:text-5xl">
            Validación de Sistemas Computarizados
          </h3>

          <p className={`mt-6 max-w-2xl text-lg leading-8 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
            Enfoque orientado a documentación técnica, trazabilidad,
            protocolos IQ/OQ/PQ y soporte para ambientes regulados con
            buenas prácticas GxP/GAMP 5.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {["IQ", "OQ", "PQ", "CSV", "GxP", "GAMP 5"].map((item) => (
              <span
                key={item}
                className={`rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold ${theme.accentPillText}`}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/validacion"
              onClick={() => setShowValidationPopup(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-8 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Conocer enfoque CSV/GxP
              <ArrowRight className="h-4 w-4" />
            </Link>

            <button
              onClick={() => setShowValidationPopup(false)}
              className={`rounded-full border px-8 py-3 font-bold transition ${
                darkMode
                  ? "border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
                  : "border-slate-300 bg-[#F5F9FC]/75 text-slate-700 hover:border-cyan-500 hover:text-cyan-700"
              }`}
            >
              Continuar navegando
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      {/* NAVBAR PRINCIPAL */}
      <header className={`fixed left-0 top-0 z-50 w-full border-b backdrop-blur-xl transition-colors duration-500 ${theme.navbar}`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#">
            <GelianxLogo />
          </a>

          <div className={`hidden items-center gap-8 text-sm font-medium md:flex ${theme.navbarText}`}>
            <a href="#servicios" className={`transition ${darkMode ? "hover:text-cyan-400" : "hover:text-cyan-700"}`}>
              Servicios
            </a>
            <a href="#tecnologias" className={`transition ${darkMode ? "hover:text-cyan-400" : "hover:text-cyan-700"}`}>
              Tecnologías
            </a>
            <a href="#metodologia" className={`transition ${darkMode ? "hover:text-cyan-400" : "hover:text-cyan-700"}`}>
              Metodología
            </a>
            <a href="#enfoque" className={`transition ${darkMode ? "hover:text-cyan-400" : "hover:text-cyan-700"}`}>
              Enfoque
            </a>
            <a href="#contacto" className={`transition ${darkMode ? "hover:text-cyan-400" : "hover:text-cyan-700"}`}>
              Contacto
            </a>

            <Link to="/servicios" className={`transition ${darkMode ? "hover:text-cyan-400" : "hover:text-cyan-700"}`}>
              Soluciones
            </Link>

            <div className="group relative">
              <Link
                to="/validacion"
                className={`rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 shadow-lg shadow-cyan-950/20 transition hover:border-cyan-500 hover:bg-cyan-400/20 ${darkMode ? "text-cyan-300 hover:text-white" : "text-cyan-700 hover:text-cyan-900"}`}
              >
                CSV / GxP
              </Link>

              <div className="pointer-events-none absolute right-0 top-14 w-72 rounded-2xl border border-cyan-400/20 bg-slate-950/95 p-4 opacity-0 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl transition duration-300 group-hover:opacity-100">
                <p className="text-sm font-bold text-cyan-300">
                  Validación de Sistemas Computarizados
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Enfoque orientado a documentación técnica, trazabilidad,
                  protocolos IQ/OQ/PQ y buenas prácticas GxP.
                </p>

                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Ingresa aquí
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/593960451362"
            className="hidden rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300 sm:inline-flex"
          >
            WhatsApp
          </a>

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

        

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-slate-700 p-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {menuOpen && (
          <div className={`border-t px-6 py-5 backdrop-blur-xl md:hidden ${theme.mobileMenu}`}>
            <div className={`flex flex-col gap-4 text-sm font-medium ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
              <a
                onClick={() => setMenuOpen(false)}
                href="#servicios"
                className={`${darkMode ? "hover:text-cyan-400" : "hover:text-cyan-700"}`}
              >
                Servicios
              </a>
              <a
                onClick={() => setMenuOpen(false)}
                href="#tecnologias"
                className={`${darkMode ? "hover:text-cyan-400" : "hover:text-cyan-700"}`}
              >
                Tecnologías
              </a>
              <a
                onClick={() => setMenuOpen(false)}
                href="#metodologia"
                className={`${darkMode ? "hover:text-cyan-400" : "hover:text-cyan-700"}`}
              >
                Metodología
              </a>
              <a
                onClick={() => setMenuOpen(false)}
                href="#enfoque"
                className={`${darkMode ? "hover:text-cyan-400" : "hover:text-cyan-700"}`}
              >
                Enfoque
              </a>
              <a
                onClick={() => setMenuOpen(false)}
                href="#contacto"
                className={`${darkMode ? "hover:text-cyan-400" : "hover:text-cyan-700"}`}
              >
                Contacto
              </a>
              <Link
                onClick={() => setMenuOpen(false)}
                to="/servicios"
                className={`${theme.accentSoftText} hover:text-cyan-500`}
              >
                Soluciones
              </Link>
              <Link
                onClick={() => setMenuOpen(false)}
                to="/validacion"
                className={`rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-center font-bold hover:bg-cyan-400/20 ${theme.accentSoftText}`}
              >
                CSV / GxP
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* HERO / INICIO */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28">
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.18),transparent_38%)]"
              : "bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.12),transparent_38%)]"
          }`}
        />
        <div
          className={`absolute inset-0 bg-[size:64px_64px] ${
            darkMode
              ? "bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] opacity-20"
              : "bg-[linear-gradient(to_right,rgba(14,165,233,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.08)_1px,transparent_1px)] opacity-35"
          }`}
        />

        <div className="absolute left-1/2 top-24 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[24rem] w-[24rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute left-1/3 top-1/3 h-[16rem] w-[16rem] rounded-full bg-cyan-300/5 blur-3xl" />
        <div className="absolute left-0 top-32 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
        <div className="absolute left-32 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent" />
        <div className="absolute bottom-24 right-0 h-px w-full bg-gradient-to-l from-transparent via-blue-400/10 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent lg:block" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className={`mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold ${theme.accentSoftText}`}>
              Infraestructura TI • Redes Empresariales • Continuidad Operativa
            </div>

            <p className={`mb-5 text-sm font-bold uppercase tracking-[0.35em] ${theme.accentText}`}>
              Infraestructura • Redes • Seguridad
            </p>

            <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Infraestructura, redes y soporte técnico con enfoque profesional y documentado.
            </h1>

            <p className={`mb-8 max-w-2xl text-lg leading-8 ${theme.heroText}`}>
              Apoyo técnico en infraestructura, redes, soporte y documentación
              para pequeñas empresas y entornos corporativos que necesitan
              orden, estabilidad y criterio técnico.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/593960451362"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-8 py-3 text-center font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
              >
                Solicitar evaluación técnica
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>

              <a
                href="#servicios"
                className={`rounded-full border px-8 py-3 text-center font-bold transition ${
                  darkMode
                    ? "border-slate-600 text-white hover:border-cyan-400 hover:text-cyan-400"
                    : "border-slate-300 bg-[#F5F9FC]/75 text-slate-900 shadow-sm hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-700"
                }`}
              >
                Explorar servicios
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                "Soporte empresarial",
                "Redes seguras",
                "Documentación técnica",
              ].map((item) => (
                <div
                  key={item}
                  className={`group rounded-2xl border px-4 py-3 text-sm font-semibold backdrop-blur transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-600 ${theme.chip}`}
                >
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-cyan-400/70 transition group-hover:bg-cyan-300" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className={`relative rounded-3xl border p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl ${darkMode ? "border-white/10 bg-slate-900 text-white" : "border-slate-200 bg-[#F4F8FB]/72"}`}
          >
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -right-4 -top-5 hidden rounded-2xl border border-cyan-400/20 bg-slate-900/90 px-5 py-4 shadow-xl shadow-cyan-950/40 backdrop-blur md:block"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Estado
              </p>
              <p className="mt-1 font-bold text-emerald-400">Operativo</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-cyan-400/20 bg-slate-900/90 px-5 py-4 shadow-xl shadow-cyan-950/40 backdrop-blur md:block"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Enfoque
              </p>
              <p className="mt-1 font-bold text-cyan-300">Documentado</p>
            </motion.div>

            <div className={`rounded-2xl p-6 shadow-2xl shadow-cyan-950/30 ${theme.terminal}`}>
              <div className="mb-5 flex items-center gap-3 border-b border-slate-800 pb-4">
                <Terminal className="h-5 w-5 text-cyan-400" />
                <span className="text-sm font-semibold text-slate-300">
                  consola-operativa
                </span>
                <span className="ml-auto rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-400">
                  Activo
                </span>
              </div>

              <div className="space-y-4 font-mono text-sm">
                {terminalLines.map((line, index) => (
                  <motion.p
                    key={line}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.13 }}
                    className={
                      index === 0 ? "text-cyan-300" : "text-emerald-300"
                    }
                  >
                    {line}
                  </motion.p>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {floatingCards.map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-xl border p-4 transition hover:border-cyan-400/30 ${theme.miniCard}`}
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      {item.label}
                    </p>
                    <p className={`mt-2 text-sm font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN SERVICIOS */}
      <section id="servicios" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className={`mb-3 text-sm font-bold uppercase tracking-[0.3em] ${theme.accentText}`}>
              Servicios
            </p>

            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Áreas donde puedo ayudarte
            </h2>

            <p className={`mt-5 text-lg leading-8 ${theme.mutedText}`}>
              Servicios técnicos para pequeñas empresas, oficinas, áreas
              administrativas y entornos que requieren soporte confiable.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className={`group relative overflow-hidden rounded-3xl border p-7 transition hover:-translate-y-1 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-950/30 ${theme.card}`}
                >
                  <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 transition group-hover:scale-105 group-hover:bg-cyan-400/20">
                    <div className="absolute inset-0 rounded-2xl bg-cyan-400/0 blur-xl transition group-hover:bg-cyan-400/20" />
                    <Icon className={`relative h-7 w-7 ${theme.accentText}`} />
                  </div>

                  <h3 className={`mb-3 text-2xl font-bold ${darkMode ? "text-white" : "text-slate-950"}`}>{service.title}</h3>

                  <p className={`leading-7 ${theme.mutedText}`}>
                    {service.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECCIÓN TECNOLOGÍAS */}
      <section
        id="tecnologias"
        className={`relative border-y px-6 py-24 transition-colors duration-500 ${theme.sectionAlt}`}
      >
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className={`mb-3 text-sm font-bold uppercase tracking-[0.3em] ${theme.accentText}`}>
              Tecnologías
            </p>

            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Experiencia aplicada en entornos reales.
            </h2>

            <p className={`mt-5 text-lg leading-8 ${theme.mutedText}`}>
              Herramientas y plataformas utilizadas en operaciones de
              infraestructura, conectividad, soporte, monitoreo y colaboración
              empresarial.
            </p>

            <div className="mt-8 hidden gap-4 sm:grid-cols-2 lg:grid">
              {technologies.map((tech, index) => (
                <button
                  key={tech.name}
                  onMouseEnter={() => {
                    setPauseTechnologyCarousel(true);
                    setActiveTechnology(index);
                  }}
                  onMouseLeave={() => {
                    setPauseTechnologyCarousel(false);
                  }}
                  onClick={() => setActiveTechnology(index)}
                  className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition duration-300 ${
                    index === activeTechnology
                      ? "border-cyan-400 bg-cyan-400/20"
                      : darkMode
                        ? "border-cyan-400/20 bg-cyan-400/10 hover:border-cyan-300 hover:bg-cyan-400/15"
                        : "border-cyan-500/30 bg-[#F5F9FC]/70 hover:border-cyan-500 hover:bg-cyan-50"
                  }`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-cyan-400 transition group-hover:bg-cyan-300" />

                      <p className={`text-sm font-bold transition ${darkMode ? "text-cyan-200 group-hover:text-white" : "text-cyan-700 group-hover:text-cyan-900"}`}>
                        {tech.name}
                      </p>
                    </div>

                    <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100">
                      <p className={`text-sm leading-6 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                        {tech.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/0 to-cyan-400/10 opacity-0 transition duration-300 group-hover:opacity-100" />
                </button>
              ))}
            </div>
          </div>

          <div
            onMouseEnter={() => setPauseTechnologyCarousel(true)}
            onMouseLeave={() => setPauseTechnologyCarousel(false)}
            className="relative min-h-[680px] overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-950/90 p-8 text-white shadow-2xl shadow-cyan-950/40"
          >
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative flex h-full flex-col justify-between">
              <button
                onClick={() =>
                  setActiveTechnology((current) =>
                    current === 0 ? technologies.length - 1 : current - 1
                  )
                }
                className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/20 bg-slate-950/70 text-cyan-300 backdrop-blur transition hover:bg-cyan-400/20 lg:hidden"
              >
                ‹
              </button>

              <button
                onClick={() =>
                  setActiveTechnology((current) => (current + 1) % technologies.length)
                }
                className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/20 bg-slate-950/70 text-cyan-300 backdrop-blur transition hover:bg-cyan-400/20 lg:hidden"
              >
                ›
              </button>

              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
                  Tecnología activa
                </p>

                <motion.div
                  key={technologies[activeTechnology].name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                >
                  <h3 className="text-5xl font-black">
                    {technologies[activeTechnology].name}
                  </h3>

                  <p className="mt-6 text-lg leading-8 text-slate-300">
                    {technologies[activeTechnology].description}
                  </p>
                </motion.div>
              </div>

              <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-3">
                <div className="relative h-80 overflow-hidden rounded-2xl [perspective:1000px]">
                  {technologies[activeTechnology].image ? (
                    <motion.img
                      key={technologies[activeTechnology].image}
                      src={technologies[activeTechnology].image}
                      alt={technologies[activeTechnology].name}
                      initial={{ opacity: 0, scale: 1.03, y: 8 }}
                      animate={{ opacity: 1, scale: 1.06, y: -6 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <motion.div
                      key={technologies[activeTechnology].name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.45 }}
                      className="absolute inset-0 h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.25),transparent_35%),linear-gradient(135deg,rgba(34,211,238,0.12),rgba(59,130,246,0.08))]"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 rounded-2xl border border-cyan-400/20 bg-slate-950/70 px-5 py-3 backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                      Referencia visual
                    </p>
                    <p className="mt-1 font-bold text-cyan-200">
                      {technologies[activeTechnology].name}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                {technologies.map((tech, index) => (
                  <button
                    key={tech.name}
                    onClick={() => setActiveTechnology(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === activeTechnology
                        ? "w-8 bg-cyan-400"
                        : "w-2 bg-slate-600 hover:bg-cyan-400/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN METODOLOGÍA */}
      <section id="metodologia" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className={`mb-3 text-sm font-bold uppercase tracking-[0.3em] ${theme.accentText}`}>
              Metodología
            </p>

            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Un proceso claro para servicios técnicos bien ejecutados.
            </h2>

            <p className={`mt-5 text-lg leading-8 ${theme.mutedText}`}>
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
                className={`rounded-3xl border p-6 transition hover:border-cyan-400 ${theme.card}`}
              >
                <p className={`mb-6 text-4xl font-black ${darkMode ? "text-cyan-400/40" : "text-cyan-700/40"}`}>
                  {step.number}
                </p>

                <h3 className="mb-3 text-xl font-bold">{step.title}</h3>

                <p className={`text-sm leading-6 ${theme.mutedText}`}>
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN ENFOQUE */}
      <section
        id="enfoque"
        className={`border-y px-6 py-24 transition-colors duration-500 ${theme.sectionAlt}`}
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className={`mb-3 text-sm font-bold uppercase tracking-[0.3em] ${theme.accentText}`}>
              Enfoque
            </p>

            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Tecnología con criterio técnico y documentación.
            </h2>

            <p className={`mt-5 text-lg leading-8 ${theme.mutedText}`}>
              Gelianx es una marca técnica personal enfocada en infraestructura,
              redes, soporte y documentación tecnológica, construida desde la
              experiencia práctica y el aprendizaje continuo.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {strengths.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`rounded-3xl border p-6 ${theme.cardSoft}`}
                >
                  <Icon className={`mb-5 h-7 w-7 ${theme.accentText}`} />

                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>

                  <p className={`text-sm leading-6 ${theme.mutedText}`}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECCIÓN CONTACTO */}
      <section id="contacto" className="px-6 py-24">
        <div className={`mx-auto max-w-4xl rounded-3xl border border-cyan-400/30 p-10 text-center shadow-2xl shadow-cyan-950/20 ${darkMode ? "bg-slate-900 text-white shadow-xl shadow-slate-950/40" : "bg-[#F4F8FB]/72 backdrop-blur-sm"}`}>
          <h2 className="mb-4 text-4xl font-black">
            ¿Necesitas soporte o asesoría?
          </h2>

          <p className={`mx-auto mb-8 max-w-2xl text-lg ${theme.mutedText}`}>
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

      {/* FOOTER */}
      <footer className={`relative overflow-hidden border-t px-6 py-14 transition-colors duration-500 ${theme.footer}`}>
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <GelianxLogo />

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-bold text-emerald-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Infraestructura operativa
            </div>

            <p className={`mt-5 max-w-sm text-sm leading-6 ${theme.mutedText}`}>
              Marca técnica personal enfocada en infraestructura, redes,
              soporte, documentación y continuidad tecnológica.
            </p>
          </div>

          <div>
            <h3 className={`mb-4 text-sm font-bold uppercase tracking-[0.2em] ${darkMode ? "text-slate-300" : "text-slate-800"}`}>
              Navegación
            </h3>

            <div className={`flex flex-col gap-3 text-sm ${theme.mutedText}`}>
              <a href="#servicios" className={`transition ${darkMode ? "hover:text-cyan-400" : "hover:text-cyan-700"}`}>
                Servicios
              </a>
              <a href="#tecnologias" className={`transition ${darkMode ? "hover:text-cyan-400" : "hover:text-cyan-700"}`}>
                Tecnologías
              </a>
              <a href="#metodologia" className={`transition ${darkMode ? "hover:text-cyan-400" : "hover:text-cyan-700"}`}>
                Metodología
              </a>
              <a href="#enfoque" className={`transition ${darkMode ? "hover:text-cyan-400" : "hover:text-cyan-700"}`}>
                Enfoque
              </a>
            </div>
          </div>

          <div>
            <h3 className={`mb-4 text-sm font-bold uppercase tracking-[0.2em] ${darkMode ? "text-slate-300" : "text-slate-800"}`}>
              Contacto
            </h3>

            <div className={`flex flex-col gap-3 text-sm ${theme.mutedText}`}>
              <a
                href="https://wa.me/593960451362"
                className={`transition ${darkMode ? "hover:text-cyan-400" : "hover:text-cyan-700"}`}
              >
                WhatsApp: +593 960 451 362
              </a>
              <p>Ecuador</p>
              <p>Infraestructura TI • Redes • Soporte</p>
            </div>
          </div>
        </div>

        <div className={`mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t pt-6 text-sm md:flex-row md:items-center md:justify-between ${darkMode ? "border-white/10 text-slate-500" : "border-slate-200 text-slate-600"}`}>
          <p>© 2026 Gelianx. Marca personal técnica de infraestructura TI.</p>
          <p>Infraestructura, redes y soporte con enfoque técnico profesional.</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
