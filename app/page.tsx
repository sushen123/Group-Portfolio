import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Achievements, Footer } from "@/components/footer-stats";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Members } from "@/components/members";

import { getData } from "@/lib/data";

export default async function Home() {
  const { members, projects } = await getData();

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <Hero />
      <Services />
      <Projects projects={projects} />
      {/* <Achievements /> */}
      <Testimonials />
      <FAQ />
      <Members members={members} />
      <Contact />
      <Footer />
    </main>
  );
}
