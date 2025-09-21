"use client";
import React from "react";
import { cn } from "./lib/cn";
import { Portal } from "./portal";

export type ToastVariant = "default" | "success" | "warning" | "error" | "info";

export interface ToastOptions {
  id?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: ToastVariant;
  duration?: number; // ms
}

type ToastInternal = Required<Pick<ToastOptions, "id" | "variant">> & Omit<ToastOptions, "id" | "variant">;

interface ToastContext {
  toasts: ToastInternal[];
  toast: (opts: ToastOptions) => string;
  dismiss: (id: string) => void;
}

const ToastCtx = React.createContext<ToastContext | null>(null);

export interface ToastProviderProps {
  children: React.ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = React.useState<ToastInternal[]>([]);

  const dismiss = (id: string) => setToasts((t) => t.filter((x) => x.id !== id));
  const toast = (opts: ToastOptions) => {
    const id = opts.id ?? Math.random().toString(36).slice(2);
    const t: ToastInternal = {
      id,
      variant: opts.variant ?? "default",
      title: opts.title,
      description: opts.description,
      duration: opts.duration ?? 3500,
    };
    setToasts((list) => [...list, t]);
    if (t.duration && t.duration > 0) {
      setTimeout(() => dismiss(id), t.duration);
    }
    return id;
  };

  return <ToastCtx.Provider value={{ toasts, toast, dismiss }}>{children}</ToastCtx.Provider>;
}

export function useToast() {
  const ctx = React.useContext(ToastCtx);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider>");
  return ctx;
}

export interface ToastViewportProps extends React.HTMLAttributes<HTMLDivElement> {}
export function ToastViewport({ className, ...rest }: ToastViewportProps) {
  const { toasts, dismiss } = useToast();
  return (
    <Portal>
      <div className={cn("fixed bottom-4 right-4 z-[60] flex w-96 flex-col gap-3", className)} {...rest}>
        {toasts.map((t) => (
          <div
            key={t.id}
            className={cn(
              "rounded-xl border-2 px-4 py-3 shadow-lg bg-background text-foreground",
              "transition-all duration-300 ease-in-out transform translate-x-full animate-in slide-in-from-right-full",
              variantClass(t.variant)
            )}
          >
            <div className="flex items-start gap-3">
              <div className="min-w-0 flex-1">
                {t.title ? <div className="text-sm font-bold leading-tight">{t.title}</div> : null}
                {t.description ? <div className="text-sm text-muted-foreground mt-1 leading-relaxed">{t.description}</div> : null}
              </div>
              <button
                className="text-sm text-muted-foreground/70 hover:text-foreground transition-colors duration-200 flex-shrink-0"
                onClick={() => dismiss(t.id)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </Portal>
  );
}

function variantClass(v: ToastVariant) {
  switch (v) {
    case "success":
      return "border-success/30 bg-success/8 text-success";
    case "warning":
      return "border-warning/30 bg-warning/8 text-warning";
    case "error":
      return "border-error/30 bg-error/8 text-error";
    case "info":
      return "border-info/30 bg-info/8 text-info";
    default:
      return "border-border/30 bg-muted/20";
  }
}

