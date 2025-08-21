"use client";

import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { useState } from "react";
import NextLink from "next/link";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      className="py-2 px-0"
      height={44}
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <Link href={"/"}>
            <Image alt="ANEP Logo" height={15} src="/logo-min.png" width={30} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            as={NextLink}
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            href="#"
          >
            Sobre
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            as={NextLink}
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            href="/licensing"
          >
            Licenciamento
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            as={NextLink}
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            href="/qualifications"
          >
            Qualificações
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            as={NextLink}
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            href="/news"
          >
            Notícias
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          <Button
            as={Link}
            className="bg-[#003B71]  text-white px-4 py-2 rounded-full text-sm font-medium"
            href="/signin"
          >
            Entrar
          </Button>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          className="md:hidden"
        />
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            as={NextLink}
            className="w-full text-gray-600 hover:text-gray-900"
            href="#"
            size="lg"
          >
            Sobre
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            as={NextLink}
            className="w-full text-gray-600 hover:text-gray-900"
            href="/licensing"
            size="lg"
          >
            Licenciamento
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            as={NextLink}
            className="w-full text-gray-600 hover:text-gray-900"
            href="/qualifications"
            size="lg"
          >
            Qualificações
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            as={NextLink}
            className="w-full text-gray-600 hover:text-gray-900"
            href="/news"
            size="lg"
          >
            Notícias
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            as={NextLink}
            className="w-full text-gray-600 hover:text-gray-900"
            href="/sign-up"
            size="lg"
          >
            Criar conta
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
