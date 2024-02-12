import { Card, CardContent } from "@/app/_components/ui/card";
import { Badge } from "@/app/_components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/_components/ui/avatar";

export default function BookingItem() {
  return (
    <Card>
      <CardContent className="p-5 py-0 flex justify-between">
        <div className="flex flex-col gap-3 py-5">
          <Badge className="bg-[#221C3D] text-primary hover:bg-[#221C3D] w-fit" >Confirmado</Badge>
          <h2 className="font-bold">Corte de Cabelo</h2>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png" />
              <AvatarFallback className="bg-primary">A</AvatarFallback>
            </Avatar>
            <h3 className="text-sm">Vintage Barber</h3>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border-l px-3 border-solid border-secondary">
          <p className="text-sm">Fevereiro</p>
          <p className="text-2xl">25</p>
          <p className="text-sm">09:45</p>
        </div>
      </CardContent>
    </Card>
  )
}
