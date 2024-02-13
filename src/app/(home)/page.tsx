import Header from "@/app/_components/header";
import Search from "@/app/_components/search";
import BarbershopItem from "@/app/_components/barbershop-item";
import BookingItem from "@/app/_components/booking-item";

import { db } from "@/app/_lib/prisma";

export default async function Home() {
  const barbershops = await db.barbershop.findMany({});

  return (
    <main>
      <Header />
      <div className="px-5 pt-5">
        <h2 className="font-bold text-xl">Olá, Glauco!</h2>
        <p className="capitalize text-sm">
          {new Intl.DateTimeFormat("pt-BR", {
            weekday: "long",
            month: "long",
            day: "numeric",
          }).format(new Date())}
        </p>
      </div>
      <div className="px-5 mt-6">
        <Search />
      </div>
      <div className="px-5 mt-6">
        <h2 className="uppercase text-xs text-gray-400 font-bold mb-3">
          Agendamentos
        </h2>
        <BookingItem />
      </div>
      <div className="mt-6">
        <h2 className=" px-5 uppercase text-xs text-gray-400 font-bold mb-3">
          Recomendados
        </h2>
        <div className="flex gap-2 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </main>
  );
}
