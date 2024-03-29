"use client"

import React from 'react'
import { Button } from '@/app/_components/ui/button'
import { Input } from '@/app/_components/ui/input'
import { SearchIcon } from 'lucide-react'

export default function Search() {
  return (
    <div className="flex items-center gap-2">
      <Input placeholder="Busque uma barbearia..." />
      <Button variant="default">
         <SearchIcon  size={20} />
      </Button>

    </div>
  )
}
