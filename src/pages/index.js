import React from "react";
import Layout from "../components/common/Layout";
import Seo from "../components/common/Seo";
import CtaBanner from "../components/common/CtaBanner";
import Faq from "../components/common/Faq";
import AboutPreview from "../components/home/AboutPreview";
import Atendimento from "../components/home/Atendimento";
import Hero from "../components/home/Hero";
import MethodSummary from "../components/home/MethodSummary";
import Plans from "../components/home/Plans";
import Testimonials from "../components/home/Testimonials";
import { HOME_FAQ, INSTAGRAM, whatsappLink } from "../content/site";

export default function Home() {
    return (
        <Layout>
            <Hero />
            <AboutPreview />
            <MethodSummary />
            <Atendimento />
            <Plans />

            <Testimonials />

            <Faq items={HOME_FAQ} title="Perguntas frequentes" subtitle="Se a sua dúvida não estiver aqui, me chame no WhatsApp. Será um prazer conversar." />

            <CtaBanner
                title="Seu próximo passo pode ser mais leve"
                text="Me conte o que você está buscando. Vamos encontrar juntas um caminho possível para a sua rotina, com saúde e sem culpa."
            >
                <a
                    className="tb-btn tb-btn--whatsapp"
                    href={whatsappLink("Olá, Thaís! Quero conversar sobre o atendimento nutricional.")}
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fab fa-whatsapp" aria-hidden="true" />
                    Falar com a Thaís no WhatsApp
                </a>
                <a className="tb-btn tb-btn--ghost" href={INSTAGRAM} target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram" aria-hidden="true" />
                    Ver o Instagram
                </a>
            </CtaBanner>
        </Layout>
    );
}

export const Head = () => (
    <Seo
        path="/"
        title="Thaís Basso | Nutricionista Comportamental"
        description="Nutrição comportamental individual para hábitos reais. Atendimento presencial em Carlos Barbosa/RS e consulta nutricional online para todo o Brasil e o exterior. Saúde sem dieta e sem culpa."
    />
);
