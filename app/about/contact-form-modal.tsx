import React from "react"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/modal"
import { Button } from "@heroui/button"
import { Input, Textarea } from "@heroui/input";

export function ContactFormModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        organization: "",
        message: ""
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Aqui você implementaria a lógica para enviar os dados do formulário
        console.log("Dados do formulário:", formData)
        // Resetar o formulário e fechar o modal
        setFormData({ name: "", email: "", organization: "", message: "" })
        onClose()
    }

    return (
        <>
            <Button
                color="primary"
                size="lg"
                onPress={ onOpen }
                className="bg-white text-[#003B71] hover:bg-gray-100"
            >
                Torne-se um Parceiro
            </Button>
            <Modal
                size={ "4xl" }
                isOpen={ isOpen }
                onClose={ onClose }
                scrollBehavior="inside"
                className="bg-white"
            >
                <ModalContent>
                    <form onSubmit={ handleSubmit }>
                        <ModalHeader className="flex flex-col gap-1">Entre em Contato</ModalHeader>
                        <ModalBody>
                            <Input
                                label="Nome"
                                name="name"
                                value={ formData.name }
                                onChange={ handleInputChange }
                                required
                            />
                            <Input
                                label="Email"
                                name="email"
                                type="email"
                                value={ formData.email }
                                onChange={ handleInputChange }
                                required
                            />
                            <Input
                                label="Organização"
                                name="organization"
                                value={ formData.organization }
                                onChange={ handleInputChange }
                            />
                            <Textarea
                                label="Mensagem"
                                name="message"
                                value={ formData.message }
                                onChange={ handleInputChange }
                                required
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={ onClose }>
                                Cancelar
                            </Button>
                            <Button color="primary" type="submit">
                                Enviar
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}