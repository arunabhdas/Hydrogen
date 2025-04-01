"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Lightswitch from "@/components/lightswitch"
import AccountMenu from "@/components/account-menu";

import Image from "next/image";
import { Button } from "@/components/ui/button"
import { useQuery, useMutation, gql } from "@apollo/client";



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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      age
      name
      isMarried
    }
  }
`;

function Home() {
  const { data, error, loading } = useQuery(GET_USERS);

  if (loading) return <p> Data loading... </p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-10 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <TopNavigationMenu/>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <h1>Users</h1>  
      <div>{ data.getUsers.map( (user) => (
        <div>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Is married: {user.isMarried ? "Yes" : "No"}</p>
          <hr/>
        </div>
      ))}
      </div>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}

export default Home;