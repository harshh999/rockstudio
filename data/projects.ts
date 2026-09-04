import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "proj-001",
    title: "Luxury Villa — Marble Flooring",
    slug: "luxury-villa-marble-flooring",
    category: "residential",
    location: "Ahmedabad, Gujarat",
    description:
      "Complete marble flooring installation for a 12,000 sq ft luxury villa featuring Statuario White Marble throughout the living areas and Emperador Dark Marble in the private quarters.",
    image: "/images/projects/villa-flooring.jpg",
    gallery: [
      "/images/projects/villa-flooring.jpg",
      "/images/projects/villa-flooring-2.jpg",
    ],
    featured: true,
    sortOrder: 1,
  },
  {
    id: "proj-002",
    title: "Hotel Lobby — Feature Wall",
    slug: "hotel-lobby-feature-wall",
    category: "hospitality",
    location: "Mumbai, Maharashtra",
    description:
      "A grand Calacatta Gold Marble feature wall spanning the double-height lobby of a five-star hotel, complemented by Black Galaxy Granite reception counters.",
    image: "/images/projects/hotel-lobby.jpg",
    gallery: [
      "/images/projects/hotel-lobby.jpg",
      "/images/projects/hotel-lobby-2.jpg",
    ],
    featured: true,
    sortOrder: 2,
  },
  {
    id: "proj-003",
    title: "Corporate Office — Granite Cladding",
    slug: "corporate-office-granite-cladding",
    category: "commercial",
    location: "Bangalore, Karnataka",
    description:
      "Exterior granite cladding and interior stone flooring for a 50,000 sq ft corporate headquarters, utilising Kashmir White Granite and Tan Brown Granite.",
    image: "/images/projects/corporate-office.jpg",
    gallery: [
      "/images/projects/corporate-office.jpg",
      "/images/projects/corporate-office-2.jpg",
    ],
    featured: true,
    sortOrder: 3,
  },
  {
    id: "proj-004",
    title: "Resort — Pool Surrounds & Landscaping",
    slug: "resort-pool-surrounds",
    category: "hospitality",
    location: "Udaipur, Rajasthan",
    description:
      "Natural sandstone pool surrounds, pathways, and landscape walling for a heritage resort, creating a seamless indoor-outdoor stone experience.",
    image: "/images/projects/resort-pool.jpg",
    gallery: [
      "/images/projects/resort-pool.jpg",
      "/images/projects/resort-pool-2.jpg",
    ],
    featured: false,
    sortOrder: 4,
  },
];
