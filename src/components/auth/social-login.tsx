export function SocialLogin() {
  return (
    <>
      <button
        type="button"
        className="flex min-h-[64px] w-full items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#20232D] px-4 py-3 text-left transition-all hover:border-white/20 hover:bg-[#292D38] active:scale-[0.98]"
      >
        <div className="flex min-w-0 items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="shrink-0 text-white"
          >
            <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.3-1.23-1.65-1.23-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.48-.28-5.08-1.24-5.08-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.24-5.1 5.52.4.35.76 1.03.76 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
          </svg>

          <div className="min-w-0">
            <p className="text-sm font-medium text-white">Continuar com GitHub</p>

            <p className="text-xs text-[#A1A1AA]">Sincronize repositórios e perfil</p>
          </div>
        </div>

        <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[#49365F] bg-[#29213A] px-2 py-1 text-[10px] font-medium text-[#C4B5FD]">
          <span>★</span>
          Recomendado para devs
        </span>
      </button>

      <button
        type="button"
        className="flex min-h-[64px] w-full items-center justify-between gap-3 rounded-xl border border-white/5 bg-[#1B1E27] px-4 py-3 text-left transition-all hover:border-white/10 hover:bg-[#222631] active:scale-[0.98]"
      >
        <div className="flex min-w-0 items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 48 48"
            aria-hidden="true"
            className="shrink-0"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z"
            />
            <path
              fill="#4285F4"
              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.25 5.48-4.71 7.18l7.19 5.59c4.2-3.88 7.56-9.63 7.56-17.24Z"
            />
            <path
              fill="#FBBC05"
              d="M10.53 28.59A14.5 14.5 0 0 1 9.75 24c0-1.59.27-3.12.76-4.59l-7.98-6.19A23.93 23.93 0 0 0 0 24c0 3.87.93 7.52 2.56 10.78l7.97-6.19Z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.48 0 11.93-2.13 15.91-5.79l-7.19-5.59c-1.99 1.33-4.53 2.12-8.72 2.12-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z"
            />
          </svg>

          <div className="min-w-0">
            <p className="text-sm font-medium text-white">Continuar com Google</p>

            <p className="text-xs text-[#A1A1AA]">Acesso rápido com conta pessoal</p>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="shrink-0 text-[#A1A1AA]"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </>
  );
}
