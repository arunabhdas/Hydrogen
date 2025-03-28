"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Lightswitch from "@/components/lightswitch"
import AccountMenu from "@/components/account-menu";

import Image from "next/image";
import { Button } from "@/components/ui/button"


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import TopNavigationMenu from "@/components/top-navigation-menu"


export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-10 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <TopNavigationMenu/>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      
      <AccountMenu />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
