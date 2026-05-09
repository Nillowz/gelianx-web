function GelianxLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 shadow-lg shadow-cyan-400/10">
        <div className="absolute h-5 w-5 rounded-md border-2 border-cyan-400 rotate-45" />
        <div className="absolute h-2 w-2 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/50" />
        <div className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
        <div className="absolute bottom-2 left-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
      </div>

      <span className="text-2xl font-black tracking-tight">
        Gelianx<span className="text-cyan-400">.</span>
      </span>
    </div>
  )
}

export default GelianxLogo