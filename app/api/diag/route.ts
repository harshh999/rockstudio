import { NextResponse } from "next/server";
import { getTestimonials } from "@/lib/data";
import cms from "@/lib/cms";

export const dynamic = "force-dynamic";

export async function GET() {
  // 1. Fetch raw from Wix directly, bypassing unstable_cache
  const rawTestimonials = await cms.getTestimonials();
  
  // 2. Fetch using unstable_cache
  const cachedTestimonials = await getTestimonials();

  return NextResponse.json({
    timestamp: new Date().toISOString(),
    rawTestimonialCount: rawTestimonials.length,
    rawFirstTestimonialName: rawTestimonials[0]?.name,
    cachedTestimonialCount: cachedTestimonials.length,
    cachedFirstTestimonialName: cachedTestimonials[0]?.name,
  });
}
