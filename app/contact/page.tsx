import type { Metadata } from "next";
import Image from "next/image";
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
      <section className="relative flex flex-col justify-end min-h-[380px] lg:min-h-[460px] px-6 pt-32 pb-16 lg:px-8 lg:pt-40 lg:pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-hero.png"
            alt="Contact Rocks Studio"
            fill
            priority
            className="object-cover object-center md:object-[center_65%]"
            sizes="100vw"
          />
          {/* Subtle Overlay for Readability */}
          <div className="absolute inset-0 bg-stone-900/40 lg:bg-stone-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl w-full">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-warm-beige drop-shadow-md">
            Get in Touch
          </span>
          <h1 className="mt-4 font-serif text-4xl font-light tracking-tight text-white md:text-5xl drop-shadow-lg">
            Contact Us
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-200 drop-shadow-md">
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

      {/* Map Section */}
      <section className="bg-white">
        <div className="w-full h-[380px] md:h-[420px] lg:h-[457px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14556.355689673614!2d72.53072940078478!3d23.096223385688045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e832f4be0e7e1%3A0x3b87dd1f7782df78!2sRocks%20Studio!5e0!3m2!1sen!2sin!4v1790139989479!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Rocks Studio Location Map"
          />
        </div>
      </section>
    </>
  );
}
