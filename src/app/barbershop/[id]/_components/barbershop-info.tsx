"use client"

import { Button } from "@/app/_components/ui/button"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import { Barbershop } from "@prisma/client"
import { useRouter } from "next/navigation"

interface BarbershopInfoProps {
  barbershop: Barbershop
}


export default function BarbershopInfo({ barbershop }: BarbershopInfoProps ) {
  const router = useRouter()

  function handleBackPage(){
    router.back()
  }

  return (
    <div>
      <div className="h-[250px] w-full relative">
        <Button
          size="icon"
          variant="outline"
          className="z-50 absolute top-4 left-4"
          onClick={handleBackPage}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          size="icon"
          variant="outline"
          className="z-50 absolute top-4 right-4"
        >
          <MenuIcon />
        </Button>
        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          layout="fill"
          className="opacity-75"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="px-5 py-3 border-b border-solid border-secondary">
        <h1 className="text-xl font-bold">{barbershop.name}</h1>
        <div className="flex items-center gap-1 mt-2">
          <MapPinIcon  className="text-primary" size={18}/>
          <p className="text-sm">{barbershop.address}</p>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <StarIcon  className="text-primary" size={18}/>
          <p className="text-sm">5.0 (100 avaliações)</p>
        </div>
      </div>
    </div>
  )
}
