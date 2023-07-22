import Landing from "./components/Landing/Landing";
import Navbar from "./components/Nabvar/Navbar";
import Separator from "./components/Separator/Separator";
import Services from "./components/Services/Services";
import Us from "./components/Us/Us";

export default function Home() {
  return (
    <main className=" overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-10 flex w-full justify-between items-center h-16">
        <Navbar />
      </header>
      <section className="min-h-screen w-screen bg-image1  bg-cover bg-no-repeat bg-white flex justify-center item align-middle">
        <Landing />
      </section>
      <section>
        <Us />
      </section>
      <section>
        <Separator />
      </section>
      <section>
        <Services />
      </section>
    </main>
  );
}
