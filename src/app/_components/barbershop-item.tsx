"use client";

import { Card, CardContent } from "./ui/card";
import { Barbershop } from "@prisma/client";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { StarIcon } from "lucide-react";
import { useRouter } from "next/navigation";


interface BarbershopItemProps {
  barbershop: Barbershop;
}

export default function BarbershopItem({ barbershop }: BarbershopItemProps) {

  const router = useRouter()
  
  const handleBarbershopClick = () => {
    router.push(`/barbershop/${barbershop.id}`)
  }
  
  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="px-1 py-0">
        <div className="w-full h-[159px] relative mt-1">
          <div className="absolute top-2 left-2 z-50">
            <Badge variant="secondary" className="opacity-90 flex gap-1 items-center justify-center">
              <StarIcon size={12} className="fill-primary text-primary" />
              <span className="text-sm">5.0</span>
            </Badge>
          </div>
          <Image
            src={barbershop.imageUrl}
            alt={barbershop.name}
            fill
            className="rounded-2xl"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="px-2 pb-3">
          <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.name}
          </h2>
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.address}
          </p>
          <Button 
            variant="secondary" 
            className="w-full mt-3"
            onClick={handleBarbershopClick}
          >
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
