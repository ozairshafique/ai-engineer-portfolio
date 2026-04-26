"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-white/20 focus:outline-none focus:border-emerald-500/50 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="text-xs text-white/40 mb-1.5 block">Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className={inputClass}
        />
      </div>
      <div>
        <label className="text-xs text-white/40 mb-1.5 block">Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
          className={inputClass}
        />
      </div>
      <div>
        <label className="text-xs text-white/40 mb-1.5 block">Subject</label>
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          placeholder="Job opportunity · Collaboration · Other"
          className={inputClass}
        />
      </div>
      <div>
        <label className="text-xs text-white/40 mb-1.5 block">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell me about the role or project..."
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full px-4 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-white/90 transition-colors disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send message →"}
      </button>
      {status === "success" && (
        <div className="flex items-center gap-2 text-emerald-400 text-sm justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          Message sent — I will reply within 24 hours
        </div>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm text-center">
          Something went wrong — email me directly
        </p>
      )}
    </form>
  );
}
