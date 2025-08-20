"use client";

import { Button, Card, CardBody, Input } from "@heroui/react";
import { SearchIcon } from "lucide-react"

import React from "react";

export function Search(){

    return (
        <div className="max-w-2xl mx-auto my-20">
            <Card className="bg-white rounded-full">
                <CardBody className="p-0">
                    <form onSubmit={ (e) => e.preventDefault() } className="flex items-center">
                        <Input
                            type="search"
                            placeholder="Como podemos ajudar?"
                            className="flex-grow !shadow-none p-0"
                            size="lg"
                            startContent={ <SearchIcon className="text-gray-400 w-5 h-5 mx-3"/> }
                            classNames={ {
                                input: "text-lg",
                                inputWrapper: "bg-transparent rounded-full",
                            } }
                        />
                        <Button
                            type="submit"
                            className="absolute right-0 bg-blue-600 hover:bg-blue-700 text-white ml-2 px-8 py-2 text-lg h-full rounded-full"
                            size="md"
                        >
                            Pesquisar
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    )
}