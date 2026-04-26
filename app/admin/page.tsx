"use client";

import { set } from "mongoose";
import { useState } from "react";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    title: "",
    description: "",
    tags: "",
    metrics: "",
    githubLink: "",
    demoUrl: "",
    featured: false,
    order: 0,
  });

  // Handle login logic
  async function handleLogin() {
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });
      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        setMessage("Invalid password. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred during login.");
      setLoading(false);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": password,
        },
        body: JSON.stringify({
          ...form,
          tags: form.tags
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean),
          order: Number(form.order),
        }),
      });
      if (response.ok) {
        setMessage("Project added successfully!");
        setForm({
          title: "",
          description: "",
          tags: "",
          metrics: "",
          githubLink: "",
          demoUrl: "",
          featured: false,
          order: 0,
        });
      } else {
        const data = await response.json();
        setMessage(data.error || "Failed to add project.");
      }
    } catch (error) {
      setMessage("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  }

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-sm p-8 border border-white/10 rounded-xl bg-[#1d1d1d]">
          <h1 className="text-lg font-medium">Admin Login</h1>
          <p className="text-white/40 text-sm mb-6">
            Please enter your admin password
          </p>
          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key == "Enter" && handleLogin()}
            className="w-full px-5 py-2 border border-white/10 bg-white/5 rounded-lg text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/20 mb-3"
          />
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          {message && <p className="text-red-500 text-sm mt-3">{message}</p>}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="max-w-2xl mx-auto px-6 pt-28 pb-20">
        <p className="text-sm text-white/30 uppercase tracking-widest mb-2">
          Admin{" "}
        </p>
        <h1 className="text-3xl font-bold mb-8 ">Add Project</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-xs text-white/40 mb-1.5 block">
              Title *
            </label>
            <input
              name="title"
              onChange={handleChange}
              value={form.title}
              required
              placeholder="Crop Classification Analysis"
              className="px-4 py-2 w-full text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 hover:outline-none hover:border-white/30"
            />
          </div>
          <div>
            <label className="text-xs text-white/40 mb-1.5 block">
              Description *
            </label>
            <textarea
              name="description"
              onChange={handleChange}
              value={form.description}
              required
              placeholder="A comprehensive analysis of crop classification using machine learning techniques."
              className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 hover:outline-none hover:border-white/30 w-full h-32 resize-none"
            />
          </div>
          <div>
            <label className="text-xs text-white/40 mb-1.5 block">Tags *</label>
            <input
              name="tags"
              onChange={handleChange}
              value={form.tags}
              placeholder="DVC, Docker, FastAPI, Prometheus"
              required
              className="px-4 py-2 w-full text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none hover:border-white/30"
            />
          </div>
          <div>
            <label className="text-xs text-white/40 mb-1.5 block">
              Metrics (optional)
            </label>
            <input
              name="metrics"
              onChange={handleChange}
              value={form.metrics}
              placeholder="F1: 0.85 · ROC-AUC: 0.96"
              className="w-full px-4 py-2 text-white bg-white/5 border boder-white/10 placeholder-white/20 focus:outline-none hover:border-white/30 rounded-xl text-sm"
            />
          </div>
          <div>
            <label className="text-xs text-white/40 mb-1.5 block">
              GitHub Link (optional)
            </label>
            <input
              name="githubLink"
              onChange={handleChange}
              value={form.githubLink}
              placeholder="https://github.com/user/repo"
              className="w-full px-4 py-2 text-white bg-white/5 border boder-white/10 placeholder-white/20 focus:outline-none hover:border-white/30 rounded-xl text-sm"
            />
          </div>
          <div>
            <label className="text-xs text-white/40 mb-1.5 block">
              Demo URL (optional)
            </label>
            <input
              name="demoUrl"
              onChange={handleChange}
              value={form.demoUrl}
              placeholder="https://your-demo-url.com"
              className="w-full px-4 py-2 text-white bg-white/5 border boder-white/10 placeholder-white/20 focus:outline-none hover:border-white/30 rounded-xl text-sm"
            />
          </div>
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="text-xs text-white/40 mb-1.5 block">
                Display Order
              </label>
              <input
                name="order"
                onChange={handleChange}
                value={form.order}
                type="number"
                className="w-full px-4 py-2 text-white bg-white/5 border boder-white/10 placeholder-white/20 focus:outline-none hover:border-white/30 rounded-xl text-sm"
              />
            </div>
            <div className="flex items-center gap-2 pb-2">
              <input
                name="featured"
                type="checkbox"
                checked={form.featured}
                onChange={handleChange}
                className="w-4 h-4 accent-green-500"
              ></input>
              <label className="text-sm text-white/60">Featured</label>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-4 bg-white text-black text-sm font-medium rounded-lg hover:bg-white/90 transition-colors disabled: opacity-50 mt-2"
          >
            {loading ? "Adding.." : "Add Project"}
          </button>
          {message && (
            <p
              className={`text-sm text-center ${message.includes("✓") ? "text-emerald-400" : "text-red-400"}`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
