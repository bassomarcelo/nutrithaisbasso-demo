import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import CtaBanner from "../components/common/CtaBanner";
import Layout from "../components/common/Layout";
import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";
import Seo from "../components/common/Seo";
import { INSTAGRAM, whatsappLink } from "../content/site";

const FORMATION = [
    {
        period: "2019–2021",
        title: "Pós-graduação em Nutrição Funcional e Comportamento Alimentar",
        institution: "UCS – Universidade de Caxias do Sul",
    },
    {
        period: "2021",
        title: "Especialização em Emagrecimento e Saúde",
        institution: "NBE Academy",
    },
    {
        period: "2012–2018",
        title: "Graduação em Nutrição",
        institution: "UCS – Universidade de Caxias do Sul",
    },
    {
        period: "Contínuo",
        title: "Mais de 10 cursos de especialização",
        institution: "Saúde intestinal, nutrição vegetariana, saúde da mulher e fitoterapia",
    },
];

export default function Sobre() {
    const data = useStaticQuery(graphql`
        query SobreImages {
            portrait: file(relativePath: { eq: "04-2026/IMG_1578.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP], quality: 88)
                }
            }
            office: file(relativePath: { eq: "fotos-thais/foto-consultorio.png" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP], quality: 88)
                }
            }
        }
    `);
    const portrait = getImage(data.portrait.childImageSharp.gatsbyImageData);
    const office = getImage(data.office.childImageSharp.gatsbyImageData);

    return (
        <Layout>
            <PageHero
                eyebrow="Conheça mais sobre mim"
                title="Thaís Basso"
                intro="Nutricionista clínica e comportamental. Uma trajetória construída entre a ciência da nutrição e a escuta do que faz sentido para a vida real das pessoas."
                image={<GatsbyImage image={portrait} alt="Thaís Basso sorrindo, sentada junto à janela" />}
            >
                <a
                    className="tb-btn tb-btn--primary"
                    href={whatsappLink("Olá, Thaís! Quero conversar sobre o atendimento nutricional.")}
                    target="_blank"
                    rel="noreferrer"
                >
                    Quero conversar
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                </a>
                <a className="tb-btn tb-btn--ghost" href={INSTAGRAM} target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram" aria-hidden="true" />
                    Me acompanhe no Instagram
                </a>
            </PageHero>

            <section className="tb-section">
                <div className="container-custom">
                    <div className="tb-split">
                        <Reveal className="tb-split-copy">
                            <span className="tb-eyebrow">Minha história</span>
                            <h2>Saúde é mais do que o corpo físico</h2>
                            <p className="tb-lead">
                                Desde cedo eu sabia que queria trabalhar com saúde. Mas foi vivendo na pele um período de ansiedade intensa que entendi o tamanho
                                real dessa responsabilidade.
                            </p>
                            <p>
                                Uma rotina exaustiva, viagens de trabalho e noites sem dormir me mostraram que não importa onde estamos ou o que temos: se não
                                estamos bem por dentro, tudo perde o sentido.
                            </p>
                            <p>
                                Mudei o meu estilo de vida. Priorizei sono, movimento, pausas, terapia e uma alimentação que fizesse sentido para mim. Foi então que me
                                apaixonei pela nutrição comportamental e pela medicina do estilo de vida.
                            </p>
                            <p>
                                Hoje, olho para cada pessoa em sua totalidade. Não trato apenas o que ela come, mas como vive, sente e se relaciona com a comida. É
                                essa visão que guia o meu trabalho.
                            </p>

                            <ul className="tb-stats">
                                <li className="tb-stat">
                                    <i className="fas fa-users" aria-hidden="true" />
                                    <p>
                                        <strong>+5.000</strong> atendimentos no Brasil e no mundo
                                    </p>
                                </li>
                                <li className="tb-stat">
                                    <i className="fas fa-stethoscope" aria-hidden="true" />
                                    <p>
                                        <strong>5</strong> anos de experiência clínica
                                    </p>
                                </li>
                            </ul>
                        </Reveal>

                        <Reveal className="tb-split-media" delay={120}>
                            <div className="tb-media-frame tb-media-frame--portrait">
                                <GatsbyImage image={office} alt="Consultório de nutrição da Thaís Basso" />
                                <span className="tb-media-frame__badge">
                                    <i className="fas fa-location-dot" aria-hidden="true" />
                                    Carlos Barbosa/RS
                                </span>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="tb-section tb-section--lavender">
                <div className="container-custom">
                    <Reveal className="tb-section-heading tb-section-heading--center">
                        <span className="tb-eyebrow">Formação</span>
                        <h2>Ciência e atualização constante</h2>
                        <p>Como uma profissional da saúde, baseio-me em estudos e análises com base científica para construir meu método e minha abordagem. Conheça um pouco mais sobre a minha formação profissional para cuidar, com responsabilidade, dos meus pacientes.</p>
                    </Reveal>

                    <div className="tb-formation">
                        {FORMATION.map((item, index) => (
                            <Reveal className="tb-formation-item" key={item.title} delay={index * 70}>
                                <span className="tb-formation-period">{item.period}</span>
                                <h3>{item.title}</h3>
                                <p className="tb-formation-institution">{item.institution}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="tb-section">
                <div className="container-custom">
                    <div className="tb-split tb-split--reverse">
                        <Reveal className="tb-split-copy">
                            <span className="tb-eyebrow">O método</span>
                            <h2>Como nasceu o Seja Real, Não Perfeito</h2>
                            <p className="tb-lead">
                                O método nasceu da prática clínica, ao perceber que as pessoas não falhavam por falta de informação. Falhavam porque os planos não
                                cabiam na vida real.
                            </p>
                            <p>
                                A proposta é unir o que há de mais atual na nutrição com um olhar humano para comportamento, rotina e estilo de vida. Menos perfeição,
                                mais consistência. Menos proibição, mais autonomia.
                            </p>
                            <p>
                                É esse caminho que ofereço no consultório, com escuta, ciência e planos que respeitam a sua realidade.
                            </p>
                            <Link className="tb-btn tb-btn--primary" to="/metodo-seja-real-nao-perfeito">
                                Conheça o método
                                <i className="fas fa-arrow-right" aria-hidden="true" />
                            </Link>
                        </Reveal>

                        <Reveal className="tb-split-media" delay={100}>
                            <div className="tb-media-frame">
                                <GatsbyImage image={portrait} alt="Thaís Basso sentada junto à janela" />
                                <span className="tb-media-frame__badge">
                                    <i className="fas fa-seedling" aria-hidden="true" />
                                    Nutrição com escuta
                                </span>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <CtaBanner
                title="Conheça meu trabalho de perto"
                text="Se a minha forma de olhar para a saúde fizer sentido para você, me chame no WhatsApp. Vamos encontrar o seu próximo passo."
            >
                <a
                    className="tb-btn tb-btn--whatsapp"
                    href={whatsappLink("Olá, Thaís! Quero conversar sobre o atendimento nutricional.")}
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fab fa-whatsapp" aria-hidden="true" />
                    Falar no WhatsApp
                </a>
                <Link className="tb-btn tb-btn--ghost" to="/#atendimento">
                    Ver formas de atendimento
                </Link>
            </CtaBanner>
        </Layout>
    );
}

export const Head = () => (
    <Seo
        path="/sobre"
        title="Sobre Thaís Basso | Nutricionista clínica e comportamental"
        description="Conheça Thaís Basso, nutricionista clínica e comportamental (CRN-2 16231D), a criação do Método Seja Real, Não Perfeito e sua visão sobre saúde."
    />
);
