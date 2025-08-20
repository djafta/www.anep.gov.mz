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
    NavbarMenuToggle
} from "@heroui/react";
import { useState } from "react";
import NextLink from "next/link";
import Image from "next/image";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <Navbar
            height={ 44 }
            maxWidth="full"
            className="py-2 px-0"
            onMenuOpenChange={ setIsMenuOpen }
        >
            <NavbarContent>
                <NavbarBrand>
                    <Link href={ "/" }>
                        <Image
                            src="/logo-min.png"
                            alt="ANEP Logo"
                            width={ 30 }
                            height={ 15 }
                        />
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden md:flex gap-4" justify="center">
                <NavbarItem>
                    <Link as={ NextLink } href="#"
                          className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                        Sobre
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link as={ NextLink } href="/licessing"
                          className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                        Licenciamento
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link as={ NextLink } href="/qualifications"
                          className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                        Qualificações
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link as={ NextLink } href="/news"
                          className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                        Notícias
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden md:flex">
                    <Button as={ Link } href="/sign-up"
                            className="bg-[#003B71]  text-white px-4 py-2 rounded-full text-sm font-medium">
                        Criar conta
                    </Button>
                </NavbarItem>
                <NavbarMenuToggle
                    aria-label={ isMenuOpen ? "Fechar menu" : "Abrir menu" }
                    className="md:hidden"
                />
            </NavbarContent>
            <NavbarMenu>
                <NavbarMenuItem>
                    <Link
                        as={ NextLink }
                        className="w-full text-gray-600 hover:text-gray-900"
                        href="#"
                        size="lg"
                    >
                        Sobre
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link
                        as={ NextLink }
                        className="w-full text-gray-600 hover:text-gray-900"
                        href="/licessing"
                        size="lg"
                    >
                        Licenciamento
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link
                        as={ NextLink }
                        className="w-full text-gray-600 hover:text-gray-900"
                        href="/qualifications"
                        size="lg"
                    >
                        Qualificações
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link
                        as={ NextLink }
                        className="w-full text-gray-600 hover:text-gray-900"
                        href="/news"
                        size="lg"
                    >
                        Notícias
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link
                        as={ NextLink }
                        className="w-full text-gray-600 hover:text-gray-900"
                        href="/sign-up"
                        size="lg"
                    >
                        Criar conta
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    )
}