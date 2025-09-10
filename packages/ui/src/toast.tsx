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
      <div className={cn("fixed bottom-4 right-4 z-[60] flex w-80 flex-col gap-2", className)} {...rest}>
        {toasts.map((t) => (
          <div
            key={t.id}
            className={cn(
              "rounded-md border px-3 py-2 shadow-md bg-background text-foreground border-border",
              variantClass(t.variant)
            )}
          >
            <div className="flex items-start gap-2">
              <div className="min-w-0 flex-1">
                {t.title ? <div className="text-sm font-semibold">{t.title}</div> : null}
                {t.description ? <div className="text-sm text-muted-foreground">{t.description}</div> : null}
              </div>
              <button className="text-sm text-muted-foreground hover:text-foreground" onClick={() => dismiss(t.id)}>
                ✕
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
      return "border-success/40 bg-success/10";
    case "warning":
      return "border-warning/40 bg-warning/10";
    case "error":
      return "border-error/40 bg-error/10";
    case "info":
      return "border-info/40 bg-info/10";
    default:
      return "";
  }
}

