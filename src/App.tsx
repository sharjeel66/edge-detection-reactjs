import EdgeDetection from "@/components/EdgeDetection";
import Hero from "@/components/Hero";

function App() {
  return (
    <div>
      <Hero />
      <main className="flex flex-col max-w-7xl items-center justify-center mx-auto">
        <EdgeDetection />
      </main>
    </div>
  );
}

export default App;
