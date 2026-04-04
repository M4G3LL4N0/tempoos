"use client";

import { useState } from "react";

type FormProps = {
  onSubmit: (data: FormData) => Promise<void>;
  children: React.ReactNode;
  className?: string;
};

export function Form({ onSubmit, children, className }: FormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubmit(new FormData(event.currentTarget));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full rounded-full border border-white/10 bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.02] disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
