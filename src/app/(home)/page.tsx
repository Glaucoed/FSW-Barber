
import Header from "@/app/_components/header";
import Search from "@/app/_components/search";
import BookingItem from "@/app/_components/booking-item";

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
      <div className="px-5 mt-6">
        <Search />
      </div>
      <div className="px-5 mt-6">
        <h2 className="uppercase text-xs text-gray-400 font-bold mb-3">Agendamentos</h2>
        <BookingItem />
      </div>

    </main>
  );
}
