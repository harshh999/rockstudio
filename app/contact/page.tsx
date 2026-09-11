import type { Metadata } from "next";
import { getSiteSettings } from "@/lib/data";
import ContactDetails from "@/components/ui/ContactDetails";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Rocks Studio. Request a quote, enquire about our products, or visit our office in Ahmedabad, Gujarat.",
};

export default async function ContactPage() {
  const settings = await getSiteSettings();

  return (
    <>
      {/* Page Header */}
      <section className="flex flex-col justify-end min-h-[380px] lg:min-h-[460px] bg-stone-900 px-6 pt-32 pb-16 lg:px-8 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-7xl w-full">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-warm-beige">
            Get in Touch
          </span>
          <h1 className="mt-4 font-serif text-4xl font-light tracking-tight text-white md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-400">
            Have a project in mind? Get in touch with our team to discuss your
            requirements and receive a personalised quote.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-5">
          {/* Contact Details */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl font-light tracking-tight text-stone-900">
              Rocks Studio
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-500">
              Visit our showroom or get in touch with our team for any enquiries
              about our natural stone products.
            </p>
            <div className="mt-8">
              <ContactDetails settings={settings} />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-2xl font-light tracking-tight text-stone-900">
              Send an Enquiry
            </h2>
            <p className="mt-2 text-sm text-stone-500">
              Fill out the form below and our team will respond within one
              business day.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-white">
        <div className="flex h-80 items-center justify-center bg-stone-100">
          <div className="text-center">
            <p className="text-sm font-medium text-stone-400">Map</p>
            <p className="mt-1 text-xs text-stone-300">
              {settings.address}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
