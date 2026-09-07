"use client";

import { useState } from "react";
import { categories } from "@/data/categories";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  requirement: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirement: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      // Form submission will be connected to a backend in the future
      setSubmitted(true);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  if (submitted) {
    return (
      <div className="border border-stone-200 p-12 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
          <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-stone-900">
          Thank You
        </h3>
        <p className="mt-2 text-sm text-stone-500">
          Your enquiry has been received. Our team will get back to you shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", company: "", email: "", phone: "", requirement: "", message: "" });
          }}
          className="mt-6 text-sm font-medium text-warm-gold transition-colors hover:text-stone-900"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Name & Company */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-stone-400">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={`mt-2 block w-full border-b bg-transparent py-3 text-base text-stone-900 outline-none transition-colors placeholder:text-stone-300 ${
              errors.name ? "border-red-400" : "border-stone-200 focus:border-stone-900"
            }`}
            placeholder="Your name"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-widest text-stone-400">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            className="mt-2 block w-full border-b border-stone-200 bg-transparent py-3 text-base text-stone-900 outline-none transition-colors placeholder:text-stone-300 focus:border-stone-900"
            placeholder="Company name"
          />
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-stone-400">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-2 block w-full border-b bg-transparent py-3 text-base text-stone-900 outline-none transition-colors placeholder:text-stone-300 ${
              errors.email ? "border-red-400" : "border-stone-200 focus:border-stone-900"
            }`}
            placeholder="your@email.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-widest text-stone-400">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className={`mt-2 block w-full border-b bg-transparent py-3 text-base text-stone-900 outline-none transition-colors placeholder:text-stone-300 ${
              errors.phone ? "border-red-400" : "border-stone-200 focus:border-stone-900"
            }`}
            placeholder="+91 00000 00000"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>
      </div>

      {/* Requirement */}
      <div>
        <label htmlFor="requirement" className="block text-xs font-semibold uppercase tracking-widest text-stone-400">
          Requirement
        </label>
        <select
          id="requirement"
          name="requirement"
          value={formData.requirement}
          onChange={handleChange}
          className="mt-2 block w-full border-b border-stone-200 bg-transparent py-3 text-base text-stone-900 outline-none transition-colors focus:border-stone-900"
        >
          <option value="">Select a requirement</option>
          {[...categories]
            .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0))
            .map((cat) => (
              <option key={cat.id || cat.slug} value={cat.slug}>
                {cat.name}
              </option>
            ))}
          <option value="custom">Custom / Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-stone-400">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`mt-2 block w-full resize-none border-b bg-transparent py-3 text-base text-stone-900 outline-none transition-colors placeholder:text-stone-300 ${
            errors.message ? "border-red-400" : "border-stone-200 focus:border-stone-900"
          }`}
          placeholder="Tell us about your project requirements..."
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="border border-stone-900 bg-stone-900 px-8 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-transparent hover:text-stone-900"
      >
        Send Enquiry
      </button>
    </form>
  );
}
