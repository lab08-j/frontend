'use client';

import { useState } from 'react';

export function PasswordField() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <label htmlFor="password" className="text-sm font-medium text-[#E4E4E7]">
        Senha
      </label>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#71717A]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>

        <input
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          autoComplete="current-password"
          placeholder="Digite sua senha"
          className="h-12 w-full rounded-xl border border-white/10 bg-[#10131B] pr-12 pl-11 text-sm text-white transition-all outline-none placeholder:text-[#71717A] focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-3 flex items-center text-[#71717A] transition-colors hover:text-white"
          aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
        >
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 3 18 18" />
              <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
              <path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c6.5 0 10 7 10 7a13.7 13.7 0 0 1-3 3.8" />
              <path d="M6.6 6.6C3.7 8.4 2 12 2 12s3.5 7 10 7c1.2 0 2.3-.2 3.3-.6" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
