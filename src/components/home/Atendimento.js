import React from "react";
import { MODALITIES } from "../../content/site";
import Reveal from "../common/Reveal";
import "./Atendimento.css";

export default function Atendimento() {
    return (
        <section className="tb-atendimento tb-section" id="atendimento">
            <div className="container-custom">
                <Reveal className="tb-section-heading tb-section-heading--center">
                    <span className="tb-eyebrow">Como funciona</span>
                    <h2>Presencial ou online, do seu jeito</h2>
                    <p>
                        Escolha o formato que cabe melhor na sua rotina.
                    </p>
                </Reveal>

                <div className="tb-atendimento-grid">
                    {MODALITIES.map((modality, index) => (
                        <Reveal className="tb-atendimento-card" key={modality.key} delay={index * 100}>
                            <div className="tb-atendimento-head">
                                <span className="tb-atendimento-icon">
                                    <i className={`fas ${modality.icon}`} aria-hidden="true" />
                                </span>
                                {modality.tag && <span className="tb-tag tb-tag--violet">{modality.tag}</span>}
                            </div>

                            <h3>{modality.title}</h3>
                            <span className="tb-atendimento-meta">{modality.meta}</span>
                            <p className="tb-atendimento-text">{modality.text}</p>

                            <ul className="tb-check-list tb-atendimento-list">
                                {modality.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
