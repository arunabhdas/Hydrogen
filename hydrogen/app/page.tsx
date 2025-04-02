"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"
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
import { create } from "domain"


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

const GET_USER_BY_ID = gql`
  query GetUserById($id: ID!) {
    getUserById(id: $id) {
      id
      age
      name
      isMarried
    }
  }
`;

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $age: Int!, $isMarried: Boolean!) {
    createUser(name: $name, age: $age, isMarried: $isMarried) {
      name
    }
  }
`;



function Home() {
  const [newUser, setNewUser] = useState({});
  const { 
    data: getUsersData, 
    error: getUsersError, 
    loading:getUsersLoading 
  } = useQuery(GET_USERS);
  const { 
    data: getUserByIdData, 
    error: getUserByIdError, 
    loading: getUserByIdLoading 
  } = useQuery(GET_USER_BY_ID, {
    variables: {id: "2"}
  });

  const [createUser] = useMutation(CREATE_USER)

  if (getUsersLoading) return <p> Data loading... </p>;

  if (getUsersError) return <p>Error: {getUsersError.message}</p>;

  const handleCreateUser = async () => {
    console.log(newUser);
    createUser({
      variables: 
        {
          name: newUser.name, 
          age: Number(newUser.age), 
          isMarried: false
        }
      }
    )
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-10 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <TopNavigationMenu/>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <div>
        { getUserByIdLoading ? <p> Loading user...</p> : (
          <>
          <div>
            <input 
              placeholder="Name..." 
              onChange={(e) => setNewUser((prev) => (
                {...prev, name: e.target.value}
              ))}
            />
            <input 
            placeholder="Age..." 
            type="number"
            onChange={(e) => setNewUser((prev) => (
              {...prev, age: e.target.value}
            ))}
            />
            <button onClick={handleCreateUser}>Create New User</button>
          </div>
          <h1>Selected User</h1>
          <p>{ getUserByIdData.getUserById.name } </p>
          <p>{ getUserByIdData.getUserById.age } </p>
          </>
        )}
      </div>
      <h1>Users</h1>  
      <div>{ getUsersData.getUsers.map( (user, index) => (
        <div key={user.id || index }>
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