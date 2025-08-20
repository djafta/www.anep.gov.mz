"use client"

import React, { useState } from "react"
import { Link, Button, Input } from "@heroui/react"
import { motion } from "framer-motion"
import { User, Mail, Calendar } from 'lucide-react'
import { Header } from "@/app/sign-up/header";

export default function SignupPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Aqui você adicionaria a lógica para enviar os dados do formulário
        console.log("Dados do formulário:", formData)
    }

    return (
        <div className="min-h-screen bg-white flex flex-col justify-between">
            <Header/>
            <main className="max-w-7xl mx-auto px-4 py-12">
                <motion.div
                    className="max-w-md mx-auto"
                    initial={ { opacity: 0, y: 20 } }
                    animate={ { opacity: 1, y: 0 } }
                    transition={ { duration: 0.5 } }
                >
                    <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Crie sua conta ANEP</h1>
                    <form onSubmit={ handleSubmit } className="space-y-6">
                        <Input
                            type="text"
                            name="firstName"
                            label="Primeiro Nome"
                            placeholder="Digite seu primeiro nome"
                            value={ formData.firstName }
                            onChange={ handleInputChange }
                            startContent={ <User className="text-gray-400"/> }
                            required
                        />
                        <Input
                            type="text"
                            name="lastName"
                            label="Último Nome"
                            placeholder="Digite seu último nome"
                            value={ formData.lastName }
                            onChange={ handleInputChange }
                            startContent={ <User className="text-gray-400"/> }
                            required
                        />
                        <Input
                            type="email"
                            name="email"
                            label="E-mail"
                            placeholder="Digite seu e-mail"
                            value={ formData.email }
                            onChange={ handleInputChange }
                            startContent={ <Mail className="text-gray-400"/> }
                            required
                        />
                        <Input
                            type="date"
                            name="dateOfBirth"
                            label="Data de Nascimento"
                            placeholder="Selecione sua data de nascimento"
                            value={ formData.dateOfBirth }
                            onChange={ handleInputChange }
                            startContent={ <Calendar className="text-gray-400"/> }
                            required
                        />
                        <Button
                            type="submit"
                            className="w-full bg-[#003B71] text-white hover:bg-[#003B71]/90 transition-colors"
                        >
                            Criar Conta
                        </Button>
                    </form>
                    <p className="mt-6 text-center text-sm text-gray-600">
                        Já tem uma conta?{ " " }
                        <Link href="/sign-in" className="text-[#003B71] hover:underline">
                            Entrar
                        </Link>
                    </p>
                </motion.div>
            </main>

            <footer className="bg-gray-50 border-t border-gray-200 py-3 mt-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-sm text-gray-500 py-3">
                        &copy; 2024 Autoridade Nacional de Educação Profissional (ANEP). Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </div>
    )
}
