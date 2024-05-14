import Banner from "@/components/banner/Banner";
import Hero from "@/components/hero/Hero";
import { Section } from "@/components/section/Section";
import React from "react";

export default function Home() {
  return (
    <main>
      <div className="container">
        <Hero />
        <Section />
        <Banner />
      </div>
    </main>
  );
}
