import ScrollReveal from "@/components/ui/ScrollReveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <ScrollReveal className={align === "center" ? "text-center" : "text-left"}>
      {label && (
        <span
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? "text-stone-400" : "text-warm-gold"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`mt-3 font-serif text-3xl font-light tracking-tight md:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-stone-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed ${
            light ? "text-stone-400" : "text-stone-500"
          } ${align === "left" ? "mx-0" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
