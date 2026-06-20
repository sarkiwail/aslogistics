import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Coverage from "@/components/Coverage";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>
        <Hero />
        <Services />
        <Coverage />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
