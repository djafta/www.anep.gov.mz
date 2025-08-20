"use client"

import React, { useState } from "react"
import { Link, Button, Input, Checkbox } from "@heroui/react"
import { motion } from "framer-motion"
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { Header } from "@/app/sign-in/header";

export default function LoginPage() {
    const [isVisible, setIsVisible] = useState(false)
    const toggleVisibility = () => setIsVisible(!isVisible)

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Aqui você adicionaria a lógica para processar o login
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
                    <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Entrar na sua conta ANEP</h1>
                    <form onSubmit={ handleSubmit } className="space-y-6">
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
                            className={"hidden"}
                            name="password"
                            label="Senha"
                            placeholder="Digite sua senha"
                            value={ formData.password }
                            onChange={ handleInputChange }
                            endContent={
                                <button className="focus:outline-none" type="button" onClick={ toggleVisibility }>
                                    { isVisible ? (
                                        <EyeOff className="text-2xl text-gray-400 pointer-events-none"/>
                                    ) : (
                                        <Eye className="text-2xl text-gray-400 pointer-events-none"/>
                                    ) }
                                </button>
                            }
                            type={ isVisible ? "text" : "password" }
                            startContent={ <Lock className="text-gray-400"/> }
                            required
                        />
                        <div className="flex items-center justify-between">
                            <Checkbox
                                name="rememberMe"
                                checked={ formData.rememberMe }
                                onChange={ handleInputChange }
                            >
                                Lembrar-me
                            </Checkbox>
                            <Link href="https://iforgot.anep.gov.mz" className="text-sm text-[#003B71] hover:underline">
                                Esqueceu sua conta?
                            </Link>
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-[#003B71] text-white hover:bg-[#003B71]/90 transition-colors"
                        >
                            Entrar
                        </Button>
                    </form>
                    <p className="mt-6 text-center text-sm text-gray-600">
                        Não tem uma conta?{ " " }
                        <Link href="/sign-up" className="text-[#003B71] hover:underline">
                            Cadastre-se
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