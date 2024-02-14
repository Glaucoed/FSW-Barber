"use client";
import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {

  async function handleLogin() {
    await signIn()
  }

  const { data } = useSession()
  console.log(data) // dados do usuario logado

  return (
    <Card >
      <CardContent className="p-5 flex justify-between items-center">
        <Image src="/logo.png" alt="Logo" width={130} height={22} />
        {/* <Button variant="outline" size="icon" className="h-8 w-8" >
          <MenuIcon size={18} />
        </Button> */}

        {
          data?.user ? (
            <Button onClick={()=> signOut()}>
          Sair
        </Button>

          ) : (
            <Button onClick={handleLogin}>
          Login
        </Button>
          )
        }
        
      </CardContent>
    </Card>
  )
}
