"use client";

import React, { useState } from "react";
import { Button, Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from "@heroui/react";
import { ChevronDown, Search } from "lucide-react";
import { motion } from "framer-motion";

import { Header } from "@/app/header";
import { Footer } from "@/app/footer";

const qualifications = [
  {
    id: 1,
    name: "Técnico em Desenvolvimento de Software",
    category: "Tecnologia da Informação",
    level: "Nível 4",
    duration: "2 anos",
    description: "Desenvolva habilidades em programação, design de software e gestão de projetos de TI.",
  },
  {
    id: 2,
    name: "Engenheiro Civil",
    category: "Engenharia",
    level: "Nível 5",
    duration: "5 anos",
    description: "Projete e supervisione a construção de edifícios, pontes, estradas e outras infraestruturas.",
  },
  {
    id: 3,
    name: "Técnico em Enfermagem",
    category: "Saúde",
    level: "Nível 3",
    duration: "18 meses",
    description: "Aprenda a fornecer cuidados essenciais aos pacientes e a apoiar os profissionais de saúde.",
  },
  {
    id: 4,
    name: "Gestor de Recursos Humanos",
    category: "Administração",
    level: "Nível 5",
    duration: "3 anos",
    description: "Desenvolva competências em recrutamento, treinamento e gestão de pessoal.",
  },
  {
    id: 5,
    name: "Guia Turístico",
    category: "Turismo",
    level: "Nível 3",
    duration: "1 ano",
    description: "Aprenda a conduzir tours, compartilhar conhecimentos culturais e garantir experiências memoráveis.",
  },
  {
    id: 6,
    name: "Técnico Agrícola",
    category: "Agricultura",
    level: "Nível 4",
    duration: "2 anos",
    description: "Estude técnicas modernas de cultivo, gestão de safras e tecnologias agrícolas sustentáveis.",
  },
];

const levels = ["Nível 3", "Nível 4", "Nível 5"];

export default function QualificationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("Todos Níveis");

  const filteredQualifications = qualifications.filter(
    (qual) =>
      qual.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedLevel === "Todos Níveis" || qual.level === selectedLevel),
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="pb-0 flex-1">
        <div className={"max-w-7xl mx-auto py-3 "}>
          <h1 className={"text-5xl text-primary"}>Engenharia</h1>
        </div>
        <div className={"max-w-7xl mx-auto "}>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row gap-4 mb-12 justify-start"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Input
              className="max-w-md"
              placeholder="Pesquisar qualificações..."
              startContent={<Search className="text-gray-400" />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Dropdown>
              <DropdownTrigger>
                <Button
                  className="border-gray-200 bg-white"
                  endContent={<ChevronDown className="text-small" />}
                  variant="bordered"
                >
                  {selectedLevel}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Níveis"
                selectedKeys={[selectedLevel]}
                selectionMode="single"
                onSelectionChange={(keys) => setSelectedLevel(Array.from(keys)[0] as string)}
              >
                {[
                  ...levels.map((level) => <DropdownItem key={level}>{level}</DropdownItem>),
                  <DropdownItem key={"Todos Níveis"}>Todos Níveis</DropdownItem>,
                ]}
              </DropdownMenu>
            </Dropdown>
          </motion.div>
          <div className={"grid grid-cols-3 gap-6 py-16"}>
            {filteredQualifications.map((qual, index) => (
              <motion.div
                key={qual.id}
                animate={{ opacity: 1, y: 0 }}
                className={"h-full flex"}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-1 border-[#003B71]">
                  <CardBody className="p-6">
                    <div className="flex justify-between mb-4 gap-1">
                      <h3 className="text-xl font-semibold text-gray-900">{qual.name}</h3>
                      <span
                        className={
                          "self-baseline bg-primary rounded-3xl text-primary-foreground px-2 py-1 text-sm min-w-fit"
                        }
                      >
                        {qual.level}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      <span className="font-medium">Categoria:</span> {qual.category}
                      <br />
                      <span className="font-medium">Nível:</span> {qual.level}
                      <br />
                      <span className="font-medium">Duração:</span> {qual.duration}
                    </p>
                    <p className="text-gray-700 mb-6">{qual.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
