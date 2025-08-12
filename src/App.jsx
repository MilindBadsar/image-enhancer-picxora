import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <MantineProvider>
      <div className="flex flex-col  justify-center items-center  min-h-screen bg-gray-100">
        <Header />
        <Home />
        <Footer />
        <Analytics />
      </div>
    </MantineProvider>
  );
}

export default App;
