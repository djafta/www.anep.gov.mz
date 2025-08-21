"use client";

import React, { useState, useEffect } from "react";
import {
  Link,
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Pagination,
  Tabs,
  Tab,
} from "@heroui/react";
import { Search, ChevronDown, FileText, Bookmark, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Header } from "@/app/header";
import { Footer } from "@/app/footer";

// Dados simulados de qualificações
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
  // Adicione mais qualificações conforme necessário
];

const categories = [
  { name: "Tecnologia da Informação", image: "/placeholder.svg?text=TI" },
  { name: "Engenharia", image: "/placeholder.svg?text=Engenharia" },
  { name: "Saúde", image: "/placeholder.svg?text=Saúde" },
  { name: "Administração", image: "/placeholder.svg?text=Administração" },
  { name: "Turismo", image: "/placeholder.svg?text=Turismo" },
  { name: "Agricultura", image: "/placeholder.svg?text=Agricultura" },
];

const levels = ["Nível 3", "Nível 4", "Nível 5"];

const featuredQualifications = [
  {
    id: 1,
    name: "Técnico em Inteligência Artificial",
    category: "Tecnologia da Informação",
    image: "/placeholder.svg",
    description: "Qualificação do Mês: Explore o futuro da tecnologia com nossa nova formação em IA.",
  },
  {
    id: 2,
    name: "Especialista em Energias Renováveis",
    category: "Engenharia",
    image: "/placeholder.svg",
    description: "Nova Qualificação: Contribua para um futuro sustentável com esta formação inovadora.",
  },
  {
    id: 3,
    name: "Técnico em Saúde Digital",
    category: "Saúde",
    image: "/placeholder.svg",
    description: "Mais Procurada: Combine cuidados de saúde com tecnologia nesta qualificação em alta demanda.",
  },
];

export default function QualificationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [selectedLevel, setSelectedLevel] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const itemsPerPage = 6;

  const filteredQualifications = qualifications.filter(
    (qual) =>
      qual.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "Todas" || qual.category === selectedCategory) &&
      (selectedLevel === "Todos" || qual.level === selectedLevel),
  );

  const pageCount = Math.ceil(filteredQualifications.length / itemsPerPage);
  const displayedQualifications = filteredQualifications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedLevel]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]));
  };

  const nextCarousel = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % featuredQualifications.length);
  };

  const prevCarousel = () => {
    setCarouselIndex((prevIndex) => (prevIndex - 1 + featuredQualifications.length) % featuredQualifications.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pb-0">
        <div className={"bg-[#003B71] p"}>
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-8 text-center hidden"
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Explore Nossas Qualificações Profissionais
          </motion.h1>

          <div className="relative mb-32 overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
            >
              {featuredQualifications.map((qual, index) => (
                <div key={qual.id} className="w-full flex-shrink-0 relative">
                  <div className="aspect-[16/9] sm:aspect-[21/9] md:aspect-[25/9]">
                    <Image
                      fill
                      alt={qual.name}
                      className="object-cover opacity-0"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      src={qual.image}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t  to-transparent" />
                  <div
                    className={`absolute bottom-0 ${index % 2 == 0 ? "left-0" : "right-0 text-right"} p-4 text-white w-full`}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">{qual.name}</h2>
                    <p className="text-sm sm:text-base md:text-lg mb-1 sm:mb-2">{qual.category}</p>
                    <p className="text-xs sm:text-sm mb-2 line-clamp-2">{qual.description}</p>
                    <Button className="bg-white font-medium  transition-colors text-xs sm:text-sm">
                      <Link className={"text-[#003B71]"} href={`/qualifications/${qual.id}`}>
                        Saiba Mais
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <button
              aria-label="Previous slide"
              className="absolute left-3 sm:left-6 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 transition-colors rounded-full p-1 sm:p-2"
              onClick={prevCarousel}
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
            </button>
            <button
              aria-label="Next slide"
              className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 transition-colors rounded-full p-1 sm:p-2"
              onClick={nextCarousel}
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
            </button>
          </div>
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
                  {selectedCategory}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Categorias"
                selectedKeys={[selectedCategory]}
                selectionMode="single"
                onSelectionChange={(keys) => setSelectedCategory(Array.from(keys)[0] as string)}
              >
                {[
                  ...categories.map((category) => <DropdownItem key={category.name}>{category.name}</DropdownItem>),
                  <DropdownItem key="Todas">Todas</DropdownItem>,
                ]}
              </DropdownMenu>
            </Dropdown>
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
                  <DropdownItem key={"Todos"}>Todos</DropdownItem>,
                ]}
              </DropdownMenu>
            </Dropdown>
          </motion.div>

          <Tabs aria-label="Áreas de Qualificação" className="mb-12" color="primary" variant="underlined">
            <Tab key="todas" title="Todas">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {displayedQualifications.map((qual, index) => (
                  <motion.div
                    key={qual.id}
                    animate={{ opacity: 1, y: 0 }}
                    className={"h-full flex"}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <CardBody className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-semibold text-gray-900">{qual.name}</h3>
                          <Button
                            isIconOnly
                            className={favorites.includes(qual.id) ? "text-[#FFB81C]" : "text-gray-400"}
                            variant="light"
                            onClick={() => toggleFavorite(qual.id)}
                          >
                            <Bookmark className="w-5 h-5" />
                          </Button>
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
                      <CardFooter>
                        <Button
                          as={Link}
                          className="bg-[#003B71] text-white font-medium hover:bg-[#003B71]/90 transition-colors w-full"
                          endContent={<FileText className="w-4 h-4" />}
                          href={`/qualifications/${qual.id}`}
                        >
                          Ver Catálogo
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </Tab>
            {categories.map((category) => (
              <Tab key={category.name} title={category.name}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {qualifications
                    .filter((qual) => qual.category === category.name)
                    .map((qual, index) => (
                      <motion.div
                        key={qual.id}
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                          <CardBody className="p-6">
                            <div className="flex justify-between items-start mb-4">
                              <h3 className="text-xl font-semibold text-gray-900">{qual.name}</h3>
                              <Button
                                isIconOnly
                                className={favorites.includes(qual.id) ? "text-[#FFB81C]" : "text-gray-400"}
                                variant="light"
                                onClick={() => toggleFavorite(qual.id)}
                              >
                                <Bookmark className="w-5 h-5" />
                              </Button>
                            </div>
                            <p className="text-gray-600 text-sm mb-4">
                              <span className="font-medium">Nível:</span> {qual.level}
                              <br />
                              <span className="font-medium">Duração:</span> {qual.duration}
                            </p>
                            <p className="text-gray-700 mb-6">{qual.description}</p>
                          </CardBody>
                          <CardFooter>
                            <Button
                              as={Link}
                              className="bg-[#003B71] text-white font-medium hover:bg-[#003B71]/90 transition-colors w-full"
                              endContent={<FileText className="w-4 h-4" />}
                              href={`/qualifications/${qual.id}`}
                            >
                              Ver Catálogo
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                </div>
              </Tab>
            ))}
          </Tabs>

          {filteredQualifications.length === 0 && (
            <p className="text-center text-gray-600 mt-12 text-lg">
              Nenhuma qualificação encontrada com os critérios selecionados.
            </p>
          )}

          {pageCount > 1 && (
            <div className="flex justify-center mt-12">
              <Pagination className="text-[#003B71]" page={currentPage} total={pageCount} onChange={setCurrentPage} />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
