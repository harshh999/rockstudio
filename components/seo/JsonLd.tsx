import React from "react";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rocks Studio",
    "url": "https://rocks-studio.com",
    "description":
      "Natural stone supplier and manufacturer based in Ahmedabad, Gujarat. Sourcing and crafting premium marble, granite, CNC textures, onyx, sandstone, and wall cladding.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nr. CNG Petrol Pump, Gota Cross Road, Gota",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "telephone": "+91 93777 16669",
    "email": "rocksstudio2017@gmail.com",
    "sameAs": [
      "https://instagram.com/rocksstudio",
      "https://facebook.com/rocksstudio"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
