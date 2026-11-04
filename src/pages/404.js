import { Link } from "gatsby";
import React from "react";
import Layout from "../components/common/Layout";
import Reveal from "../components/common/Reveal";
import Seo from "../components/common/Seo";
import { whatsappLink } from "../content/site";
import "../styles/404.css";

const SUGGESTIONS = [
    {
        to: "/",
        icon: "fa-house",
        title: "Início",
        text: "Voltar para a página inicial e recomeçar pelo começo.",
    },
    {
        to: "/metodo-seja-real-nao-perfeito",
        icon: "fa-seedling",
        title: "O método",
        text: "Conheça o Seja Real, Não Perfeito e as quatro fases do acompanhamento.",
    },
    {
        to: "/sobre",
        icon: "fa-user",
        title: "Sobre a Thaís",
        text: "Formação, trajetória e a forma de olhar para a nutrição.",
    },
    {
        to: "/#planos",
        icon: "fa-tag",
        title: "Planos e valores",
        text: "Veja os formatos de consulta e o investimento de cada um.",
    },
    {
        to: "/#depoimentos",
        icon: "fa-star",
        title: "Depoimentos",
        text: "A experiência de quem já passou pelo atendimento.",
    },
    {
        to: "/contato",
        icon: "fa-comment-dots",
        title: "Contato",
        text: "Tire dúvidas ou agende sua consulta direto com a Thaís.",
    },
];

export default function NotFound() {
    return (
        <Layout>
            <section className="tb-not-found">
                <span className="tb-not-found-blob tb-not-found-blob--one" aria-hidden="true" />
                <span className="tb-not-found-blob tb-not-found-blob--two" aria-hidden="true" />

                <div className="container-custom">
                    <div className="tb-not-found-inner">
                        <Reveal className="tb-not-found-copy">
                            <span className="tb-eyebrow">Erro 404</span>
                            <p className="tb-not-found-code" aria-hidden="true">
                                404
                            </p>
                            <h1>Página não encontrada</h1>
                            <p className="tb-lead">
                                Essa página saiu do cardápio.
                            </p>
                            <div className="tb-actions tb-actions--center">
                                <Link className="tb-btn" to="/">
                                    Voltar para o início
                                    <i className="fas fa-arrow-right" aria-hidden="true" />
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export const Head = () => (
    <Seo
        path="/404"
        title="Página não encontrada | Thaís Basso"
        description="A página que você procura não foi encontrada. Volte para o início ou conheça o método, os planos e o contato da Thaís Basso."
    />
);
