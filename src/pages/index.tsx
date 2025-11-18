import {
  Header,
  Hero,
  Features,
  Performance,
  CodeExample,
} from "../components/Home";
import Layout from "../theme/Layout";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      <Layout>
        <Header />
        <main>
          <Hero />
          <Features />
          <Performance />
          <CodeExample />
        </main>
      </Layout>
    </div>
  );
}
