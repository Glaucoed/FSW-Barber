
import Header from "@/app/_components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="px-5 pt-5">
        <h2 className="font-bold text-xl">Olá, Glauco!</h2>
        <p className="capitalize text-sm">
          {
            new Intl.DateTimeFormat("pt-BR", {
              weekday: "long",
              month: "long",
              day: "numeric",    
            }).format(new Date())
          }
        </p>
      </div>

    </main>
  );
}
