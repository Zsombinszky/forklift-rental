import { useState } from "react";
import Header from "./components/Header";
import ForkliftList from "./components/ForkliftList";
import Footer from "./components/Footer";

function App() {
  const [forklifts, setForklifts] = useState([
    {
      id: 1,
      name: "Targonca 1",
      serial: "TRG-001",
      status: "available",
      power: "3.5kW",
      weight: 2800,
      height: 2.2,
      image:
        "https://www.mhi.com/sites/g/files/jwhtju111/files/styles/original_image_style/public/2020-09/rendia_fd25_0.png?itok=1Z_sv6gy",
    },
    {
      id: 2,
      name: "Targonca 2",
      serial: "TRG-002",
      status: "available",
      power: "5.0kW",
      weight: 3500,
      height: 2.5,
      image:
        "https://www.socma-forklift.com/Content/uploads/2021345790/2021103016043882cb603a9e9a4e6e951eb74104361dfb.jpg",
    },
    {
      id: 3,
      name: "Nehéz targonca",
      serial: "TRG-003",
      status: "available",
      power: "7.5kW",
      weight: 4800,
      height: 2.8,
      image:
        "https://www.kalmar.es/4afce4/globalassets/dam/2024/12/20/kalmar-largest-forklift-in-n.a-17-54158375ae8deb3a543585c0fa974eafb7327b.jpg",
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <ForkliftList forklifts={forklifts} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
