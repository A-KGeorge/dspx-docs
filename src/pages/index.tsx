import {
  Header,
  Hero,
  Features,
  Performance,
  CodeExample,
  BlogSection,
  Footer,
} from "../components/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <Performance />
        <CodeExample />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
